import React from 'react';
import type { EditableSection } from './types';

interface SectionEditorProps {
	section: EditableSection;
	onChange: (field: keyof EditableSection, value: any) => void;
	onMediaUpload: (file: File) => void;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ section, onChange, onMediaUpload }) => {
	return (
		<div className="space-y-4 p-4 border rounded-lg">
			<h3 className="text-lg font-medium">Edit Section</h3>
			<label className="block">
				<span className="text-gray-700">Title</span>
				<input
					type="text"
					value={section.title}
					onChange={(e) => onChange('title', e.target.value)}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</label>
			<label className="block">
				<span className="text-gray-700">Content</span>
				<textarea
					value={section.content}
					onChange={(e) => onChange('content', e.target.value)}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					rows={4}
				/>
			</label>
			<div>
				<span className="text-gray-700">Media</span>
				<input type="file" accept="image/*,video/*" onChange={(e) => e.target.files && onMediaUpload(e.target.files[0])} />
			</div>
		</div>
	);
};

export default SectionEditor;
