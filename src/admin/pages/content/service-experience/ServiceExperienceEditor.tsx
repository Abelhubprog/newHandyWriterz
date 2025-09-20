import React, { useState, useCallback } from 'react';
import { produce } from 'immer';
import type { ServiceCategoryRecord, ServicePageRecord } from '@/services/servicePage.types';
import { EditableTier, EditableSection } from './types';
import HeroForm from './HeroForm';
import FaqPricingForm from './FaqPricingForm';
import SectionEditor from './SectionEditor';

interface ServiceExperienceEditorProps {
  pageData: ServicePageRecord;
  categoryData: ServiceCategoryRecord;
  onSave: (updatedPage: ServicePageRecord, updatedCategory: ServiceCategoryRecord) => void;
}

const ServiceExperienceEditor: React.FC<ServiceExperienceEditorProps> = ({
  pageData,
  categoryData,
  onSave,
}) => {
  const [page, setPage] = useState(pageData);
  const [category, setCategory] = useState(categoryData);
  const [tiers, setTiers] = useState<EditableTier[]>([]);
  const [sections, setSections] = useState<EditableSection[]>([]);

  const handlePageChange = useCallback((changes: Partial<ServicePageRecord>) => {
    setPage(prev => ({ ...prev, ...changes }));
  }, []);

  const handleCategoryChange = useCallback((changes: Partial<ServiceCategoryRecord>) => {
    setCategory(prev => ({ ...prev, ...changes }));
  }, []);

  const handleTierChange = (index: number, changes: Partial<EditableTier>) => {
    setTiers(produce(draft => {
      Object.assign(draft[index], changes);
    }));
  };

  const handleSectionChange = (index: number, field: keyof EditableSection, value: any) => {
    setSections(produce(draft => {
        (draft[index] as any)[field] = value;
    }));
  };

  const handleMediaUpload = (index: number, file: File) => {
    // In a real app, you'd upload the file and get a URL
    const url = URL.createObjectURL(file);
    setSections(produce(draft => {
        draft[index].media = { type: file.type.startsWith('image/') ? 'image' : 'video', url };
    }));
  };

  const addSection = () => {
    setSections(produce(draft => {
        draft.push({ id: Date.now().toString(), title: 'New Section', content: '' });
    }));
  };

  return (
    <div className="space-y-8">
      <HeroForm
        page={page}
        category={category}
        heroMetrics={[]}
        metricLimit={4}
        onPageChange={handlePageChange}
        onCategoryChange={handleCategoryChange}
        onMetricAdd={() => {}}
        onMetricChange={() => {}}
        onMetricRemove={() => {}}
      />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Content Sections</h2>
        {sections.map((section, index) => (
          <SectionEditor
            key={section.id}
            section={section}
            onChange={(field, value) => handleSectionChange(index, field, value)}
            onMediaUpload={(file) => handleMediaUpload(index, file)}
          />
        ))}
        <button onClick={addSection} className="text-sm font-semibold text-sky-600 hover:text-sky-700">
          Add Section
        </button>
      </div>

      <FaqPricingForm
        tiers={tiers}
        faqs={[]}
        onTierChange={handleTierChange}
        onFaqChange={() => {}}
        onTierAdd={() => {}}
        onFaqAdd={() => {}}
        onTierRemove={() => {}}
        onFaqRemove={() => {}}
      />

      <button
        onClick={() => onSave(page, category)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ServiceExperienceEditor;
