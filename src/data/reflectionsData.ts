import type { ReflectionEntry } from '../types';

export const reflectionsData: ReflectionEntry[] = [
  {
    id: 'refl-w1-classroom-dynamics',
    weekNumber: 1,
    date: '2026-02-06',
    title: 'Navigating Affective Filters & Establishing Communicative Rapport',
    grade: 'Grade 8 & 9',
    competency: 'Classroom Management & Rapport',
    context: 'First week of full-time internship placement at Visakha Vidyalaya, Colombo. Encountering 38+ students per classroom, observing widespread reluctance to speak in English due to apprehension over making grammatical mistakes.',
    gibbs: {
      situation: 'During my introductory lesson, I attempted to conduct an informal icebreaker where students stood up to share their hobbies in English. Instead of eager participation, a tense silence enveloped the room. Several students looked down at their desks, and two students whispered to each other in Sinhala: "What if Miss laughs at my grammar?"',
      whatWentWell: [
        'I immediately recognised the high affective filter and did not force individual students into spotlight vulnerability.',
        'Switched spontaneously to a non-verbal "Stand Up If You Love Cricket" game, which diffused the collective tension.',
        'Learners began smiling and laughing once physical movement was introduced.'
      ],
      whatDidNot: [
        'My initial expectations regarding spontaneous oral proficiency were calibrated too high for an unprimed first meeting.',
        'I spoke too rapidly in the first 10 minutes (Teacher Talk Time exceeded 55%).',
        'Did not provide visual or written sentence starters before requesting oral sharing.'
      ],
      whyOutcomeOccurred: 'In accordance with Krashen\'s (1982) Affective Filter Hypothesis, anxiety and fear of negative evaluation among peers create a formidable psychological barrier to second language production. Students had previously experienced traditional grammar-translation methods where errors were routinely penalised in red ink. Expecting them to take spontaneous oral risks with a new intern teacher without adequate scaffolding was unrealistic.',
      whatLearned: 'Psychological safety is the prerequisite for all communicative language acquisition. Verbal participation cannot be mandated through teacher authority; it must be scaffolded through predictable routines, collaborative safety nets, and low-stakes physical interactions.',
      futureActionPlan: 'From Week 2 onward, I will never demand solo public speaking without prior pair rehearsal ("Think-Pair-Share"). I will create permanent bilingual "Lifeboat Sentence Starter Cards" for every desk and establish a classroom charter celebrating communicative errors as proof of learning.'
    },
    linkedLessonId: 'lp-01-grade9-speaking',
    tags: ['Affective Filter', 'Rapport', 'L2 Anxiety', 'Krashen', 'Scaffolding']
  },
  {
    id: 'refl-w3-instruction-giving',
    weekNumber: 3,
    date: '2026-02-20',
    title: 'The Art of Instruction-Giving: From Verbal Monologue to Visual Staging (ICQs)',
    grade: 'Grade 9',
    competency: 'Instructional Clarity & Staging',
    context: 'Transitioning into complex group communicative tasks. Observing that lengthy spoken teacher instructions lead to confusion, off-task chatter, and reliance on L1 translation.',
    gibbs: {
      situation: 'In a group information-gap task on world festivals, I delivered a 4-minute verbal explanation detailing the steps: forming groups of four, selecting a scribe, exchanging information sheets, and compiling a comparison table. When I announced "You may start!", half the class sat motionless while several groups began arguing in Sinhala about who was supposed to write.',
      whatWentWell: [
        'The task materials themselves were visually attractive and culturally engaging.',
        'When I personally visited two groups to clarify the instructions, they immediately got to work successfully.'
      ],
      whatDidNot: [
        'I delivered four distinct sequential instructions simultaneously before distributing the materials.',
        'I failed to use Instruction Checking Questions (ICQs), mistakenly asking the useless question: "Do you all understand?" to which students invariably nod politely.',
        'Distributing worksheets while still talking caused students to read rather than listen to my voice.'
      ],
      whyOutcomeOccurred: 'Cognitive overload occurred because second-language learners were attempting to decode complex spoken English syntax while simultaneously anticipating the mechanical demands of the task. As Harmer (2015) stresses, instructions must be broken into micro-chunks, modelled physically, and checked with specific conceptual questions before materials are distributed.',
      whatLearned: 'Asking "Do you understand?" is a pedagogical trap that confirms compliance, not comprehension. Effective instruction requires a strict sequence: 1) Secure total silence, 2) Model the task with a student volunteer, 3) Ask ICQs ("Will you write or speak first?", "How many minutes do you have?"), 4) Distribute resources last.',
      futureActionPlan: 'I implemented visual "Step 1 - Step 2 - Step 3" icons on the corner of the whiteboard for every single activity. I scripted my ICQs in advance within my formal lesson plan templates.'
    },
    linkedObservationId: 'obs-01',
    tags: ['Instruction Giving', 'ICQs', 'Classroom Management', 'Cognitive Load', 'Harmer']
  },
  {
    id: 'refl-w5-differentiation',
    weekNumber: 5,
    date: '2026-03-06',
    title: 'Conquering the Mixed-Ability Dilemma: Tiered Scaffolding in Action',
    grade: 'Grade 8',
    competency: 'Differentiation & Mixed-Ability Scaffolding',
    context: 'Mid-term reading comprehension unit on historical mysteries. Confronting a stark bimodal distribution in English literacy: 8 students read fluently, while 12 students struggle with basic sentence syntax.',
    gibbs: {
      situation: 'During a uniform reading comprehension task, the advanced group finished within 6 minutes and began fidgeting, while the struggling group had barely deciphered the first two sentences and looked visibly demoralised. One struggling student put her head on her desk in resignation.',
      whatWentWell: [
        'I quickly paired two advanced students with two struggling peers to provide supportive peer coaching.',
        'The topic itself (Sigiriya archaeological mystery) generated intense curiosity across all proficiency tiers.'
      ],
      whatDidNot: [
        'Providing an identical reading sheet to all 38 students ignored the profound reality of differential ZPDs.',
        'Early finishers became a classroom management distraction while waiting for the rest of the class.'
      ],
      whyOutcomeOccurred: 'Designing for the "average student" is a pedagogical myth that underserves both ends of the learning spectrum (Tomlinson, 2014). Without differentiated tiers, high-proficiency students experience boredom, while low-proficiency students suffer cognitive burnout and learned helplessness.',
      whatLearned: 'True equity requires tiered task design. All students can explore the same compelling thematic content, but the linguistic input and expected output must be scaffolded into three distinct access levels (Foundational with graphic organisers; Core with sentence frames; Extension with open-ended synthesis).',
      futureActionPlan: 'I introduced the "Three-Tier Gold, Silver, Bronze" task system and the Jigsaw reading technique (Lesson Plan 02), ensuring every student has an essential, non-redundant role to play regardless of starting proficiency.'
    },
    linkedLessonId: 'lp-02-grade8-reading',
    tags: ['Differentiation', 'Tomlinson', 'ZPD', 'Mixed-Ability', 'Jigsaw Reading']
  },
  {
    id: 'refl-w7-supervisor-feedback',
    weekNumber: 7,
    date: '2026-03-20',
    title: 'Transforming Through Formal Feedback: From TTT Monologue to Student-Centred Agency',
    grade: 'Grade 9',
    competency: 'Feedback Responsiveness & Pedagogical Staging',
    context: 'First Formal Observation (Form 01) conducted by University Supervising Lecturer and School Teacher-in-Charge during a Grade 9 speaking lesson.',
    gibbs: {
      situation: 'In my post-observation conference for Observation Form 01, my supervisor praised my classroom rapport and enthusiasm, but issued an eye-opening critique: "Sandali, you are doing all the cognitive heavy lifting. When a student pauses for three seconds, you jump in and finish their sentence. Your Teacher Talk Time is still hovering at 40%, and your whiteboard layout is chaotic."',
      whatWentWell: [
        'I received "Outstanding" ratings in lesson preparation, positive learning atmosphere, and learner empathy.',
        'I accepted the constructive feedback with professional openness and humility, taking detailed notes.'
      ],
      whatDidNot: [
        'My fear of silence ("wait-time anxiety") led me to over-explain and answer my own questions.',
        'My whiteboard was crowded with miscellaneous notes with no clear visual hierarchy for students to copy.'
      ],
      whyOutcomeOccurred: 'As an eager novice teacher, I unconsciously equated teaching success with constant vocal output. As Row (1986) demonstrated in wait-time research, increasing pause time from 1 second to 3-5 seconds dramatically increases the length and complexity of student responses. Furthermore, without a structured board plan, my visual presentation lacked cognitive organization.',
      whatLearned: 'Silence in a language classroom is not an emptiness to be feared; it is the sacred space where mental translation, linguistic formulation, and communicative courage take place. Embracing the 5-second wait-time rule is an act of deep respect for the learner.',
      futureActionPlan: 'I completely restructured my board into three permanent sections: Target Vocabulary (Left), Core Grammar / Formula (Centre), and Student Ideas / Fluency Board (Right). I trained myself to count silently to five after asking an open-ended question before stepping in.'
    },
    linkedObservationId: 'obs-01',
    tags: ['Supervisor Feedback', 'Wait-Time', 'TTT Reduction', 'Board Work', 'Professional Growth']
  },
  {
    id: 'refl-w9-assessment-for-learning',
    weekNumber: 9,
    date: '2026-04-03',
    title: 'Harnessing Assessment for Learning (AfL): Exit Tickets & Feed-Forward Culture',
    grade: 'Grade 7 & 10',
    competency: 'Formative Assessment & Feed-Forward',
    context: 'Final weeks of internship placement. Transitioning from teacher-dominated summative correction toward continuous formative assessment routines (Observation Form 02).',
    gibbs: {
      situation: 'In our Grade 7 writing lesson on street food reviews, I introduced the "Two Stars and a Wish" peer assessment protocol and the "Banned Words Graveyard". When the Teacher-in-Charge arrived for Observation Form 02, she observed students actively examining each other\'s written drafts with highlighters, giving targeted peer feedback on sensory adjectives without any teacher intervention.',
      whatWentWell: [
        'Achieved "Outstanding" across all 5 official evaluation categories in Observation Form 02.',
        'Students engaged in mature peer dialogue, celebrating evocative phrases ("crispy", "aromatic") and suggesting specific vocabulary enhancements.',
        'The exit tickets provided immediate diagnostic data showing that 95% of students had internalized the lesson outcomes.'
      ],
      whatDidNot: [
        'Timing ran tight during the final celebratory sharing stage, leaving only 3 minutes for student oral readings.'
      ],
      whyOutcomeOccurred: 'When assessment criteria are made completely transparent and shared in student-friendly rubrics (Black & Wiliam, 1998), learners transition from passive receivers of marks into active evaluators of quality. The playful "Banned Words" constraint gave them a concrete, gamified standard against which to evaluate their own writing.',
      whatLearned: 'Formative assessment is not an additional burden added to a lesson; it is the engine that drives student motivation and autonomous self-regulation. When students understand the rubric, they become their own best teachers.',
      futureActionPlan: 'Integrate student co-constructed rubrics into my upcoming final university dissertation project on formative writing practices in Sri Lankan secondary English classrooms.'
    },
    linkedLessonId: 'lp-04-grade7-writing',
    linkedObservationId: 'obs-02',
    tags: ['Assessment for Learning', 'AfL', 'Peer Review', 'Black & Wiliam', 'Summative Observation']
  }
];

