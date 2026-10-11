import React from 'react';
import { X, Printer, Download, Award, CheckCircle, FileText, School, Calendar, UserCheck } from 'lucide-react';
import type { ObservationForm } from '../types';
import { usePortfolio } from '../context/PortfolioContext';

interface DocumentModalProps {
  form: ObservationForm | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ form, isOpen, onClose }) => {
  const { profile } = usePortfolio();
  if (!isOpen || !form) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-ivory-50 rounded-2xl border border-forest-200 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-forest-900 text-ivory-100 p-4 px-6 flex items-center justify-between border-b border-forest-800">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-forest-800 text-terracotta-400">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-bold text-ivory-50 leading-tight">
                {form.title}
              </h3>
              <p className="text-xs text-sage-300">
                Official Practicum Observation Record • {form.schoolName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs text-ivory-100 bg-forest-800 hover:bg-forest-700 px-3 py-1.5 rounded-lg transition-colors border border-forest-700"
              title="Print official document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-ivory-300 hover:text-white p-1.5 rounded-lg hover:bg-forest-800 transition-colors"
              aria-label="Close document preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Sheet (Realistic Paper Look) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white font-sans text-charcoal-800 print:p-0">
          
          {/* Official Document Letterhead */}
          <div className="border-b-2 border-forest-900 pb-6 mb-6 text-center relative">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-forest-800 tracking-widest uppercase mb-1">
              <School className="w-4 h-4" />
              <span>Ministry of Education Sri Lanka • University Practicum Evaluation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950 uppercase tracking-tight">
              Classroom Teaching Observation Form
            </h2>
            <p className="text-xs font-medium text-charcoal-500 mt-1">
              Form Code: MOE-SL/ELT-OBS-{form.formNumber} • Pre-Service Teacher Practicum Assessment
            </p>

            <div className="absolute right-0 top-0 hidden sm:block">
              <div className="border-2 border-forest-800 rounded-lg p-2 text-center bg-forest-50/50">
                <span className="block text-[10px] uppercase font-bold text-forest-800">Assessed Score</span>
                <span className="block font-serif text-lg font-bold text-forest-900">{form.scoresSummary.overall.split(' ')[0]}</span>
              </div>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-xl bg-ivory-100/60 border border-forest-200/60 text-xs mb-8">
            <div>
              <span className="text-charcoal-500 block">Teacher Intern:</span>
              <strong className="text-forest-950 text-sm">{profile.name}</strong>
            </div>
            <div>
              <span className="text-charcoal-500 block">Practicum Institution:</span>
              <strong className="text-forest-950">{form.schoolName}</strong>
            </div>
            <div>
              <span className="text-charcoal-500 block">Observation Date & Duration:</span>
              <div className="flex items-center gap-1 text-forest-950 font-medium">
                <Calendar className="w-3.5 h-3.5 text-forest-700" />
                <span>{form.date} ({form.duration.split(' ')[0]} mins)</span>
              </div>
            </div>
            <div>
              <span className="text-charcoal-500 block">Class & Target Grade:</span>
              <strong className="text-forest-950">{form.gradeClass}</strong>
            </div>
            <div>
              <span className="text-charcoal-500 block">Evaluated Lesson Topic:</span>
              <strong className="text-forest-950">{form.lessonTopic}</strong>
            </div>
            <div>
              <span className="text-charcoal-500 block">Supervising Observer:</span>
              <div className="flex items-center gap-1 text-forest-950 font-medium">
                <UserCheck className="w-3.5 h-3.5 text-forest-700" />
                <span>{form.observerName}</span>
              </div>
              <span className="text-[11px] text-charcoal-500 block">{form.observerDesignation}</span>
            </div>
          </div>

          {/* Scores Matrix Table */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-forest-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-terracotta-600" />
              <span>I. Evaluative Criteria & Competency Breakdown</span>
            </h4>
            
            <div className="overflow-x-auto border border-forest-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-forest-800 text-ivory-50 uppercase text-[11px]">
                  <tr>
                    <th className="p-3 w-1/4">Evaluation Category</th>
                    <th className="p-3 w-1/2">Descriptive Criteria & Indicators</th>
                    <th className="p-3 w-28 text-center">Performance Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-100">
                  {form.criteriaBreakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-ivory-50/50">
                      <td className="p-3 font-semibold text-forest-950 align-top">
                        {row.category}
                      </td>
                      <td className="p-3 text-charcoal-700 leading-relaxed">
                        <p className="font-medium text-charcoal-800 mb-1">{row.criteria}</p>
                        <p className="text-forest-800 italic bg-forest-50/70 p-2 rounded border border-forest-100">
                          Observer Note: "{row.comments}"
                        </p>
                      </td>
                      <td className="p-3 text-center align-top">
                        <span className={`inline-block px-2.5 py-1 rounded-full font-bold text-[11px] ${
                          row.rating === 'Outstanding'
                            ? 'bg-forest-100 text-forest-900 border border-forest-300'
                            : row.rating === 'Very Good'
                            ? 'bg-sage-100 text-sage-800 border border-sage-300'
                            : 'bg-ivory-200 text-charcoal-800 border border-ivory-300'
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

          {/* Commendations & Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-forest-50/60 p-5 rounded-xl border border-forest-200">
              <h5 className="font-serif font-bold text-forest-950 text-base mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-forest-700" />
                <span>Observer Commendations & Strengths</span>
              </h5>
              <ul className="space-y-2 text-xs text-charcoal-700">
                {form.strengthsCommendations.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-terracotta-50/50 p-5 rounded-xl border border-terracotta-200/70">
              <h5 className="font-serif font-bold text-terracotta-900 text-base mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-terracotta-600" />
                <span>Targeted Recommendations for Growth</span>
              </h5>
              <ul className="space-y-2 text-xs text-charcoal-700">
                {form.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-terracotta-600 font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Taken Afterwards: Reflective Closing the Loop */}
          <div className="p-5 rounded-xl bg-ivory-100 border border-forest-300/80 mb-8">
            <h5 className="font-serif font-bold text-forest-950 text-base mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-forest-800" />
              <span>Teacher Intern Response & Action Taken Afterwards</span>
            </h5>
            <p className="text-xs text-charcoal-700 leading-relaxed italic bg-white p-3 rounded-lg border border-forest-200">
              "{form.actionTakenAfterwards}"
            </p>
          </div>

          {/* Official Sign-off & Verification Seal Box */}
          <div className="pt-6 border-t-2 border-forest-900/60 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-charcoal-600">
            <div className="space-y-2">
              <span className="block text-charcoal-500 font-medium">Observer Endorsement:</span>
              <div className="h-12 border-b border-dashed border-charcoal-400 flex items-end pb-1 font-serif italic text-forest-900">
                {form.observerName}
              </div>
              <p className="text-[11px] text-charcoal-500">
                {form.observerDesignation} • Verified Practicum Evaluation
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-charcoal-500 font-medium">Teacher Intern Acknowledgment:</span>
              <div className="h-12 border-b border-dashed border-charcoal-400 flex items-end pb-1 font-serif italic text-forest-900">
                {profile.name}
              </div>
              <p className="text-[11px] text-charcoal-500">
                {profile.role} • {profile.degree}, {profile.university}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Controls */}
        <div className="bg-ivory-100 border-t border-forest-200 p-4 px-6 flex items-center justify-between">
          <span className="text-xs text-charcoal-500">
            Document ID: {form.officialDocumentName}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-forest-950 bg-forest-200/50 hover:bg-forest-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export as PDF / Print</span>
            </button>
            <button
              onClick={onClose}
              className="text-xs font-semibold text-ivory-50 bg-forest-800 hover:bg-forest-900 px-4 py-1.5 rounded-lg transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
