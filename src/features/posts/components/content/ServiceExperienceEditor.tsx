
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { v4 as uuid } from 'uuid';

import { serviceCmsService } from '@/services/serviceCmsService';
import type { ServiceCategoryRecord, ServicePageRecord } from '@/services/servicePage.types';
import { useToast } from '@/components/ui/toast/use-toast';
import { Loader } from '@/components/ui/Loader';
import { Button } from '@/components/ui/button';

import HeroForm from './service-experience/HeroForm';
import HighlightsForm from './service-experience/HighlightsForm';
import SectionsForm from './service-experience/SectionsForm';
import FaqPricingForm from './service-experience/FaqPricingForm';
import {
  SUPPORTED_MEDIA_TYPES,
  createEmptyFaq,
  createEmptyMetric,
  createEmptySection,
  createEmptyTier,
  type EditableSection,
  type EditableTier,
} from './service-experience/types';
import { normalizeSections, normalizeTiers } from './service-experience/utils';

const HERO_METRIC_LIMIT = 6;
const HIGHLIGHT_LIMIT = 6;

const SERVICE_LABELS: Record<string, string> = {
  'adult-health-nursing': 'Adult Health Nursing',
  'mental-health-nursing': 'Mental Health Nursing',
  'child-nursing': 'Child Nursing',
  'crypto': 'Cryptocurrency Services',
  'ai': 'AI Services',
};

type TabKey = 'hero' | 'highlights' | 'sections' | 'faq-pricing';

// Local draft type that allows extended editor shapes
type ServicePageDraft = Omit<ServicePageRecord, 'sections' | 'pricing'> & {
  sections: EditableSection[];
  pricing: { tiers: EditableTier[] };
};

