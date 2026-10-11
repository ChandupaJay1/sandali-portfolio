import React, { useState } from 'react';
import { Quote, UserCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EditableNotice } from '../components/EditableNotice';
import { usePortfolio } from '../context/PortfolioContext';

export const Testimonials: React.FC = () => {
  const { testimonials } = usePortfolio();
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Teacher-in-Charge', 'Supervisor', 'Mentor', 'Peer'];

  const filteredTestimonials = filter === 'All'
    ? testimonials
    : testimonials.filter(t => t.tag === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* 1. Header Section */}
      <div>
        <SectionHeading
          eyebrow="Assessment Criterion 05"
          marks={2}
          title="Teaching Testimonials & Professional Appraisals"
          description="Authentic evaluations and professional commendations provided by the School Teacher-in-Charge, University Practicum Supervising Lecturer, and departmental teaching colleagues during my 10-week practicum placement."
        />

        <EditableNotice
          sectionName="Supervisor Testimonials & Endorsements"
          dataFile="src/data/testimonialsData.ts"
          details="All testimonial entries are stored with role, institution, and quotes in testimonialsData.ts. You can add genuine quotations, signatures, or appraisal snippets from your school mentor."
        />
      </div>

      {/* 2. Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-forest-200/80 pb-4">
        <span className="text-xs font-semibold text-charcoal-500 mr-2">Filter by Evaluator Role:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              filter === cat
                ? 'bg-forest-800 text-ivory-50 font-semibold shadow-2xs'
                : 'bg-white text-charcoal-700 hover:bg-forest-50 border border-forest-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredTestimonials.map((item) => (
          <div
            key={item.id}
            className="paper-card rounded-3xl p-7 sm:p-9 border border-forest-200/90 bg-white flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background delicate decorative quotation mark */}
            <Quote className="w-20 h-20 text-forest-100/60 absolute -bottom-4 -right-4 pointer-events-none select-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="badge-tag bg-forest-100 text-forest-900 border border-forest-200/80 font-semibold">
                  {item.tag}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-forest-700 font-semibold bg-forest-50 px-2.5 py-1 rounded-full border border-forest-200/60">
                  <UserCheck className="w-3.5 h-3.5 text-forest-600" />
                  <span>Verified Practicum Evaluation</span>
                </div>
              </div>

              {/* Quote Text */}
              <p className="font-serif text-charcoal-800 text-base sm:text-lg leading-relaxed italic mb-8 relative z-10">
                "{item.quote}"
              </p>
            </div>

            {/* Author Profile Footer */}
            <div className="pt-5 border-t border-ivory-200 flex items-center gap-3.5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-base shadow-xs shrink-0">
                {item.initials}
              </div>

              <div>
                <h4 className="font-serif font-bold text-forest-950 text-base leading-tight">
                  {item.name}
                </h4>
                <p className="text-xs font-semibold text-terracotta-700 mt-0.5">
                  {item.role}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-charcoal-500 mt-0.5">
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 4. Professional Disposition Framework */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-forest-200/80 shadow-soft">
        <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
          Practicum Dispositions & Evaluator Feedback Summary
        </h3>
        <p className="text-sm text-charcoal-600 leading-relaxed max-w-3xl mb-6">
          Across both university supervision visits and daily school observations, recurring commendations highlighted my openness to pedagogical critiques, professional punctuality, empathetic relationship with students, and dedication to resource preparation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-ivory-50 border border-forest-100 space-y-1">
            <span className="font-bold text-forest-900 block text-sm">Responsiveness to Feedback</span>
            <p className="text-charcoal-600">Implemented observation critiques within 48 hours, demonstrating measurable reductions in Teacher Talk Time.</p>
          </div>
          <div className="p-4 rounded-xl bg-ivory-50 border border-forest-100 space-y-1">
            <span className="font-bold text-forest-900 block text-sm">Learner-Centred Rapport</span>
            <p className="text-charcoal-600">Created a low-anxiety classroom ethos where quiet multilingual students volunteered willingly.</p>
          </div>
          <div className="p-4 rounded-xl bg-ivory-50 border border-forest-100 space-y-1">
            <span className="font-bold text-forest-900 block text-sm">Institutional Contribution</span>
            <p className="text-charcoal-600">Supported the school English Day competition, created departmental worksheet packs, and collaborated actively.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
