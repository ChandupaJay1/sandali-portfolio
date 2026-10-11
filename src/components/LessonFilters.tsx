import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

interface LessonFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedGrade: string;
  onGradeChange: (grade: string) => void;
  selectedSkill: string;
  onSkillChange: (skill: string) => void;
  selectedFocus: string;
  onFocusChange: (focus: string) => void;
  selectedActivity: string;
  onActivityChange: (activity: string) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
}

export const LessonFilters: React.FC<LessonFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedGrade,
  onGradeChange,
  selectedSkill,
  onSkillChange,
  selectedFocus,
  onFocusChange,
  selectedActivity,
  onActivityChange,
  onReset,
  totalCount,
  filteredCount,
}) => {
  const grades = ['All Grades', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];
  const skills = ['All Skills', 'Speaking', 'Reading', 'Writing', 'Integrated Skills'];
  const focuses = ['All Focus Areas', 'Communicative Task', 'Vocabulary', 'Grammar'];
  const activities = ['All Activities', 'Task-Based', 'Jigsaw Reading', 'Language Game', 'Process Writing'];

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedGrade !== 'All Grades' ||
    selectedSkill !== 'All Skills' ||
    selectedFocus !== 'All Focus Areas' ||
    selectedActivity !== 'All Activities';

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 border border-forest-200/80 shadow-card mb-8">
      {/* Top search & reset bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-5 border-b border-ivory-200">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-forest-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search lesson titles, competencies, grammar focus, or outcomes..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-forest-200 bg-ivory-50/60 text-sm text-charcoal-800 placeholder-charcoal-400 focus:outline-hidden focus:ring-2 focus:ring-forest-800 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Count & Reset */}
        <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
          <span className="text-xs text-charcoal-500 font-medium">
            Showing <strong className="text-forest-900 font-bold">{filteredCount}</strong> of {totalCount} Lesson Plans
          </span>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta-600 hover:text-terracotta-700 bg-terracotta-50 hover:bg-terracotta-100/70 px-3 py-1.5 rounded-lg border border-terracotta-200/60 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Chips Matrix */}
      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Grade filter */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Grade / Class Level
          </label>
          <select
            value={selectedGrade}
            onChange={(e) => onGradeChange(e.target.value)}
            className="w-full p-2.5 text-xs rounded-lg border border-forest-200 bg-ivory-50/50 text-charcoal-800 focus:outline-hidden focus:ring-1 focus:ring-forest-700 font-medium"
          >
            {grades.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* Language Skill */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Primary Language Skill
          </label>
          <select
            value={selectedSkill}
            onChange={(e) => onSkillChange(e.target.value)}
            className="w-full p-2.5 text-xs rounded-lg border border-forest-200 bg-ivory-50/50 text-charcoal-800 focus:outline-hidden focus:ring-1 focus:ring-forest-700 font-medium"
          >
            {skills.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Language Focus */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Pedagogical Focus
          </label>
          <select
            value={selectedFocus}
            onChange={(e) => onFocusChange(e.target.value)}
            className="w-full p-2.5 text-xs rounded-lg border border-forest-200 bg-ivory-50/50 text-charcoal-800 focus:outline-hidden focus:ring-1 focus:ring-forest-700 font-medium"
          >
            {focuses.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Activity Type */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Communicative Activity Type
          </label>
          <select
            value={selectedActivity}
            onChange={(e) => onActivityChange(e.target.value)}
            className="w-full p-2.5 text-xs rounded-lg border border-forest-200 bg-ivory-50/50 text-charcoal-800 focus:outline-hidden focus:ring-1 focus:ring-forest-700 font-medium"
          >
            {activities.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
