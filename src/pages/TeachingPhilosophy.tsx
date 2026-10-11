import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Lightbulb, 
  GraduationCap
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EditableNotice } from '../components/EditableNotice';
import { usePortfolio } from '../context/PortfolioContext';
import { philosophyPullQuotes } from '../data/philosophyData';

export const TeachingPhilosophy: React.FC = () => {
  const { philosophyPillars, academicReferences, profile: teacherProfile } = usePortfolio();
  const [activeTab, setActiveTab] = useState<string>(philosophyPillars[0]?.id || 'pillar-1');
  const [referenceFilter, setReferenceFilter] = useState<string>('All');

  const categories = ['All', 'Formative Assessment & AfL', 'Instructional Scaffolding', 'Classroom Methodology & Staging', 'Second Language Acquisition', 'Reflective Practice'];

  const filteredReferences = referenceFilter === 'All' 
    ? academicReferences 
    : academicReferences.filter(r => r.theme === referenceFilter);

  const currentPillar = philosophyPillars.find(p => p.id === activeTab) || philosophyPillars[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* 1. Header Section */}
      <div>
        <SectionHeading
          eyebrow="Assessment Criterion 01"
          marks={10}
          title="Teaching Philosophy Statement"
          description="A comprehensive articulation of my pedagogical beliefs, learner-centred methodology, scaffolding strategies for multilingual Sri Lankan classrooms, and lifelong commitment to ethical reflective practice."
        />

        <EditableNotice
          sectionName="Teaching Philosophy & References"
          dataFile="src/data/philosophyData.ts"
          details="This philosophy statement is structured into 6 thematic pillars with genuine APA 7 citations. You can personalize your beliefs, add your school anecdotes, or add further references."
        />
      </div>

      {/* 2. Editorial Pull-Quotes Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {philosophyPullQuotes.map((item, idx) => (
          <div 
            key={idx}
            className="p-6 rounded-2xl bg-white border border-forest-200/80 shadow-soft flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 text-forest-100 font-serif text-6xl leading-none select-none pointer-events-none">
              “
            </div>
            <p className="font-serif text-forest-950 text-base sm:text-lg italic leading-relaxed relative z-10 mb-4">
              "{item.quote}"
            </p>
            <div className="pt-3 border-t border-ivory-200 text-xs">
              <span className="font-bold text-forest-900 block">{item.author}</span>
              <span className="text-terracotta-600 block text-[11px] font-medium">{item.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Interactive Philosophy Pillars Showcase */}
      <section className="space-y-8">
        <div className="border-b border-forest-200/80 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 mb-1 block">
            Pedagogical Core Pillars
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
            Educational Principles & Classroom Enactment
          </h3>
          <p className="text-sm text-charcoal-600 mt-1">
            Click through the six foundational pillars to explore how educational theories directly govern my everyday classroom decisions.
          </p>
        </div>

        {/* Tab navigation buttons */}
        <div className="flex flex-wrap gap-2 pb-2">
          {philosophyPillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === pillar.id
                  ? 'bg-forest-800 text-ivory-50 shadow-md scale-102 border border-forest-950'
                  : 'bg-white text-charcoal-700 hover:bg-forest-50 border border-forest-200/70 hover:text-forest-900'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-forest-700/30 text-[11px] flex items-center justify-center font-serif">
                0{idx + 1}
              </span>
              <span>{pillar.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Detailed Card */}
        <div className="bg-white rounded-3xl border border-forest-200 p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Main Philosophy Text (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="badge-tag bg-forest-100 text-forest-900 font-semibold">
                  Pillar {philosophyPillars.findIndex(p => p.id === currentPillar.id) + 1} of 6
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight">
                  {currentPillar.title}
                </h4>
                <p className="text-sm font-serif italic text-terracotta-700">
                  {currentPillar.tagline}
                </p>
              </div>

              <div className="text-charcoal-700 text-sm sm:text-base leading-relaxed space-y-4 font-light">
                <p>{currentPillar.description}</p>
              </div>

              {/* Citations Tag */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-charcoal-500">Key Scholarly Citations:</span>
                {currentPillar.keyCitations.map((cite, i) => (
                  <span key={i} className="text-xs font-mono bg-ivory-100 text-forest-800 px-2 py-0.5 rounded border border-forest-200">
                    {cite}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Theory-to-Practice Blueprint (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Theory Foundation Box */}
              <div className="bg-forest-50/70 rounded-2xl p-5 border border-forest-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900">
                  <BookOpen className="w-4 h-4 text-forest-700" />
                  <span>Theoretical Grounding</span>
                </div>
                <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
                  {currentPillar.theoryLink}
                </p>
              </div>

              {/* Classroom Application Box */}
              <div className="bg-terracotta-50/50 rounded-2xl p-5 border border-terracotta-200/70 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta-800">
                  <Lightbulb className="w-4 h-4 text-terracotta-600" />
                  <span>Classroom Enactment (How I Teach)</span>
                </div>
                <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
                  {currentPillar.classroomApplication}
                </p>
              </div>

              {/* Teacher Commitment Callout */}
              <div className="bg-ivory-100 rounded-2xl p-4 border border-forest-200/60 text-xs text-charcoal-600 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                <span>
                  Evaluated against National Sri Lankan English Teaching Competency Standards (Ministry of Education).
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Theory into Practice Synthesis Matrix */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-forest-200/80 shadow-soft space-y-6">
        <div>
          <span className="badge-tag bg-forest-100 text-forest-800 font-semibold mb-2">
            Theoretical Coherence
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Theory to Classroom Action Matrix
          </h3>
          <p className="text-sm text-charcoal-600 mt-1">
            Explicit alignment between Second Language Acquisition (SLA) theories and observable teacher moves.
          </p>
        </div>

        <div className="overflow-x-auto border border-forest-200/70 rounded-2xl">
          <table className="w-full text-xs text-left">
            <thead className="bg-forest-900 text-ivory-50 uppercase text-[11px]">
              <tr>
                <th className="p-4 w-1/4">Educational Theorist & Concept</th>
                <th className="p-4 w-1/3">Pedagogical Rationale</th>
                <th className="p-4 w-5/12">My Observable Classroom Enactment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-200">
              <tr className="hover:bg-ivory-50/50">
                <td className="p-4 font-bold text-forest-950 align-top">
                  Stephen Krashen (1982)
                  <span className="block font-normal text-charcoal-500 text-[11px]">Affective Filter & Input (i+1)</span>
                </td>
                <td className="p-4 text-charcoal-700 leading-relaxed">
                  L2 acquisition cannot occur if anxiety, fear of failure, or lack of motivation block comprehensible linguistic input from reaching the language acquisition device.
                </td>
                <td className="p-4 text-forest-900 font-medium leading-relaxed bg-forest-50/30">
                  Using "Talking Tokens", humorous cultural hooks (kottu griddle beats), non-penalising error feedback, and celebratory peer applause.
                </td>
              </tr>
              <tr className="hover:bg-ivory-50/50">
                <td className="p-4 font-bold text-forest-950 align-top">
                  Lev Vygotsky (1978)
                  <span className="block font-normal text-charcoal-500 text-[11px]">Zone of Proximal Development (ZPD)</span>
                </td>
                <td className="p-4 text-charcoal-700 leading-relaxed">
                  Learning occurs socially through assisted performance with More Knowledgeable Others (peers or teacher) before internalising into individual capability.
                </td>
                <td className="p-4 text-forest-900 font-medium leading-relaxed bg-forest-50/30">
                  Strategic pairing (fluent speaker with reluctant speaker), graphic organizers, bilingual Lifeboat prompt strips, and stepped sentence frames.
                </td>
              </tr>
              <tr className="hover:bg-ivory-50/50">
                <td className="p-4 font-bold text-forest-950 align-top">
                  Black & Wiliam (1998)
                  <span className="block font-normal text-charcoal-500 text-[11px]">Assessment for Learning (AfL)</span>
                </td>
                <td className="p-4 text-charcoal-700 leading-relaxed">
                  Formative assessment during instructional flow—when combined with constructive feed-forward—yields highest learning gains over summative grading.
                </td>
                <td className="p-4 text-forest-900 font-medium leading-relaxed bg-forest-50/30">
                  "Two Stars and a Wish" peer checklists, mini-whiteboard quick polls, traffic-light self-evaluations, and diagnostic 3-2-1 exit slips.
                </td>
              </tr>
              <tr className="hover:bg-ivory-50/50">
                <td className="p-4 font-bold text-forest-950 align-top">
                  Donald Schön (1983)
                  <span className="block font-normal text-charcoal-500 text-[11px]">Reflection-in & on-Action</span>
                </td>
                <td className="p-4 text-charcoal-700 leading-relaxed">
                  Professional artistry requires ongoing restructuring of strategies during unexpected classroom moments and systematic post-hoc deconstruction.
                </td>
                <td className="p-4 text-forest-900 font-medium leading-relaxed bg-forest-50/30">
                  Post-lesson field journals using Gibbs' 5-stage cycle; integrating supervisor observation critiques to cut TTT from 52% to 22%.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Authentic APA 7 Reference List */}
      <section className="space-y-6">
        <div className="border-b border-forest-200/80 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 mb-1 block">
              Scholarly Foundation
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-950">
              Academic References (APA 7th Edition)
            </h3>
            <p className="text-sm text-charcoal-600 mt-1">
              Authentic peer-reviewed literature underpinning my pedagogical philosophy and practicum design.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setReferenceFilter(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  referenceFilter === cat
                    ? 'bg-forest-800 text-ivory-50 font-semibold'
                    : 'bg-white text-charcoal-700 hover:bg-forest-50 border border-forest-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReferences.map((ref) => (
            <div
              key={ref.id}
              className="paper-card rounded-2xl p-5 border border-forest-200/80 bg-white flex flex-col justify-between"
            >
              <div>
                <span className="badge-tag bg-forest-50 text-forest-800 text-[10px] font-semibold mb-3 border border-forest-200/60">
                  {ref.theme}
                </span>
                <p className="font-serif text-xs sm:text-sm text-forest-950 leading-relaxed font-medium mb-3">
                  {ref.citation}
                </p>
              </div>
              <p className="text-[11px] text-charcoal-600 italic bg-ivory-50 p-2.5 rounded-lg border border-forest-100">
                Annotation: {ref.annotation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Concluding Reflection on Teacher Identity */}
      <section className="bg-forest-900 text-ivory-100 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <GraduationCap className="w-10 h-10 text-terracotta-400 mx-auto" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
            The Educator I Aspire to Become
          </h3>
          <p className="text-sm sm:text-base text-sage-200 font-light leading-relaxed">
            As I complete my teaching internship and prepare to enter the Sri Lankan education system as a fully certified graduate English teacher, my goal is not merely to produce students who pass examination papers. I aspire to be an educator who cultivates confident, articulate, empathetic global citizens who perceive the English language as an open door to opportunity, creativity, and self-determination.
          </p>
          <div className="pt-4 border-t border-forest-800 text-xs text-sage-300">
            <span className="font-serif font-bold text-ivory-100 text-sm block">{teacherProfile.name}</span>
            <span>Pre-Service English Language Teacher • {teacherProfile.university}</span>
          </div>
        </div>
      </section>

    </div>
  );
};
