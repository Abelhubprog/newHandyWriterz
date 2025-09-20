import React from 'react';
import type { EditableTier } from './types';

type FaqItem = { question: string; answer: string };

interface Props {
  faq: FaqItem[];
  tiers: EditableTier[];
  onAddFaq: () => void;
  onRemoveFaq: (index: number) => void;
  onFaqChange: (index: number, field: 'question' | 'answer', value: string) => void;
  onAddTier: () => void;
  onRemoveTier: (tierId: string) => void;
  onTierChange: (tierId: string, field: keyof EditableTier, value: string | string[]) => void;
  onTierFeaturesChange: (tierId: string, value: string) => void;
}

const FaqPricingForm: React.FC<Props> = ({
  faq,
  tiers,
  onAddFaq,
  onRemoveFaq,
  onFaqChange,
  onAddTier,
  onRemoveTier,
  onTierChange,
  onTierFeaturesChange,
}) => {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      {/* FAQ column */}
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Frequently asked questions</h2>
          <button type="button" onClick={onAddFaq} className="text-sm font-semibold text-sky-600 hover:text-sky-700">
            Add question
          </button>
        </div>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={`faq-${index}`} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Question {index + 1}</span>
                <button type="button" onClick={() => onRemoveFaq(index)} className="text-xs text-slate-400 hover:text-red-500">
                  Remove
                </button>
              </div>
              <label className="mt-2 block text-sm font-medium text-slate-700">
                Question
                <input
                  type="text"
                  value={item.question}
                  onChange={(e) => onFaqChange(index, 'question', e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="How is content tailored to my unit?"
                />
              </label>
              <label className="mt-2 block text-sm font-medium text-slate-700">
                Answer
                <textarea
                  value={item.answer}
                  onChange={(e) => onFaqChange(index, 'answer', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="We partner with charge nurses and educators to align language, policy references, and workflows."
                ></textarea>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing column */}
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Pricing tiers</h2>
          <button type="button" onClick={onAddTier} className="text-sm font-semibold text-sky-600 hover:text-sky-700">
            Add tier
          </button>
        </div>
        <div className="space-y-4">
          {tiers.map((tier) => (
            <div key={tier.id} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tier</span>
                <button type="button" onClick={() => onRemoveTier(tier.id)} className="text-xs text-slate-400 hover:text-red-500">
                  Remove
                </button>
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Name
                  <input
                    type="text"
                    value={tier.name}
                    onChange={(e) => onTierChange(tier.id, 'name', e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                    placeholder="Clinical Pods"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Price
                  <input
                    type="text"
                    value={tier.price}
                    onChange={(e) => onTierChange(tier.id, 'price', e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                    placeholder="From $189/mo"
                  />
                </label>
              </div>
              <label className="mt-3 block text-sm font-medium text-slate-700">
                Description
                <textarea
                  value={tier.description}
                  onChange={(e) => onTierChange(tier.id, 'description', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Perfect for pilot units or cross-functional improvement teams."
                ></textarea>
              </label>
              <label className="mt-3 block text-sm font-medium text-slate-700">
                <span className="block">Feature list (one per line)</span>
                <textarea
                  value={(tier.features || []).join('\n')}
                  onChange={(e) => onTierFeaturesChange(tier.id, e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="5 user seats with shared workspace access"
                ></textarea>
              </label>
              <div className="mt-3">
                <label className="block text-sm font-medium text-slate-700">Call to action label</label>
                <input
                  type="text"
                  value={tier.ctaLabel || ''}
                  onChange={(e) => onTierChange(tier.id, 'ctaLabel', e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Start pilot"
                />
              </div>
            </div>
          ))}

          {tiers.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
              No pricing tiers yet. Add one to showcase commercial options.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqPricingForm;