const ServiceExperienceEditor: React.FC = () => {
  const { service: serviceParam } = useParams<{ service: string }>();
  const serviceSlug = serviceParam || 'adult-health-nursing';
  const serviceLabel = SERVICE_LABELS[serviceSlug] || 'Service';

  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [pageDraft, setPageDraft] = useState<ServicePageDraft | null>(null);
  const [categoryDraft, setCategoryDraft] = useState<ServiceCategoryRecord | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>('hero');
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const autosaveTimerRef = useRef<number | null>(null);

  const buildPersistablePage = (draft: ServicePageDraft): ServicePageRecord => {
    return {
      ...(draft as unknown as Omit<ServicePageRecord, 'sections' | 'pricing'>),
      sections: normalizeSections(draft.sections).map((section) => ({
        id: section.id || uuid(),
        title: section.title,
        summary: section.summary,
        content: section.content,
        media: section.media?.url
          ? {
              type: section.media.type === 'video' ? 'video' : 'image',
              url: section.media.url,
              caption: section.media.caption,
            }
          : undefined,
      })),
      faq: draft.faq || [],
      stats: draft.stats || [],
      pricing: {
        tiers: normalizeTiers(draft.pricing?.tiers).map((tier) => ({
          id: tier.id || uuid(),
          name: tier.name,
          price: tier.price,
          description: tier.description,
          features: tier.features,
          ctaLabel: tier.ctaLabel,
        })),
      },
    } as ServicePageRecord;
  };

  const { data: pageData, isLoading: loadingPage } = useQuery({
    queryKey: ['service-page', serviceSlug],
    queryFn: () => serviceCmsService.getPage(serviceSlug),
  });
  const { data: categoryData, isLoading: loadingCategory } = useQuery({
    queryKey: ['service-category', serviceSlug],
    queryFn: () => serviceCmsService.getCategory(serviceSlug),
  });

  useEffect(() => {
    if (pageData) {
      setPageDraft({
        ...pageData,
        sections: normalizeSections(pageData.sections),
        stats: pageData.stats || [],
        faq: pageData.faq || [],
        pricing: {
          tiers: normalizeTiers(pageData.pricing?.tiers as unknown as EditableTier[]),
        },
      });
    }
  }, [pageData]);

  useEffect(() => {
    if (categoryData) {
      setCategoryDraft({
        ...categoryData,
        stats: categoryData.stats && categoryData.stats.length > 0
          ? categoryData.stats
          : [
              createEmptyMetric(),
              createEmptyMetric(),
              createEmptyMetric(),
              createEmptyMetric(),
            ],
      });
    }
  }, [categoryData]);

  const updatePage = (changes: Partial<ServicePageRecord>) => {
    setPageDraft((prev) => (prev ? { ...prev, ...changes } : prev));
  };

  const updateCategory = (changes: Partial<ServiceCategoryRecord>) => {
    setCategoryDraft((prev) => (prev ? { ...prev, ...changes } : prev));
  };

  const heroMetrics = useMemo(() => categoryDraft?.stats || [createEmptyMetric(), createEmptyMetric(), createEmptyMetric(), createEmptyMetric()], [categoryDraft?.stats]);
  const highlightCards = useMemo(() => pageDraft?.stats || [createEmptyMetric()], [pageDraft?.stats]);
  const sections = useMemo(() => normalizeSections(pageDraft?.sections), [pageDraft?.sections]);
  const faqItems = useMemo(() => pageDraft?.faq || [], [pageDraft?.faq]);
  const pricingTiers = useMemo(() => normalizeTiers(pageDraft?.pricing?.tiers), [pageDraft?.pricing?.tiers]);

  const setHeroMetrics = (updater: (metrics: { label: string; value: string }[]) => { label: string; value: string }[]) => {
    setCategoryDraft((prev) => (prev ? { ...prev, stats: updater(prev.stats || []) } : prev));
  };

  const setHighlights = (updater: (cards: { label: string; value: string }[]) => { label: string; value: string }[]) => {
    setPageDraft((prev) => (prev ? { ...prev, stats: updater(prev.stats || []) } : prev));
  };

  const setSectionsState = (updater: (items: EditableSection[]) => EditableSection[]) => {
    setPageDraft((prev) => (prev ? { ...prev, sections: updater(normalizeSections(prev.sections)) } : prev));
  };

  const setFaqState = (updater: (items: { question: string; answer: string }[]) => { question: string; answer: string }[]) => {
    setPageDraft((prev) => (prev ? { ...prev, faq: updater(prev.faq || []) } : prev));
  };

  const setTierState = (updater: (items: EditableTier[]) => EditableTier[]) => {
    setPageDraft((prev) =>
      prev
        ? {
            ...prev,
            pricing: { tiers: updater(normalizeTiers(prev.pricing?.tiers)) },
          }
        : prev
    );
  };

  const saveDraftMutation = useMutation({
    mutationFn: async () => {
      if (!pageDraft || !categoryDraft) throw new Error('Missing draft data');

  const normalizedPage: ServicePageRecord = buildPersistablePage({ ...pageDraft, serviceSlug });

      const normalizedCategory: ServiceCategoryRecord = {
        ...categoryDraft,
        serviceSlug,
        stats: (categoryDraft.stats || heroMetrics).slice(0, HERO_METRIC_LIMIT),
      };

      const saved = await serviceCmsService.saveDraft(normalizedPage);
      await serviceCmsService.saveCategory(normalizedCategory);
      return saved;
    },
    onSuccess: (savedPage) => {
      if (savedPage) {
        setPageDraft({
          ...savedPage,
          sections: normalizeSections(savedPage.sections),
          pricing: { tiers: normalizeTiers(savedPage.pricing?.tiers as unknown as EditableTier[]) },
        });
        queryClient.invalidateQueries({ queryKey: ['service-page', serviceSlug] });
        queryClient.invalidateQueries({ queryKey: ['service-category', serviceSlug] });
      }
      toast({ title: 'Draft saved', description: 'Your changes are stored safely.' });
  setLastSavedAt(new Date());
    },
    onError: (error) => {
      toast({
        title: 'Save failed',
        description: error instanceof Error ? error.message : 'Unable to save. Please try again.',
        variant: 'destructive',
      });
    },
  });

  // Autosave when drafts change (debounced 1.5s)
  useEffect(() => {
    if (!pageDraft || !categoryDraft) return;
    if (autosaveTimerRef.current) window.clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = window.setTimeout(() => {
      saveDraftMutation.mutate();
    }, 1500);
    return () => {
      if (autosaveTimerRef.current) window.clearTimeout(autosaveTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageDraft, categoryDraft]);

  const publishMutation = useMutation({
    mutationFn: async () => {
  await saveDraftMutation.mutateAsync();
  if (!pageDraft) throw new Error('Draft unavailable');
  const normalizedPage = buildPersistablePage({ ...pageDraft, serviceSlug });
  return serviceCmsService.publish(normalizedPage);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['service-page', serviceSlug] });
      toast({ title: 'Published', description: 'The public page is now live with your updates.' });
    },
    onError: (error) => {
      toast({
        title: 'Publish failed',
        description: error instanceof Error ? error.message : 'Unable to publish right now.',
        variant: 'destructive',
      });
    },
  });

  const handleAddHeroMetric = () => {
    setHeroMetrics((metrics) => (metrics.length >= HERO_METRIC_LIMIT ? metrics : [...metrics, createEmptyMetric()]));
  };

  const handleHeroMetricChange = (index: number, field: 'label' | 'value', value: string) => {
    setHeroMetrics((metrics) => metrics.map((metric, idx) => (idx === index ? { ...metric, [field]: value } : metric)));
  };

  const handleHeroMetricRemove = (index: number) => {
    setHeroMetrics((metrics) => metrics.filter((_, idx) => idx !== index));
  };

  const handleAddHighlight = () => {
    setHighlights((cards) => (cards.length >= HIGHLIGHT_LIMIT ? cards : [...cards, createEmptyMetric()]));
  };

  const handleHighlightChange = (index: number, field: 'label' | 'value', value: string) => {
    setHighlights((cards) => cards.map((card, idx) => (idx === index ? { ...card, [field]: value } : card)));
  };

  const handleHighlightRemove = (index: number) => {
    setHighlights((cards) => cards.filter((_, idx) => idx !== index));
  };

  const handleFeaturedPostsChange = (posts: string[]) => {
    updateCategory({ featuredPosts: posts });
  };

  const handleAddSection = () => setSectionsState((items) => [...items, createEmptySection()]);
  const handleRemoveSection = (sectionId: string) => setSectionsState((items) => items.filter((item) => item.id !== sectionId));
  const handleSectionChange = (sectionId: string, field: keyof EditableSection, value: string | EditableSection['media']) => {
    setSectionsState((items) =>
      items.map((item) => (item.id === sectionId ? { ...item, [field]: value as EditableSection[typeof field] } : item))
    );
  };

  const handleMediaChange = (sectionId: string, field: keyof NonNullable<EditableSection['media']>, value: string) => {
    setSectionsState((items) =>
      items.map((item) => {
        if (item.id !== sectionId) return item;
        const media = item.media || { type: 'image', url: '', caption: '' };
        return {
          ...item,
          media: {
            ...media,
            [field]: field === 'type' ? (value as EditableSection['media']['type']) : value,
          },
        };
      })
    );
  };

  const handleAddFaq = () => setFaqState((items) => [...items, createEmptyFaq()]);
  const handleRemoveFaq = (index: number) => setFaqState((items) => items.filter((_, idx) => idx !== index));
  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setFaqState((items) => items.map((item, idx) => (idx === index ? { ...item, [field]: value } : item)));
  };

  const handleAddTier = () => setTierState((items) => [...items, createEmptyTier()]);
  const handleRemoveTier = (tierId: string) => setTierState((items) => items.filter((item) => item.id !== tierId));
  const handleTierChange = (tierId: string, field: keyof EditableTier, value: string | string[]) => {
    setTierState((items) => items.map((item) => (item.id === tierId ? { ...item, [field]: value } : item)));
  };

  const handleTierFeaturesChange = (tierId: string, value: string) => {
    const features = (value || '')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    handleTierChange(tierId, 'features', features);
  };

  const handleDiscard = () => navigate('/admin/services');

  const isLoading = loadingPage || loadingCategory || !pageDraft || !categoryDraft;

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-400">Experience builder</div>
          <h1 className="text-3xl font-bold text-slate-900">{serviceLabel}</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Design the public experience for this service, including hero content, highlight metrics, deep-dive sections, and conversion-ready pricing.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {lastSavedAt && (
            <div className="text-xs text-slate-500">
              Last saved {lastSavedAt.toLocaleTimeString()}
            </div>
          )}
          <Button variant="ghost" onClick={handleDiscard}>Discard changes</Button>
          <Button onClick={() => saveDraftMutation.mutate()} disabled={saveDraftMutation.isPending}>
            {saveDraftMutation.isPending ? 'Saving…' : 'Save draft'}
          </Button>
          <Button
            onClick={() => publishMutation.mutate()}
            disabled={publishMutation.isPending}
            className="bg-sky-600 hover:bg-sky-700"
          >
            {publishMutation.isPending ? 'Publishing…' : 'Publish page'}
          </Button>
        </div>
      </div>

      <div className="inline-flex flex-wrap gap-2 rounded-full bg-slate-100 p-2">
        <button
          type="button"
          onClick={() => setActiveTab('hero')}
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === 'hero' ? 'bg-slate-900 text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Hero & SEO
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('highlights')}
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === 'highlights' ? 'bg-slate-900 text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Highlights & Metrics
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('sections')}
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === 'sections' ? 'bg-slate-900 text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Story Sections
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('faq-pricing')}
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === 'faq-pricing' ? 'bg-slate-900 text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          FAQ & Pricing
        </button>
      </div>

      {activeTab === 'hero' && (
        <HeroForm
          page={pageDraft}
          category={categoryDraft}
          heroMetrics={heroMetrics}
          metricLimit={HERO_METRIC_LIMIT}
          onPageChange={updatePage}
          onCategoryChange={updateCategory}
          onMetricAdd={handleAddHeroMetric}
          onMetricChange={handleHeroMetricChange}
          onMetricRemove={handleHeroMetricRemove}
        />
      )}

      {activeTab === 'highlights' && (
        <HighlightsForm
          highlights={highlightCards}
          featuredPosts={categoryDraft.featuredPosts || []}
          limit={HIGHLIGHT_LIMIT}
          onHighlightAdd={handleAddHighlight}
          onHighlightChange={handleHighlightChange}
          onHighlightRemove={handleHighlightRemove}
          onFeaturedPostsChange={handleFeaturedPostsChange}
        />
      )}

      {activeTab === 'sections' && (
        <SectionsForm
          sections={sections}
          onAddSection={handleAddSection}
          onRemoveSection={handleRemoveSection}
          onSectionChange={handleSectionChange}
          onMediaChange={handleMediaChange}
        />
      )}

      {activeTab === 'faq-pricing' && (
        <FaqPricingForm
          faq={faqItems}
          tiers={pricingTiers}
          onAddFaq={handleAddFaq}
          onRemoveFaq={handleRemoveFaq}
          onFaqChange={handleFaqChange}
          onAddTier={handleAddTier}
          onRemoveTier={handleRemoveTier}
          onTierChange={handleTierChange}
          onTierFeaturesChange={handleTierFeaturesChange}
        />
      )}

      <div className="flex items-center justify-between border-t border-slate-200 pt-6">
        <div className="text-sm text-slate-500">
          Need inspiration?{' '}
          <Link to={`/services/${serviceSlug}`} className="text-sky-600 hover:text-sky-700">
            Preview the live page
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" onClick={handleDiscard}>Discard changes</Button>
          <Button onClick={() => saveDraftMutation.mutate()} disabled={saveDraftMutation.isPending}>
            {saveDraftMutation.isPending ? 'Saving…' : 'Save draft'}
          </Button>
          <Button
            onClick={() => publishMutation.mutate()}
            disabled={publishMutation.isPending}
            className="bg-sky-600 hover:bg-sky-700"
          >
            {publishMutation.isPending ? 'Publishing…' : 'Publish page'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceExperienceEditor;
