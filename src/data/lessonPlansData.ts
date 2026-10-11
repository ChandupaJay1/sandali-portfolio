import type { LessonPlan } from '../types';

export const lessonPlans: LessonPlan[] = [
  {
    id: 'lp-01-grade9-speaking',
    title: 'Negotiating Community Solutions: Environmental Care in Our Village',
    grade: 'Grade 9',
    learnerLevel: 'Intermediate (A2+ / B1)',
    languageSkill: 'Speaking',
    languageFocus: 'Communicative Task',
    activityType: 'Task-Based',
    date: '2026-03-14',
    duration: '45 Minutes',
    numberOfLearners: 36,
    learnerProfile: '36 female students in a semi-urban secondary school in Colombo. Students have moderate listening comprehension in English but exhibit inhibition when speaking spontaneous English in front of the whole class. First languages: Sinhala (30), Tamil (6).',
    rationale: 'Addresses Sri Lankan National English Syllabus Competency 3 (Speaks clearly and confidently to express opinions). Using a relatable environmental cleanup scenario lowers the affective filter and encourages negotiation of meaning through collaborative group work.',
    competencies: [
      'Competency 3.2: Expresses opinions and views clearly on familiar social issues.',
      'Competency 4.1: Listens to peers attentively and responds with appropriate conversational rejoinders.'
    ],
    competencyLevels: [
      'Level 9.3.2: Contributes 3 or more coherent suggestions in a small group discussion using modal auxiliaries (should, could, must).',
      'Level 9.4.1: Paraphrases a peer\'s suggestion before proposing an alternative.'
    ],
    intendedLearningOutcomes: [
      'By the end of the 45-minute lesson, learners will be able to orally propose at least three viable environmental solutions using target phrases ("I suggest that we...", "We could easily...", "Why don\'t we...").',
      'Learners will be able to reach a consensus within a 4-person group and present their group action plan to the class using a structured speaking template.'
    ],
    assumptions: [
      'Learners are familiar with basic environmental vocabulary (pollution, recycling, garbage, drain, plastic waste).',
      'Learners have previously encountered modal verbs (should, must, could) in textbook exercises.'
    ],
    anticipatedProblems: [
      {
        problem: 'Reluctant or shy learners may switch to L1 (Sinhala/Tamil) during unmonitored group work.',
        solution: 'Assign clear communicative group roles (e.g., Language Monitor, Spokesperson, Scribe) and provide a bilingual "Lifeboat Card" with conversational sentence starters on each desk.'
      },
      {
        problem: 'Dominant speakers might monopolise group speaking time.',
        solution: 'Implement the "Talking Tokens" strategy—each learner has 3 paper tokens that they surrender each time they contribute an idea.'
      }
    ],
    personalTeachingAims: [
      'Reduce Teacher Talk Time (TTT) below 25% of the total 45 minutes.',
      'Provide immediate positive reinforcement during monitoring while noting common syntactic slips for deferred post-task feedback.'
    ],
    procedure: [
      {
        stage: 'Warmer & Emotional Hook',
        timeMinutes: '5 mins',
        teacherActivity: 'Displays two contrasting projected photographs: a polluted beachfront littered with single-use plastics and a pristine Sri Lankan tea valley. Elicits feelings with prompt: "How do you feel looking at Image A versus Image B?"',
        learnerActivity: 'Students brainstorm and call out descriptive adjectives ("dirty", "suffocating", "peaceful", "fresh"). Respond chorally and in brief spontaneous utterances.',
        interactionPattern: 'T-S',
        resources: 'Visual prompt slides / Printed A3 colour pictures of Mt. Lavinia beach vs. Ella.',
        assessment: 'Diagnostic assessment of active environmental vocabulary and student engagement.',
        feedback: 'Validates student vocabulary on the board in a thematic mind-map.'
      },
      {
        stage: 'Lead-in & Language Clarification',
        timeMinutes: '8 mins',
        teacherActivity: 'Presents a short simulated WhatsApp voice message transcript from a Village Youth Council president seeking advice. Highlights 3 communicative functions on the board: Proposing ("How about..."), Agreeing ("That is a feasible idea"), Politely Disagreeing ("I see your point, but..."). Conducts rapid choral and individual drills with appropriate rising/falling intonation.',
        learnerActivity: 'Repeat target phrases with expressive intonation; identify which phrases sound more polite or diplomatic.',
        interactionPattern: 'T-S',
        resources: 'Target language anchor chart on board; audio excerpt / teacher reading.',
        assessment: 'Formative check of pronunciation and natural sentence stress.',
        feedback: 'Immediate corrective recasting if pronunciation is flat or overly hesitant.'
      },
      {
        stage: 'Pre-Task Preparation',
        timeMinutes: '7 mins',
        teacherActivity: 'Divides the class into 9 groups of 4. Distributes the "Community Dilemma Card" (Problem: Clogged canals and dengue breeding spots near the school). Explains group roles: Leader, Scribe, Timekeeper, and Presenter. Models the Talking Tokens technique with one student volunteer.',
        learnerActivity: 'Students take their group roles, inspect their Community Dilemma Card, and review the prompt criteria.',
        interactionPattern: 'T-S',
        resources: 'Community Dilemma Cards (9 sets) + Talking Tokens (4 per student).',
        assessment: 'Verifies comprehension of task instructions using ICQs (Instruction Checking Questions: "Who will write? How many tokens do you each have?").',
        feedback: 'Clarifies timing and expectations.'
      },
      {
        stage: 'While-Task (Collaborative Problem Solving)',
        timeMinutes: '13 mins',
        teacherActivity: 'Steps back into active facilitator and silent observer role. Circulates unobtrusively among the 9 groups. Collects authentic language samples on an observation clipboard (praiseworthy phrases vs. syntactic errors). Refrains from interrupting fluent exchanges.',
        learnerActivity: 'Students deliberate in English, using their tokens to put forward ideas ("We could organise a student clean-up day", "The municipal council should provide separate bins"). Scribe records the top 3 ideas on an A4 poster.',
        interactionPattern: 'Group Work',
        resources: 'A4 mini-poster templates, coloured markers.',
        assessment: 'Formative observation of communicative fluency, turn-taking, and peer scaffolding.',
        feedback: 'Quiet encouragement whispered to shy students; gentle prompt cards provided if groups stall.'
      },
      {
        stage: 'Post-Task Reporting & Gallery Walk',
        timeMinutes: '8 mins',
        teacherActivity: 'Calls for group spokespersons to share their top solution in 30 seconds each, or coordinates a 3-minute gallery walk where 2 members stay to present while 2 rotate to evaluate other proposals using a star-sticker rating.',
        learnerActivity: 'Spokespersons present with confidence; rotating students listen and ask clarifying questions ("How will you fund the bins?"). Vote for the most creative community proposal.',
        interactionPattern: 'S-S',
        resources: 'Voting stickers, whiteboard summary board.',
        assessment: 'Peer assessment of clarity, persuasion, and practical feasibility.',
        feedback: 'Peer validation through applause and sticker awards.'
      },
      {
        stage: 'Consolidation, Delayed Error Correction & Feed-Forward',
        timeMinutes: '4 mins',
        teacherActivity: 'Writes 3 exemplary student sentences on the board and 3 anonymised sentences containing common errors heard during monitoring (e.g., *"We must to clean..."* -> *"We must clean..."*). Guides whole class to identify why the good sentences were effective and corrects the errors cooperatively.',
        learnerActivity: 'Identify correct structures, explain the grammar rationale, and copy corrected patterns into their notebooks.',
        interactionPattern: 'Whole Class',
        resources: 'Whiteboard.',
        assessment: 'Diagnostic check of receptive mastery of modal structures.',
        feedback: 'Constructive feed-forward: "Tomorrow we will turn these brilliant oral proposals into formal letters to the Municipal Commissioner!"'
      }
    ],
    resources: [
      {
        id: 'res-01-worksheet',
        title: 'Community Dilemma Problem Card & Talking Tokens Guide',
        type: 'worksheet',
        description: 'Complete printable student activity pack including the environmental scenario prompt, conversational phrases bank, role descriptors, and self-assessment checklist.',
        format: 'Printable PDF (2 Pages)',
        contentPreview: 'Scenario: Your neighbourhood suffers from severe monsoon drainage blockages due to discarded plastic lunch wrappers. Your youth team has 1 week to draft a community action plan.',
        previewItems: [
          'Target Language Box: "I firmly believe we should...", "What if we invited the prefects?", "That would be effective because..."',
          'Group Role Card: Facilitator, Record Keeper, Language Champion, Class Presenter',
          'Exit Ticket: 3 things I said today in English, 1 word I learned from my peer'
        ]
      },
      {
        id: 'res-01-slides',
        title: 'Visual Stimulus & Target Language Presentation Slide Deck',
        type: 'slides',
        description: 'Rich photographic slides comparing coastal waste in Sri Lanka with protected ecosystems, plus visual diagrams of the Talking Token method.',
        format: 'Digital Slide Deck (8 Slides)',
        contentPreview: 'Slide 1: Environmental Hook (Beach vs. Knuckles Range)\nSlide 2: Language of Diplomacy & Proposal\nSlide 3: Group Task Rules & Timing Matrix'
      },
      {
        id: 'res-01-cards',
        title: 'Conversational "Lifeboat" Sentence Starter Cards',
        type: 'flashcards',
        description: 'Pocket-sized printable support strips for low-proficiency students, providing bilingual scaffolding (Sinhala/Tamil/English) for turn-taking.',
        format: 'Printable Flashcard Pack (12 Cards)',
        contentPreview: '"In my perspective..." / "Could you repeat that point?" / "I agree with your suggestion because..."'
      }
    ],
    reflection: {
      whatWorked: 'The Talking Tokens strategy completely transformed the dynamics of group work. Usually quiet students in the second row held their tokens and actively sought opportunities to speak because they felt a tangible responsibility. The environmental topic was deeply relevant given recent local municipal news.',
      challenges: 'Group 7 experienced an initial 3-minute lull because the assigned spokesperson was intimidated by the role. I had to intervene non-verbally by pointing to their Lifeboat sentence starters.',
      learnerResponses: '92% of students contributed at least 2 distinct oral suggestions. One student noted in her exit ticket: "Today I spoke three full English sentences without feeling ashamed when I made a grammar slip."',
      feedbackReceived: 'Supervising Teacher commended the clear staging and low TTT (calculated at 22%). Recommended allocating 2 more minutes to the delayed error correction stage in future sessions.',
      changesPlanned: 'For the next speaking cycle, I will pre-teach 2 additional hedging adverbs ("perhaps", "definitely") to enable more nuanced argumentation.'
    },
    featured: true
  },
  {
    id: 'lp-02-grade8-reading',
    title: 'Unlocking Narrative Secrets: The Mystery of Sigiriya’s Mirror Wall',
    grade: 'Grade 8',
    learnerLevel: 'Pre-Intermediate (A2)',
    languageSkill: 'Reading',
    languageFocus: 'Vocabulary',
    activityType: 'Jigsaw Reading',
    date: '2026-03-20',
    duration: '45 Minutes',
    numberOfLearners: 38,
    learnerProfile: '38 Grade 8 students. High enthusiasm for historical stories and riddles. Tendency to read word-by-word with dictionaries, causing slow reading speeds and anxiety over unknown vocabulary.',
    rationale: 'National Syllabus Competency 5 (Extracts essential information from authentic and adapted reading texts). Using a national heritage mystery stimulates intrinsic curiosity while explicitly teaching top-down reading strategies (skimming and scanning) instead of word-for-word translation.',
    competencies: [
      'Competency 5.1: Skims texts to identify main themes and scanning for specific dates, names, and numerical facts.',
      'Competency 5.4: Deduces meanings of unfamiliar lexical items using contextual clues and morphological roots.'
    ],
    competencyLevels: [
      'Level 8.5.1: Locates 5 specific historical facts from an informational passage within a 3-minute timed scan.',
      'Level 8.5.4: Matches 4 bolded contextual vocabulary items with their definitions without relying on a dictionary.'
    ],
    intendedLearningOutcomes: [
      'Learners will be able to skim a 250-word historical narrative within 90 seconds to identify its overarching gist.',
      'Learners will be able to scan three distinct expert text segments in a jigsaw formation to complete a chronological archaeological mystery matrix.'
    ],
    assumptions: [
      'Learners know that Sigiriya is an ancient rock fortress in Sri Lanka.',
      'Learners possess basic past tense narrative recognition (was built, discovered, visited, wrote).'
    ],
    anticipatedProblems: [
      {
        problem: 'Learners panic when encountering archaic or complex descriptive adjectives (e.g., "lustrous", "inscribed", "glazed").',
        solution: 'Conduct a 3-minute pre-reading "Context Detective" mini-lesson demonstrating how adjacent nouns and verbs reveal word meaning.'
      },
      {
        problem: 'In jigsaw reading, some "expert" students may fail to explain their segment clearly when returning to home groups.',
        solution: 'Provide a structured graphic organizer with fill-in prompts so experts only need to communicate bulleted facts.'
      }
    ],
    personalTeachingAims: [
      'Strictly enforce timed reading intervals to prevent regression into bilingual word-by-word decoding.',
      'Increase use of positive non-verbal cues (thumbs up, smiling) during scanning tasks.'
    ],
    procedure: [
      {
        stage: 'Warmer (Mystery Box & Visual Clues)',
        timeMinutes: '6 mins',
        teacherActivity: 'Brings an antique-style wooden box. Pulls out three artifacts: a feather quill, a mirror fragment, and an ancient stone carving photograph. Asks: "How do these three objects connect to one of Sri Lanka’s greatest world wonders?"',
        learnerActivity: 'Students guess enthusiastically: "Sigiriya!", "The King Kasyapa!", "The graffiti poems on the Mirror Wall!"',
        interactionPattern: 'T-S',
        resources: 'Real objects (mirror, quill, stone photo) / Digital slide.',
        assessment: 'Diagnostic check of historical schema activation and engagement.',
        feedback: 'Affirms connections and introduces the lesson title on the blackboard.'
      },
      {
        stage: 'Pre-Reading: Top-Down Prediction & Vocabulary Scaffold',
        timeMinutes: '8 mins',
        teacherActivity: 'Displays the headline: *"Why Has the Mirror Wall Remained Shiny for 1,500 Years?"* Teaches 4 key vocabulary items using visual association cards: *inscribed*, *glazed*, *graffiti*, *preservation*. Has students predict whether the glaze was made of egg whites, bee honey, or special clay.',
        learnerActivity: 'Students vote on the secret recipe using hand signals; pronounce target words and guess meanings from pictorial contexts.',
        interactionPattern: 'T-S',
        resources: 'Vocabulary flashcards with visual mnemonics.',
        assessment: 'Quick check of lexical pronunciation and meaning concept checking questions (CCQs).',
        feedback: 'Praises creative predictions and maintains curiosity.'
      },
      {
        stage: 'While-Reading Phase 1: Rapid Skimming (Gist)',
        timeMinutes: '6 mins',
        teacherActivity: 'Distributes the reading sheet face down. Says: "You have exactly 90 seconds to skim the text. Do NOT read every word. Find out which prediction was correct!" Starts an engaging visual countdown timer on screen.',
        learnerActivity: 'Turn over papers simultaneously and skim rapidly to identify the secret ingredient (egg white and lime plaster mixture).',
        interactionPattern: 'Individual',
        resources: 'Adapted narrative text sheet + timer.',
        assessment: 'Checks ability to overlook unknown words to locate central answer.',
        feedback: 'Celebrates students who found the answer without reading word-by-word.'
      },
      {
        stage: 'While-Reading Phase 2: Jigsaw Expert Scanning',
        timeMinutes: '14 mins',
        teacherActivity: 'Divides class into Home Groups (A, B, C). Regroups students into Expert Stations: Station A investigates the ancient chemical glaze; Station B investigates the 8th-century visitor graffiti poems; Station C investigates modern restoration efforts. Monitors expert discussions.',
        learnerActivity: 'At Expert Stations, students scan their specific paragraph, verify facts with expert peers, and complete their section of the Ancient Wonder Dossier. Then return to Home Groups and brief peers.',
        interactionPattern: 'Group Work',
        resources: 'Tiered Jigsaw Reading Cards (Set A, B, C) + Ancient Wonder Dossier Worksheets.',
        assessment: 'Monitors accuracy of extracted information and peer peer-teaching quality.',
        feedback: 'Provides targeted clarification when Station B deciphers poem translations.'
      },
      {
        stage: 'Post-Reading: Ancient Graffiti Writing Challenge',
        timeMinutes: '8 mins',
        teacherActivity: 'Asks students to imagine they are a 10th-century traveller visiting Sigiriya. Challenges each pair to write a 2-line rhyming or descriptive poem on a replica parchment slip about the beauty of Sri Lanka, using at least one new vocabulary word.',
        learnerActivity: 'In pairs, craft poetic lines and stick their parchment slip onto the classroom "Mirror Wall" poster at the front.',
        interactionPattern: 'Pair Work',
        resources: 'Parchment slips, adhesive poster paper.',
        assessment: 'Summative formative evaluation of creative vocabulary synthesis.',
        feedback: 'Reads out three outstanding student couplets to generous applause.'
      },
      {
        stage: 'Closure & Self-Reflection Exit Ticket',
        timeMinutes: '3 mins',
        teacherActivity: 'Prompts students to complete the 3-2-1 exit ticket on their desks before packing up.',
        learnerActivity: 'Write 3 facts learned, 2 reading strategies used (skimming/scanning), and 1 question still unanswered.',
        interactionPattern: 'Individual',
        resources: '3-2-1 Exit slips.',
        assessment: 'Metacognitive evaluation of reading strategy awareness.',
        feedback: 'Collects exit slips for post-lesson instructional planning.'
      }
    ],
    resources: [
      {
        id: 'res-02-worksheet',
        title: 'Sigiriya Mirror Wall Jigsaw Dossier & Reading Passage',
        type: 'worksheet',
        description: 'Complete student reading dossier with adapted historical narrative, skimming comprehension challenge, jigsaw expert question sheets, and vocabulary match exercise.',
        format: 'Printable Student Pack (3 Pages)',
        contentPreview: 'Adapted historical text containing 3 structured paragraphs on the construction, graffiti, and modern restoration of Sigiriya\'s Mirror Wall.',
        previewItems: [
          'Expert Station A: The Secret Recipe of the Ancient Plaster',
          'Expert Station B: What the Ancient Poems Actually Said',
          'Expert Station C: The Modern Restoration Mystery',
          'Graphic Organiser Matrix: Timeline & Facts Table'
        ]
      },
      {
        id: 'res-02-slides',
        title: 'Archaeological Visual Stimulus Presentation',
        type: 'slides',
        description: 'High-definition macro photographs of ancient Sinhala graffiti scripts on the polished plaster, Sigiriya frescoes, and archaeological excavation maps.',
        format: 'Visual Presentation (10 Slides)',
        contentPreview: 'Visual historical journey into ancient Lankan literature, featuring close-ups of the polished mirror wall and English translations of famous verses.'
      },
      {
        id: 'res-02-activity',
        title: 'Classroom Replica "Mirror Wall" Interactive Board',
        type: 'activity',
        description: 'Interactive classroom installation where students attach their own written couplets, simulating visitor comments from the 8th century.',
        format: 'Physical Activity & Printable Templates'
      }
    ],
    reflection: {
      whatWorked: 'The countdown timer for the skimming exercise was extraordinarily effective. It physically broke the students\' habit of reaching for their bilingual dictionaries. The jigsaw structure ensured 100% participation because every student had to return as an "expert" to their home team.',
      challenges: 'Station C took 2 minutes longer than Stations A and B because their paragraph included the phrase "spectroscopic chemical analysis". I should have glossed that technical term in advance.',
      learnerResponses: 'Students were genuinely captivated by the idea that 1,200 years ago, ordinary pilgrims wrote poems on the wall just like social media comments today. One student remarked: "I never thought reading comprehension could feel like a detective game."',
      feedbackReceived: 'University mentor praised the transition from receptive reading skills to productive poetic writing. Advised highlighting vocabulary roots (morphology: scribe -> inscribe -> description) in future lexical lessons.',
      changesPlanned: 'In the follow-up lesson, use morphological tree diagrams to explore prefixes and suffixes derived from the target vocabulary.'
    },
    featured: true
  },
  {
    id: 'lp-03-grade10-grammar',
    title: 'Conditionals in Action: Surviving an Island Expedition (Second Conditional)',
    grade: 'Grade 10',
    learnerLevel: 'Intermediate (B1)',
    languageSkill: 'Integrated Skills',
    languageFocus: 'Grammar',
    activityType: 'Language Game',
    date: '2026-03-27',
    duration: '45 Minutes',
    numberOfLearners: 34,
    learnerProfile: '34 Grade 10 students preparing for national GCE Ordinary Level (O/L) examinations. High awareness of grammatical rules in isolation, but persistent difficulty using grammatical structures spontaneously and accurately in communicative contexts.',
    rationale: 'Addresses National Syllabus Competency 6.4 (Constructs complex conditional sentences to express hypothetical situations). Moving grammar instruction away from mechanical decontextualised substitution drills toward meaningful, scenario-driven decision making.',
    competencies: [
      'Competency 6.4: Uses conditional clauses appropriately in speech and writing to communicate hypothetical possibilities.',
      'Competency 7.2: Writes coherent explanatory paragraphs outlining causal consequences.'
    ],
    competencyLevels: [
      'Level 10.6.4: Formulates second conditional utterances ("If + past simple, ... would + bare infinitive") accurately during a decision-making simulation.',
      'Level 10.7.2: Produces 4 logically connected conditional sentences in a survival justification task.'
    ],
    intendedLearningOutcomes: [
      'By the end of the lesson, learners will be able to distinguish between real possibilities (First Conditional) and hypothetical/unreal situations (Second Conditional) with 85% accuracy in a concept sorting activity.',
      'Learners will be able to orally argue for the selection of survival items using the Second Conditional formula ("If we had a solar torch, we would be able to signal search planes at night").'
    ],
    assumptions: [
      'Learners have mastered simple past tense irregular forms (had, were, found, took, built).',
      'Learners have previously learned First Conditional (If + present simple, will + verb).'
    ],
    anticipatedProblems: [
      {
        problem: 'Learners frequently produce the erroneous hybrid form: *"If I would have a knife, I would cut..."*',
        solution: 'Use clear visual color-coded grammar blocks on the board showing that "would" never enters the "If-clause" in standard hypothetical conditionals.'
      },
      {
        problem: 'Learners may confuse the past tense verb form in the if-clause with past time reference.',
        solution: 'Use a "Grammar Timeline" and CCQs (Concept Checking Questions: "Are we on the island right now? No. Is this real or in our imagination? Imagination. So why do we use past tense? To show psychological distance!").'
      }
    ],
    personalTeachingAims: [
      'Ensure inductive guided discovery of the grammar rule rather than deductive teacher lecturing.',
      'Maintain an energetic, communicative atmosphere throughout the survival simulation.'
    ],
    procedure: [
      {
        stage: 'Warmer: "What Would You Do If...?" Quick-Fire Game',
        timeMinutes: '5 mins',
        teacherActivity: 'Displays whimsical hypothetical prompt: "If you woke up tomorrow and had wings like an eagle, what would you do first?" Demonstrates with own example.',
        learnerActivity: 'Laugh and share spontaneous responses with peers: "I would fly to Kandy without traffic!", "I would perch on top of the Lotus Tower!"',
        interactionPattern: 'Whole Class',
        resources: 'Slide prompt with humorous illustration.',
        assessment: 'Diagnostic check of intuitive use of "would".',
        feedback: 'Validates ideas and playfully recasts syntax when necessary.'
      },
      {
        stage: 'Contextual Presentation & Guided Discovery',
        timeMinutes: '10 mins',
        teacherActivity: 'Sets the dramatic narrative: "Our research boat has broken down off the coast of Pigeon Island. We can only salvage 4 items from a crate of 12 before the boat sinks." Reads two character perspectives. Guides students to notice the grammatical pattern using inductive questions.',
        learnerActivity: 'Observe the model sentence on the board: *"If we chose the water purifier, we would survive for weeks."* Identify verb tenses in both clauses using color markers.',
        interactionPattern: 'T-S',
        resources: 'Colour-coded whiteboard strips; Island shipwreck scenario sheet.',
        assessment: 'CCQs checking meaning, form, and phonological contraction (*we\'d*).',
        feedback: 'Drills the contracted form (*If we had... we\'d...*) for natural spoken rhythm.'
      },
      {
        stage: 'Controlled Practice: Sentence Formula Match & Puzzle',
        timeMinutes: '8 mins',
        teacherActivity: 'Distributes "Conditional Survival Split-Cards" where If-clauses must be logically matched to hypothetical outcome clauses.',
        learnerActivity: 'Work in pairs to match split cards rapidly on their desks and verify grammatical harmony (past simple <-> would + base verb).',
        interactionPattern: 'Pair Work',
        resources: 'Pair match puzzle cards (15 pairs).',
        assessment: 'Rapid circulation to check structural accuracy.',
        feedback: 'Immediate feedback on pair matches; pairs celebrate when all 15 are matched.'
      },
      {
        stage: 'Semi-Controlled Communicative Task: The Pigeon Island Survival Council',
        timeMinutes: '12 mins',
        teacherActivity: 'Places students into "Expedition Teams" of 4. Distributes the 12 Survival Item Cards (tarpaulin, satellite phone, flare gun, machete, fishing net, matches, iodine tablets, cooking pot, first aid kit, compass, solar radio, thick rope). Task: Teams must negotiate and agree on ONLY 4 items, justifying each choice using second conditionals.',
        learnerActivity: 'Debate vigorously: *"If we took the flare gun, we would signal nearby fishermen,"* *"Yes, but if we had the tarpaulin, we would build a shelter against monsoon storms."* Record unanimous choices on team survival manifesto.',
        interactionPattern: 'Group Work',
        resources: '12 Survival Item Illustrated Cards per team + Team Survival Manifesto sheet.',
        assessment: 'Formative assessment of accurate second conditional output and persuasion.',
        feedback: 'Monitors language use; awards bonus points for grammatically flawless arguments.'
      },
      {
        stage: 'Production & Class Debate: Survival Showdown',
        timeMinutes: '7 mins',
        teacherActivity: 'Calls forward two opposing teams to debate their conflicting choices. Moderates the mini-debate.',
        learnerActivity: 'Defend their items against peer challenges; vote on which team possesses the highest statistical survival probability based on their arguments.',
        interactionPattern: 'Group Work',
        resources: 'Whiteboard vote tally.',
        assessment: 'Spontaneous fluency and communicative effectiveness under friendly pressure.',
        feedback: 'Feedback on communicative conviction and syntactic control.'
      },
      {
        stage: 'Review & Feed-Forward Wrap-up',
        timeMinutes: '3 mins',
        teacherActivity: 'Highlights 2 exemplary sentences created by students during the debate. Assigns creative homework task: "Write an imaginary journal entry from Night 1 on the island using 4 second conditional sentences."',
        learnerActivity: 'Copy homework prompt and complete a rapid traffic-light confidence self-rating.',
        interactionPattern: 'Individual',
        resources: 'Exit ticket / Student notebooks.',
        assessment: 'Self-assessment of confidence in second conditionals.',
        feedback: 'Reassures learners that hypothetical thinking is now unlocked for their O/L examination.'
      }
    ],
    resources: [
      {
        id: 'res-03-worksheet',
        title: 'Pigeon Island Survival Kit & Conditional Grammar Dossier',
        type: 'worksheet',
        description: 'Comprehensive student handout including inductive discovery analysis, split-card puzzle sheet, 12 item descriptions with survival stats, and O/L-style grammar practice questions.',
        format: 'Student Pack (3 Pages)',
        contentPreview: 'Full conditional grammar explanation with formula diagrams, survival item stats, and structured debate scaffold prompts.',
        previewItems: [
          'Inductive Rule Sheet: Form vs. Meaning Matrix',
          '12 Illustrated Survival Items with Durability & Utility Stats',
          'Team Survival Manifesto Planning Grid',
          'O/L Examination Practice Exercise (5 Fill-in-the-blank items)'
        ]
      },
      {
        id: 'res-03-cards',
        title: '12 Illustrated Survival Item Cards',
        type: 'flashcards',
        description: 'Colourful printable playing cards with item illustrations and tactical utility notes for the communicative survival simulation.',
        format: 'Card Deck (12 Cards)',
        contentPreview: 'Cards featuring satellite phone, waterproof tarp, magnesium fire starter, nylon rope, multipurpose machete, iodine purification drops, etc.'
      },
      {
        id: 'res-03-game',
        title: 'Conditional Sentence Split-Card Matching Game',
        type: 'game',
        description: 'Interactive pair game designed to drill rapid mental pairing of hypothetical conditions with realistic consequences.',
        format: 'Card Game'
      }
    ],
    reflection: {
      whatWorked: 'Framing second conditionals inside a high-stakes survival simulation completely eradicated the usual student groans associated with grammar lessons. Students were so invested in defending their survival items (machete vs. satellite phone) that they spontaneously produced complex conditional clauses without prompting.',
      challenges: 'A few students kept using "will" instead of "would" because in Sinhala/Tamil, hypothetical condition markers do not shift verbal tense into past forms in the same manner. Addressing this through the concept of "psychological distance" helped them grasp the rationale.',
      learnerResponses: 'In the post-task exercise, 31 out of 34 students correctly structured both clauses of the second conditional without error—a significant improvement over the pre-test diagnostic.',
      feedbackReceived: 'Teacher-in-Charge commended the inductive staging and communicative grammar application, noting: "You proved that grammar teaching can be loud, vibrant, and deeply engaging."',
      changesPlanned: 'In the subsequent lesson, extend this into the Third Conditional (past regrets: "If we had brought water, we wouldn\'t have gotten dehydrated") to reinforce the conditional continuum.'
    },
    featured: true
  },
  {
    id: 'lp-04-grade7-writing',
    title: 'Crafting Vivid Food Reviews: Flavours of Sri Lankan Street Food',
    grade: 'Grade 7',
    learnerLevel: 'Beginner / Elementary (A1+ / A2)',
    languageSkill: 'Writing',
    languageFocus: 'Vocabulary',
    activityType: 'Process Writing',
    date: '2026-04-03',
    duration: '45 Minutes',
    numberOfLearners: 37,
    learnerProfile: '37 energetic Grade 7 students. Keen interest in hands-on activities, sensory experiences, and food culture. Basic writing skills; frequently rely on generic adjectives ("good", "nice", "delicious") when describing experiences.',
    rationale: 'National Syllabus Competency 7 (Writes simple descriptions and personal reviews using sensory adjectives and cohesive devices). By anchoring descriptive vocabulary in real culinary sensations (kottu, isso wade, hoppers), young learners expand their descriptive lexical repertoire.',
    competencies: [
      'Competency 7.1: Writes short descriptive texts about familiar objects and culinary experiences using sensory words.',
      'Competency 6.1: Uses coordinating conjunctions (and, but, so) to combine simple clauses.'
    ],
    competencyLevels: [
      'Level 7.7.1: Uses at least 4 distinct sensory adjectives (crispy, aromatic, spicy, golden) in a 60-word food review.',
      'Level 7.6.1: Connects sensory observations with personal recommendations using "because" and "therefore".'
    ],
    intendedLearningOutcomes: [
      'Learners will be able to categorize 12 sensory adjectives into the 5 sensory domains (Sight, Smell, Taste, Texture/Touch, Sound).',
      'Learners will be able to draft, peer-review, and finalize a structured 5-star mini food review for a popular Sri Lankan dish.'
    ],
    assumptions: [
      'Learners are familiar with traditional local foods (kottu roti, hoppers, string hoppers, pol sambol, isso wade).',
      'Learners know basic sentence syntax (Subject + Verb + Adjective).'
    ],
    anticipatedProblems: [
      {
        problem: 'Students may repeatedly revert to overused adjectives ("very good", "very tasty").',
        solution: 'Introduce the "Banned Words Graveyard" on the side board—officially "burying" the words *good* and *nice* for this lesson, replacing them with vibrant sensory alternatives.'
      },
      {
        problem: 'Younger students may rush into writing without planning their ideas.',
        solution: 'Enforce the 3-step Process Writing Ladder: Sensory Mind-Map (Step 1) -> Guided Template Drafting (Step 2) -> Peer Star Review (Step 3).'
      }
    ],
    personalTeachingAims: [
      'Encourage sensory engagement through audio clips (sizzling kottu sounds) and visual imagery.',
      'Provide structured scaffolding so even lower-proficiency students produce an authentic, polished piece of writing.'
    ],
    procedure: [
      {
        stage: 'Sensory Warmer: "Guess the Sizzle!" Audio & Image Hook',
        timeMinutes: '5 mins',
        teacherActivity: 'Plays a 20-second audio track of metal blades clashing rhythmically against an iron griddle (the iconic Sri Lankan kottu beat). Asks: "Where are we, and what can you smell?" Reveals a vibrant photo of Galle Face Green at twilight.',
        learnerActivity: 'Clap along with the kottu rhythm and shout: "Kottu!", "Galle Face Green!", "Street food!"',
        interactionPattern: 'Whole Class',
        resources: 'Audio track + vibrant Galle Face Green street food photograph.',
        assessment: 'Immediate emotional hook and cultural connection.',
        feedback: 'Channels excitement into the lesson goal: "Today, we become Sri Lanka’s top junior food critics!"'
      },
      {
        stage: 'Vocabulary Architecture: The 5-Sense Sensory Tree',
        timeMinutes: '9 mins',
        teacherActivity: 'Draws a large "Sensory Taste Tree" on the board with 5 branches: Sight (golden, steaming), Smell (fragrant, aromatic), Sound (crunchy, sizzling), Texture (crispy, fluffy, chewy), Taste (spicy, tangy, sweet). Conducts the "Banned Words Graveyard" ceremony, symbolically writing "nice" and "good" inside a paper tombstone.',
        learnerActivity: 'Students physically come up to attach sticky leaves with sensory adjectives to the correct branch of the Sensory Tree; chant new words with dramatic gestures (e.g., crunching for "crispy").',
        interactionPattern: 'T-S',
        resources: 'Sensory Tree board poster + adhesive vocabulary leaves + Banned Words Tombstone.',
        assessment: 'Formative check of categorization of sensory descriptors.',
        feedback: 'Corrects pronunciation of *aromatic* and *fragrant* with clear syllable stress.'
      },
      {
        stage: 'Pre-Writing Modeling: Deconstructing a 5-Star Review',
        timeMinutes: '7 mins',
        teacherActivity: 'Shares a sample 60-word food review of "Golden Prawn Wade" on the projector. Colors code the 3 essential review parts: 1) Catchy Title & Description, 2) Sensory Experience (Taste & Texture), 3) Final Star Rating & Recommendation.',
        learnerActivity: 'Identify which sentences describe sight, which describe taste, and where conjunctions (*and*, *but*, *because*) are used.',
        interactionPattern: 'T-S',
        resources: 'Model food review handout / projection.',
        assessment: 'Comprehension of structural conventions of food review genre.',
        feedback: 'Highlights how the author avoided "nice" and used "burst of tangy lime" instead.'
      },
      {
        stage: 'Drafting: Process Writing at Junior Food Critics’ Desks',
        timeMinutes: '13 mins',
        teacherActivity: 'Distributes the "Junior Food Critic Review Template" (featuring choice of 4 dishes: Egg Roti, Kottu, Isso Wade, or Watalappan). Circulates and provides individual differentiated assistance.',
        learnerActivity: 'Select their favourite dish, fill in their Sensory Word Bank on the side margin, and draft their 50-60 word review using the provided sentence frames and star-rating box.',
        interactionPattern: 'Individual',
        resources: 'Junior Food Critic Review Card (die-cut menu card shape).',
        assessment: 'Monitors use of at least 4 sensory adjectives and correct capitalisation/punctuation.',
        feedback: 'Provides one-on-one encouragement and micro-scaffolds to struggling writers.'
      },
      {
        stage: 'Peer Review: "Two Stars and a Wish"',
        timeMinutes: '7 mins',
        teacherActivity: 'Guides students to swap drafts with their shoulder partner. Explains the peer review formula: Give 2 Stars (two specific sensory words you loved) and 1 Wish (one recommendation to make the review even tastier).',
        learnerActivity: 'Read partner\'s draft, circle vivid sensory words in yellow, and write a polite "wish" comment.',
        interactionPattern: 'Pair Work',
        resources: 'Peer review rubric stickers.',
        assessment: 'Peer formative feedback for learning.',
        feedback: 'Praise thoughtful peer critiques.'
      },
      {
        stage: 'Celebration & Classroom "Food Guide" Publishing',
        timeMinutes: '4 mins',
        teacherActivity: 'Invites 2 students to read their reviews aloud in a dramatic celebrity chef voice. Pins all completed menu cards onto the "Galle Face Food Guide" classroom wall.',
        learnerActivity: 'Cheer for classmates; admire the newly published classroom food guide board.',
        interactionPattern: 'Whole Class',
        resources: 'Display board and push pins.',
        assessment: 'Summative display of student agency and written pride.',
        feedback: 'Congratulates all 37 students on becoming certified junior food critics.'
      }
    ],
    resources: [
      {
        id: 'res-04-worksheet',
        title: 'Junior Food Critic Writing Pack & Sensory Adjective Bank',
        type: 'worksheet',
        description: 'Complete process writing booklet including sensory vocabulary sorting chart, deconstructed mentor text, 3-tiered sentence frames, and official review template.',
        format: 'Printable Student Pack (2 Pages)',
        contentPreview: 'Sensory Word Bank with 24 vivid adjectives, Step-by-step review scaffold, and 5-star rating graphic organizer.',
        previewItems: [
          'Sensory Adjective Vault (Sight, Smell, Taste, Texture, Sound)',
          'The Banned Words Graveyard Checklist',
          'Junior Critic Menu-Card Writing Template',
          'Two Stars and a Wish Peer Assessment Rubric'
        ]
      },
      {
        id: 'res-04-slides',
        title: 'Street Food Sensory Slides & Sizzling Audio Track',
        type: 'slides',
        description: 'High-energy multimedia presentation featuring authentic sounds and vibrant imagery of Sri Lankan culinary arts.',
        format: 'Multimedia Deck (7 Slides + Audio)'
      },
      {
        id: 'res-04-activity',
        title: 'Classroom "Galle Face Food Guide" Publishing Display',
        type: 'activity',
        description: 'Collaborative bulletin board template where student reviews are published as an official school culinary guidebook.',
        format: 'Display Kit'
      }
    ],
    reflection: {
      whatWorked: 'The "Banned Words Graveyard" was an enormous pedagogical hit. The students laughed out loud when we ceremonially buried the words "nice" and "good", and this playful constraint immediately forced them to reach for words like "crunchy", "aromatic", and "fiery". Every single student completed their draft.',
      challenges: 'A few students struggled with spelling words like "delicious" and "aromatic". Having the sensory word leaves clearly visible on the board helped them check their spelling autonomously without waiting for my help.',
      learnerResponses: 'Students took immense pride in their die-cut menu cards. Many asked if they could take their reviews home to show their mothers or post them in the school cafeteria.',
      feedbackReceived: 'Colleague observing the lesson noted: "The sensory tree made abstract descriptive adjectives concrete and memorable for Grade 7 learners. Excellent cultural contextualisation."',
      changesPlanned: 'In the next writing unit, incorporate dialogue tags ("exclaimed", "whispered") to expand narrative writing around dining experiences.'
    },
    featured: false
  }
];
