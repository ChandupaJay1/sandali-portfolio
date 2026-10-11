import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  ChevronDown, 
  Quote,
  School
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { assessmentCriteria, TOTAL_PORTFOLIO_MARKS } from '../data/assessmentCriteria';
import { philosophyPullQuotes } from '../data/philosophyData';
import { LessonCard } from '../components/LessonCard';
import { EditableNotice } from '../components/EditableNotice';

interface HomeProps {
  onOpenAssessmentModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAssessmentModal }) => {
  const { profile: teacherProfile, lessonPlans } = usePortfolio();
  const featuredLessons = lessonPlans.slice(0, 2);

  return (
    <div className="space-y-20 md:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-16 lg:pb-24 overflow-hidden">
        {/* Soft decorative background motifs */}
        <div className="absolute top-1/4 right-5 w-80 h-80 bg-sage-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-5 w-96 h-96 bg-terracotta-100/35 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge strip */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-forest-100 text-forest-900 border border-forest-200/80">
                  <GraduationCap className="w-3.5 h-3.5 text-forest-700" />
                  Pre-Service English Language Educator
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-terracotta-50 text-terracotta-700 border border-terracotta-200/60">
                  <Award className="w-3.5 h-3.5 text-terracotta-500" />
                  Teaching Practicum E-Portfolio
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-forest-950 tracking-tight leading-[1.12]">
                Teaching with Purpose.{' '}
                <span className="italic text-terracotta-600 block sm:inline">
                  Reflecting with Intention.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-charcoal-700 font-sans font-normal leading-relaxed max-w-2xl">
                {teacherProfile.statement}
              </p>

              {/* Academic Placement Dossier Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-xs border border-forest-200/80 shadow-card max-w-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-ivory-200">
                  <div className="flex items-center gap-2">
                    <School className="w-4 h-4 text-forest-700" />
                    <span className="text-xs font-bold uppercase tracking-wider text-forest-900 font-sans">
                      Practicum Candidate Dossier
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-terracotta-600 font-bold bg-terracotta-50 px-2.5 py-0.5 rounded-full border border-terracotta-200">
                    Term II Practicum
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-charcoal-500 block font-medium">Candidate Name:</span>
                    <strong className="font-serif text-forest-950 text-sm block">{teacherProfile.name}</strong>
                    <span className="text-[11px] text-charcoal-500 block">{teacherProfile.degree}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-charcoal-500 block font-medium">Institution & Faculty:</span>
                    <strong className="font-sans font-semibold text-forest-900 text-xs block">{teacherProfile.faculty}</strong>
                    <span className="text-[11px] text-charcoal-500 block">{teacherProfile.university}</span>
                  </div>
                  <div className="space-y-0.5 pt-2 border-t border-ivory-100 sm:border-t-0 sm:pt-0">
                    <span className="text-charcoal-500 block font-medium">Practicum Placement:</span>
                    <strong className="font-sans font-semibold text-forest-900 text-xs block">{teacherProfile.internshipSchool}</strong>
                  </div>
                  <div className="space-y-0.5 pt-2 border-t border-ivory-100 sm:border-t-0 sm:pt-0">
                    <span className="text-charcoal-500 block font-medium">Practicum Scope:</span>
                    <strong className="font-sans font-semibold text-forest-900 text-xs block">10 Weeks • 120+ Contact Hours</strong>
                  </div>
                </div>
              </div>

              {/* Primary & Secondary Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#assessment-evidence"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-ivory-50 bg-forest-800 hover:bg-forest-900 active:scale-98 transition-all shadow-medium hover:shadow-lg border border-forest-950 cursor-pointer"
                >
                  <span>Explore My Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/lessons"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-forest-900 bg-forest-50 hover:bg-forest-100 active:scale-98 transition-all border border-forest-200/80 shadow-xs cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-forest-700" />
                  <span>View Lesson Plans</span>
                </Link>

                <button
                  onClick={onOpenAssessmentModal}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-semibold text-xs text-charcoal-700 hover:text-forest-900 hover:bg-white/60 transition-colors cursor-pointer"
                >
                  <Award className="w-4 h-4 text-terracotta-500" />
                  <span>Marking Scheme ({TOTAL_PORTFOLIO_MARKS}M)</span>
                </button>
              </div>

            </div>

            {/* Right Editorial Portrait & Academic Composition (5 Cols) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                
                {/* Decorative Offset Frame */}
                <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-forest-300 -rotate-2 translate-x-2 translate-y-2 pointer-events-none"></div>

                {/* Main Composition Container */}
                <div className="relative rounded-3xl bg-forest-900 text-ivory-50 overflow-hidden shadow-2xl border border-forest-800 p-6 sm:p-8 flex flex-col justify-between">
                  
                  {/* Subtle Geometric Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-forest-800/60 rounded-full blur-2xl pointer-events-none"></div>

                  {/* Top Badge Strip */}
                  <div className="flex items-center justify-between z-10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-forest-800 border border-forest-700 flex items-center justify-center font-serif font-bold text-lg text-ivory-100 shadow-inner">
                        SS
                      </div>
                      <div>
                        <span className="font-serif font-bold text-sm block text-ivory-100 leading-tight">
                          {teacherProfile.name}
                        </span>
                        <span className="text-[10px] text-sage-300 block">
                          BA (TESL) • BSc (Software Eng)
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-sage-200 uppercase bg-forest-950/70 px-3 py-1 rounded-full border border-forest-800">
                      Practicum 2026
                    </span>
                  </div>

                  {/* Center Editorial Real Portrait */}
                  <div className="relative z-10 my-2 rounded-2xl overflow-hidden border-2 border-sage-300/30 shadow-xl group">
                    <img
                      src={teacherProfile.portraitImage || '/images/sandali_portrait.jpg'}
                      alt={`${teacherProfile.name} - ESL Educator`}
                      className="w-full h-80 object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-linear-to-t from-forest-950/90 via-transparent to-transparent"></div>

                    {/* Overlay Details */}
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-ivory-100 bg-forest-800/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-forest-600 mb-1">
                        <GraduationCap className="w-3 h-3 text-terracotta-400" />
                        English Language Educator Intern
                      </span>
                      <p className="font-serif text-lg font-bold text-ivory-50 leading-tight">
                        Faculty of Education, University of Colombo
                      </p>
                      <p className="text-[11px] text-sage-300">
                        Placement: Visakha Vidyalaya, Colombo 04
                      </p>
                    </div>
                  </div>

                  {/* Bottom Stats Grid */}
                  <div className="z-10 grid grid-cols-2 gap-3 pt-5 mt-4 border-t border-forest-800/80 text-center">
                    <div className="bg-forest-950/60 p-3 rounded-xl border border-forest-800/70">
                      <span className="block text-xl font-serif font-bold text-ivory-100">120+</span>
                      <span className="text-[10px] text-sage-300 uppercase tracking-wider font-semibold">Teaching Hours</span>
                    </div>
                    <div className="bg-forest-950/60 p-3 rounded-xl border border-forest-800/70">
                      <span className="block text-xl font-serif font-bold text-terracotta-400">{TOTAL_PORTFOLIO_MARKS} M</span>
                      <span className="text-[10px] text-sage-300 uppercase tracking-wider font-semibold">Assessed Evidence</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="mt-14 text-center">
            <a
              href="#teaching-overview"
              className="inline-flex flex-col items-center gap-1.5 text-xs text-charcoal-500 hover:text-forest-800 transition-colors group cursor-pointer"
            >
              <span className="tracking-widest uppercase text-[10px] font-semibold">Scroll to Discover</span>
              <ChevronDown className="w-4 h-4 text-terracotta-500 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* 2. CONCISE INTRODUCTION & AUTHENTIC CLASSROOM MOMENT */}
      <section id="teaching-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-forest-200/80 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Real Classroom Photo (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-forest-200/80 shadow-medium group">
                <img
                  src={teacherProfile.classroomImage || '/images/classroom_session.jpg'}
                  alt="Communicative English Teaching Session in Sri Lankan Secondary School"
                  className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-ivory-50 text-xs">
                  <span className="font-bold block text-sm font-serif">Communicative Task in Action</span>
                  <span className="text-sage-200 text-[11px]">Secondary ESL Group Work • Sri Lanka</span>
                </div>
              </div>
              <p className="text-[11px] text-charcoal-500 italic text-center">
                Learners engaged in collaborative group dialogue using task cards and vocabulary scaffolds.
              </p>
            </div>

            {/* Narrative & Pedagogical Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed">
              <div className="space-y-1.5">
                <span className="badge-tag bg-forest-100 text-forest-800 font-semibold">
                  Internship Practicum Context
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight">
                  Reflective Practicum in Sri Lankan Secondary ESL
                </h2>
              </div>

              <p>
                {teacherProfile.overviewBio}
              </p>
              <p className="text-charcoal-600 text-xs sm:text-sm">
                This digital e-portfolio serves as the official capstone evidence for my university practicum assessment. It encompasses my pedagogical philosophy, four fully staged communicative lesson plans with authentic teaching resources, five Gibbs-cycle reflective logs, supervisor observation reports, and mentor appraisals.
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-semibold text-forest-900">
                <span className="flex items-center gap-1.5 bg-ivory-100 px-3 py-1.5 rounded-lg border border-forest-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
                  National Curriculum Alignment
                </span>
                <span className="flex items-center gap-1.5 bg-ivory-100 px-3 py-1.5 rounded-lg border border-forest-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
                  Communicative Language Pedagogy
                </span>
                <span className="flex items-center gap-1.5 bg-ivory-100 px-3 py-1.5 rounded-lg border border-forest-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
                  Vygotskian Scaffolding
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ASSESSMENT EVIDENCE MATRIX: 6 OFFICIAL CRITERIA */}
      <section id="assessment-evidence" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-forest-200/70">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full border border-terracotta-200/50">
                Evaluation Rubric
              </span>
              <span className="text-xs font-bold text-forest-900 bg-forest-100 px-2.5 py-0.5 rounded-full border border-forest-300">
                Total: {TOTAL_PORTFOLIO_MARKS} Marks
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
              Assessment Evidence Matrix
            </h2>
            <p className="text-sm text-charcoal-600 mt-1 max-w-2xl">
              Each portfolio component directly corresponds to the official assessment criteria for the undergraduate teaching internship. Click any card to examine the evidence.
            </p>
          </div>

          <button
            onClick={onOpenAssessmentModal}
            className="inline-flex items-center gap-2 text-xs font-bold text-forest-900 hover:text-terracotta-600 bg-white px-4 py-2 rounded-xl border border-forest-200 shadow-2xs transition-colors shrink-0 cursor-pointer"
          >
            <Award className="w-4 h-4 text-terracotta-500" />
            <span>View Full Rubric Modal</span>
          </button>
        </div>

        {/* 6 Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assessmentCriteria.map((crit) => (
            <Link
              key={crit.id}
              to={crit.route}
              className="paper-card rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200 border border-forest-200/80 bg-white"
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center font-serif font-bold text-sm">
                    0{crit.number}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-terracotta-700 bg-terracotta-50 px-2.5 py-1 rounded-full border border-terracotta-200">
                    <Award className="w-3 h-3 text-terracotta-500" />
                    {crit.marks} Marks
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors mb-2">
                  {crit.title}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                  {crit.description}
                </p>

                {/* Evidence Samples */}
                <div className="bg-ivory-50/80 rounded-xl p-3 border border-forest-100 text-[11px] text-charcoal-600 space-y-1 mb-4">
                  <span className="font-semibold text-forest-900 block text-[10px] uppercase tracking-wider mb-1">
                    Verified Evidence:
                  </span>
                  {crit.evidenceItems.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1">
                      <span className="text-forest-600 font-bold">•</span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <div className="pt-3 border-t border-ivory-200 flex items-center justify-between text-xs font-bold text-forest-800 group-hover:text-terracotta-600 transition-colors">
                <span>Evaluate Evidence</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* 4. FEATURED LESSON PLANS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="badge-tag bg-forest-100 text-forest-800 font-semibold mb-2">
              Classroom Practice (10 Marks)
            </span>
            <h2 className="font-serif text-3xl font-bold text-forest-950">
              Featured Communicative Lesson Plans
            </h2>
            <p className="text-sm text-charcoal-600 mt-1">
              Sample lesson architectures designed for Sri Lankan secondary classrooms, featuring detailed procedures and embedded worksheets.
            </p>
          </div>

          <Link
            to="/lessons"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-900 hover:text-terracotta-600 bg-white px-4 py-2.5 rounded-xl border border-forest-200 transition-colors shadow-2xs shrink-0"
          >
            <span>View All {lessonPlans.length} Lesson Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>

      {/* 5. PHILOSOPHY PULL-QUOTE & THEORY SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest-900 text-ivory-100 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-forest-800/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <Quote className="w-12 h-12 text-terracotta-400 mx-auto opacity-80" />

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-50 font-normal leading-relaxed italic">
              "{philosophyPullQuotes[0].quote}"
            </blockquote>

            <div className="pt-2">
              <p className="font-serif font-bold text-lg text-ivory-100">
                {teacherProfile.name}
              </p>
              <p className="text-xs text-sage-300 font-light tracking-wide uppercase">
                {teacherProfile.role} • {teacherProfile.university}
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <Link
                to="/philosophy"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ivory-50 text-forest-950 font-semibold text-xs hover:bg-ivory-200 transition-colors shadow-md"
              >
                <span>Read Full Philosophy Statement (10 Marks)</span>
                <ArrowRight className="w-3.5 h-3.5 text-terracotta-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDITABLE DATA NOTICE GUIDANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditableNotice
          sectionName="Complete E-Portfolio Architecture"
          dataFile="src/data/teacherProfile.ts"
          details="All biographical information, lesson plans, observation forms, and reflections are structured in editable TypeScript files. You can replace all placeholders with your actual practicum data and scan files."
        />
      </section>
    </div>
  );
};
