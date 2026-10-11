import type { AssessmentCriterion } from '../types';

export const assessmentCriteria: AssessmentCriterion[] = [
  {
    id: 'criterion-philosophy',
    number: 1,
    title: 'Teaching Philosophy Statement',
    marks: 10,
    route: '/philosophy',
    description: 'Articulates personal pedagogical beliefs, learner-centred methodologies, communicative language principles, theoretical grounding (Vygotsky, Krashen, CLT), and ethical teacher identity.',
    evidenceItems: [
      'Comprehensive Philosophy Statement with 6 Core Pillars',
      'Direct Mapping of Theory to Practical Classroom Strategies',
      'Inclusion & Mixed-Ability Differentiation Framework',
      'Assessment & Feed-Forward Approach',
      'Authentic APA 7 Academic Reference List'
    ],
    competencies: ['Pedagogical Knowledge', 'Learner-Centred Design', 'Reflective Articulation', 'Theoretical Alignment']
  },
  {
    id: 'criterion-reflections',
    number: 2,
    title: 'Reflective Summary',
    marks: 10,
    route: '/reflections',
    description: 'Evidence-based professional growth documentation across the 10-week internship using Gibbs\' Reflective Cycle, demonstrating how feedback transformed classroom teaching practice.',
    evidenceItems: [
      'Structured 5-Stage Gibbs Reflective Entries',
      '10-Week Professional Evolution Timeline',
      'Analysis of Strengths, Challenges & Breakthroughs',
      'Supervisor Feedback Integration & Action Plans',
      'Direct Cross-Links to Evaluated Lesson Plans'
    ],
    competencies: ['Critical Self-Reflection', 'Adaptive Pedagogy', 'Feedback Responsiveness', 'Continuous Professional Development']
  },
  {
    id: 'criterion-lessons',
    number: 3,
    title: 'Lesson Plans & Teaching Activities',
    marks: 10,
    route: '/lessons',
    description: 'Comprehensive, communicative lesson plans aligned with the Sri Lankan National English Syllabus, featuring detailed procedures, interactive patterns, printable resources, and post-lesson reflections.',
    evidenceItems: [
      'Searchable & Multi-Filterable Lesson Repository',
      'Detailed Stage-by-Stage Procedural Sequences (T-S, S-S, Pairs, Groups)',
      'Embedded Teaching Materials (Worksheets, Flashcards, Slide Decks)',
      'Differentiated Learning Outcomes & Anticipated Solutions',
      'Authentic Post-Lesson Evaluations & Student Reactions'
    ],
    competencies: ['Curriculum Alignment', 'Instructional Scaffolding', 'Communicative Task Design', 'Resource Development']
  },
  {
    id: 'criterion-observations',
    number: 4,
    title: 'Teaching Observation Forms',
    marks: 5,
    route: '/observations',
    description: 'Two official classroom teaching observation forms completed by the Teacher-in-Charge and University Mentor, complete with criteria ratings, supervisor remarks, and reflective follow-up actions.',
    evidenceItems: [
      'Teaching Observation Form 01 (Formative Mid-Term Evaluation)',
      'Teaching Observation Form 02 (Summative Final Placement Evaluation)',
      'Full Official Evaluation Matrix & Category Scores',
      'Observer Commendations & Targeted Recommendations',
      'Documented "Action Taken Afterwards" Closing the Loop'
    ],
    competencies: ['Classroom Execution', 'Supervisor Collaboration', 'Evaluative Openness', 'Remedial Action Planning']
  },
  {
    id: 'criterion-testimonials',
    number: 5,
    title: 'Teaching Testimonials',
    marks: 2,
    route: '/testimonials',
    description: 'Professional commendations and authentic appraisals from the school mentor teacher, university supervising lecturer, and senior English department staff.',
    evidenceItems: [
      'University Internship Supervisor Evaluation Excerpt',
      'School Teacher-in-Charge Professional Endorsement',
      'Senior English Department Colleague Feedback',
      'Documented Professional Dispositions & Work Ethic'
    ],
    competencies: ['Professional Rapport', 'Institutional Contribution', 'Workplace Professionalism']
  }
];

export const TOTAL_PORTFOLIO_MARKS = assessmentCriteria.reduce((sum, item) => sum + item.marks, 0);
