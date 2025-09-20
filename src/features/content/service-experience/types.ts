// Extended editor types and helpers for the consolidated Service Experience editor
export interface EditableTier {
	id: string;
	name: string;
	price: string;
	features: string[];
	// Extended fields used by the editor UI
	isPopular: boolean;
	description?: string;
	ctaLabel?: string;
}

export interface EditableSection {
	id: string;
	title: string;
	content: string;
	// Extended optional fields used by the editor UI
	summary?: string;
	media?: {
		type: 'image' | 'video';
		url: string;
		caption?: string;
	};
}

export const SUPPORTED_MEDIA_TYPES = ['image', 'video'] as const;

export const createEmptyMetric = () => ({ label: '', value: '' });
export const createEmptyFaq = () => ({ question: '', answer: '' });
export const createEmptySection = (): EditableSection => ({ id: crypto.randomUUID?.() || String(Date.now()), title: '', content: '', summary: '' });
export const createEmptyTier = (): EditableTier => ({ id: crypto.randomUUID?.() || String(Date.now()), name: '', price: '', features: [], isPopular: false });

export type { EditableSection as LegacyEditableSection, EditableTier as LegacyEditableTier };
