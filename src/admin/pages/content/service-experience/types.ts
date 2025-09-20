
export interface EditableTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

export interface EditableSection {
  id: string;
  title: string;
  content: string;
  media?: {
    type: 'image' | 'video';
    url: string;
  };
}

export const SUPPORTED_MEDIA_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
