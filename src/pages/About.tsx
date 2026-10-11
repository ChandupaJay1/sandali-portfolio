import React from 'react';
import { 
  School, 
  Sparkles, 
  CheckCircle2,
  Award,
  BookOpen,
  FileText,
  UserCheck,
  Phone,
  Mail,
  ExternalLink,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { EditableNotice } from '../components/EditableNotice';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { profile: teacherProfile } = usePortfolio();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* 1. Header Section */}
      <div>
        <SectionHeading
          eyebrow="Educator Profile"
          title="About Me & My Teaching Journey"
          description="An aspiring ESL educator and researcher committed to communicative pedagogy, learner-centred instruction, and transformative educational experiences in Sri Lanka."
        />

        <EditableNotice
          sectionName="Candidate Biography & Academic History"
          dataFile="src/data/teacherProfile.ts"
          className="mt-4"
        />
      </div>

      {/* 2. Educator Profile & Narrative */}
      <section className="paper-card rounded-3xl p-6 sm:p-10 border border-forest-200/80 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Portrait & Quick Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-forest-300/80 shadow-md group">
              <img
                src={teacherProfile.portraitImage || '/images/sandali_portrait.jpg'}
                alt={`${teacherProfile.name} - ESL Educator`}
                className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-linear-to-t from-forest-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-ivory-100">
                <span className="text-[10px] uppercase font-mono tracking-widest text-terracotta-300">
                  ESL Educator & Researcher
                </span>
                <p className="font-serif font-bold text-lg text-white">
                  {teacherProfile.name}
                </p>
                <p className="text-xs text-sage-200">
                  {teacherProfile.role}
                </p>
              </div>
            </div>

            {/* Quick Dossier Card */}
            <div className="bg-forest-900 text-ivory-100 rounded-2xl p-5 space-y-3 text-xs border border-forest-800">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-sage-400 block">
                  Current Degree Program
                </span>
                <p className="font-serif font-bold text-sm text-ivory-50">
                  {teacherProfile.degree}
                </p>
                <p className="text-[11px] text-terracotta-300 font-medium">
                  {teacherProfile.faculty}, {teacherProfile.university}
                </p>
              </div>

              <div className="pt-3 border-t border-forest-800/80 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-sage-400 block">
                  Dual Technical Qualification
                </span>
                <div className="flex items-start gap-2">
                  <Code className="w-3.5 h-3.5 text-sage-300 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-sage-200">
                    BSc (Hons.) Software Engineering (Second Upper) • Birmingham City University, UK
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-forest-800/80 text-xs text-sage-300 space-y-1.5 text-left">
                <div className="flex items-center gap-2">
                  <School className="w-3.5 h-3.5 text-terracotta-400 shrink-0" />
                  <span className="truncate">Teaching: British Way & Brightspeak Academies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-sage-300 shrink-0" />
                  <span>Teacher Training: American Center Colombo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-5 text-charcoal-700 text-sm sm:text-base leading-relaxed">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-forest-100 text-forest-800 border border-forest-200">
                BA (Hons) in TESL (Reading)
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sage-100 text-forest-900 border border-sage-200">
                BSc (Hons) Software Engineering
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-terracotta-100 text-terracotta-800 border border-terracotta-200">
                University of Kelaniya
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Why I Teach English as a Second Language
            </h3>
            
            <p>
              Growing up in Sri Lanka, I observed firsthand the stark dichotomy in English language opportunities: for some, English was an open gateway to global communication, higher education, and intellectual expression; for others, it remained a gatekeeper that induced intimidation, silence, and linguistic anxiety.
            </p>

            <p>
              Currently reading for my <strong>BA (Hons) in Teaching English as a Second Language (TESL) at the University of Kelaniya</strong>, along with holding a <strong>BSc (Hons) in Software Engineering with Second Class Upper Division from Birmingham City University, UK</strong>, I bring a unique blend of pedagogical empathy and analytical precision to English language education. My mission is to demystify English for students, creating vibrant, learner-centred classrooms where students take communicative risks safely.
            </p>

            <p>
              Through practical teaching as an <strong>ESL Teacher at British Way English Academy (Kiribathgoda)</strong> and <strong>Assistant ESL Teacher at Brightspeak English Academy (Weboda, Kirillawala)</strong>, I have worked with diverse learner cohorts. Combining formal <strong>ESL Teacher Training from the American Center, Colombo</strong> with evidence-based Second Language Acquisition (SLA) principles, I replace passive grammar drills with task-based simulations, authentic communicative scaffolding, and formative feedback.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/philosophy"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-800 text-ivory-50 text-xs font-semibold hover:bg-forest-900 transition-colors shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read My Teaching Philosophy</span>
              </Link>
              <Link
                to="/lessons"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-50 text-forest-900 text-xs font-semibold hover:bg-forest-100 border border-forest-200 transition-colors"
              >
                <span>Explore Curricular Lesson Plans</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ivory-200 text-charcoal-800 text-xs font-semibold hover:bg-ivory-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Sandali</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Academic Researches & Publications */}
      <section className="space-y-6">
        <div className="border-b border-forest-200/80 pb-3">
          <span className="badge-tag bg-forest-100 text-forest-800 font-semibold mb-1">
            Empirical Inquiry & Linguistics
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Academic Researches & Presentations
          </h3>
          <p className="text-xs text-charcoal-600 mt-0.5">
            Original linguistic investigations presented at university research symposiums and national conferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teacherProfile.academicResearches?.map((res, idx) => (
            <div 
              key={idx}
              className="paper-card rounded-2xl p-6 border border-forest-200/80 bg-white flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-forest-100 text-forest-800 font-bold">
                    Paper 0{idx + 1}
                  </span>
                  <span className="text-[11px] text-charcoal-500 font-medium">
                    {res.institution}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-base text-forest-950 leading-snug">
                  {res.title}
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  {res.description}
                </p>
              </div>

              <div className="pt-3 border-t border-ivory-200 text-[11px] text-forest-900 font-semibold space-y-2">
                <div className="flex items-center gap-1.5 text-forest-800">
                  <FileText className="w-3.5 h-3.5 shrink-0 text-terracotta-600" />
                  <span>{res.conference}</span>
                </div>
                {res.link && (
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-forest-700 hover:text-forest-950 hover:underline"
                  >
                    <span>View Conference Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Academic & Practicum Milestones Timeline */}
      <section className="space-y-8">
        <div className="border-b border-forest-200/80 pb-3">
          <span className="badge-tag bg-forest-100 text-forest-800 font-semibold mb-1">
            Academic & Professional Trajectory
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Education & Teaching Milestones
          </h3>
          <p className="text-xs text-charcoal-600 mt-0.5">
            Key developmental stages leading to professional ESL teaching proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teacherProfile.milestones.map((m, idx) => (
            <div
              key={idx}
              className="paper-card rounded-2xl p-6 border border-forest-200/80 bg-white flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-terracotta-600 bg-terracotta-50 px-2.5 py-1 rounded-full border border-terracotta-200 block w-fit mb-3">
                  {m.year}
                </span>
                <h4 className="font-serif font-bold text-base text-forest-950 mb-1">
                  {m.title}
                </h4>
                <p className="text-xs font-semibold text-forest-800 mb-3">
                  {m.subtitle}
                </p>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  {m.description}
                </p>
              </div>

              <div className="pt-4 border-t border-ivory-200 flex items-center gap-1.5 text-[11px] text-charcoal-400 mt-4">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-600" />
                <span>Verified Qualification</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Core Teaching Competencies & Toolkit */}
      <section className="bg-forest-900 text-ivory-100 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 space-y-8">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
              My Teaching Toolkit & Pedagogical Competencies
            </h3>
            <p className="text-xs sm:text-sm text-sage-200 mt-1 max-w-2xl font-light">
              Core methodological strengths refined through university coursework, linguistic research, and academy teaching practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teacherProfile.competencyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-forest-950/70 p-6 rounded-2xl border border-forest-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-terracotta-400 flex items-center justify-center mb-3 border border-forest-700">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-ivory-100 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-sage-200 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-sage-400 block pt-2 border-t border-forest-800">
                  Verified Teaching Competency
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Academic References */}
      <section className="paper-card rounded-3xl p-6 sm:p-8 border border-forest-200/80 bg-white space-y-6">
        <div>
          <span className="badge-tag bg-forest-100 text-forest-800 font-semibold mb-1">
            Academic Referees
          </span>
          <h3 className="font-serif text-2xl font-bold text-forest-950">
            Professional & Academic References
          </h3>
          <p className="text-xs text-charcoal-600 mt-0.5">
            Distinguished faculty members available to attest to academic integrity, pedagogical competence, and character.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teacherProfile.referencesList?.map((ref, i) => (
            <div key={i} className="p-5 rounded-2xl bg-ivory-100 border border-ivory-300 space-y-2">
              <div className="flex items-center gap-2 text-forest-900 font-serif font-bold text-base">
                <UserCheck className="w-4 h-4 text-forest-700" />
                <span>{ref.name}</span>
              </div>
              <p className="text-xs text-charcoal-700 font-semibold">
                {ref.title} • {ref.institution}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-charcoal-600">
                <Phone className="w-3.5 h-3.5 text-terracotta-600" />
                <span className="font-mono">{ref.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
