import React from 'react';

interface HighlightsFormProps {
  highlights: Array<{ label: string; value: string }>;
  featuredPosts: string[];
  limit: number;
  onHighlightAdd: () => void;
  onHighlightChange: (index: number, field: 'label' | 'value', value: string) => void;
  onHighlightRemove: (index: number) => void;
  onFeaturedPostsChange: (posts: string[]) => void;
}

const HighlightsForm: React.FC<HighlightsFormProps> = ({
  highlights,
  featuredPosts,
  limit,
  onHighlightAdd,
  onHighlightChange,
  onHighlightRemove,
  onFeaturedPostsChange,
}) => {
  return (
    <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Highlights</h2>
          <button
            type="button"
            onClick={onHighlightAdd}
            className="text-sm font-semibold text-sky-600 hover:text-sky-700"
            disabled={highlights.length >= limit}
          >
            Add highlight
          </button>
        </div>
        <p className="text-sm text-slate-500">
          Highlights feed the four-card strip under the hero. Pair a concise value with a supporting description.
        </p>
        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <div key={`${highlight.label}-${index}`} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Highlight {index + 1}</span>
                <button
                  type="button"
                  onClick={() => onHighlightRemove(index)}
                  className="text-xs text-slate-400 hover:text-red-500"
                  disabled={highlights.length <= 1}
                >
                  Remove
                </button>
              </div>
              <label className="mt-3 block text-sm font-medium text-slate-700">
                Title
                <input
                  type="text"
                  value={highlight.value}
                  onChange={(event) => onHighlightChange(index, 'value', event.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Practice-ready"
                />
              </label>
              <label className="mt-2 block text-sm font-medium text-slate-700">
                Description
                <textarea
                  value={highlight.label}
                  onChange={(event) => onHighlightChange(index, 'label', event.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Actionable takeaways to apply in diverse clinical settings"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Featured articles</h3>
        <p className="text-sm text-slate-500">
          Highlight specific post IDs to star in the hero section (comma separated). Leave blank to auto-fill.
        </p>
        <textarea
          value={featuredPosts.join(', ')}
          onChange={(event) =>
            onFeaturedPostsChange(
              event.target.value
                .split(',')
                .map((value) => value.trim())
                .filter(Boolean)
            )
          }
          rows={4}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
          placeholder="post-123, post-456"
        />
      </div>
    </section>
  );
};

export default HighlightsForm;
