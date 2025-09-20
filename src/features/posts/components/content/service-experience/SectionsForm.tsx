import React from 'react';
import clsx from 'clsx';

import { SUPPORTED_MEDIA_TYPES } from './types';
import type { EditableSection } from './types';

interface SectionsFormProps {
  sections: EditableSection[];
  onAddSection: () => void;
  onRemoveSection: (sectionId: string) => void;
  onSectionChange: (sectionId: string, field: keyof EditableSection, value: string | EditableSection['media']) => void;
  onMediaChange: (sectionId: string, field: keyof NonNullable<EditableSection['media']>, value: string) => void;
}

const SectionsForm: React.FC<SectionsFormProps> = ({
  sections,
  onAddSection,
  onRemoveSection,
  onSectionChange,
  onMediaChange,
}) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Story sections</h2>
          <p className="mt-1 text-sm text-slate-500">Build long-form narratives with mixed media support.</p>
        </div>
        <button
          type="button"
          onClick={onAddSection}
          className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Add section
        </button>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Section</div>
              <button
                type="button"
                onClick={() => onRemoveSection(section.id)}
                className="text-sm text-slate-400 hover:text-red-500"
              >
                Remove
              </button>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                Title
                <input
                  type="text"
                  value={section.title}
                  onChange={(event) => onSectionChange(section.id, 'title', event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Accelerate bedside assessment"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Summary
                <input
                  type="text"
                  value={section.summary || ''}
                  onChange={(event) => onSectionChange(section.id, 'summary', event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Deploy rapid frameworks to triage change of condition."
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Media type
                <select
                  value={section.media?.type || 'image'}
                  onChange={(event) => onMediaChange(section.id, 'type', event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                >
                  {SUPPORTED_MEDIA_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Media URL
                <input
                  type="url"
                  value={section.media?.url || ''}
                  onChange={(event) => onMediaChange(section.id, 'url', event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="https://"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                Content (Markdown supported)
                <textarea
                  value={section.content}
                  onChange={(event) => onSectionChange(section.id, 'content', event.target.value)}
                  rows={6}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="- Rapid intake templates for med-surg units..."
                />
              </label>
              <label className="block text-sm font-medium text-slate-700 md:col-span-2">
                Media caption (optional)
                <input
                  type="text"
                  value={section.media?.caption || ''}
                  onChange={(event) => onMediaChange(section.id, 'caption', event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Visualize the rapid assessment workflow across the care team."
                />
              </label>
            </div>
          </div>
        ))}

        {sections.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
            No sections yet. Add one to start telling your story.
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionsForm;
