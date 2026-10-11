import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  RotateCw, 
  BookOpen,
  Award
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EditableNotice } from '../components/EditableNotice';
import { usePortfolio } from '../context/PortfolioContext';
import { reflectiveSummaryIntro } from '../data/reflectionsData';

export const ReflectiveSummary: React.FC = () => {
  const { reflections: reflectionsData } = usePortfolio();
  const [selectedCompetency, setSelectedCompetency] = useState<string>('All');
  const [expandedEntries, setExpandedEntries] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    if (reflectionsData[0]) initial[reflectionsData[0].id] = true;
    if (reflectionsData[2]) initial[reflectionsData[2].id] = true;
    return initial;
  });

  const competencies = [
    'All',
    'Classroom Management & Rapport',
    'Instructional Clarity & Staging',
    'Differentiation & Mixed-Ability Scaffolding',
    'Feedback Responsiveness & Pedagogical Staging',
    'Formative Assessment & Feed-Forward'
  ];

  const filteredReflections = selectedCompetency === 'All'
    ? reflectionsData
    : reflectionsData.filter(r => r.competency === selectedCompetency);

  const toggleExpand = (id: string) => {
    setExpandedEntries(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    reflectionsData.forEach(r => { allExpanded[r.id] = true; });
    setExpandedEntries(allExpanded);
  };

  const collapseAll = () => {
    setExpandedEntries({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* 1. Header */}
      <div>
        <SectionHeading
          eyebrow="Assessment Criterion 02"
          marks={10}
          title="Reflective Summary & Practicum Evolution"
          description="Evidence-based critical inquiry into my 10-week teaching internship at Visakha Vidyalaya, structured using Gibbs' Reflective Cycle to demonstrate how classroom challenges and supervisor evaluations shaped my pedagogical growth."
        />

        <EditableNotice
          sectionName="Weekly Reflective Entries & Gibbs Framework"
          dataFile="src/data/reflectionsData.ts"
          details="All 5-stage Gibbs reflection entries are structured in TypeScript. You can easily add your own classroom incidents, weekly logs, or school action plans."
        />
      </div>

      {/* 2. Practicum Context & Key Growth Areas */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-200/80 shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="badge-tag bg-forest-100 text-forest-800 font-semibold">
              Practicum Overview
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight">
              From Theory to Resilient Classroom Practice
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              {reflectiveSummaryIntro.internshipContext}
            </p>

            <div className="p-4 rounded-2xl bg-ivory-100 border border-forest-200 text-xs space-y-2">
              <span className="font-bold text-forest-900 block uppercase tracking-wider text-[11px]">
                Internship Parameters:
              </span>
              <div className="grid grid-cols-2 gap-2 text-charcoal-600">
                <div>• Duration: 10 Weeks</div>
                <div>• Hours: 120+ Contact Hours</div>
                <div>• Grades Taught: 7, 8, 9 & 10</div>
                <div>• Class Sizes: 34 - 38 Students</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-ivory-200 lg:pl-8">
            <h4 className="font-serif font-bold text-lg text-forest-900">
              Core Competencies Developed Across the Internship
            </h4>
            <div className="space-y-2.5">
              {reflectiveSummaryIntro.keyCompetenciesDeveloped.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 bg-ivory-50/60 p-3 rounded-xl border border-forest-100">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. 10-Week Professional Growth Timeline Overview */}
      <section className="space-y-6">
        <div className="border-b border-forest-200/80 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 mb-1 block">
              Practicum Progression
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-forest-950">
              10-Week Reflective Timeline
            </h3>
            <p className="text-sm text-charcoal-600 mt-1">
              Trace my developmental trajectory from initial classroom anxiety to confident student-centred leadership.
            </p>
          </div>

          {/* Expand/Collapse All Buttons */}
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg bg-white border border-forest-200 text-forest-900 font-semibold hover:bg-forest-50 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-lg bg-white border border-forest-200 text-charcoal-600 hover:bg-forest-50 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Competency Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          <span className="text-xs font-semibold text-charcoal-500 mr-1">Filter by Competency:</span>
          {competencies.map((comp) => (
            <button
              key={comp}
              onClick={() => setSelectedCompetency(comp)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCompetency === comp
                  ? 'bg-forest-800 text-ivory-50 font-semibold'
                  : 'bg-white text-charcoal-700 hover:bg-forest-50 border border-forest-200'
              }`}
            >
              {comp}
            </button>
          ))}
        </div>

        {/* Expandable Gibbs Reflective Cards */}
        <div className="space-y-6">
          {filteredReflections.map((entry) => {
            const isExpanded = !!expandedEntries[entry.id];

            return (
              <div 
                key={entry.id}
                className="bg-white rounded-3xl border border-forest-200/90 shadow-card overflow-hidden transition-all duration-200"
              >
                {/* Header (Always Visible) */}
                <div 
                  onClick={() => toggleExpand(entry.id)}
                  className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-ivory-50/50 transition-colors select-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-forest-800 text-ivory-100 flex flex-col items-center justify-center shrink-0 border border-forest-900 shadow-xs">
                      <span className="text-[10px] uppercase font-bold tracking-wider">Week</span>
                      <span className="font-serif font-bold text-lg leading-none">0{entry.weekNumber}</span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="badge-tag bg-forest-50 text-forest-800 border border-forest-200/60 font-semibold">
                          {entry.grade}
                        </span>
                        <span className="badge-tag bg-terracotta-50 text-terracotta-700 border border-terracotta-200/50">
                          {entry.competency}
                        </span>
                        <span className="text-xs text-charcoal-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {entry.date}
                        </span>
                      </div>

                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                        {entry.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                    <span className="text-xs font-semibold text-forest-800 hidden sm:inline">
                      {isExpanded ? 'Collapse Gibbs Cycle' : 'Explore Gibbs Analysis'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Gibbs Cycle Content */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 pt-0 border-t border-ivory-200 space-y-6 bg-ivory-50/30">
                    
                    {/* Context background */}
                    <div className="text-xs text-charcoal-600 bg-ivory-100/80 p-3.5 rounded-xl border border-forest-100">
                      <strong>Context: </strong>{entry.context}
                    </div>

                    {/* Gibbs 5 Stages Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                      
                      {/* 1. Situation (Description) */}
                      <div className="lg:col-span-12 bg-white p-5 rounded-2xl border border-forest-200 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
                          <span className="w-5 h-5 rounded-full bg-forest-800 text-white flex items-center justify-center text-[10px]">1</span>
                          <span>Stage 1: Teaching Experience or Situation (Gibbs Description)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed pl-7">
                          {entry.gibbs.situation}
                        </p>
                      </div>

                      {/* 2. What Went Well & Did Not */}
                      <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-forest-200 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-800">
                          <CheckCircle2 className="w-4 h-4 text-forest-600" />
                          <span>Stage 2A: What Went Well (Strengths)</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-charcoal-700 pl-6">
                          {entry.gibbs.whatWentWell.map((w, idx) => (
                            <li key={idx} className="list-disc leading-relaxed">{w}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-terracotta-200/80 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta-800">
                          <AlertCircle className="w-4 h-4 text-terracotta-600" />
                          <span>Stage 2B: What Did Not Go Well (Challenges)</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-charcoal-700 pl-6">
                          {entry.gibbs.whatDidNot.map((nw, idx) => (
                            <li key={idx} className="list-disc leading-relaxed text-charcoal-700">{nw}</li>
                          ))}
                        </ul>
                      </div>

                      {/* 3. Why the Outcome Occurred (Analysis) */}
                      <div className="lg:col-span-12 bg-white p-5 rounded-2xl border border-forest-200 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
                          <span className="w-5 h-5 rounded-full bg-forest-800 text-white flex items-center justify-center text-[10px]">3</span>
                          <span>Stage 3: Why the Outcome Occurred (Pedagogical & Theoretical Analysis)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed pl-7 italic bg-forest-50/40 p-3 rounded-xl border border-forest-100">
                          {entry.gibbs.whyOutcomeOccurred}
                        </p>
                      </div>

                      {/* 4. What I Learned (Synthesis) */}
                      <div className="lg:col-span-6 bg-forest-50/70 p-5 rounded-2xl border border-forest-200 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
                          <Lightbulb className="w-4 h-4 text-forest-700" />
                          <span>Stage 4: Key Professional Insight (What I Learned)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed pl-6">
                          {entry.gibbs.whatLearned}
                        </p>
                      </div>

                      {/* 5. Future Action Plan */}
                      <div className="lg:col-span-6 bg-terracotta-50/50 p-5 rounded-2xl border border-terracotta-200/70 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta-800">
                          <RotateCw className="w-4 h-4 text-terracotta-600" />
                          <span>Stage 5: Future Action Plan (Changes Implemented)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed pl-6">
                          {entry.gibbs.futureActionPlan}
                        </p>
                      </div>

                    </div>

                    {/* Linked Coursework Cross-References */}
                    <div className="pt-3 border-t border-forest-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-charcoal-400 font-medium">Reflective Tags:</span>
                        {entry.tags.map((t, idx) => (
                          <span key={idx} className="bg-white text-charcoal-600 px-2 py-0.5 rounded border border-ivory-300 text-[11px]">
                            #{t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {entry.linkedLessonId && (
                          <Link
                            to={`/lessons/${entry.linkedLessonId}`}
                            className="inline-flex items-center gap-1 text-forest-800 hover:text-terracotta-600 font-bold transition-colors"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>View Evaluated Lesson Plan</span>
                          </Link>
                        )}
                        {entry.linkedObservationId && (
                          <Link
                            to="/observations"
                            className="inline-flex items-center gap-1 text-terracotta-700 hover:text-forest-900 font-bold transition-colors"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>View Linked Observation Form</span>
                          </Link>
                        )}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Future Action Plans & Post-Internship Roadmap */}
      <section className="bg-forest-950 text-ivory-100 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 space-y-8">
          <div>
            <span className="badge-tag bg-forest-800 text-terracotta-300 font-semibold mb-2 border border-forest-700">
              Lifelong Professional Development
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
              Future Professional Action Plan
            </h3>
            <p className="text-sm text-sage-200 mt-1 max-w-2xl font-light">
              Clear goals set following supervisor conferences to guide my ongoing development as a certified English language educator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reflectiveSummaryIntro.actionPlanForFutureDevelopment.map((plan, idx) => (
              <div 
                key={idx}
                className="bg-forest-900/80 p-6 rounded-2xl border border-forest-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-terracotta-400 block mb-2 font-bold uppercase tracking-wider">
                    {plan.timeline}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-ivory-100 mb-2">
                    {plan.goal}
                  </h4>
                  <p className="text-xs text-sage-200 leading-relaxed font-light">
                    {plan.strategy}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-forest-800/80 flex items-center gap-1 text-xs text-sage-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-300" />
                  <span>Targeted Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
