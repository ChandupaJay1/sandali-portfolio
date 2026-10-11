import React from 'react';
import { Award } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  marks?: number;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  marks,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'} ${className}`}>
      <div className={`flex flex-wrap items-center gap-3 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        {eyebrow && (
          <span className="text-xs font-semibold tracking-widest uppercase text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full border border-terracotta-200/50">
            {eyebrow}
          </span>
        )}
        {marks !== undefined && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-forest-800 bg-forest-100/70 border border-forest-300/60 px-3 py-1 rounded-full shadow-sm">
            <Award className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Assessed: {marks} Marks</span>
          </span>
        )}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-forest-900 tracking-tight leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg text-charcoal-600 leading-relaxed font-sans font-normal">
          {description}
        </p>
      )}

      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-0.5 w-12 bg-forest-800"></div>
        <div className="h-0.5 w-3 bg-terracotta-500"></div>
        <div className="h-0.5 w-1.5 bg-sage-400"></div>
      </div>
    </div>
  );
};
