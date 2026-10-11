import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Calendar, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import type { LessonPlan } from '../types';

interface LessonCardProps {
  lesson: LessonPlan;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <article className="paper-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group hover:-translate-y-1 transition-all duration-300 border border-forest-200/80 bg-white">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="badge-tag bg-forest-800 text-ivory-100 font-semibold">
              {lesson.grade}
            </span>
            <span className="badge-tag bg-forest-50 text-forest-800 border border-forest-200/70">
              {lesson.languageSkill}
            </span>
          </div>

          <span className="badge-tag bg-terracotta-50 text-terracotta-700 border border-terracotta-200/60 font-medium">
            {lesson.languageFocus}
          </span>
        </div>

        {/* Lesson Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-3 group-hover:text-forest-700 transition-colors leading-snug">
          <Link to={`/lessons/${lesson.id}`}>
            {lesson.title}
          </Link>
        </h3>

        {/* Metadata Strip */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-charcoal-500 mb-4 pb-3 border-b border-ivory-200">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-forest-700" />
            <span>{lesson.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-forest-700" />
            <span>{lesson.numberOfLearners} Students</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-forest-700" />
            <span>{lesson.date}</span>
          </div>
        </div>

        {/* Pedagogical Rationale & Objectives */}
        <div className="space-y-3 mb-5">
          <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
            {lesson.rationale}
          </p>

          <div className="bg-ivory-100/70 rounded-xl p-3 border border-forest-100/80 space-y-1.5">
            <div className="text-[11px] font-semibold text-forest-900 uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-600" />
              <span>Key Intended Outcome:</span>
            </div>
            <p className="text-xs text-charcoal-700 line-clamp-2 leading-normal">
              {lesson.intendedLearningOutcomes[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-forest-100/70 flex items-center justify-between gap-3 mt-2">
        <div className="flex items-center gap-1.5 text-[11px] text-charcoal-500">
          <Layers className="w-3.5 h-3.5 text-forest-600" />
          <span>{lesson.procedure.length} Stages • {lesson.resources.length} Resources</span>
        </div>

        <Link
          to={`/lessons/${lesson.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-900 group-hover:text-terracotta-600 transition-colors"
        >
          <span>View Full Plan</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
