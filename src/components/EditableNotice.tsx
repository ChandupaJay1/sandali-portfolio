import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp, FileCode2 } from 'lucide-react';

interface EditableNoticeProps {
  sectionName: string;
  dataFile: string;
  details?: string;
  className?: string;
}

export const EditableNotice: React.FC<EditableNoticeProps> = ({
  sectionName,
  dataFile,
  details = 'All items in this section are driven by clean, typed data structures. You can easily insert your authentic school documents, reflections, and photographs.',
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`my-6 rounded-xl border border-forest-200/60 bg-forest-50/40 p-4 transition-all text-sm ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 rounded-full bg-forest-100 p-1 text-forest-700">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-forest-900">Customizable Content Area:</span>
              <span className="text-forest-700">{sectionName}</span>
              <span className="inline-flex items-center gap-1 font-mono text-xs bg-white text-forest-800 px-2 py-0.5 rounded border border-forest-200 shadow-2xs">
                <FileCode2 className="w-3 h-3 text-terracotta-500" />
                {dataFile}
              </span>
            </div>
            <p className="mt-1 text-charcoal-600 text-xs md:text-sm">
              {details}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-forest-700 hover:text-forest-900 font-medium flex items-center gap-1 shrink-0 p-1 rounded hover:bg-forest-100/60 transition-colors"
          aria-label="Toggle editing guide"
        >
          <span>{isExpanded ? 'Hide Guide' : 'How to Edit'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-forest-200/50 text-xs text-charcoal-700 space-y-2">
          <p className="font-medium text-forest-900">
            How to replace this with your real practicum artifacts:
          </p>
          <ol className="list-decimal list-inside space-y-1 pl-1 text-charcoal-600">
            <li>Open <code className="bg-white px-1 py-0.5 rounded border border-forest-200 text-forest-800 font-mono">{dataFile}</code> in your code editor.</li>
            <li>Replace the sample data with your authentic lesson information, supervisor feedback, or reflection text.</li>
            <li>To link actual scanned PDF observation forms, place your PDF files into <code className="bg-white px-1 py-0.5 rounded border border-forest-200 text-forest-800 font-mono">public/documents/</code> and reference them by filename.</li>
            <li>All charts, rubrics, and interactive viewers will automatically format your new content without needing UI changes.</li>
          </ol>
        </div>
      )}
    </div>
  );
};
