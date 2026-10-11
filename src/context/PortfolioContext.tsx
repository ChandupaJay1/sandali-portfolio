import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  TeacherProfile, 
  LessonPlan, 
  ReflectionEntry, 
  ObservationForm, 
  Testimonial, 
  TeachingPhilosophyPillar, 
  AcademicReference 
} from '../types';

import { teacherProfile as defaultProfile } from '../data/teacherProfile';
import { lessonPlans as defaultLessonPlans } from '../data/lessonPlansData';
import { reflectionsData as defaultReflections } from '../data/reflectionsData';
import { observationForms as defaultObservations } from '../data/observationFormsData';
import { testimonials as defaultTestimonials } from '../data/testimonialsData';
import { philosophyPillars as defaultPillars, academicReferences as defaultRefs } from '../data/philosophyData';

interface PortfolioContextType {
  profile: TeacherProfile;
  lessonPlans: LessonPlan[];
  reflections: ReflectionEntry[];
  observationForms: ObservationForm[];
  testimonials: Testimonial[];
  philosophyPillars: TeachingPhilosophyPillar[];
  academicReferences: AcademicReference[];
  
  // Profile
  updateProfile: (updated: TeacherProfile) => void;

  // Lesson Plans
  addLessonPlan: (lesson: LessonPlan) => void;
  updateLessonPlan: (id: string, updated: LessonPlan) => void;
  deleteLessonPlan: (id: string) => void;

  // Reflections
  addReflection: (refl: ReflectionEntry) => void;
  updateReflection: (id: string, updated: ReflectionEntry) => void;
  deleteReflection: (id: string) => void;

  // Observation Forms
  updateObservationForm: (id: string, updated: ObservationForm) => void;

  // Testimonials
  addTestimonial: (test: Testimonial) => void;
  updateTestimonial: (id: string, updated: Testimonial) => void;
  deleteTestimonial: (id: string) => void;

  // Philosophy
  updatePhilosophyPillar: (id: string, updated: TeachingPhilosophyPillar) => void;
  addAcademicReference: (ref: AcademicReference) => void;
  deleteAcademicReference: (id: string) => void;

  // Backup & Reset
  exportPortfolioData: () => string;
  importPortfolioData: (jsonData: string) => boolean;
  resetToDefaults: () => void;
}

