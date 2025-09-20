import { v4 as uuid } from 'uuid';

export const SUPPORTED_MEDIA_TYPES = ['image', 'video', 'audio', 'embed'] as const;
export type MediaType = typeof SUPPORTED_MEDIA_TYPES[number];

export interface EditableSection {
  id: string;
  title: string;
  summary?: string;
  content: string;
  media?: {
    type: MediaType;
    url: string;
    caption?: string;
  };
}

export interface EditableTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel?: string;
}

export const createEmptyMetric = () => ({ label: '', value: '' });

export const createEmptySection = (): EditableSection => ({
  id: uuid(),
  title: 'New section',
  summary: '',
  content: '',
});

export const createEmptyFaq = () => ({ question: '', answer: '' });

export const createEmptyTier = (): EditableTier => ({
  id: uuid(),
  name: 'New tier',
  price: '',
  description: '',
  features: [],
  ctaLabel: '',
});
