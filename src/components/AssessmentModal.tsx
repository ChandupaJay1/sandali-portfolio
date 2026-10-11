import React from 'react';
import { Link } from 'react-router-dom';
import { X, Award, CheckCircle2, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { assessmentCriteria, TOTAL_PORTFOLIO_MARKS } from '../data/assessmentCriteria';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-ivory-50 rounded-2xl border border-forest-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-forest-900 text-ivory-100 p-6 flex items-start justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-forest-800/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-terracotta-500/20 text-terracotta-300 border border-terracotta-400/30">
                <Award className="w-3.5 h-3.5" />
                Teaching Practicum Evaluation Scheme
              </span>
              <span className="text-xs text-sage-300">| Faculty of Education</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-ivory-50">
              Assessment Criteria & Evidence Matrix
            </h3>
            <p className="text-sage-200 text-sm mt-1 max-w-2xl font-light">
              Official university marking guide for the internship e-portfolio. All coursework components are indexed for direct evaluation.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-ivory-300 hover:text-white p-2 rounded-full hover:bg-forest-800/80 transition-colors shrink-0 ml-4 z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Total Marks Banner */}
        <div className="bg-forest-800/10 border-b border-forest-200/60 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-600">Total Portfolio Allocation:</span>
            <span className="text-base font-bold text-forest-900 bg-forest-100/80 px-2.5 py-0.5 rounded-full border border-forest-300/60">
              {TOTAL_PORTFOLIO_MARKS} Marks Evaluated
            </span>
          </div>
          <div className="text-xs text-charcoal-500 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-forest-700"></span> 5 Assessment Sections
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-terracotta-500"></span> Direct Evidence Links
            </span>
          </div>
        </div>

        {/* Criteria List */}
        <div className="p-6 overflow-y-auto space-y-4">
          {assessmentCriteria.map((criterion) => (
            <div 
              key={criterion.id}
              className="bg-white rounded-xl border border-forest-100 p-4 md:p-5 hover:border-forest-300 transition-all shadow-xs"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-ivory-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-forest-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    0{criterion.number}
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-forest-950">
                      {criterion.title}
                    </h4>
                    <p className="text-xs text-charcoal-500">
                      Evaluated Teaching Practicum Coursework
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-auto">
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-forest-900 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                    <Award className="w-4 h-4 text-terracotta-600" />
                    {criterion.marks} Marks
                  </span>
                  <Link
                    to={criterion.route}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ivory-50 bg-forest-800 hover:bg-forest-900 px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
                  >
                    <span>View Section</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <p className="text-sm text-charcoal-700 mt-3 leading-relaxed">
                {criterion.description}
              </p>

              {/* Evidence Checklist */}
              <div className="mt-3 bg-ivory-50/70 rounded-lg p-3 border border-forest-100/80">
                <div className="text-xs font-semibold text-forest-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-600" />
                  Assessment Evidence Included:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-charcoal-600">
                  {criterion.evidenceItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-forest-600 font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competencies */}
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-medium text-charcoal-500 mr-1 flex items-center gap-1">
                  <Layers className="w-3 h-3" /> Core Competencies:
                </span>
                {criterion.competencies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-forest-50 text-forest-800 px-2 py-0.5 rounded-full border border-forest-200/60"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="bg-ivory-100 border-t border-forest-200/80 p-4 px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal-600">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-forest-700" />
            <span>Sri Lankan Pre-Service Teacher Internship Assessment Standards</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-forest-800 hover:text-forest-950 px-4 py-1.5 rounded-md hover:bg-forest-200/40 transition-colors"
          >
            Close Rubric
          </button>
        </div>
      </div>
    </div>
  );
};
