import { v4 as uuid } from 'uuid';
import type { ServicePageRecord } from '@/services/servicePage.types';
import type { EditableSection, EditableTier } from './types';

export const normalizeSections = (
	sections?: ServicePageRecord['sections'] | EditableSection[]
): EditableSection[] => {
	if (!sections?.length) return [];
	return (sections as any[]).map((section: any) => {
		const base = {
			id: section.id || uuid(),
			title: section.title || 'Untitled section',
			summary: section.summary || '',
			content: section.content || '',
		} as EditableSection;

		if (!section.media) return base;

		const typeCandidate = String(section.media.type || 'image');
		const safeType: 'image' | 'video' = typeCandidate === 'video' ? 'video' : 'image';

		return {
			...base,
			media: {
				type: safeType,
				url: section.media.url || '',
				caption: section.media.caption || '',
			},
		} as EditableSection;
	});
};

export const normalizeTiers = (tiers?: EditableTier[]): EditableTier[] => {
	if (!tiers?.length) return [];
	return tiers.map((tier) => ({
		id: tier.id || uuid(),
		name: tier.name || 'Plan',
		price: tier.price || '',
		description: tier.description || '',
		features: tier.features || [],
		ctaLabel: tier.ctaLabel,
		isPopular: tier.isPopular ?? false,
	}));
};