export const reflectiveSummaryIntro = {
  internshipContext: 'This Reflective Summary documents my 10-week intensive teaching internship at Visakha Vidyalaya, Colombo, conducted as part of the B.Ed (Honours) in Teaching English as a Second Language curriculum. Teaching over 120 contact hours across Grades 7, 8, 9, and 10, this period represented a profound transformation from theoretical university knowledge into resilient, evidence-based classroom practice.',
  keyCompetenciesDeveloped: [
    'Systematic reduction of Teacher Talk Time (TTT) from 52% down to 22% through structured interactive activities.',
    'Implementation of Vygotskian scaffolding and tiered tasks for mixed-ability multilingual secondary classrooms.',
    'Mastery of Instruction Checking Questions (ICQs) and non-verbal classroom staging.',
    'Integration of Gibbs\' (1988) Reflective Cycle to transform supervisor feedback into measurable pedagogical modifications.',
    'Cultivation of a low-affective-filter classroom culture where communicative risk-taking is embraced.'
  ],
  actionPlanForFutureDevelopment: [
    {
      goal: 'Integrate Digital Multimodal Tools',
      timeline: 'Months 1-3 Post-Graduation',
      strategy: 'Incorporate mobile audio-recording tasks and interactive quizzes to bridge classroom English with home practice.'
    },
    {
      goal: 'Action Research on Mother-Tongue (L1) Strategic Scaffolding',
      timeline: 'Year 1 of Full-Time Teaching',
      strategy: 'Conduct classroom-based inquiry on the strategic, principled use of translanguaging vs. target-language immersion in Sri Lankan state schools.'
    },
    {
      goal: 'Collaborative Professional Learning Communities (PLC)',
      timeline: 'Ongoing Professional Life',
      strategy: 'Establish peer observation circles with fellow English teachers to sustain continuous collegial feedback.'
    }
  ]
};
