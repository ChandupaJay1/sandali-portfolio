import React, { useState } from 'react';
import { 
  Award, 
  FileText, 
  Printer, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Eye 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EditableNotice } from '../components/EditableNotice';
import { DocumentModal } from '../components/DocumentModal';
import { usePortfolio } from '../context/PortfolioContext';
import type { ObservationForm } from '../types';

export const ObservationForms: React.FC = () => {
  const { observationForms } = usePortfolio();
  const [selectedForm, setSelectedForm] = useState<ObservationForm | null>(null);
  const [activeFormTab, setActiveFormTab] = useState<'01' | '02'>('01');

  const currentForm = observationForms.find(f => f.formNumber === activeFormTab) || observationForms[0];

  const handleOpenModal = (form: ObservationForm) => {
    setSelectedForm(form);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* 1. Header Section */}
      <div>
        <SectionHeading
          eyebrow="Assessment Criterion 04"
          marks={5}
          title="Teaching Observation Forms (01 & 02)"
          description="Official classroom evaluation records completed by the School Teacher-in-Charge and University Practicum Supervisor at Visakha Vidyalaya, documenting observed instructional competencies, commendations, and reflective remediation."
        />

        <EditableNotice
          sectionName="Official Observation Forms (PDFs & Rubrics)"
          dataFile="src/data/observationFormsData.ts"
          details="Observation scores, supervisor notes, and the 'Action Taken Afterwards' section are structured in TypeScript. You can upload scanned copies of your signed school forms into public/documents/ to replace the sample previews."
        />
      </div>

      {/* 2. Form Selector Tabs */}
      <div className="flex border-b border-forest-200 gap-3 pb-2">
        {observationForms.map((form) => (
          <button
            key={form.id}
            onClick={() => setActiveFormTab(form.formNumber)}
            className={`pb-3 px-6 rounded-t-xl text-sm font-serif font-bold transition-all border-b-2 flex items-center gap-2.5 cursor-pointer ${
              activeFormTab === form.formNumber
                ? 'border-forest-800 text-forest-950 bg-white shadow-2xs'
                : 'border-transparent text-charcoal-500 hover:text-forest-800'
            }`}
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-sans ${
              activeFormTab === form.formNumber ? 'bg-forest-800 text-ivory-50' : 'bg-ivory-200 text-charcoal-700'
            }`}>
              {form.formNumber}
            </span>
            <span>Teaching Observation Form {form.formNumber}</span>
            <span className="text-xs font-mono font-normal text-terracotta-600 bg-terracotta-50 px-2 py-0.5 rounded">
              {form.formNumber === '01' ? 'Mid-Term' : 'Final Summative'}
            </span>
          </button>
        ))}
      </div>

      {/* 3. Detailed Active Observation Showcase */}
      <div className="bg-white rounded-3xl border border-forest-200/90 shadow-soft overflow-hidden">
        
        {/* Banner with Action Buttons */}
        <div className="p-6 sm:p-8 bg-forest-900 text-ivory-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="badge-tag bg-forest-800 text-sage-200 border border-forest-700 text-xs">
                Official Practicum Record
              </span>
              <span className="text-xs text-sage-300">
                • {currentForm.schoolName}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
              {currentForm.title}
            </h3>
            <p className="text-xs sm:text-sm text-sage-200 font-light max-w-2xl">
              {currentForm.contextDescription}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleOpenModal(currentForm)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ivory-50 hover:bg-ivory-200 text-forest-950 text-xs font-semibold shadow-md transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-forest-800" />
              <span>Open Document Viewer</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold border border-forest-700 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-ivory-100/70 border-b border-forest-100 text-xs text-charcoal-700">
          <div>
            <span className="text-charcoal-500 block">Observation Date:</span>
            <div className="flex items-center gap-1 font-semibold text-forest-950">
              <Calendar className="w-3.5 h-3.5 text-forest-700" />
              <span>{currentForm.date}</span>
            </div>
          </div>
          <div>
            <span className="text-charcoal-500 block">Grade & Class:</span>
            <strong className="text-forest-950">{currentForm.gradeClass}</strong>
          </div>
          <div>
            <span className="text-charcoal-500 block">Evaluated Lesson Topic:</span>
            <strong className="text-forest-950">{currentForm.lessonTopic}</strong>
          </div>
          <div>
            <span className="text-charcoal-500 block">Supervising Evaluator:</span>
            <strong className="text-forest-950">{currentForm.observerName}</strong>
            <span className="text-[11px] text-charcoal-500 block">{currentForm.observerDesignation}</span>
          </div>
        </div>

        {/* Criteria Evaluation Matrix */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif font-bold text-xl text-forest-950 flex items-center gap-2">
                <Award className="w-5 h-5 text-terracotta-600" />
                <span>Practicum Rubric Ratings Breakdown</span>
              </h4>
              <span className="text-xs font-bold text-forest-900 bg-forest-100 px-3 py-1 rounded-full border border-forest-300">
                Composite Score: {currentForm.scoresSummary.overall}
              </span>
            </div>

            <div className="overflow-x-auto border border-forest-200/80 rounded-2xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-forest-800 text-ivory-50 uppercase text-[11px]">
                  <tr>
                    <th className="p-3.5 w-1/4">Evaluation Category</th>
                    <th className="p-3.5 w-1/2">Descriptive Criteria & Observer Feedback</th>
                    <th className="p-3.5 w-28 text-center">Assessed Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ivory-200">
                  {currentForm.criteriaBreakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-ivory-50/50">
                      <td className="p-3.5 font-bold text-forest-950 align-top">
                        {row.category}
                      </td>
                      <td className="p-3.5 text-charcoal-700 leading-relaxed">
                        <p className="font-medium text-charcoal-800 mb-1">{row.criteria}</p>
                        <p className="text-forest-900 italic bg-forest-50/60 p-2.5 rounded-lg border border-forest-100">
                          Supervisor Comment: "{row.comments}"
                        </p>
                      </td>
                      <td className="p-3.5 text-center align-top">
                        <span className={`inline-block px-2.5 py-1 rounded-full font-bold text-[11px] ${
                          row.rating === 'Outstanding'
                            ? 'bg-forest-100 text-forest-900 border border-forest-300'
                            : row.rating === 'Very Good'
                            ? 'bg-sage-100 text-sage-800 border border-sage-300'
                            : 'bg-ivory-200 text-charcoal-800'
                        }`}>
                          {row.rating}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Commendations & Recommendations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-forest-50/60 p-6 rounded-2xl border border-forest-200 space-y-3">
              <h5 className="font-serif font-bold text-forest-950 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-forest-700" />
                <span>Observer Commendations & Strengths</span>
              </h5>
              <ul className="space-y-2 text-xs text-charcoal-700">
                {currentForm.strengthsCommendations.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold">•</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-terracotta-50/50 p-6 rounded-2xl border border-terracotta-200 space-y-3">
              <h5 className="font-serif font-bold text-terracotta-900 text-base flex items-center gap-2">
                <Award className="w-5 h-5 text-terracotta-600" />
                <span>Recommendations for Pedagogical Enhancement</span>
              </h5>
              <ul className="space-y-2 text-xs text-charcoal-700">
                {currentForm.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-terracotta-600 font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Taken Afterwards: Reflective Remediation Loop */}
          <div className="p-6 rounded-2xl bg-ivory-100 border border-forest-300 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-forest-800" />
              <h5 className="font-serif font-bold text-forest-950 text-lg">
                Teacher Candidate Reflection & Actions Taken Afterwards
              </h5>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed bg-white p-4 rounded-xl border border-forest-200 italic">
              "{currentForm.actionTakenAfterwards}"
            </p>
          </div>

          {/* Verification Notice */}
          <div className="p-4 rounded-xl bg-ivory-50 border border-forest-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-600">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-forest-700" />
              <span>Archived File: <code className="font-mono bg-white px-2 py-0.5 rounded border border-forest-200">{currentForm.officialDocumentName}</code></span>
            </div>
            <button
              onClick={() => handleOpenModal(currentForm)}
              className="text-xs font-bold text-forest-800 hover:text-terracotta-600 flex items-center gap-1 cursor-pointer"
            >
              <span>View Signed Form Preview & Rubric</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Modal for PDF/Paper Viewer */}
      <DocumentModal
        form={selectedForm}
        isOpen={!!selectedForm}
        onClose={() => setSelectedForm(null)}
      />

    </div>
  );
};
