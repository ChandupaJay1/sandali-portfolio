export interface AssessmentCriterion {
  id: string;
  number: number;
  title: string;
  marks: number;
  route: string;
  description: string;
  evidenceItems: string[];
  competencies: string[];
}

export type InteractionPattern = 'T-S' | 'S-S' | 'Pair Work' | 'Group Work' | 'Individual' | 'Whole Class';

export interface LessonStage {
  stage: string; // e.g. "Warmer", "Lead-in", "Pre-task / Presentation", "While-task / Practice", "Post-task / Production", "Consolidation & Wrap-up"
  timeMinutes: string;
  teacherActivity: string;
  learnerActivity: string;
  interactionPattern: InteractionPattern;
  resources: string;
  assessment: string;
  feedback: string;
}

export interface LessonResource {
  id: string;
  title: string;
  type: 'worksheet' | 'slides' | 'flashcards' | 'activity' | 'video' | 'game' | 'guide';
  description: string;
  format: string; // e.g., "PDF 2 Pages", "PowerPoint 12 Slides", "Printable Cards"
  downloadUrl?: string;
  contentPreview?: string;
  previewItems?: string[];
}

export interface LessonReflection {
  whatWorked: string;
  challenges: string;
  learnerResponses: string;
  feedbackReceived: string;
  changesPlanned: string;
}

export interface LessonPlan {
  id: string;
  title: string;
  grade: string;
  learnerLevel: string; // e.g. "Beginner", "Pre-Intermediate", "Intermediate"
  languageSkill: 'Reading' | 'Writing' | 'Listening' | 'Speaking' | 'Integrated Skills';
  languageFocus: 'Grammar' | 'Vocabulary' | 'Pronunciation' | 'Communicative Task' | 'Literature & Poetry';
  activityType: 'Role-Play' | 'Information Gap' | 'Jigsaw Reading' | 'Task-Based' | 'Language Game' | 'Process Writing';
  date: string;
  duration: string;
  numberOfLearners: number;
  learnerProfile: string;
  rationale: string;
  competencies: string[];
  competencyLevels: string[];
  intendedLearningOutcomes: string[];
  assumptions: string[];
  anticipatedProblems: { problem: string; solution: string }[];
  personalTeachingAims: string[];
  procedure: LessonStage[];
  resources: LessonResource[];
  reflection: LessonReflection;
  featured?: boolean;
}

export interface ReflectionEntry {
  id: string;
  weekNumber: number;
  date: string;
  title: string;
  grade: string;
  competency: string; // e.g. "Classroom Management", "Communicative Task Design", "Mixed-Ability Scaffolding"
  context: string;
  gibbs: {
    situation: string;
    whatWentWell: string[];
    whatDidNot: string[];
    whyOutcomeOccurred: string;
    whatLearned: string;
    futureActionPlan: string;
  };
  linkedLessonId?: string;
  linkedObservationId?: string;
  tags: string[];
}

export interface ObservationCriterion {
  category: string;
  criteria: string;
  rating: 'Outstanding' | 'Very Good' | 'Satisfactory' | 'Needs Improvement';
  comments: string;
}

export interface ObservationForm {
  id: string;
  formNumber: '01' | '02';
  title: string;
  date: string;
  gradeClass: string;
  lessonTopic: string;
  duration: string;
  schoolName: string;
  observerName: string;
  observerDesignation: string;
  contextDescription: string;
  scoresSummary: {
    planning: string;
    execution: string;
    interaction: string;
    assessment: string;
    overall: string;
  };
  criteriaBreakdown: ObservationCriterion[];
  strengthsCommendations: string[];
  recommendations: string[];
  actionTakenAfterwards: string;
  officialDocumentName: string;
  isAuthenticPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  relationship: string;
  date: string;
  quote: string;
  initials: string;
  tag: 'Supervisor' | 'Mentor' | 'Teacher-in-Charge' | 'Peer';
  verified: boolean;
}

export interface TeachingPhilosophyPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  theoryLink: string;
  classroomApplication: string;
  keyCitations: string[];
}

export interface AcademicReference {
  id: string;
  citation: string;
  theme: string;
  annotation: string;
}

export interface AcademicResearchItem {
  title: string;
  institution: string;
  description: string;
  link?: string;
  conference?: string;
}

export interface TeacherProfile {
  name: string;
  role: string;
  title: string;
  university: string;
  faculty: string;
  degree: string;
  internshipSchool: string;
  internshipDuration: string;
  location: string;
  email: string;
  linkedin: string;
  phone?: string;
  github?: string;
  address?: string;
  secondDegree?: string;
  personalHeadline: string;
  statement: string;
  overviewBio: string;
  philosophySummary: string;
  keyStats: { label: string; value: string; detail: string }[];
  competencyPillars: { title: string; desc: string; icon: string }[];
  milestones: { year: string; title: string; subtitle: string; description: string }[];
  portraitImage?: string;
  classroomImage?: string;
  academicResearches?: AcademicResearchItem[];
  professionalQualifications?: { role: string; institution: string; period: string }[];
  trainings?: { title: string; institution: string; duration: string }[];
  referencesList?: { name: string; title: string; institution: string; phone: string }[];
}


