import type { ObservationForm } from '../types';

export const observationForms: ObservationForm[] = [
  {
    id: 'obs-01',
    formNumber: '01',
    title: 'Teaching Observation Form 01 — Mid-Term Formative Practicum Evaluation',
    date: '2026-03-14',
    gradeClass: 'Grade 9 - Class C',
    lessonTopic: 'Negotiating Community Solutions: Environmental Care (Speaking & Fluency)',
    duration: '45 Minutes (Period 3: 09:30 - 10:15 AM)',
    schoolName: 'Visakha Vidyalaya (Secondary Section), Colombo 04',
    observerName: 'Mrs. Priyanthi Gunasekara',
    observerDesignation: 'Senior Teacher-in-Charge of English & Master Teacher Mentor',
    contextDescription: 'Formative mid-placement observation assessing lesson planning completeness, communicative classroom management, learner engagement strategies, and initial pedagogical staging in a large secondary classroom (36 students).',
    scoresSummary: {
      planning: '9.0 / 10',
      execution: '8.5 / 10',
      interaction: '8.5 / 10',
      assessment: '8.0 / 10',
      overall: '34.0 / 40 (Grade: A- / Distinction Range)'
    },
    criteriaBreakdown: [
      {
        category: 'I. Lesson Planning & Preparation',
        criteria: 'Clear statement of communicative competencies, syllabus alignment, thorough anticipation of learner difficulties, and well-organized procedural staging.',
        rating: 'Very Good',
        comments: 'Lesson plan is meticulously designed with clear time breakdowns. Communicative goals are well aligned with the National Syllabus. Clear anticipation of language barriers.'
      },
      {
        category: 'II. Classroom Management & Learning Atmosphere',
        criteria: 'Effective seating arrangement, rapport building, lowering learner anxiety, and democratic group organization.',
        rating: 'Outstanding',
        comments: 'Exceptional warmth and rapport. Students clearly feel comfortable with Ms. Edirisinghe. The "Talking Tokens" technique effectively distributed speaking participation across all groups.'
      },
      {
        category: 'III. Instructional Clarity & Teaching Methodology',
        criteria: 'Clarity of task instructions, appropriate staging, concept and instruction checking questions (ICQs), and balanced Teacher Talk Time (TTT).',
        rating: 'Satisfactory',
        comments: 'Teacher talk was somewhat high during the initial presentation phase (over-explaining instructions). Remember to ask ICQs before distributing materials rather than asking "Do you understand?". Whiteboard layout needs better organization.'
      },
      {
        category: 'IV. Student Engagement & Task Scaffolding',
        criteria: 'Active student participation, meaningful use of English, support for lower-proficiency learners, and interactive pair/group work.',
        rating: 'Very Good',
        comments: 'Excellent peer engagement. Group problem-solving was lively and conducted predominantly in English. The bilingual Lifeboat cards provided commendable scaffolding for quieter students.'
      },
      {
        category: 'V. Assessment & Constructive Feedback',
        criteria: 'Ongoing formative monitoring, discreet error notation, delayed correction routines, and encouraging praise.',
        rating: 'Very Good',
        comments: 'Active monitoring with a clipboard was very professional. Delayed error correction at the end of the lesson addressed key syntactic slips without intimidating the speakers.'
      }
    ],
    strengthsCommendations: [
      'Outstanding teacher presence, warmth, and supportive classroom climate that encouraged hesitant learners to participate.',
      'Highly innovative communicative activity design ("Talking Tokens") that successfully motivated balanced turn-taking.',
      'Strong alignment with communicative language teaching principles rather than teacher-centred lecturing.'
    ],
    recommendations: [
      'Reduce verbal explanation time for instructions: use short, physical demonstrations and structured ICQs.',
      'Organize the whiteboard systematically: designate fixed zones for vocabulary, grammar formulas, and student output.',
      'Allow at least 3-5 seconds of silent wait-time after asking open-ended questions before providing hints.'
    ],
    actionTakenAfterwards: 'Directly in response to Mrs. Gunasekara’s recommendations, I immediately revised my instruction-giving protocol by scripting ICQs for every activity in advance. I established a three-column whiteboard layout (Vocabulary | Grammar Architecture | Class Ideas) that I maintained throughout the remainder of my practicum. In our subsequent weekly reflection (Reflection Week 7), I tracked my wait-time practices and reduced my Teacher Talk Time to under 25%.',
    officialDocumentName: 'Observation_Form_01_MidTerm_Evaluator_Gunasekara.pdf',
    isAuthenticPlaceholder: true
  },
  {
    id: 'obs-02',
    formNumber: '02',
    title: 'Teaching Observation Form 02 — Final Summative Practicum Evaluation',
    date: '2026-04-03',
    gradeClass: 'Grade 7 - Class A',
    lessonTopic: 'Vivid Food Reviews: Flavours of Sri Lankan Street Food (Process Writing)',
    duration: '45 Minutes (Period 2: 08:45 - 09:30 AM)',
    schoolName: 'Visakha Vidyalaya (Secondary Section), Colombo 04',
    observerName: 'Dr. (Mrs.) K. M. Wickramasinghe & Mrs. Priyanthi Gunasekara',
    observerDesignation: 'Senior Lecturer in ELT, University of Colombo & School Teacher-in-Charge',
    contextDescription: 'Final summative evaluation of teaching competence, pedagogical maturity, adaptive scaffolding, formative Assessment for Learning (AfL), and overall professional impact across the secondary school community.',
    scoresSummary: {
      planning: '10.0 / 10',
      execution: '9.8 / 10',
      interaction: '9.8 / 10',
      assessment: '9.9 / 10',
      overall: '39.5 / 40 (Grade: A+ / High Distinction)'
    },
    criteriaBreakdown: [
      {
        category: 'I. Lesson Planning & Pedagogical Architecture',
        criteria: 'Curriculum alignment, comprehensive differentiation ladders, creative resource synthesis, and structured process writing methodology.',
        rating: 'Outstanding',
        comments: 'Exemplary lesson plan. The integration of sensory stimuli (audio sizzle, visual street scenes) with the National Syllabus writing competencies demonstrates creative mastery of ELT design.'
      },
      {
        category: 'II. Classroom Management & Student Agency',
        criteria: 'Seamless transitions, high student autonomy, effective group dynamics, and purposeful learning routines.',
        rating: 'Outstanding',
        comments: 'Flawless pacing. The classroom operates with joyful, purposeful discipline. The playful "Banned Words Graveyard" produced infectious enthusiasm while maintaining strict instructional focus.'
      },
      {
        category: 'III. Instructional Delivery & Staging',
        criteria: 'Succinct instructions, effective ICQs, dynamic non-verbal cues, exemplary board organization, and optimal TTT / STT ratio.',
        rating: 'Outstanding',
        comments: 'Marked transformation from Observation 01. Instructions were crisp, visual, and checked instantly with precise ICQs. Whiteboard organization was pristine and served as an anchor for student writing.'
      },
      {
        category: 'IV. Differentiated Scaffolding & Inclusion',
        criteria: 'Support for diverse learner needs, tiered materials, peer mentoring, and active empowerment of every student.',
        rating: 'Outstanding',
        comments: 'Every single child, regardless of initial proficiency, was writing with confidence. The tiered adjective banks provided safety for lower-readiness writers while extension challenges kept early writers engaged.'
      },
      {
        category: 'V. Formative Assessment & Feed-Forward Culture',
        criteria: 'Evidence-based Assessment for Learning, transparent peer-review rubrics ("Two Stars and a Wish"), and meaningful exit feedback.',
        rating: 'Outstanding',
        comments: 'The "Two Stars and a Wish" peer review protocol was a masterclass in student-centred formative evaluation. Students evaluated peer work with genuine analytical discernment.'
      }
    ],
    strengthsCommendations: [
      'Remarkable professional growth and responsiveness to previous feedback: Teacher Talk Time was minimal, instructions were razor-sharp, and board work was exemplary.',
      'Magnificent cultural contextualization: grounding abstract sensory adjectives in beloved Sri Lankan culinary experiences sparked deep intrinsic motivation.',
      'Mastery of formative Assessment for Learning (AfL) techniques that elevated 37 junior learners into capable peer critics.'
    ],
    recommendations: [
      'Prepare to disseminate these communicative writing task designs to the wider English faculty as model pedagogical units.',
      'Continue developing digital multimodal integration for language portfolios in future school placements.'
    ],
    actionTakenAfterwards: 'Following this high-distinction evaluation, I packaged the "Sensory Food Review" writing pack into a reproducible department resource booklet and conducted an informal 20-minute sharing circle with the junior English department teachers. I also selected these student reviews for the official school English Day exhibition bulletin board.',
    officialDocumentName: 'Observation_Form_02_FinalSummative_Wickramasinghe_Gunasekara.pdf',
    isAuthenticPlaceholder: true
  }
];
