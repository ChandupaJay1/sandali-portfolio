import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Award, ChevronRight, GraduationCap, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { TOTAL_PORTFOLIO_MARKS } from '../data/assessmentCriteria';

interface NavbarProps {
  onOpenAssessmentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessmentModal }) => {
  const { profile } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Philosophy', path: '/philosophy', mark: '10M' },
    { name: 'Reflections', path: '/reflections', mark: '10M' },
    { name: 'Lesson Plans', path: '/lessons', mark: '10M' },
    { name: 'Observations', path: '/observations', mark: '5M' },
    { name: 'Testimonials', path: '/testimonials', mark: '2M' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-soft border-b border-forest-200/50 py-2.5'
            : 'bg-ivory-100/90 backdrop-blur-xs border-b border-forest-100/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            
            {/* Personal Brand Monogram */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus:outline-hidden shrink-0"
              aria-label="Sandali Edirisinghe E-Portfolio Homepage"
            >
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-forest-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-base sm:text-lg shadow-xs border border-forest-900 group-hover:bg-forest-900 transition-colors">
                  SS
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-terracotta-500 rounded-full border-2 border-ivory-100"></div>
              </div>
              <div className="text-left">
                <span className="block font-serif text-base sm:text-lg font-bold text-forest-950 leading-tight group-hover:text-forest-700 transition-colors whitespace-nowrap">
                  {profile.name}
                </span>
                <span className="block text-[10px] font-sans text-charcoal-500 uppercase tracking-wider font-semibold whitespace-nowrap">
                  Pre-Service English Teacher • SL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap ${
                      isActive
                        ? 'text-forest-950 font-bold bg-forest-100/80 shadow-2xs'
                        : 'text-charcoal-700 hover:text-forest-900 hover:bg-forest-50/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action: Assessment Rubric Button & Admin & Mobile Toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onOpenAssessmentModal}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold text-ivory-50 bg-forest-800 hover:bg-forest-900 active:scale-95 rounded-xl transition-all shadow-xs border border-forest-950 whitespace-nowrap cursor-pointer"
                title="View Assessment Rubric and Coursework Evidence"
              >
                <Award className="w-3.5 h-3.5 text-terracotta-400 shrink-0" />
                <span className="hidden md:inline">Assessment Criteria</span>
                <span className="bg-terracotta-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                  {TOTAL_PORTFOLIO_MARKS}M
                </span>
              </button>

              <Link
                to="/admin"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold text-forest-900 bg-ivory-200/90 hover:bg-forest-100 rounded-xl transition-all border border-forest-200/80 whitespace-nowrap"
                title="Manage Portfolio (Admin Portal)"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-forest-800" />
                <span className="hidden xl:inline">Admin</span>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-forest-800 hover:bg-forest-100/60 focus:outline-hidden transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-charcoal-900/40 backdrop-blur-xs">
          <div className="bg-ivory-50 border-b border-forest-200 shadow-xl max-h-[85vh] overflow-y-auto p-5 animate-in slide-in-from-top duration-200">
            <div className="pb-4 mb-4 border-b border-forest-100 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-forest-900">{profile.name}</p>
                <p className="text-xs text-charcoal-500">{profile.role}</p>
              </div>
              <span className="text-xs font-semibold bg-forest-100 text-forest-800 px-2 py-0.5 rounded-full">
                {profile.internshipSchool.split(',')[0]}
              </span>
            </div>

            <nav className="space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-forest-800 text-ivory-50 font-semibold'
                        : 'text-charcoal-800 hover:bg-forest-100/60'
                    }`
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <span>{link.name}</span>
                    {link.mark && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-terracotta-100 text-terracotta-700 font-semibold">
                        {link.mark}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}

              <Link
                to="/admin"
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold bg-forest-50 text-forest-900 border border-forest-200/80 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-forest-800" />
                  <span>Admin Management Portal</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            </nav>

            <div className="mt-5 pt-4 border-t border-forest-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessmentModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-100 text-forest-900 font-semibold text-sm hover:bg-forest-200/70 transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 text-terracotta-600" />
                <span>View All 6 Assessment Criteria ({TOTAL_PORTFOLIO_MARKS} Marks)</span>
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-charcoal-500">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{profile.faculty}, {profile.university}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
