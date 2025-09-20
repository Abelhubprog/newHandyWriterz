import React from 'react';
import type { ServiceCategoryRecord } from '@/services/servicePage.types';

type PageBasics = {
	title: string;
	summary: string;
	content: string;
	heroImage?: string;
};

interface HeroFormProps {
	page: PageBasics;
	category: ServiceCategoryRecord;
	heroMetrics: Array<{ label: string; value: string }>;
	metricLimit: number;
	onPageChange: (changes: Partial<PageBasics>) => void;
	onCategoryChange: (changes: Partial<ServiceCategoryRecord>) => void;
	onMetricAdd: () => void;
	onMetricChange: (index: number, field: 'label' | 'value', value: string) => void;
	onMetricRemove: (index: number) => void;
}

const HeroForm: React.FC<HeroFormProps> = ({
	page,
	category,
	heroMetrics,
	metricLimit,
	onPageChange,
	onCategoryChange,
	onMetricAdd,
	onMetricChange,
	onMetricRemove,
}) => {
	return (
		<section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
			<div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-semibold text-slate-900">Hero content</h2>
					<span className="text-xs font-medium uppercase tracking-wide text-slate-400">Above the fold</span>
				</div>
				<div className="grid gap-4">
					<label className="block text-sm font-medium text-slate-700">
						Hero title
						<input
							type="text"
							value={page.title}
							onChange={(event) => onPageChange({ title: event.target.value })}
							className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
							placeholder="Adult health nursing excellence"
							required
						/>
					</label>
					<label className="block text-sm font-medium text-slate-700">
						Hero summary
						<textarea
							value={page.summary}
							onChange={(event) => onPageChange({ summary: event.target.value })}
							rows={3}
							className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
							placeholder="Describe the promise of this service in a compelling sentence."
						/>
					</label>
					<label className="block text-sm font-medium text-slate-700">
						Supporting paragraph
						<textarea
							value={page.content}
							onChange={(event) => onPageChange({ content: event.target.value })}
							rows={4}
							className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
							placeholder="Explain how the service unlocks value for clinical teams. Markdown is supported."
						/>
					</label>
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					<label className="block text-sm font-medium text-slate-700">
						Hero badge text
						<input
							type="text"
							value={category.shortDescription || ''}
							onChange={(event) => onCategoryChange({ shortDescription: event.target.value })}
							className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
							placeholder="Professional knowledge hub"
						/>
					</label>
					<label className="block text-sm font-medium text-slate-700">
						Hero supporting line
						<input
							type="text"
							value={category.heroSummary || ''}
							onChange={(event) => onCategoryChange({ heroSummary: event.target.value })}
							className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
							placeholder="Deliver high-stakes adult care with ready-to-deploy mentorship."
						/>
					</label>
					<label className="block text-sm font-medium text-slate-700">
						Hero image URL
						<input
							type="url"
							value={page.heroImage || ''}
							onChange={(event) => onPageChange({ heroImage: event.target.value })}
							className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
							placeholder="https://"
						/>
					</label>
					<label className="block text-sm font-medium text-slate-700">
						Hero illustration (optional)
						<input
							type="url"
							value={category.heroImage || ''}
							onChange={(event) => onCategoryChange({ heroImage: event.target.value })}
							className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
							placeholder="https://"
						/>
					</label>
				</div>
			</div>

			<aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-semibold text-slate-900">Hero metrics</h3>
					<button
						type="button"
						onClick={onMetricAdd}
						className="text-sm font-semibold text-sky-600 hover:text-sky-700"
						disabled={heroMetrics.length >= metricLimit}
					>
						Add metric
					</button>
				</div>
				<p className="text-xs text-slate-500">
					Surface up to four high-impact numbers—engagement, outcomes, or adoption stats.
				</p>
				<div className="space-y-3">
					{heroMetrics.map((metric, index) => (
						<div key={`${metric.label}-${index}`} className="rounded-2xl border border-slate-200 p-4">
							<div className="flex items-center justify-between">
								<span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Metric {index + 1}</span>
								<button
									type="button"
									onClick={() => onMetricRemove(index)}
									className="text-xs text-slate-400 hover:text-red-500"
									disabled={heroMetrics.length <= 2}
								>
									Remove
								</button>
							</div>
							<label className="mt-2 block text-sm font-medium text-slate-700">
								Label
								<input
									type="text"
									value={metric.label}
									onChange={(event) => onMetricChange(index, 'label', event.target.value)}
									className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
									placeholder="Average response time"
								/>
							</label>
							<label className="mt-2 block text-sm font-medium text-slate-700">
								Value
								<input
									type="text"
									value={metric.value}
									onChange={(event) => onMetricChange(index, 'value', event.target.value)}
									className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
									placeholder="45 minutes"
								/>
							</label>
						</div>
					))}
				</div>
			</aside>
		</section>
	);
};

export default HeroForm;
