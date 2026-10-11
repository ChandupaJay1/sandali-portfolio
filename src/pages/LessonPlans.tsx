import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EditableNotice } from '../components/EditableNotice';
import { LessonCard } from '../components/LessonCard';
import { LessonFilters } from '../components/LessonFilters';
import { usePortfolio } from '../context/PortfolioContext';
import { SearchX, RotateCcw } from 'lucide-react';

export const LessonPlans: React.FC = () => {
  const { lessonPlans } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('All Grades');
  const [selectedSkill, setSelectedSkill] = useState('All Skills');
  const [selectedFocus, setSelectedFocus] = useState('All Focus Areas');
  const [selectedActivity, setSelectedActivity] = useState('All Activities');

  const filteredLessons = useMemo(() => {
    return lessonPlans.filter((lesson) => {
      // Search query matching title, rationale, competencies, outcomes
      const matchesSearch =
        searchQuery === '' ||
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.rationale.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.intendedLearningOutcomes.some(o => o.toLowerCase().includes(searchQuery.toLowerCase())) ||
        lesson.competencies.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        lesson.languageFocus.toLowerCase().includes(searchQuery.toLowerCase());

      // Grade match
      const matchesGrade =
        selectedGrade === 'All Grades' || lesson.grade === selectedGrade;

      // Skill match
      const matchesSkill =
        selectedSkill === 'All Skills' || lesson.languageSkill === selectedSkill;

      // Focus match
      const matchesFocus =
        selectedFocus === 'All Focus Areas' || lesson.languageFocus === selectedFocus;

      // Activity match
      const matchesActivity =
        selectedActivity === 'All Activities' || lesson.activityType === selectedActivity;

      return matchesSearch && matchesGrade && matchesSkill && matchesFocus && matchesActivity;
    });
  }, [searchQuery, selectedGrade, selectedSkill, selectedFocus, selectedActivity]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGrade('All Grades');
    setSelectedSkill('All Skills');
    setSelectedFocus('All Focus Areas');
    setSelectedActivity('All Activities');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 1. Header Section */}
      <div>
        <SectionHeading
          eyebrow="Assessment Criterion 03"
          marks={10}
          title="Lesson Plans & Communicative Activities"
          description="A searchable repository of comprehensive, communicative English language lesson plans tailored to the Sri Lankan National Curriculum (Grades 7–10), featuring detailed stage-by-stage procedures, printable worksheets, and post-lesson reflections."
        />

        <EditableNotice
          sectionName="Lesson Plans Library & Procedural Matrices"
          dataFile="src/data/lessonPlansData.ts"
          details="All lesson plans are stored in typed data structures. You can add new lessons, update procedural steps, attach your own worksheets, or edit learner profiles directly in the data file."
        />
      </div>

      {/* 2. Interactive Filter Bar */}
      <LessonFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedGrade={selectedGrade}
        onGradeChange={setSelectedGrade}
        selectedSkill={selectedSkill}
        onSkillChange={setSelectedSkill}
        selectedFocus={selectedFocus}
        onFocusChange={setSelectedFocus}
        selectedActivity={selectedActivity}
        onActivityChange={setSelectedActivity}
        onReset={handleResetFilters}
        totalCount={lessonPlans.length}
        filteredCount={filteredLessons.length}
      />

      {/* 3. Lesson Plans Grid or Empty State */}
      {filteredLessons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-forest-200/80 shadow-soft max-w-lg mx-auto space-y-4">
          <div className="w-14 h-14 rounded-full bg-forest-50 text-forest-800 mx-auto flex items-center justify-center">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-forest-950">
            No Matching Lesson Plans Found
          </h3>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            No lesson plans match your selected filter criteria. Try clearing some filters or searching with a different keyword.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-800 text-ivory-50 text-xs font-semibold hover:bg-forest-900 transition-colors shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* 4. Curriculum Standards & Assessment Note */}
      <div className="bg-forest-50/70 rounded-2xl p-6 border border-forest-200 text-xs text-charcoal-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-forest-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-sm shrink-0">
            SL
          </div>
          <div>
            <p className="font-bold text-forest-950 text-sm">
              Sri Lankan National English Syllabus Competency Framework
            </p>
            <p className="text-charcoal-600 text-xs">
              Every lesson plan is tagged with official grade competencies, communicative interaction ratios (T-S / S-S / Pairs / Groups), and formative assessment checks.
            </p>
          </div>
        </div>

        <span className="text-forest-900 font-semibold bg-white px-3 py-1.5 rounded-lg border border-forest-200/80 shrink-0">
          Evaluated Practicum Evidence
        </span>
      </div>

    </div>
  );
};
