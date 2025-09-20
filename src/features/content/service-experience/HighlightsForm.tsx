import React from 'react';

interface HighlightItem {
	title: string;
	description: string;
}

interface HighlightsFormProps {
	highlights: HighlightItem[];
	maxHighlights: number;
	onAdd: () => void;
	onChange: (index: number, field: keyof HighlightItem, value: string) => void;
	onRemove: (index: number) => void;
}

const HighlightsForm: React.FC<HighlightsFormProps> = ({
	highlights,
	maxHighlights,
	onAdd,
	onChange,
	onRemove,
}) => {
	return (
		<section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-semibold text-slate-900">Key highlights</h3>
				<button
					type="button"
					onClick={onAdd}
					className="text-sm font-semibold text-sky-600 hover:text-sky-700"
					disabled={highlights.length >= maxHighlights}
				>
					Add highlight
				</button>
			</div>
			<p className="text-xs text-slate-500">Call out the most important benefits or features.</p>
			<div className="grid gap-4 md:grid-cols-2">
				{highlights.map((h, index) => (
					<div key={`highlight-${index}`} className="rounded-2xl border border-slate-200 p-4">
						<div className="flex items-center justify-between">
							<span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Item {index + 1}</span>
							<button
								type="button"
								onClick={() => onRemove(index)}
								className="text-xs text-slate-400 hover:text-red-500"
								disabled={highlights.length <= 2}
							>
								Remove
							</button>
						</div>
						<label className="mt-2 block text-sm font-medium text-slate-700">
							Title
							<input
								type="text"
								value={h.title}
								onChange={(e) => onChange(index, 'title', e.target.value)}
								className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
								placeholder="Fast turnaround"
							/>
						</label>
						<label className="mt-2 block text-sm font-medium text-slate-700">
							Description
							<textarea
								value={h.description}
								onChange={(e) => onChange(index, 'description', e.target.value)}
								rows={3}
								className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
								placeholder="We deliver within hours, not days."
							/>
						</label>
					</div>
				))}
			</div>
		</section>
	);
};

export default HighlightsForm;
