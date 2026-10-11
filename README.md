# Teaching Internship E-Portfolio (ELT)
## Pre-Service English Language Teacher — Sri Lanka

An editorial-inspired, academically rigorous, fully interactive teaching e-portfolio designed and developed for a university undergraduate English language teacher completing a teaching internship in Sri Lanka.

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Lucide Icons**, and **React Router**.

---

## 🌟 Visual Identity & Color Palette

Designed according to premium academic editorial aesthetics—warm, human-centred, uncluttered, and typographically distinguished:

| Color Role | Name | Hex Code | Purpose |
|---|---|---|---|
| Primary Identity | Deep Forest Green | `#183D35` | Dominant brand color, header accents, buttons, and badges |
| Canvas & Base | Warm Ivory | `#FAF8F2` | Background surface for soft, high-contrast, glare-free reading |
| Secondary Accent | Muted Sage | `#B8C9B5` | Subtle borders, progress indicators, and tag backgrounds |
| Interactive Accent| Soft Terracotta | `#C98268` | Highlight badges, CTAs, quotation marks, and callouts |
| Body Typography | Charcoal | `#292C2A` | Legible, dark text for prolonged academic reading |
| High Contrast | Pure White | `#FFFFFF` | Paper cards, document sheets, and elevation layers |

### Typography
- **Headings & Pull-Quotes:** *DM Serif Display* / *Playfair Display* (Editorial academic presence)
- **Body & Metadata:** *Plus Jakarta Sans* / *Inter* (Clean, modern readability)

---

## 📋 Coursework Assessment Matrix (37 Marks Total)

The e-portfolio is explicitly structured around the university marking rubric, making all evaluated evidence accessible within one to two clicks:

| # | Portfolio Section | Assessed Marks | Key Pedagogical Evidence | Direct Route |
|---|---|:---:|---|---|
| **01** | **Teaching Philosophy Statement** | **10 Marks** | 6 Core Pillars, Vygotskian scaffolding, Krashen's input & affective filter, CLT & TBLT methodology, Black & Wiliam's AfL, and genuine APA 7 references | `/philosophy` |
| **02** | **Reflective Summary** | **10 Marks** | 5-stage Gibbs Reflective Cycle entries (Weeks 1–10), professional evolution timeline, supervisor feedback responsiveness, and future action plan | `/reflections` |
| **03** | **Lesson Plans & Activities** | **10 Marks** | Multi-filterable lesson library, detailed procedural sequence tables (T-S, S-S, Pairs, Groups), printable materials, and post-lesson evaluations | `/lessons` |
| **04** | **Teaching Observation Forms** | **5 Marks** | Form 01 (Mid-Term) & Form 02 (Final Summative) official records, full criteria breakdowns, observer commendations, and "Action Taken Afterwards" | `/observations` |
| **05** | **Teaching Testimonials** | **2 Marks** | Verified appraisals from the School Teacher-in-Charge, University Supervising Lecturer, Senior Colleague, and Peer Intern | `/testimonials` |
| **—** | **About Me & Journey** | *Profile* | Teacher candidate bio, TESL degree milestones, teaching toolkit, and professional commitments | `/about` |
| **—** | **Contact & Inquiries** | *Inquiries* | Institutional contact points, interactive validation form, and printable portfolio export | `/contact` |

---

## 🚀 Quick Start & Running Locally

### 1. Requirements
- Node.js (version 18 or higher recommended)
- npm or pnpm or yarn