const STORAGE_KEYS = {
  PROFILE: 'sandali_portfolio_profile',
  LESSONS: 'sandali_portfolio_lessons',
  REFLECTIONS: 'sandali_portfolio_reflections',
  OBSERVATIONS: 'sandali_portfolio_observations',
  TESTIMONIALS: 'sandali_portfolio_testimonials',
  PILLARS: 'sandali_portfolio_pillars',
  REFERENCES: 'sandali_portfolio_references',
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load state with fallback to defaults
  const [profile, setProfile] = useState<TeacherProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Sandali Samarakoon' || !parsed.email?.includes('sandatharu')) {
          return defaultProfile;
        }
        return parsed;
      }
      return defaultProfile;
    } catch {
      return defaultProfile;
    }
  });

  const [lessonPlans, setLessonPlans] = useState<LessonPlan[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LESSONS);
      return saved ? JSON.parse(saved) : defaultLessonPlans;
    } catch {
      return defaultLessonPlans;
    }
  });

  const [reflections, setReflections] = useState<ReflectionEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REFLECTIONS);
      return saved ? JSON.parse(saved) : defaultReflections;
    } catch {
      return defaultReflections;
    }
  });

  const [observationForms, setObservationForms] = useState<ObservationForm[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.OBSERVATIONS);
      return saved ? JSON.parse(saved) : defaultObservations;
    } catch {
      return defaultObservations;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return saved ? JSON.parse(saved) : defaultTestimonials;
    } catch {
      return defaultTestimonials;
    }
  });

  const [philosophyPillars, setPhilosophyPillars] = useState<TeachingPhilosophyPillar[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PILLARS);
      return saved ? JSON.parse(saved) : defaultPillars;
    } catch {
      return defaultPillars;
    }
  });

  const [academicReferences, setAcademicReferences] = useState<AcademicReference[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REFERENCES);
      return saved ? JSON.parse(saved) : defaultRefs;
    } catch {
      return defaultRefs;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LESSONS, JSON.stringify(lessonPlans));
  }, [lessonPlans]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(reflections));
  }, [reflections]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.OBSERVATIONS, JSON.stringify(observationForms));
  }, [observationForms]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PILLARS, JSON.stringify(philosophyPillars));
  }, [philosophyPillars]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REFERENCES, JSON.stringify(academicReferences));
  }, [academicReferences]);

  // Actions
  const updateProfile = (updated: TeacherProfile) => {
    setProfile(updated);
  };

  const addLessonPlan = (lesson: LessonPlan) => {
    setLessonPlans(prev => [lesson, ...prev]);
  };

  const updateLessonPlan = (id: string, updated: LessonPlan) => {
    setLessonPlans(prev => prev.map(l => l.id === id ? updated : l));
  };

  const deleteLessonPlan = (id: string) => {
    setLessonPlans(prev => prev.filter(l => l.id !== id));
  };

  const addReflection = (refl: ReflectionEntry) => {
    setReflections(prev => [refl, ...prev]);
  };

  const updateReflection = (id: string, updated: ReflectionEntry) => {
    setReflections(prev => prev.map(r => r.id === id ? updated : r));
  };

  const deleteReflection = (id: string) => {
    setReflections(prev => prev.filter(r => r.id !== id));
  };

  const updateObservationForm = (id: string, updated: ObservationForm) => {
    setObservationForms(prev => prev.map(o => o.id === id ? updated : o));
  };

  const addTestimonial = (test: Testimonial) => {
    setTestimonials(prev => [test, ...prev]);
  };

  const updateTestimonial = (id: string, updated: Testimonial) => {
    setTestimonials(prev => prev.map(t => t.id === id ? updated : t));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const updatePhilosophyPillar = (id: string, updated: TeachingPhilosophyPillar) => {
    setPhilosophyPillars(prev => prev.map(p => p.id === id ? updated : p));
  };

  const addAcademicReference = (ref: AcademicReference) => {
    setAcademicReferences(prev => [ref, ...prev]);
  };

  const deleteAcademicReference = (id: string) => {
    setAcademicReferences(prev => prev.filter(r => r.id !== id));
  };

  const exportPortfolioData = () => {
    const data = {
      profile,
      lessonPlans,
      reflections,
      observationForms,
      testimonials,
      philosophyPillars,
      academicReferences,
      exportedAt: new Date().toISOString(),
      version: '1.0.0'
    };
    return JSON.stringify(data, null, 2);
  };

  const importPortfolioData = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed.profile) setProfile(parsed.profile);
      if (parsed.lessonPlans) setLessonPlans(parsed.lessonPlans);
      if (parsed.reflections) setReflections(parsed.reflections);
      if (parsed.observationForms) setObservationForms(parsed.observationForms);
      if (parsed.testimonials) setTestimonials(parsed.testimonials);
      if (parsed.philosophyPillars) setPhilosophyPillars(parsed.philosophyPillars);
      if (parsed.academicReferences) setAcademicReferences(parsed.academicReferences);
      return true;
    } catch {
      return false;
    }
  };

  const resetToDefaults = () => {
    setProfile(defaultProfile);
    setLessonPlans(defaultLessonPlans);
    setReflections(defaultReflections);
    setObservationForms(defaultObservations);
    setTestimonials(defaultTestimonials);
    setPhilosophyPillars(defaultPillars);
    setAcademicReferences(defaultRefs);
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        lessonPlans,
        reflections,
        observationForms,
        testimonials,
        philosophyPillars,
        academicReferences,
        updateProfile,
        addLessonPlan,
        updateLessonPlan,
        deleteLessonPlan,
        addReflection,
        updateReflection,
        deleteReflection,
        updateObservationForm,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        updatePhilosophyPillar,
        addAcademicReference,
        deleteAcademicReference,
        exportPortfolioData,
        importPortfolioData,
        resetToDefaults
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
