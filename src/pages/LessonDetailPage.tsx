import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Printer, 
  Clock, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Download, 
  Layers, 
  Quote, 
  ChevronRight
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { EditableNotice } from '../components/EditableNotice';

export const LessonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lessonPlans, profile: teacherProfile } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'procedure' | 'resources' | 'reflection'>('procedure');

  const lesson = lessonPlans.find((l) => l.id === id);

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-forest-950">Lesson Plan Not Found</h2>
        <p className="text-charcoal-600">The requested lesson plan does not exist or has been moved.</p>
        <Link
          to="/lessons"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-800 text-ivory-50 text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Lesson Plans</span>
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  // Find next lesson for easy paging
  const currentIndex = lessonPlans.findIndex(l => l.id === lesson.id);
  const nextLesson = lessonPlans[(currentIndex + 1) % lessonPlans.length];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 1. Top Navigation & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-forest-200/80 no-print">
        <Link
          to="/lessons"
          className="inline-flex items-center gap-2 text-xs font-bold text-forest-800 hover:text-terracotta-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Lesson Plans Library</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-forest-50 text-forest-900 text-xs font-semibold border border-forest-200 shadow-2xs transition-colors cursor-pointer"
            title="Print or export as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-forest-700" />
            <span>Print / Save PDF</span>
          </button>

          <Link
            to={`/lessons/${nextLesson.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-ivory-50 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <span>Next Lesson</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 2. SECTION A: LESSON OVERVIEW */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-200/80 shadow-soft space-y-8">
        
        {/* Title & Metadata Strip */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-tag bg-forest-800 text-ivory-100 font-semibold">
              {lesson.grade}
            </span>
            <span className="badge-tag bg-forest-100 text-forest-900 border border-forest-200">
              {lesson.learnerLevel}
            </span>
            <span className="badge-tag bg-terracotta-50 text-terracotta-700 border border-terracotta-200">
              {lesson.languageSkill} • {lesson.languageFocus}
            </span>
            <span className="badge-tag bg-ivory-200 text-charcoal-700">
              {lesson.activityType}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
            {lesson.title}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-ivory-100/70 border border-forest-100 text-xs text-charcoal-600">
            <div>
              <span className="text-charcoal-500 block">Candidate Teacher:</span>
              <strong className="text-forest-900">{teacherProfile.name}</strong>
            </div>
            <div>
              <span className="text-charcoal-500 block">Class & Duration:</span>
              <strong className="text-forest-900">{lesson.grade} • {lesson.duration}</strong>
            </div>
            <div>
              <span className="text-charcoal-500 block">Date of Instruction:</span>
              <strong className="text-forest-900">{lesson.date}</strong>
            </div>
            <div>
              <span className="text-charcoal-500 block">Class Enrolment:</span>
              <strong className="text-forest-900">{lesson.numberOfLearners} Students</strong>
            </div>
          </div>
        </div>

        {/* Learner Profile & Rationale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-ivory-200 text-xs sm:text-sm">
          <div className="space-y-2">
            <span className="font-serif font-bold text-base text-forest-900 block">
              Learner Profile & Socio-Linguistic Context
            </span>
            <p className="text-charcoal-700 leading-relaxed bg-ivory-50 p-4 rounded-2xl border border-forest-100">
              {lesson.learnerProfile}
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-serif font-bold text-base text-forest-900 block">
              Curricular Rationale (National English Syllabus)
            </span>
            <p className="text-charcoal-700 leading-relaxed bg-ivory-50 p-4 rounded-2xl border border-forest-100">
              {lesson.rationale}
            </p>
          </div>
        </div>

        {/* Competencies & Intended Learning Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-ivory-200">
          
          {/* Syllabus Competencies */}
          <div className="space-y-3">
            <span className="font-serif font-bold text-base text-forest-900 block">
              Targeted Curriculum Competencies
            </span>
            <div className="space-y-2">
              {lesson.competencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-700 bg-forest-50/50 p-3 rounded-xl border border-forest-100">
                  <Layers className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-forest-950">{comp}</p>
                    <p className="text-[11px] text-charcoal-500 mt-0.5">{lesson.competencyLevels[idx] || ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intended Learning Outcomes (ILOs) */}
          <div className="space-y-3">
            <span className="font-serif font-bold text-base text-forest-900 block">
              Intended Learning Outcomes (Measurable)
            </span>
            <div className="space-y-2">
              {lesson.intendedLearningOutcomes.map((ilo, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-700 bg-terracotta-50/40 p-3 rounded-xl border border-terracotta-100">
                  <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{ilo}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Assumptions & Anticipated Problems / Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-ivory-200 text-xs">
          
          <div className="space-y-3">
            <span className="font-serif font-bold text-base text-forest-900 block">
              Assumptions & Personal Teaching Aims
            </span>
            <div className="space-y-2">
              <div className="bg-ivory-100/70 p-3.5 rounded-xl border border-forest-100 space-y-1.5">
                <span className="font-bold text-forest-950 uppercase tracking-wider text-[10px] block">Entry Assumptions:</span>
                {lesson.assumptions.map((assump, idx) => (
                  <p key={idx} className="text-charcoal-600">• {assump}</p>
                ))}
              </div>

              <div className="bg-forest-50/60 p-3.5 rounded-xl border border-forest-100 space-y-1.5">
                <span className="font-bold text-forest-900 uppercase tracking-wider text-[10px] block">Personal Teaching Aims:</span>
                {lesson.personalTeachingAims.map((aim, idx) => (
                  <p key={idx} className="text-forest-900 font-medium">• {aim}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="font-serif font-bold text-base text-forest-900 block">
              Anticipated Difficulties & Pedagogical Solutions
            </span>
            <div className="space-y-2">
              {lesson.anticipatedProblems.map((item, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-forest-200/90 shadow-2xs space-y-1.5">
                  <div className="flex items-start gap-2 text-terracotta-800 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>Problem: {item.problem}</span>
                  </div>
                  <div className="flex items-start gap-2 text-forest-900 pl-5 text-charcoal-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                    <span>Solution: {item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* 3. SECTION TABS FOR PROCEDURE, RESOURCES & REFLECTION */}
      <div className="space-y-6">
        <div className="flex border-b border-forest-200 gap-2 no-print">
          <button
            onClick={() => setActiveTab('procedure')}
            className={`pb-3 px-5 text-sm font-serif font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'procedure'
                ? 'border-forest-800 text-forest-950'
                : 'border-transparent text-charcoal-500 hover:text-forest-800'
            }`}
          >
            B. Lesson Procedure Sequence ({lesson.procedure.length} Stages)
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`pb-3 px-5 text-sm font-serif font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'resources'
                ? 'border-forest-800 text-forest-950'
                : 'border-transparent text-charcoal-500 hover:text-forest-800'
            }`}
          >
            C. Teaching Materials & Worksheets ({lesson.resources.length})
          </button>
          <button
            onClick={() => setActiveTab('reflection')}
            className={`pb-3 px-5 text-sm font-serif font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'reflection'
                ? 'border-forest-800 text-forest-950'
                : 'border-transparent text-charcoal-500 hover:text-forest-800'
            }`}
          >
            D. Post-Lesson Reflection & Evaluation
          </button>
        </div>

        {/* TAB B: DETAILED PROCEDURAL TABLE */}
        {(activeTab === 'procedure' || typeof window !== 'undefined') && (
          <div className={`${activeTab !== 'procedure' ? 'hidden print:block' : 'block'} space-y-6`}>
            <div className="bg-white rounded-3xl border border-forest-200/90 shadow-soft overflow-hidden">
              <div className="p-6 bg-forest-900 text-ivory-50 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold">
                    Section B: Lesson Staging & Procedural Sequence Table
                  </h3>
                  <p className="text-xs text-sage-200 font-light mt-0.5">
                    Step-by-step breakdown of teacher activities, learner activities, interaction ratios, and assessment routines.
                  </p>
                </div>
                <span className="text-xs font-mono bg-forest-950 px-3 py-1 rounded-full border border-forest-800">
                  Total: {lesson.duration}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-ivory-100 text-forest-950 uppercase text-[11px] border-b border-forest-200">
                    <tr>
                      <th className="p-3.5 w-28 font-bold">Stage & Time</th>
                      <th className="p-3.5 w-1/4 font-bold">Teacher Activity & Scaffolding</th>
                      <th className="p-3.5 w-1/4 font-bold">Learner Activity & Output</th>
                      <th className="p-3.5 w-28 text-center font-bold">Interaction</th>
                      <th className="p-3.5 w-32 font-bold">Resources</th>
                      <th className="p-3.5 w-1/4 font-bold">Assessment & Feed-Forward</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-forest-100">
                    {lesson.procedure.map((step, idx) => (
                      <tr key={idx} className="hover:bg-ivory-50/60 transition-colors">
                        {/* Stage & Time */}
                        <td className="p-3.5 align-top">
                          <span className="font-serif font-bold text-forest-950 block text-sm">
                            {step.stage}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded mt-1 border border-terracotta-200/60">
                            <Clock className="w-3 h-3" />
                            {step.timeMinutes}
                          </span>
                        </td>

                        {/* Teacher Activity */}
                        <td className="p-3.5 align-top text-charcoal-700 leading-relaxed">
                          {step.teacherActivity}
                        </td>

                        {/* Learner Activity */}
                        <td className="p-3.5 align-top text-charcoal-700 leading-relaxed font-medium">
                          {step.learnerActivity}
                        </td>

                        {/* Interaction Pattern Badge */}
                        <td className="p-3.5 align-top text-center">
                          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            step.interactionPattern === 'T-S'
                              ? 'bg-forest-100 text-forest-900 border border-forest-200'
                              : step.interactionPattern === 'Group Work'
                              ? 'bg-sage-100 text-sage-800 border border-sage-300'
                              : step.interactionPattern === 'Pair Work'
                              ? 'bg-terracotta-100 text-terracotta-800 border border-terracotta-200'
                              : 'bg-ivory-200 text-charcoal-800'
                          }`}>
                            {step.interactionPattern}
                          </span>
                        </td>

                        {/* Resources */}
                        <td className="p-3.5 align-top text-charcoal-600 text-[11px]">
                          {step.resources}
                        </td>

                        {/* Assessment & Feedback */}
                        <td className="p-3.5 align-top text-[11px] text-charcoal-700 space-y-1">
                          <div className="bg-forest-50/60 p-2 rounded border border-forest-100">
                            <strong className="text-forest-900 block text-[10px] uppercase">Formative Check:</strong>
                            <span>{step.assessment}</span>
                          </div>
                          <div className="bg-terracotta-50/40 p-2 rounded border border-terracotta-100">
                            <strong className="text-terracotta-800 block text-[10px] uppercase">Feedback/Forward:</strong>
                            <span>{step.feedback}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB C: TEACHING RESOURCES & WORKSHEETS */}
        {(activeTab === 'resources' || typeof window !== 'undefined') && (
          <div className={`${activeTab !== 'resources' ? 'hidden print:block' : 'block'} space-y-6`}>
            <div className="border-b border-forest-200/80 pb-3">
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                Section C: Classroom Teaching Resources & Authentic Artifacts
              </h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Teacher-created materials used during instruction, including printable worksheets, vocabulary banks, and task guidelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lesson.resources.map((res) => (
                <div
                  key={res.id}
                  className="paper-card rounded-2xl p-6 border border-forest-200/80 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-tag bg-forest-100 text-forest-800 font-semibold capitalize">
                        {res.type}
                      </span>
                      <span className="text-[11px] font-mono text-charcoal-500">
                        {res.format}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-forest-950 mb-2">
                      {res.title}
                    </h4>

                    <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                      {res.description}
                    </p>

                    {res.contentPreview && (
                      <div className="bg-ivory-50 p-3 rounded-xl border border-forest-100 text-xs text-charcoal-700 italic mb-4">
                        "{res.contentPreview}"
                      </div>
                    )}

                    {res.previewItems && (
                      <div className="space-y-1 text-xs text-charcoal-600 mb-4">
                        <span className="font-bold text-forest-900 block text-[11px]">Included Artifacts:</span>
                        {res.previewItems.map((item, i) => (
                          <div key={i} className="flex items-start gap-1">
                            <span className="text-forest-700 font-bold">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-ivory-200 flex items-center justify-between text-xs">
                    <span className="text-charcoal-400">Practicum Resource</span>
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1.5 font-bold text-forest-800 hover:text-terracotta-600 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download / Print Resource</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB D: POST-LESSON REFLECTION */}
        {(activeTab === 'reflection' || typeof window !== 'undefined') && (
          <div className={`${activeTab !== 'reflection' ? 'hidden print:block' : 'block'} space-y-6`}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-200/80 shadow-soft space-y-6">
              <div className="border-b border-ivory-200 pb-4">
                <span className="badge-tag bg-forest-100 text-forest-800 font-semibold mb-2">
                  Post-Lesson Evaluation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  Section D: Post-Lesson Reflection & Evidence of Learning
                </h3>
                <p className="text-xs text-charcoal-600 mt-1">
                  Completed immediately following the teaching period to evaluate outcome achievement and inform subsequent planning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                
                {/* What Worked Well */}
                <div className="bg-forest-50/60 p-5 rounded-2xl border border-forest-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-forest-900 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-forest-700" />
                    <span>What Worked Well (Successes)</span>
                  </div>
                  <p className="text-charcoal-700 leading-relaxed">
                    {lesson.reflection.whatWorked}
                  </p>
                </div>

                {/* Challenges Encountered */}
                <div className="bg-terracotta-50/50 p-5 rounded-2xl border border-terracotta-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-terracotta-900 text-xs">
                    <AlertTriangle className="w-4 h-4 text-terracotta-600" />
                    <span>Challenges Encountered</span>
                  </div>
                  <p className="text-charcoal-700 leading-relaxed">
                    {lesson.reflection.challenges}
                  </p>
                </div>

                {/* Learner Responses */}
                <div className="bg-ivory-100 p-5 rounded-2xl border border-forest-200/70 space-y-2">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-forest-900 text-xs">
                    <Users className="w-4 h-4 text-forest-700" />
                    <span>Learner Responses & Exit Evidence</span>
                  </div>
                  <p className="text-charcoal-700 leading-relaxed">
                    {lesson.reflection.learnerResponses}
                  </p>
                </div>

                {/* Supervisor Feedback Received */}
                <div className="bg-white p-5 rounded-2xl border border-forest-300 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-forest-900 text-xs">
                    <Quote className="w-4 h-4 text-terracotta-500" />
                    <span>Supervisor Feedback Received</span>
                  </div>
                  <p className="text-charcoal-700 leading-relaxed italic">
                    "{lesson.reflection.feedbackReceived}"
                  </p>
                </div>

              </div>

              {/* Changes Planned for Future Lessons */}
              <div className="p-5 rounded-2xl bg-forest-900 text-ivory-100 border border-forest-800 space-y-2">
                <span className="font-bold text-terracotta-400 uppercase tracking-wider text-xs block">
                  Action Taken for Next Instructional Cycle:
                </span>
                <p className="text-xs sm:text-sm text-sage-200 leading-relaxed">
                  {lesson.reflection.changesPlanned}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* 4. Editable Notice */}
      <EditableNotice
        sectionName={`Lesson Plan: ${lesson.title}`}
        dataFile="src/data/lessonPlansData.ts"
        details="You can edit this lesson's procedures, objectives, resources, or reflections directly in the lessonPlansData.ts file."
      />

    </div>
  );
};
