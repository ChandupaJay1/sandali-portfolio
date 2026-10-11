import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Heart, Printer, Mail, ExternalLink, ShieldCheck, Lock } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { assessmentCriteria, TOTAL_PORTFOLIO_MARKS } from '../data/assessmentCriteria';

interface FooterProps {
  onOpenAssessmentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssessmentModal }) => {
  const { profile } = usePortfolio();
  const currentYear = new Date().getFullYear();

  const handlePrintSummary = () => {
    window.print();
  };

  return (
    <footer className="bg-forest-950 text-ivory-100 border-t border-forest-900 mt-20 pt-16 pb-12 relative overflow-hidden">
      {/* Background delicate radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-forest-500/40 to-transparent"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-forest-900/80">
          
          {/* Column 1: Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-lg border border-forest-700 shadow-xs">
                SS
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-ivory-50">
                  {profile.name}
                </h3>
                <p className="text-xs text-sage-300 font-sans tracking-wide">
                  {profile.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-sage-200/90 leading-relaxed font-light pr-4">
              {profile.statement}
            </p>

            <div className="pt-2 text-xs text-sage-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>{profile.degree}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-400 shrink-0 ml-1"></span>
                <span>{profile.faculty}, {profile.university}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400 shrink-0 ml-1"></span>
                <span>Internship Placement: {profile.internshipSchool}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={handlePrintSummary}
                className="inline-flex items-center gap-1.5 text-xs text-ivory-200 bg-forest-900/80 hover:bg-forest-800 hover:text-white px-3 py-1.5 rounded-lg border border-forest-800 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Portfolio Summary</span>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-terracotta-300 bg-forest-900/80 hover:bg-forest-800 hover:text-terracotta-200 px-3 py-1.5 rounded-lg border border-forest-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Supervisor / Teacher</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Assessment Coursework (Marks breakdown) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-terracotta-400" />
              <h4 className="text-sm font-semibold tracking-wider uppercase text-ivory-100 font-sans">
                Assessed Evidence
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-sage-200">
              {assessmentCriteria.map((crit) => (
                <li key={crit.id}>
                  <Link
                    to={crit.route}
                    className="hover:text-ivory-50 flex items-center justify-between group transition-colors py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform truncate pr-1">
                      {crit.title}
                    </span>
                    <span className="font-semibold text-terracotta-300 bg-forest-900 px-1.5 py-0.2 rounded text-[10px] shrink-0 border border-forest-800">
                      {crit.marks}M
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-forest-900">
                <button
                  onClick={onOpenAssessmentModal}
                  className="text-xs font-semibold text-terracotta-400 hover:text-terracotta-300 flex items-center gap-1 transition-colors"
                >
                  <span>View All Marking Rubrics ({TOTAL_PORTFOLIO_MARKS}M)</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio Sections */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-ivory-100 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-sage-200">
              <li>
                <Link to="/" className="hover:text-ivory-50 transition-colors">
                  Homepage & Overview
                </Link>
              </li>
              <li>
                <Link to="/philosophy" className="hover:text-ivory-50 transition-colors">
                  Teaching Philosophy Statement
                </Link>
              </li>
              <li>
                <Link to="/reflections" className="hover:text-ivory-50 transition-colors">
                  Gibbs' Reflective Practicum Log
                </Link>
              </li>
              <li>
                <Link to="/lessons" className="hover:text-ivory-50 transition-colors">
                  Lesson Plan Library & Staging
                </Link>
              </li>
              <li>
                <Link to="/observations" className="hover:text-ivory-50 transition-colors">
                  Observation Forms 01 & 02
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-ivory-50 transition-colors">
                  Supervisor & Mentor Testimonials
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ivory-50 transition-colors">
                  About Me & Teaching Journey
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ivory-50 transition-colors">
                  Contact & Institutional Inquiries
                </Link>
              </li>
              <li className="pt-2 border-t border-forest-900">
                <Link 
                  to="/admin" 
                  className="inline-flex items-center gap-1.5 text-sage-300 hover:text-white font-semibold transition-colors"
                >
                  <Lock className="w-3.5 h-3.5 text-sage-400" />
                  <span>Admin Management Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Academic Integrity & Framework */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-ivory-100 font-sans">
              Pedagogical Standards
            </h4>
            <div className="text-xs text-sage-200/80 space-y-2 leading-relaxed">
              <p>
                Aligned with the Sri Lankan Ministry of Education National English Syllabus for Secondary Schools and university practicum benchmarks.
              </p>
              <div className="bg-forest-900/60 p-3 rounded-lg border border-forest-800/80 space-y-1.5">
                <div className="flex items-center gap-1.5 text-sage-200 font-semibold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-300" />
                  <span>Confidentiality Notice</span>
                </div>
                <p className="text-[11px] text-sage-300/80 leading-normal">
                  All learner identities are anonymised to protect student privacy in accordance with ethical teacher research standards.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-400">
          <p>
            © {currentYear} {profile.name}. Pre-Service English Language Teaching E-Portfolio.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-sage-400 hover:text-sage-200 transition-colors text-[11px] flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Admin Login</span>
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" /> for reflective English language teaching
            </span>
            <span>•</span>
            <span className="text-sage-400 font-mono text-[11px]">Sri Lanka (SL)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
