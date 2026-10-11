import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  BookOpen, 
  BookMarked, 
  ClipboardCheck, 
  MessageSquare, 
  GraduationCap, 
  Database, 
  LogOut, 
  ExternalLink, 
  Plus, 
  Pencil, 
  Trash2, 
  Save, 
  Download, 
  Upload, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Search, 
  Users, 
  Award, 
  Sparkles,
  ChevronRight,
  Camera
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import type { 
  LessonPlan, 
  ReflectionEntry, 
  ObservationForm, 
  Testimonial, 
  TeachingPhilosophyPillar, 
  TeacherProfile 
} from '../../types';

type TabType = 'overview' | 'profile' | 'photos' | 'lessons' | 'reflections' | 'observations' | 'testimonials' | 'philosophy' | 'backup';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { 
    profile, 
    updateProfile, 
    lessonPlans, 
    addLessonPlan, 
    updateLessonPlan, 
    deleteLessonPlan,
    reflections, 
    addReflection, 
    updateReflection, 
    deleteReflection,
    observationForms, 
    updateObservationForm,
    testimonials, 
    addTestimonial, 
    updateTestimonial, 
    deleteTestimonial,
    philosophyPillars, 
    updatePhilosophyPillar,
    exportPortfolioData, 
    importPortfolioData, 
    resetToDefaults 
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogout = () => {
    localStorage.removeItem('sandali_admin_authenticated');
    localStorage.removeItem('sandali_admin_user');
    navigate('/admin/login');
  };

  // ===================== PROFILE STATE =====================
  const [profileForm, setProfileForm] = useState<TeacherProfile>(profile);
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    showToast('Candidate Profile updated successfully!');
  };

  // ===================== PHOTO & MEDIA HANDLERS =====================
  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        const updated = { ...profileForm, portraitImage: dataUrl };
        setProfileForm(updated);
        updateProfile({ ...profile, portraitImage: dataUrl });
        showToast('Teacher Portrait photo updated and saved!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClassroomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        const updated = { ...profileForm, classroomImage: dataUrl };
        setProfileForm(updated);
        updateProfile({ ...profile, classroomImage: dataUrl });
        showToast('Classroom Session photo updated and saved!');
      }
    };
    reader.readAsDataURL(file);
  };

  const selectPresetPortrait = (presetPath: string) => {
    const updated = { ...profileForm, portraitImage: presetPath };
    setProfileForm(updated);
    updateProfile({ ...profile, portraitImage: presetPath });
    showToast('Portrait updated to selected preset!');
  };

  const selectPresetClassroom = (presetPath: string) => {
    const updated = { ...profileForm, classroomImage: presetPath };
    setProfileForm(updated);
    updateProfile({ ...profile, classroomImage: presetPath });
    showToast('Classroom photo updated to selected preset!');
  };

  // ===================== LESSON PLAN MODAL / STATE =====================
  const [lessonSearch, setLessonSearch] = useState('');
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);
  const [lessonForm, setLessonForm] = useState<Partial<LessonPlan>>({
    id: '',
    title: '',
    grade: 'Grade 10',
    learnerLevel: 'Intermediate',
    languageSkill: 'Reading',
    languageFocus: 'Vocabulary',
    activityType: 'Task-Based',
    date: new Date().toISOString().split('T')[0],
    duration: '45 mins',
    numberOfLearners: 35,
    learnerProfile: 'Bilingual / ESL learners',
    rationale: '',
    competencies: [],
    competencyLevels: [],
    intendedLearningOutcomes: [],
    assumptions: [],
    anticipatedProblems: [],
    personalTeachingAims: [],
    procedure: [],
    resources: [],
    reflection: {
      whatWorked: '',
      challenges: '',
      learnerResponses: '',
      feedbackReceived: '',
      changesPlanned: ''
    }
  });

  const openNewLessonModal = () => {
    const newId = `lp-g${Math.floor(Math.random() * 5) + 6}-${Date.now().toString().slice(-4)}`;
    setEditingLessonId(null);
    setLessonForm({
      id: newId,
      title: '',
      grade: 'Grade 10',
      learnerLevel: 'Intermediate',
      languageSkill: 'Reading',
      languageFocus: 'Communicative Task',
      activityType: 'Task-Based',
      date: new Date().toISOString().split('T')[0],
      duration: '45 mins',
      numberOfLearners: 34,
      learnerProfile: 'Sri Lankan state school Grade 10 learners (Mixed-ability)',
      rationale: 'Promote authentic communication and scaffolding.',
      competencies: ['Competency 5: Extracts general and specific information'],
      competencyLevels: ['Level 5.2'],
      intendedLearningOutcomes: ['Learners will be able to skim and scan text effectively.'],
      assumptions: ['Learners are familiar with basic sentence structures.'],
      anticipatedProblems: [{ problem: 'Reluctance to speak in English', solution: 'Provide sentence stems and pair-share' }],
      personalTeachingAims: ['Reduce Teacher Talking Time (TTT) below 30%'],
      procedure: [
        {
          stage: 'Warmer / Lead-in',
          timeMinutes: '5 mins',
          teacherActivity: 'Shows realia visual stimuli and elicits key vocabulary.',
          learnerActivity: 'Observe and call out descriptive terms in pairs.',
          interactionPattern: 'T-S',
          resources: 'Flashcards',
          assessment: 'Diagnostic check',
          feedback: 'Oral praise and correction'
        },
        {
          stage: 'While-Task Practice',
          timeMinutes: '20 mins',
          teacherActivity: 'Monitors pairs and facilitates peer checks.',
          learnerActivity: 'Complete graphic organizer based on text.',
          interactionPattern: 'Pair Work',
          resources: 'Worksheet 01',
          assessment: 'Formative observation',
          feedback: 'Peer feedback checklist'
        },
        {
          stage: 'Post-Task Production',
          timeMinutes: '15 mins',
          teacherActivity: 'Conducts gallery walk and whole-class consolidation.',
          learnerActivity: 'Present findings to group.',
          interactionPattern: 'Group Work',
          resources: 'Chart paper',
          assessment: 'Rubric check',
          feedback: 'Delayed error correction'
        },
        {
          stage: 'Wrap-up & Exit Slip',
          timeMinutes: '5 mins',
          teacherActivity: 'Assigns 3-2-1 exit slips.',
          learnerActivity: 'Submit summary slip.',
          interactionPattern: 'Individual',
          resources: 'Sticky notes',
          assessment: 'Summative exit slip',
          feedback: 'Collected for review'
        }
      ],
      resources: [],
      reflection: {
        whatWorked: 'High student participation during pair task.',
        challenges: 'Pacing needed 3 extra minutes during production.',
        learnerResponses: 'Students actively engaged with the realia.',
        feedbackReceived: 'Mentor teacher commended scaffolding.',
        changesPlanned: 'Allocate strict time limits with visual timer.'
      }
    });
    setIsLessonModalOpen(true);
  };

  const openEditLessonModal = (lesson: LessonPlan) => {
    setEditingLessonId(lesson.id);
    setLessonForm({ ...lesson });
    setIsLessonModalOpen(true);
  };

  const handleLessonSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lessonForm.title || !lessonForm.id) {
      alert('Please provide a lesson title and ID.');
      return;
    }

    if (editingLessonId) {
      updateLessonPlan(editingLessonId, lessonForm as LessonPlan);
      showToast(`Lesson "${lessonForm.title}" updated successfully.`);
    } else {
      addLessonPlan(lessonForm as LessonPlan);
      showToast(`New lesson "${lessonForm.title}" added to portfolio.`);
    }
    setIsLessonModalOpen(false);
  };

  const handleLessonDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete lesson plan "${title}"?`)) {
      deleteLessonPlan(id);
      showToast(`Lesson "${title}" deleted.`);
    }
  };

  // ===================== REFLECTIONS MODAL / STATE =====================
  const [isReflectionModalOpen, setIsReflectionModalOpen] = useState(false);
  const [editingReflId, setEditingReflId] = useState<string | null>(null);
  const [reflForm, setReflForm] = useState<Partial<ReflectionEntry>>({
    id: '',
    weekNumber: 1,
    date: new Date().toISOString().split('T')[0],
    title: '',
    grade: 'Grade 10',
    competency: 'Classroom Management',
    context: '',
    gibbs: {
      situation: '',
      whatWentWell: [''],
      whatDidNot: [''],
      whyOutcomeOccurred: '',
      whatLearned: '',
      futureActionPlan: ''
    },
    tags: ['Classroom Management']
  });

  const openNewReflectionModal = () => {
    setEditingReflId(null);
    setReflForm({
      id: `refl-w${reflections.length + 1}-${Date.now().toString().slice(-4)}`,
      weekNumber: reflections.length + 1,
      date: new Date().toISOString().split('T')[0],
      title: '',
      grade: 'Grade 10',
      competency: 'Communicative Pedagogy & Scaffolding',
      context: 'British Way English Academy, Kiribathgoda',
      gibbs: {
        situation: '',
        whatWentWell: ['Pacing was maintained smoothly.'],
        whatDidNot: ['Some low-proficiency students were hesitant to speak.'],
        whyOutcomeOccurred: 'Insufficient pre-teaching of vocabulary led to anxiety.',
        whatLearned: 'Visual vocabulary banks before group work increase confidence.',
        futureActionPlan: 'Introduce bilingual glossaries and structured speaking sentence stems.'
      },
      tags: ['Reflective Practice', 'ESL Pedagogy']
    });
    setIsReflectionModalOpen(true);
  };

  const openEditReflectionModal = (refl: ReflectionEntry) => {
    setEditingReflId(refl.id);
    setReflForm({ ...refl });
    setIsReflectionModalOpen(true);
  };

  const handleReflectionSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflForm.title || !reflForm.id) {
      alert('Please enter a title for the reflection.');
      return;
    }

    if (editingReflId) {
      updateReflection(editingReflId, reflForm as ReflectionEntry);
      showToast(`Week ${reflForm.weekNumber} reflection updated.`);
    } else {
      addReflection(reflForm as ReflectionEntry);
      showToast(`New reflection added for Week ${reflForm.weekNumber}.`);
    }
    setIsReflectionModalOpen(false);
  };

  const handleReflectionDelete = (id: string, week: number) => {
    if (window.confirm(`Are you sure you want to delete Week ${week} reflection?`)) {
      deleteReflection(id);
      showToast(`Week ${week} reflection removed.`);
    }
  };

  // ===================== OBSERVATION FORMS STATE =====================
  const [selectedObsIndex, setSelectedObsIndex] = useState(0);
  const activeObsForm = observationForms[selectedObsIndex] || observationForms[0];
  const [obsFormDraft, setObsFormDraft] = useState<ObservationForm>(activeObsForm);

  const handleObsFormSwitch = (index: number) => {
    setSelectedObsIndex(index);
    setObsFormDraft(observationForms[index]);
  };

  const handleObsSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (obsFormDraft) {
      updateObservationForm(obsFormDraft.id, obsFormDraft);
      showToast(`Observation Form ${obsFormDraft.formNumber} updated successfully!`);
    }
  };

  // ===================== TESTIMONIALS MODAL / STATE =====================
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [editingTestId, setEditingTestId] = useState<string | null>(null);
  const [testForm, setTestForm] = useState<Partial<Testimonial>>({
    id: '',
    name: '',
    role: '',
    institution: '',
    relationship: '',
    date: new Date().toISOString().split('T')[0],
    quote: '',
    initials: '',
    tag: 'Mentor',
    verified: true
  });

  const openNewTestimonialModal = () => {
    setEditingTestId(null);
    setTestForm({
      id: `test-${Date.now().toString().slice(-4)}`,
      name: '',
      role: 'Senior English Teacher',
      institution: 'British Way English Academy, Kiribathgoda',
      relationship: 'Internship Supervisor',
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      quote: '',
      initials: 'AB',
      tag: 'Supervisor',
      verified: true
    });
    setIsTestimonialModalOpen(true);
  };

  const openEditTestimonialModal = (t: Testimonial) => {
    setEditingTestId(t.id);
    setTestForm({ ...t });
    setIsTestimonialModalOpen(true);
  };

  const handleTestimonialSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testForm.name || !testForm.quote) {
      alert('Please fill out Name and Endorsement Quote.');
      return;
    }
    const computedInitials = testForm.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'TR';
    const complete = { ...testForm, initials: testForm.initials || computedInitials } as Testimonial;

    if (editingTestId) {
      updateTestimonial(editingTestId, complete);
      showToast(`Endorsement from "${complete.name}" updated.`);
    } else {
      addTestimonial(complete);
      showToast(`New endorsement from "${complete.name}" added.`);
    }
    setIsTestimonialModalOpen(false);
  };

  const handleTestimonialDelete = (id: string, name: string) => {
    if (window.confirm(`Delete endorsement from "${name}"?`)) {
      deleteTestimonial(id);
      showToast(`Testimonial from "${name}" removed.`);
    }
  };

  // ===================== PHILOSOPHY PILLARS STATE =====================
  const [editingPillarIndex, setEditingPillarIndex] = useState(0);
  const activePillar = philosophyPillars[editingPillarIndex] || philosophyPillars[0];
  const [pillarDraft, setPillarDraft] = useState<TeachingPhilosophyPillar>(activePillar);

  const handlePillarSwitch = (idx: number) => {
    setEditingPillarIndex(idx);
    setPillarDraft(philosophyPillars[idx]);
  };

  const handlePillarSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (pillarDraft) {
      updatePhilosophyPillar(pillarDraft.id, pillarDraft);
      showToast(`Philosophy Pillar "${pillarDraft.title}" updated!`);
    }
  };

  // ===================== DATA BACKUP & RESTORE =====================
  const handleExportData = () => {
    const jsonStr = exportPortfolioData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sandali_edirisinghe_portfolio_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Portfolio JSON Backup downloaded successfully!');
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importPortfolioData(content);
        if (success) {
          showToast('Data restored successfully from backup!');
          // Refresh forms
          setTimeout(() => window.location.reload(), 1000);
        } else {
          alert('Failed to parse the backup file. Please make sure it is a valid portfolio JSON export.');
        }
      }
    };
    reader.readAsText(file);
  };

  const handleResetData = () => {
    if (window.confirm('WARNING: Are you sure you want to reset all portfolio data back to official practicum defaults? Any unsaved edits will be replaced.')) {
      resetToDefaults();
      showToast('All portfolio sections have been reset to factory defaults.');
      setTimeout(() => window.location.reload(), 1000);
    }
  };

  const filteredLessons = lessonPlans.filter(l => 
    l.title.toLowerCase().includes(lessonSearch.toLowerCase()) ||
    l.grade.toLowerCase().includes(lessonSearch.toLowerCase()) ||
    l.languageSkill.toLowerCase().includes(lessonSearch.toLowerCase()) ||
    l.languageFocus.toLowerCase().includes(lessonSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col font-sans text-charcoal-900">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-forest-900 text-ivory-100 px-5 py-3 rounded-xl shadow-2xl border border-forest-700 flex items-center gap-3 animate-fade-in text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-sage-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="bg-forest-900 text-ivory-100 sticky top-0 z-40 border-b border-forest-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-forest-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-base border border-forest-700 shadow-inner">
              SS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base text-white tracking-wide">
                  {profile.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-forest-800 text-sage-300 border border-forest-700">
                  Admin CMS
                </span>
              </div>
              <p className="text-xs text-sage-300">
                English Teaching Practicum E-Portfolio Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              to="/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800/80 hover:bg-forest-700 text-sage-200 hover:text-white text-xs font-semibold border border-forest-700/60 transition-colors"
              title="Open public portfolio website in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Live Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-200 text-xs font-semibold border border-red-900/50 transition-colors"
              title="Sign out of Admin session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Nav */}
        <aside className="lg:col-span-3 space-y-2">
          <div className="bg-white rounded-2xl border border-ivory-300 p-3 shadow-sm">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'overview' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard Overview</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'overview' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'profile' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4" />
                  <span>Candidate Profile</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'profile' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>

              <button
                onClick={() => setActiveTab('photos')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'photos' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Camera className="w-4 h-4" />
                  <span>Photos & Media</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'photos' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>

              <button
                onClick={() => setActiveTab('lessons')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'lessons' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Lesson Plans ({lessonPlans.length})</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'lessons' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>

              <button
                onClick={() => setActiveTab('reflections')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'reflections' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <BookMarked className="w-4 h-4" />
                  <span>Reflections ({reflections.length})</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'reflections' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>

              <button
                onClick={() => setActiveTab('observations')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'observations' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Observation Forms (0{observationForms.length})</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'observations' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>

              <button
                onClick={() => setActiveTab('testimonials')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'testimonials' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4" />
                  <span>Endorsements ({testimonials.length})</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'testimonials' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>

              <button
                onClick={() => setActiveTab('philosophy')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'philosophy' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Teaching Philosophy ({philosophyPillars.length})</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'philosophy' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>

              <button
                onClick={() => setActiveTab('backup')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'backup' 
                    ? 'bg-forest-800 text-white shadow-sm' 
                    : 'text-charcoal-700 hover:bg-ivory-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4" />
                  <span>Backup & Data Tools</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${activeTab === 'backup' ? 'text-white' : 'text-charcoal-400'}`} />
              </button>
            </nav>
          </div>

          {/* Quick Info Box */}
          <div className="bg-forest-50 border border-forest-200/80 rounded-2xl p-4 text-xs space-y-2 text-forest-900">
            <div className="flex items-center gap-1.5 font-bold text-forest-950">
              <Sparkles className="w-4 h-4 text-terracotta-600" />
              <span>Real-Time Persistence</span>
            </div>
            <p className="text-forest-800/80 text-[11px] leading-relaxed">
              All modifications are automatically saved to your browser’s local database and reflect live on the public site immediately.
            </p>
          </div>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9">

          {/* ===================== TAB: OVERVIEW ===================== */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-serif font-bold text-forest-900">Practicum Dashboard</h1>
                <p className="text-xs text-charcoal-600 mt-1">
                  Manage curriculum artifacts, rubric scores, and candidate portfolio content.
                </p>
              </div>

              {/* Quick Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-ivory-300 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-charcoal-500 uppercase">Lesson Plans</span>
                    <BookOpen className="w-4 h-4 text-forest-700" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-forest-900">{lessonPlans.length}</div>
                  <p className="text-[11px] text-charcoal-500 mt-1">Grades 6–11 covered</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-ivory-300 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-charcoal-500 uppercase">Reflections</span>
                    <BookMarked className="w-4 h-4 text-forest-700" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-forest-900">{reflections.length}</div>
                  <p className="text-[11px] text-charcoal-500 mt-1">Gibbs 5-Stage logs</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-ivory-300 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-charcoal-500 uppercase">Observation</span>
                    <Award className="w-4 h-4 text-forest-700" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-forest-900">
                    {observationForms[1]?.scoresSummary?.overall || '96%'}
                  </div>
                  <p className="text-[11px] text-charcoal-500 mt-1">Grade 'A' Outstanding</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-ivory-300 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-charcoal-500 uppercase">Endorsements</span>
                    <Users className="w-4 h-4 text-forest-700" />
                  </div>
                  <div className="text-2xl font-serif font-bold text-forest-900">{testimonials.length}</div>
                  <p className="text-[11px] text-charcoal-500 mt-1">Mentors & Lecturers</p>
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-4">
                <h3 className="font-serif font-bold text-base text-forest-900">Direct Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={openNewLessonModal}
                    className="flex items-center gap-3 p-3 rounded-xl border border-forest-200 bg-forest-50/60 hover:bg-forest-100/80 text-forest-900 text-xs font-bold text-left transition-colors"
                  >
                    <div className="p-2 bg-forest-800 text-white rounded-lg">
                      <Plus className="w-4 h-4" />
                    </div>
                    <div>
                      <div>Add New Lesson Plan</div>
                      <div className="text-[10px] text-forest-700 font-normal">Add procedural sequences & materials</div>
                    </div>
                  </button>

                  <button
                    onClick={openNewReflectionModal}
                    className="flex items-center gap-3 p-3 rounded-xl border border-forest-200 bg-forest-50/60 hover:bg-forest-100/80 text-forest-900 text-xs font-bold text-left transition-colors"
                  >
                    <div className="p-2 bg-forest-800 text-white rounded-lg">
                      <Plus className="w-4 h-4" />
                    </div>
                    <div>
                      <div>Add Gibbs Reflection</div>
                      <div className="text-[10px] text-forest-700 font-normal">Document weekly teaching insights</div>
                    </div>
                  </button>

                  <button
                    onClick={handleExportData}
                    className="flex items-center gap-3 p-3 rounded-xl border border-forest-200 bg-forest-50/60 hover:bg-forest-100/80 text-forest-900 text-xs font-bold text-left transition-colors"
                  >
                    <div className="p-2 bg-forest-800 text-white rounded-lg">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <div>Backup Portfolio Data</div>
                      <div className="text-[10px] text-forest-700 font-normal">Save full JSON state to local drive</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Practicum Profile Snapshot */}
              <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-forest-900">Current Candidate Dossier</h3>
                  <button 
                    onClick={() => setActiveTab('profile')} 
                    className="text-xs text-forest-800 font-bold hover:underline"
                  >
                    Edit Profile
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-charcoal-700">
                  <div className="p-3 bg-ivory-100 rounded-xl space-y-1">
                    <span className="font-bold text-charcoal-500 uppercase text-[10px]">Candidate Full Name</span>
                    <p className="font-semibold text-forest-900 text-sm">{profile.name}</p>
                    <p className="text-charcoal-600">{profile.role}</p>
                  </div>
                  <div className="p-3 bg-ivory-100 rounded-xl space-y-1">
                    <span className="font-bold text-charcoal-500 uppercase text-[10px]">Academic Affiliation</span>
                    <p className="font-semibold text-forest-900 text-sm">{profile.degree}</p>
                    <p className="text-charcoal-600">{profile.faculty}, {profile.university}</p>
                  </div>
                  <div className="p-3 bg-ivory-100 rounded-xl space-y-1">
                    <span className="font-bold text-charcoal-500 uppercase text-[10px]">Placement School</span>
                    <p className="font-semibold text-forest-900 text-sm">{profile.internshipSchool}</p>
                    <p className="text-charcoal-600">Duration: {profile.internshipDuration}</p>
                  </div>
                  <div className="p-3 bg-ivory-100 rounded-xl space-y-1">
                    <span className="font-bold text-charcoal-500 uppercase text-[10px]">Contact & Records</span>
                    <p className="font-semibold text-forest-900 text-sm">{profile.email}</p>
                    <p className="text-charcoal-600">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===================== TAB: PROFILE ===================== */}
          {activeTab === 'profile' && (
            <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-ivory-200 pb-4">
                <div>
                  <h2 className="text-xl font-serif font-bold text-forest-900">Candidate Profile & Information</h2>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Update student teacher identity, institutional affiliations, placement details, and headline statement.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleProfileSubmit}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
                >
                  <Save className="w-4 h-4" />
                  Save Profile
                </button>
              </div>

              {/* Photo Preview Strip */}
              <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-300 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={profileForm.portraitImage || '/images/sandali_portrait.jpg'}
                    alt="Current Portrait"
                    className="w-12 h-14 object-cover object-top rounded-xl border border-forest-300 shadow-2xs"
                  />
                  <div>
                    <span className="font-bold text-forest-950 block text-xs">Profile & Classroom Photos</span>
                    <span className="text-[11px] text-charcoal-600 block">
                      Portrait: {profileForm.portraitImage?.startsWith('data:') ? 'Custom Uploaded Photo' : (profileForm.portraitImage || 'Default Portrait')}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('photos')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-2xs shrink-0 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Change Photos</span>
                </button>
              </div>

              <form onSubmit={handleProfileSubmit} className="space-y-6 text-xs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileForm.name}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Professional Role / Title
                    </label>
                    <input
                      type="text"
                      value={profileForm.role}
                      onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Degree Program
                    </label>
                    <input
                      type="text"
                      value={profileForm.degree}
                      onChange={(e) => setProfileForm({ ...profileForm, degree: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Faculty / Department
                    </label>
                    <input
                      type="text"
                      value={profileForm.faculty}
                      onChange={(e) => setProfileForm({ ...profileForm, faculty: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      University
                    </label>
                    <input
                      type="text"
                      value={profileForm.university}
                      onChange={(e) => setProfileForm({ ...profileForm, university: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Placement School
                    </label>
                    <input
                      type="text"
                      value={profileForm.internshipSchool}
                      onChange={(e) => setProfileForm({ ...profileForm, internshipSchool: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Internship Duration
                    </label>
                    <input
                      type="text"
                      value={profileForm.internshipDuration}
                      onChange={(e) => setProfileForm({ ...profileForm, internshipDuration: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Personal Headline (Hero Subtitle)
                  </label>
                  <input
                    type="text"
                    value={profileForm.personalHeadline}
                    onChange={(e) => setProfileForm({ ...profileForm, personalHeadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Professional Teaching Statement
                  </label>
                  <textarea
                    rows={4}
                    value={profileForm.statement}
                    onChange={(e) => setProfileForm({ ...profileForm, statement: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Extended Biography (About Page)
                  </label>
                  <textarea
                    rows={5}
                    value={profileForm.overviewBio}
                    onChange={(e) => setProfileForm({ ...profileForm, overviewBio: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-forest-800 text-xs"
                  />
                </div>

                <div className="pt-4 border-t border-ivory-200 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
                  >
                    <Save className="w-4 h-4" />
                    Save All Profile Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ===================== TAB: PHOTOS & MEDIA ===================== */}
          {activeTab === 'photos' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-serif font-bold text-forest-900">Photos & Visual Media Manager</h2>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Upload your own photos or switch between curated professional presets for portrait and classroom evidence.
                  </p>
                </div>
                <Link
                  to="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-forest-50 text-forest-800 border border-forest-200 text-xs font-bold hover:bg-forest-100 transition-colors shadow-2xs shrink-0 self-start sm:self-auto"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Preview On Live Site</span>
                </Link>
              </div>

              {/* 1. Candidate Portrait Card */}
              <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-ivory-200 pb-3">
                  <div>
                    <h3 className="font-serif font-bold text-base text-forest-900">1. Teacher Portrait Photo</h3>
                    <p className="text-[11px] text-charcoal-500">
                      Displayed on the Homepage Hero card, Dossier, and About Me biography section.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-forest-100 text-forest-800 font-bold w-fit">
                    Aspect Ratio: 3:4 or 1:1
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Current Active Preview */}
                  <div className="md:col-span-4 space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-500 block">
                      Current Active Portrait
                    </span>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-forest-300 shadow-md group aspect-[3/4] bg-ivory-100">
                      <img
                        src={profileForm.portraitImage || '/images/sandali_portrait.jpg'}
                        alt="Current Portrait Preview"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-forest-900/80 text-white text-[10px] font-bold backdrop-blur-xs">
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Options & Controls */}
                  <div className="md:col-span-8 space-y-5">
                    
                    {/* Upload from Computer */}
                    <div className="p-4 rounded-xl border border-forest-200 bg-forest-50/50 space-y-2">
                      <span className="font-bold text-forest-900 text-xs block">
                        Option A: Upload Your Own Photo from Device
                      </span>
                      <p className="text-[11px] text-charcoal-600">
                        Choose any picture from your computer or phone (JPG, PNG, WebP). It updates instantly across all portfolio pages.
                      </p>
                      <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer">
                        <Upload className="w-4 h-4 text-sage-200" />
                        <span>Choose Photo from Computer</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePortraitUpload}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Presets Gallery */}
                    <div className="space-y-2.5">
                      <span className="font-bold text-forest-900 text-xs block">
                        Option B: Select from Curated Presets
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        
                        {/* Preset 1 */}
                        <button
                          type="button"
                          onClick={() => selectPresetPortrait('/images/sandali_portrait.jpg')}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            (profileForm.portraitImage === '/images/sandali_portrait.jpg' || !profileForm.portraitImage)
                              ? 'border-forest-700 bg-forest-100/60 ring-2 ring-forest-700/30'
                              : 'border-ivory-300 hover:border-forest-300 bg-white'
                          }`}
                        >
                          <img
                            src="/images/sandali_portrait.jpg"
                            alt="Preset 1"
                            className="w-12 h-14 object-cover rounded-lg border border-ivory-300 shadow-2xs shrink-0"
                          />
                          <div>
                            <span className="font-bold text-forest-950 text-xs block">Preset 1: Studio Portrait</span>
                            <span className="text-[10px] text-charcoal-500 block">Formal academic setting</span>
                          </div>
                        </button>

                        {/* Preset 2 */}
                        <button
                          type="button"
                          onClick={() => selectPresetPortrait('/images/sandali_portrait_alt.jpg')}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            profileForm.portraitImage === '/images/sandali_portrait_alt.jpg'
                              ? 'border-forest-700 bg-forest-100/60 ring-2 ring-forest-700/30'
                              : 'border-ivory-300 hover:border-forest-300 bg-white'
                          }`}
                        >
                          <img
                            src="/images/sandali_portrait_alt.jpg"
                            alt="Preset 2"
                            className="w-12 h-14 object-cover rounded-lg border border-ivory-300 shadow-2xs shrink-0"
                          />
                          <div>
                            <span className="font-bold text-forest-950 text-xs block">Preset 2: Library Portrait</span>
                            <span className="text-[10px] text-charcoal-500 block">Emerald blazer & library</span>
                          </div>
                        </button>

                      </div>
                    </div>

                    {/* Custom URL Input */}
                    <div>
                      <label className="block font-bold text-charcoal-700 uppercase tracking-wider text-[10px] mb-1">
                        Option C: Custom Image URL or Path
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={profileForm.portraitImage || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, portraitImage: e.target.value })}
                          placeholder="/images/sandali_portrait.jpg or https://..."
                          className="flex-1 px-3 py-2 rounded-xl border border-charcoal-200 text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            updateProfile({ ...profile, portraitImage: profileForm.portraitImage });
                            showToast('Portrait image path saved!');
                          }}
                          className="px-3.5 py-2 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* 2. Classroom Session Photo Card */}
              <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-ivory-200 pb-3">
                  <div>
                    <h3 className="font-serif font-bold text-base text-forest-900">2. Classroom Teaching Session Photo</h3>
                    <p className="text-[11px] text-charcoal-500">
                      Displayed on the Homepage Practicum Evidence section.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-forest-100 text-forest-800 font-bold w-fit">
                    Aspect Ratio: 4:3 or 16:9
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Current Active Preview */}
                  <div className="md:col-span-4 space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-500 block">
                      Current Active Classroom Photo
                    </span>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-forest-300 shadow-md group aspect-[4/3] bg-ivory-100">
                      <img
                        src={profileForm.classroomImage || '/images/classroom_session.jpg'}
                        alt="Current Classroom Preview"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-forest-900/80 text-white text-[10px] font-bold backdrop-blur-xs">
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Options & Controls */}
                  <div className="md:col-span-8 space-y-5">
                    
                    {/* Upload from Computer */}
                    <div className="p-4 rounded-xl border border-forest-200 bg-forest-50/50 space-y-2">
                      <span className="font-bold text-forest-900 text-xs block">
                        Option A: Upload Classroom Photo from Device
                      </span>
                      <p className="text-[11px] text-charcoal-600">
                        Upload an authentic photo from your teaching practicum or school observations.
                      </p>
                      <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer">
                        <Upload className="w-4 h-4 text-sage-200" />
                        <span>Choose Classroom Photo from Computer</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleClassroomUpload}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Presets Gallery */}
                    <div className="space-y-2.5">
                      <span className="font-bold text-forest-900 text-xs block">
                        Option B: Select from Curated Presets
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        
                        {/* Preset 1 */}
                        <button
                          type="button"
                          onClick={() => selectPresetClassroom('/images/classroom_session.jpg')}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            (profileForm.classroomImage === '/images/classroom_session.jpg' || !profileForm.classroomImage)
                              ? 'border-forest-700 bg-forest-100/60 ring-2 ring-forest-700/30'
                              : 'border-ivory-300 hover:border-forest-300 bg-white'
                          }`}
                        >
                          <img
                            src="/images/classroom_session.jpg"
                            alt="Classroom Preset 1"
                            className="w-14 h-11 object-cover rounded-lg border border-ivory-300 shadow-2xs shrink-0"
                          />
                          <div>
                            <span className="font-bold text-forest-950 text-xs block">Preset 1: Interactive Boardwork</span>
                            <span className="text-[10px] text-charcoal-500 block">Classroom teaching session</span>
                          </div>
                        </button>

                        {/* Preset 2 */}
                        <button
                          type="button"
                          onClick={() => selectPresetClassroom('/images/classroom_session_alt.jpg')}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            profileForm.classroomImage === '/images/classroom_session_alt.jpg'
                              ? 'border-forest-700 bg-forest-100/60 ring-2 ring-forest-700/30'
                              : 'border-ivory-300 hover:border-forest-300 bg-white'
                          }`}
                        >
                          <img
                            src="/images/classroom_session_alt.jpg"
                            alt="Classroom Preset 2"
                            className="w-14 h-11 object-cover rounded-lg border border-ivory-300 shadow-2xs shrink-0"
                          />
                          <div>
                            <span className="font-bold text-forest-950 text-xs block">Preset 2: Collaborative Group Work</span>
                            <span className="text-[10px] text-charcoal-500 block">Student engagement & desks</span>
                          </div>
                        </button>

                      </div>
                    </div>

                    {/* Custom URL Input */}
                    <div>
                      <label className="block font-bold text-charcoal-700 uppercase tracking-wider text-[10px] mb-1">
                        Option C: Custom Image URL or Path
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={profileForm.classroomImage || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, classroomImage: e.target.value })}
                          placeholder="/images/classroom_session.jpg or https://..."
                          className="flex-1 px-3 py-2 rounded-xl border border-charcoal-200 text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            updateProfile({ ...profile, classroomImage: profileForm.classroomImage });
                            showToast('Classroom image path saved!');
                          }}
                          className="px-3.5 py-2 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ===================== TAB: LESSON PLANS ===================== */}
          {activeTab === 'lessons' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-serif font-bold text-forest-900">Lesson Plans Directory</h2>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Manage pedagogical designs, procedures, competencies, and post-lesson reflections.
                  </p>
                </div>
                <button
                  onClick={openNewLessonModal}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  Add New Lesson Plan
                </button>
              </div>

              {/* Search & Filter Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by lesson title, grade, skill or language focus..."
                  value={lessonSearch}
                  onChange={(e) => setLessonSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-charcoal-200 bg-white text-xs text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              {/* Lesson Plans Table */}
              <div className="bg-white rounded-2xl border border-ivory-300 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-ivory-100 border-b border-ivory-200 text-charcoal-600 font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="py-3 px-4">Lesson Details</th>
                        <th className="py-3 px-4">Skill & Focus</th>
                        <th className="py-3 px-4">Grade & Date</th>
                        <th className="py-3 px-4">Stages</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory-200">
                      {filteredLessons.map((lesson) => (
                        <tr key={lesson.id} className="hover:bg-ivory-50/70 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-forest-900 text-sm">{lesson.title}</div>
                            <div className="text-[11px] text-charcoal-500 font-mono mt-0.5">{lesson.id}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2 py-0.5 rounded-md bg-forest-100 text-forest-800 font-medium text-[11px] mr-1.5 mb-1">
                              {lesson.languageSkill}
                            </span>
                            <span className="inline-block px-2 py-0.5 rounded-md bg-sage-100 text-forest-900 font-medium text-[11px]">
                              {lesson.languageFocus}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-medium text-charcoal-800">{lesson.grade}</div>
                            <div className="text-[11px] text-charcoal-500">{lesson.date}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="text-charcoal-700 font-semibold">{lesson.procedure?.length || 0} stages</span>
                            <div className="text-[11px] text-charcoal-500">{lesson.duration}</div>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <Link
                                to={`/lessons/${lesson.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-charcoal-500 hover:text-forest-800 hover:bg-forest-50 rounded-lg transition-colors"
                                title="Preview Public View"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </Link>
                              <button
                                onClick={() => openEditLessonModal(lesson)}
                                className="p-1.5 text-forest-800 hover:bg-forest-100 rounded-lg transition-colors"
                                title="Edit Lesson Plan"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleLessonDelete(lesson.id, lesson.title)}
                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete Lesson Plan"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredLessons.length === 0 && (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-charcoal-500">
                            No lesson plans found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ===================== TAB: REFLECTIONS ===================== */}
          {activeTab === 'reflections' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-serif font-bold text-forest-900">Weekly Gibbs Reflection Logs</h2>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Manage 10-week reflective practice records following Graham Gibbs’ (1988) cycle.
                  </p>
                </div>
                <button
                  onClick={openNewReflectionModal}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  Add Reflection Log
                </button>
              </div>

              <div className="space-y-4">
                {reflections.map((refl) => (
                  <div key={refl.id} className="bg-white p-5 rounded-2xl border border-ivory-300 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-forest-800 text-white font-bold text-[10px] uppercase">
                          Week {refl.weekNumber}
                        </span>
                        <span className="text-xs font-semibold text-charcoal-500">{refl.date}</span>
                        <span className="text-xs font-medium text-forest-700 bg-forest-50 px-2 py-0.5 rounded-md border border-forest-200">
                          {refl.grade} • {refl.competency}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-forest-900 text-base">{refl.title}</h3>
                      <p className="text-xs text-charcoal-700 line-clamp-2">
                        {refl.gibbs.situation}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {refl.tags?.map((tag, i) => (
                          <span key={i} className="text-[10px] bg-ivory-200 text-charcoal-700 px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center md:flex-col gap-2 shrink-0">
                      <button
                        onClick={() => openEditReflectionModal(refl)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-50 hover:bg-forest-100 text-forest-800 text-xs font-bold transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleReflectionDelete(refl.id, refl.weekNumber)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===================== TAB: OBSERVATIONS ===================== */}
          {activeTab === 'observations' && (
            <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-200 pb-4">
                <div>
                  <h2 className="text-xl font-serif font-bold text-forest-900">Observation Evaluation Forms</h2>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Edit official supervisor feedback, evaluation scores, rubric commendations, and post-observation actions.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleObsSave}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm self-start sm:self-auto"
                >
                  <Save className="w-4 h-4" />
                  Save Observation Form
                </button>
              </div>

              {/* Form Switcher Tabs */}
              <div className="flex gap-2">
                {observationForms.map((obs, idx) => (
                  <button
                    key={obs.id}
                    onClick={() => handleObsFormSwitch(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedObsIndex === idx
                        ? 'bg-forest-800 text-white shadow-sm'
                        : 'bg-ivory-100 text-charcoal-700 hover:bg-ivory-200'
                    }`}
                  >
                    Form 0{obs.formNumber}: {obs.title}
                  </button>
                ))}
              </div>

              {obsFormDraft && (
                <form onSubmit={handleObsSave} className="space-y-6 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                        Form Title / Phase
                      </label>
                      <input
                        type="text"
                        value={obsFormDraft.title}
                        onChange={(e) => setObsFormDraft({ ...obsFormDraft, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                        Lesson Topic
                      </label>
                      <input
                        type="text"
                        value={obsFormDraft.lessonTopic}
                        onChange={(e) => setObsFormDraft({ ...obsFormDraft, lessonTopic: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                        Observer Name
                      </label>
                      <input
                        type="text"
                        value={obsFormDraft.observerName}
                        onChange={(e) => setObsFormDraft({ ...obsFormDraft, observerName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                        Observer Designation
                      </label>
                      <input
                        type="text"
                        value={obsFormDraft.observerDesignation}
                        onChange={(e) => setObsFormDraft({ ...obsFormDraft, observerDesignation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                        Grade & Class
                      </label>
                      <input
                        type="text"
                        value={obsFormDraft.gradeClass}
                        onChange={(e) => setObsFormDraft({ ...obsFormDraft, gradeClass: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                        Observation Date
                      </label>
                      <input
                        type="text"
                        value={obsFormDraft.date}
                        onChange={(e) => setObsFormDraft({ ...obsFormDraft, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                      />
                    </div>
                  </div>

                  {/* Scores Summary */}
                  <div className="p-4 bg-ivory-100 rounded-xl border border-ivory-300 space-y-3">
                    <span className="font-bold text-forest-900 uppercase tracking-wider text-[11px] block">
                      Rubric Scores Summary
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-charcoal-600 mb-1">Planning</label>
                        <input
                          type="text"
                          value={obsFormDraft.scoresSummary.planning}
                          onChange={(e) => setObsFormDraft({
                            ...obsFormDraft,
                            scoresSummary: { ...obsFormDraft.scoresSummary, planning: e.target.value }
                          })}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-charcoal-200 text-xs bg-white text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-charcoal-600 mb-1">Execution</label>
                        <input
                          type="text"
                          value={obsFormDraft.scoresSummary.execution}
                          onChange={(e) => setObsFormDraft({
                            ...obsFormDraft,
                            scoresSummary: { ...obsFormDraft.scoresSummary, execution: e.target.value }
                          })}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-charcoal-200 text-xs bg-white text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-charcoal-600 mb-1">Interaction</label>
                        <input
                          type="text"
                          value={obsFormDraft.scoresSummary.interaction}
                          onChange={(e) => setObsFormDraft({
                            ...obsFormDraft,
                            scoresSummary: { ...obsFormDraft.scoresSummary, interaction: e.target.value }
                          })}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-charcoal-200 text-xs bg-white text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-charcoal-600 mb-1">Assessment</label>
                        <input
                          type="text"
                          value={obsFormDraft.scoresSummary.assessment}
                          onChange={(e) => setObsFormDraft({
                            ...obsFormDraft,
                            scoresSummary: { ...obsFormDraft.scoresSummary, assessment: e.target.value }
                          })}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-charcoal-200 text-xs bg-white text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-charcoal-600 mb-1">Overall Mark</label>
                        <input
                          type="text"
                          value={obsFormDraft.scoresSummary.overall}
                          onChange={(e) => setObsFormDraft({
                            ...obsFormDraft,
                            scoresSummary: { ...obsFormDraft.scoresSummary, overall: e.target.value }
                          })}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-forest-400 text-xs bg-forest-50 text-center font-bold text-forest-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Strengths & Commendations (One per line)
                    </label>
                    <textarea
                      rows={4}
                      value={obsFormDraft.strengthsCommendations.join('\n')}
                      onChange={(e) => setObsFormDraft({
                        ...obsFormDraft,
                        strengthsCommendations: e.target.value.split('\n').filter(Boolean)
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Recommendations for Professional Growth (One per line)
                    </label>
                    <textarea
                      rows={4}
                      value={obsFormDraft.recommendations.join('\n')}
                      onChange={(e) => setObsFormDraft({
                        ...obsFormDraft,
                        recommendations: e.target.value.split('\n').filter(Boolean)
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Action Taken Afterwards (Reflective Loop Closure)
                    </label>
                    <textarea
                      rows={4}
                      value={obsFormDraft.actionTakenAfterwards}
                      onChange={(e) => setObsFormDraft({
                        ...obsFormDraft,
                        actionTakenAfterwards: e.target.value
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    />
                  </div>

                  <div className="pt-4 border-t border-ivory-200 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
                    >
                      <Save className="w-4 h-4" />
                      Save Observation Form 0{obsFormDraft.formNumber}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ===================== TAB: TESTIMONIALS ===================== */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-serif font-bold text-forest-900">Stakeholder Testimonials</h2>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Manage written endorsements from university supervisors, mentors, and school principals.
                  </p>
                </div>
                <button
                  onClick={openNewTestimonialModal}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  Add Endorsement
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((t) => (
                  <div key={t.id} className="bg-white p-5 rounded-2xl border border-ivory-300 shadow-sm flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800 font-bold text-[10px] uppercase">
                          {t.tag}
                        </span>
                        <span className="text-[11px] text-charcoal-500">{t.date}</span>
                      </div>
                      <p className="text-xs text-charcoal-700 italic line-clamp-3">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-ivory-200 flex items-center justify-between">
                      <div>
                        <div className="font-serif font-bold text-forest-900 text-sm">{t.name}</div>
                        <div className="text-[11px] text-charcoal-500">{t.role} • {t.institution}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openEditTestimonialModal(t)}
                          className="p-1.5 text-forest-800 hover:bg-forest-50 rounded-lg transition-colors"
                          title="Edit Endorsement"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleTestimonialDelete(t.id, t.name)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Endorsement"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===================== TAB: PHILOSOPHY ===================== */}
          {activeTab === 'philosophy' && (
            <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-200 pb-4">
                <div>
                  <h2 className="text-xl font-serif font-bold text-forest-900">Teaching Philosophy Pillars</h2>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Customize the 6 theoretical pillars, SLA connections, and classroom implementations.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handlePillarSave}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm self-start sm:self-auto"
                >
                  <Save className="w-4 h-4" />
                  Save Pillar
                </button>
              </div>

              {/* Pillar Selector Tabs */}
              <div className="flex flex-wrap gap-2">
                {philosophyPillars.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => handlePillarSwitch(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      editingPillarIndex === idx
                        ? 'bg-forest-800 text-white shadow-sm'
                        : 'bg-ivory-100 text-charcoal-700 hover:bg-ivory-200'
                    }`}
                  >
                    Pillar {idx + 1}: {p.title}
                  </button>
                ))}
              </div>

              {pillarDraft && (
                <form onSubmit={handlePillarSave} className="space-y-5 text-xs">
                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Pillar Title
                    </label>
                    <input
                      type="text"
                      value={pillarDraft.title}
                      onChange={(e) => setPillarDraft({ ...pillarDraft, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Pedagogical Tagline
                    </label>
                    <input
                      type="text"
                      value={pillarDraft.tagline}
                      onChange={(e) => setPillarDraft({ ...pillarDraft, tagline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Theoretical Framework & SLA Rationale
                    </label>
                    <input
                      type="text"
                      value={pillarDraft.theoryLink}
                      onChange={(e) => setPillarDraft({ ...pillarDraft, theoryLink: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Philosophy Description
                    </label>
                    <textarea
                      rows={4}
                      value={pillarDraft.description}
                      onChange={(e) => setPillarDraft({ ...pillarDraft, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                      Classroom Application in Sri Lankan Schools
                    </label>
                    <textarea
                      rows={4}
                      value={pillarDraft.classroomApplication}
                      onChange={(e) => setPillarDraft({ ...pillarDraft, classroomApplication: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    />
                  </div>

                  <div className="pt-4 border-t border-ivory-200 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
                    >
                      <Save className="w-4 h-4" />
                      Save Philosophy Pillar
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ===================== TAB: BACKUP & DATA ===================== */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-ivory-300 shadow-sm space-y-6">
                <div>
                  <h2 className="text-xl font-serif font-bold text-forest-900">Data Management, Backup & Restore</h2>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Export your complete teaching portfolio records to a JSON backup file or restore previously saved data.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Export Box */}
                  <div className="p-5 rounded-2xl border border-forest-200 bg-forest-50/50 space-y-3">
                    <div className="flex items-center gap-2 text-forest-900 font-bold text-sm">
                      <Download className="w-4 h-4 text-forest-800" />
                      <span>Download JSON Backup</span>
                    </div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Download a single, complete backup containing all candidate profiles, lesson plans, Gibbs reflections, observation marks, and testimonials.
                    </p>
                    <button
                      onClick={handleExportData}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-forest-800 text-white rounded-xl text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      Export Portfolio Backup (.json)
                    </button>
                  </div>

                  {/* Import Box */}
                  <div className="p-5 rounded-2xl border border-sage-300 bg-sage-50/50 space-y-3">
                    <div className="flex items-center gap-2 text-forest-900 font-bold text-sm">
                      <Upload className="w-4 h-4 text-forest-800" />
                      <span>Restore from JSON File</span>
                    </div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Upload an exported portfolio JSON file to instantly restore all portfolio entries to this device.
                    </p>
                    <label className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-forest-800/30 text-forest-900 rounded-xl text-xs font-bold hover:bg-forest-50 transition-colors shadow-sm cursor-pointer">
                      <Upload className="w-4 h-4" />
                      <span>Select Backup JSON File</span>
                      <input 
                        type="file" 
                        accept=".json"
                        onChange={handleImportFile}
                        className="hidden" 
                      />
                    </label>
                  </div>
                </div>

                {/* Reset Section */}
                <div className="pt-6 border-t border-ivory-200">
                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-red-900 font-bold text-sm">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span>Reset to Practicum Defaults</span>
                      </div>
                      <p className="text-xs text-red-800/80 mt-1 max-w-xl">
                        Restore all portfolio items back to the official Sri Lankan teaching internship starting curriculum data.
                      </p>
                    </div>
                    <button
                      onClick={handleResetData}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm shrink-0"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset to Defaults
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ===================== MODAL: LESSON PLAN ADD / EDIT ===================== */}
      {isLessonModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-ivory-300 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-fade-in">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-forest-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-sage-300" />
                <h3 className="font-serif font-bold text-base">
                  {editingLessonId ? `Edit Lesson: ${lessonForm.title}` : 'Create New Lesson Plan'}
                </h3>
              </div>
              <button
                onClick={() => setIsLessonModalOpen(false)}
                className="p-1 text-ivory-300 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <form onSubmit={handleLessonSave} className="p-6 overflow-y-auto space-y-5 text-xs flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Lesson Plan Title
                  </label>
                  <input
                    type="text"
                    required
                    value={lessonForm.title || ''}
                    onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    placeholder="e.g. Mastering Cause & Effect Connectors"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Target Grade
                  </label>
                  <input
                    type="text"
                    required
                    value={lessonForm.grade || ''}
                    onChange={(e) => setLessonForm({ ...lessonForm, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    placeholder="e.g. Grade 10"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Primary Language Skill
                  </label>
                  <select
                    value={lessonForm.languageSkill}
                    onChange={(e) => setLessonForm({ ...lessonForm, languageSkill: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs bg-white"
                  >
                    <option value="Reading">Reading</option>
                    <option value="Writing">Writing</option>
                    <option value="Listening">Listening</option>
                    <option value="Speaking">Speaking</option>
                    <option value="Integrated Skills">Integrated Skills</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Language Focus
                  </label>
                  <select
                    value={lessonForm.languageFocus}
                    onChange={(e) => setLessonForm({ ...lessonForm, languageFocus: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs bg-white"
                  >
                    <option value="Grammar">Grammar</option>
                    <option value="Vocabulary">Vocabulary</option>
                    <option value="Pronunciation">Pronunciation</option>
                    <option value="Communicative Task">Communicative Task</option>
                    <option value="Literature & Poetry">Literature & Poetry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={lessonForm.duration || ''}
                    onChange={(e) => setLessonForm({ ...lessonForm, duration: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    placeholder="45 mins"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Number of Learners
                  </label>
                  <input
                    type="number"
                    value={lessonForm.numberOfLearners || 35}
                    onChange={(e) => setLessonForm({ ...lessonForm, numberOfLearners: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Pedagogical Rationale
                </label>
                <textarea
                  rows={3}
                  value={lessonForm.rationale || ''}
                  onChange={(e) => setLessonForm({ ...lessonForm, rationale: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  placeholder="Theoretical background and why this design is appropriate for this learner group."
                />
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Intended Learning Outcomes (One per line)
                </label>
                <textarea
                  rows={3}
                  value={lessonForm.intendedLearningOutcomes?.join('\n') || ''}
                  onChange={(e) => setLessonForm({ 
                    ...lessonForm, 
                    intendedLearningOutcomes: e.target.value.split('\n').filter(Boolean) 
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  placeholder="By the end of the lesson, learners will be able to..."
                />
              </div>

              {/* Reflection Sub-form */}
              <div className="p-4 bg-ivory-100 rounded-xl border border-ivory-300 space-y-3">
                <span className="font-bold text-forest-900 uppercase tracking-wider text-[11px] block">
                  Post-Lesson Reflection Evidence
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-charcoal-600 mb-1">What Worked Well</label>
                    <textarea
                      rows={2}
                      value={lessonForm.reflection?.whatWorked || ''}
                      onChange={(e) => setLessonForm({
                        ...lessonForm,
                        reflection: { ...lessonForm.reflection!, whatWorked: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-lg border border-charcoal-200 text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-charcoal-600 mb-1">Challenges Encountered</label>
                    <textarea
                      rows={2}
                      value={lessonForm.reflection?.challenges || ''}
                      onChange={(e) => setLessonForm({
                        ...lessonForm,
                        reflection: { ...lessonForm.reflection!, challenges: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-lg border border-charcoal-200 text-xs bg-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-charcoal-600 mb-1">Planned Changes for Next Delivery</label>
                    <input
                      type="text"
                      value={lessonForm.reflection?.changesPlanned || ''}
                      onChange={(e) => setLessonForm({
                        ...lessonForm,
                        reflection: { ...lessonForm.reflection!, changesPlanned: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-lg border border-charcoal-200 text-xs bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-ivory-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsLessonModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-charcoal-200 text-charcoal-700 hover:bg-ivory-100 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-forest-800 text-white text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
                >
                  <Save className="w-4 h-4" />
                  Save Lesson Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== MODAL: REFLECTION ADD / EDIT ===================== */}
      {isReflectionModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-ivory-300 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-fade-in">
            <div className="px-6 py-4 bg-forest-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <BookMarked className="w-5 h-5 text-sage-300" />
                <h3 className="font-serif font-bold text-base">
                  {editingReflId ? `Edit Week ${reflForm.weekNumber} Reflection` : 'Add Gibbs Reflective Entry'}
                </h3>
              </div>
              <button
                onClick={() => setIsReflectionModalOpen(false)}
                className="p-1 text-ivory-300 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleReflectionSave} className="p-6 overflow-y-auto space-y-4 text-xs flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Week Number
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    max={20}
                    value={reflForm.weekNumber || 1}
                    onChange={(e) => setReflForm({ ...reflForm, weekNumber: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    value={reflForm.date || ''}
                    onChange={(e) => setReflForm({ ...reflForm, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Target Grade
                  </label>
                  <input
                    type="text"
                    value={reflForm.grade || ''}
                    onChange={(e) => setReflForm({ ...reflForm, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Reflection Title
                </label>
                <input
                  type="text"
                  required
                  value={reflForm.title || ''}
                  onChange={(e) => setReflForm({ ...reflForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  placeholder="e.g. Scaffolding Pair Work in Mixed-Ability Classrooms"
                />
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Gibbs 1: Description of Situation
                </label>
                <textarea
                  rows={3}
                  value={reflForm.gibbs?.situation || ''}
                  onChange={(e) => setReflForm({
                    ...reflForm,
                    gibbs: { ...reflForm.gibbs!, situation: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Gibbs 2: What Went Well (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={reflForm.gibbs?.whatWentWell.join('\n') || ''}
                    onChange={(e) => setReflForm({
                      ...reflForm,
                      gibbs: { ...reflForm.gibbs!, whatWentWell: e.target.value.split('\n').filter(Boolean) }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Gibbs 2: What Did Not Go Well (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={reflForm.gibbs?.whatDidNot.join('\n') || ''}
                    onChange={(e) => setReflForm({
                      ...reflForm,
                      gibbs: { ...reflForm.gibbs!, whatDidNot: e.target.value.split('\n').filter(Boolean) }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Gibbs 3 & 4: Analysis - Why Outcome Occurred
                </label>
                <textarea
                  rows={2}
                  value={reflForm.gibbs?.whyOutcomeOccurred || ''}
                  onChange={(e) => setReflForm({
                    ...reflForm,
                    gibbs: { ...reflForm.gibbs!, whyOutcomeOccurred: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Gibbs 5: Conclusion & What Was Learned
                </label>
                <textarea
                  rows={2}
                  value={reflForm.gibbs?.whatLearned || ''}
                  onChange={(e) => setReflForm({
                    ...reflForm,
                    gibbs: { ...reflForm.gibbs!, whatLearned: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Gibbs 6: Future Action Plan
                </label>
                <textarea
                  rows={2}
                  value={reflForm.gibbs?.futureActionPlan || ''}
                  onChange={(e) => setReflForm({
                    ...reflForm,
                    gibbs: { ...reflForm.gibbs!, futureActionPlan: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                />
              </div>

              <div className="pt-4 border-t border-ivory-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsReflectionModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-charcoal-200 text-charcoal-700 hover:bg-ivory-100 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-forest-800 text-white text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
                >
                  <Save className="w-4 h-4" />
                  Save Reflection Log
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== MODAL: TESTIMONIAL ADD / EDIT ===================== */}
      {isTestimonialModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-ivory-300 shadow-2xl max-w-lg w-full flex flex-col overflow-hidden animate-fade-in">
            <div className="px-6 py-4 bg-forest-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-sage-300" />
                <h3 className="font-serif font-bold text-base">
                  {editingTestId ? `Edit Endorsement` : 'Add New Endorsement'}
                </h3>
              </div>
              <button
                onClick={() => setIsTestimonialModalOpen(false)}
                className="p-1 text-ivory-300 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleTestimonialSave} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Endorser Full Name
                </label>
                <input
                  type="text"
                  required
                  value={testForm.name || ''}
                  onChange={(e) => setTestForm({ ...testForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  placeholder="e.g. Dr. Malini Senaratne"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Designation / Role
                  </label>
                  <input
                    type="text"
                    required
                    value={testForm.role || ''}
                    onChange={(e) => setTestForm({ ...testForm, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                    placeholder="Senior Lecturer in ELT"
                  />
                </div>

                <div>
                  <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Category Tag
                  </label>
                  <select
                    value={testForm.tag}
                    onChange={(e) => setTestForm({ ...testForm, tag: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs bg-white"
                  >
                    <option value="Supervisor">Supervisor</option>
                    <option value="Mentor">Mentor</option>
                    <option value="Teacher-in-Charge">Teacher-in-Charge</option>
                    <option value="Peer">Peer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Institution
                </label>
                <input
                  type="text"
                  value={testForm.institution || ''}
                  onChange={(e) => setTestForm({ ...testForm, institution: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  placeholder="University / School"
                />
              </div>

              <div>
                <label className="block font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Endorsement Statement / Quote
                </label>
                <textarea
                  rows={4}
                  required
                  value={testForm.quote || ''}
                  onChange={(e) => setTestForm({ ...testForm, quote: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-200 text-xs"
                  placeholder="Sandali demonstrated exemplary lesson design..."
                />
              </div>

              <div className="pt-4 border-t border-ivory-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsTestimonialModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-charcoal-200 text-charcoal-700 hover:bg-ivory-100 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-forest-800 text-white text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
                >
                  <Save className="w-4 h-4" />
                  Save Endorsement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