### 2. Installation
```bash
# Clone or navigate into the project directory
cd portfolio-sandali

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

---

## 📂 Project Architecture

```
src/
├── components/
│   ├── AssessmentModal.tsx      # Evaluator modal displaying marking rubric and evidence links
│   ├── BackToTop.tsx            # Floating scroll-to-top control
│   ├── DocumentModal.tsx        # High-fidelity document viewer for Observation Forms
│   ├── EditableNotice.tsx       # Guidance box showing users where to customize data
│   ├── Footer.tsx               # Editorial footer with criteria links and print trigger
│   ├── LessonCard.tsx           # Interactive lesson plan card
│   ├── LessonFilters.tsx        # Search bar and multi-filter dropdowns
│   ├── Navbar.tsx               # Sticky header with monogram brand and marks indicator
│   ├── ScrollToTop.tsx          # Route change listener resetting scroll position
│   └── SectionHeading.tsx       # Reusable editorial header with mark allocation badges
├── data/
│   ├── assessmentCriteria.ts    # 6 Assessment criteria definitions and mark allocations
│   ├── lessonPlansData.ts       # 4 Full Sri Lankan ESL secondary lesson plans (Grades 7–10)
│   ├── observationFormsData.ts  # Observation Forms 01 & 02 with rubrics and actions taken
│   ├── philosophyData.ts        # 6 Philosophy pillars, APA 7 reference list, pull quotes
│   ├── reflectionsData.ts       # Gibbs 5-stage reflection logs (Weeks 1, 3, 5, 7, 9)
│   ├── teacherProfile.ts        # Candidate profile, school details, stats, milestones
│   └── testimonialsData.ts      # Mentor and supervisor recommendations
├── pages/
│   ├── About.tsx                # Teaching journey, credentials, and methodology toolkit
│   ├── Contact.tsx              # Institutional contact form with validation and CV export
│   ├── Home.tsx                 # Hero section, assessment evidence matrix, featured lessons
│   ├── LessonDetailPage.tsx     # Dedicated procedural table, resources, and reflections
│   ├── LessonPlans.tsx          # Searchable, filterable lesson plan library
│   ├── NotFound.tsx             # Editorial custom 404 error page
│   ├── ObservationForms.tsx     # Observation form selector and document preview
│   ├── ReflectiveSummary.tsx    # Gibbs reflective cycle entries and growth roadmap
│   ├── TeachingPhilosophy.tsx   # Interactive philosophy pillars and theory matrix
│   └── Testimonials.tsx         # Professional testimonials and evaluator endorsements
├── types/
│   └── index.ts                 # Clean TypeScript interfaces for all coursework models
├── App.tsx                      # Master application router and layout
├── main.tsx                     # Application entry point
└── index.css                    # Tailwind CSS directives, typography, and print styles
```

---

## ✏️ How to Customise with Your Authentic Practicum Documents

All content is cleanly separated from presentation. You can update your entire portfolio without altering any UI components:

### 1. Update Candidate Information
Open [`src/data/teacherProfile.ts`](src/data/teacherProfile.ts):
- Change `name`, `university`, `degree`, and `internshipSchool`.
- Update your bio and personal teaching quote.
- Replace the avatar placeholder in [`src/pages/Home.tsx`](src/pages/Home.tsx) with your real photograph by placing an image file into `src/assets/` or `public/`.

### 2. Add or Edit Lesson Plans
Open [`src/data/lessonPlansData.ts`](src/data/lessonPlansData.ts):
- Each lesson supports: `grade`, `learnerLevel`, `languageSkill`, `languageFocus`, `activityType`, `intendedLearningOutcomes`, `procedure` (with columns for stage, time, teacher activity, learner activity, interaction pattern, and assessment), `resources`, and `reflection`.
- You can add as many lesson plans as you conducted during your internship.

### 3. Attach Official Observation Form Scans
Open [`src/data/observationFormsData.ts`](src/data/observationFormsData.ts):
- Update the observer names, dates, lesson topics, and criteria ratings to match your school documents.
- Place your scanned PDF observation forms into `public/documents/` (e.g., `public/documents/Observation_Form_01.pdf`).
- Update the `officialDocumentName` property to link directly to your scanned document.

### 4. Customise Reflective Logs (Gibbs Framework)
Open [`src/data/reflectionsData.ts`](src/data/reflectionsData.ts):
- Insert your weekly practicum reflections structured into Gibbs' 5 stages:
  1. *Situation* (What happened)
  2. *What Went Well & What Did Not* (Evaluation)
  3. *Why the Outcome Occurred* (Pedagogical Analysis)
  4. *What I Learned* (Insight)
  5. *Future Action Plan* (Changes for subsequent lessons)

### 5. Customise Teaching Philosophy & References
Open [`src/data/philosophyData.ts`](src/data/philosophyData.ts):
- Add personal anecdotes or modify the 6 pillars.
- Update or expand the APA 7th edition reference list with your own cited pedagogical texts.

---

## 🖨️ Print & PDF Exporting

The website includes dedicated print stylesheets (`@media print` in `src/index.css`):
- Navigation menus and interactive filter bars are automatically hidden during printing.
- Lesson plan procedural sequence tables, observation forms, and the portfolio summary format seamlessly onto standard A4 paper or PDF export.
- Evaluators can click the **"Print / Save PDF"** button on any lesson or observation page to save an official document copy.
