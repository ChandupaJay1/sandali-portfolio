import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BackToTop } from './components/BackToTop';
import { AssessmentModal } from './components/AssessmentModal';
import { AdminProtectedRoute } from './pages/admin/AdminProtectedRoute';

// Route-level Code Splitting for optimal performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const TeachingPhilosophy = lazy(() => import('./pages/TeachingPhilosophy').then(m => ({ default: m.TeachingPhilosophy })));
const ReflectiveSummary = lazy(() => import('./pages/ReflectiveSummary').then(m => ({ default: m.ReflectiveSummary })));
const LessonPlans = lazy(() => import('./pages/LessonPlans').then(m => ({ default: m.LessonPlans })));
const LessonDetailPage = lazy(() => import('./pages/LessonDetailPage').then(m => ({ default: m.LessonDetailPage })));
const ObservationForms = lazy(() => import('./pages/ObservationForms').then(m => ({ default: m.ObservationForms })));
const Testimonials = lazy(() => import('./pages/Testimonials').then(m => ({ default: m.Testimonials })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Admin Pages
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin').then(m => ({ default: m.AdminLogin })));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));

// Editorial Page Loading Fallback
const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4 text-center">
    <div className="w-12 h-12 rounded-2xl bg-forest-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-lg shadow-sm border border-forest-900 animate-pulse">
      SS
    </div>
    <div className="space-y-1">
      <p className="font-serif font-bold text-forest-900 text-base">Loading Teaching Evidence...</p>
      <p className="text-xs text-charcoal-500 font-sans">English Language Teaching Internship Portfolio</p>
    </div>
    <div className="w-32 h-1 bg-ivory-300 rounded-full overflow-hidden">
      <div className="w-full h-full bg-forest-800 animate-indeterminate"></div>
    </div>
  </div>
);

function AppContent() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-ivory-100 text-charcoal-800 font-sans selection:bg-forest-800 selection:text-ivory-100">
      {/* Sticky Header for Public Routes */}
      {!isAdminRoute && (
        <Navbar onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)} />
      )}

      {/* Main Content Area with Suspense Boundary */}
      <main className="flex-grow">
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)} />} />
            <Route path="/philosophy" element={<TeachingPhilosophy />} />
            <Route path="/reflections" element={<ReflectiveSummary />} />
            <Route path="/lessons" element={<LessonPlans />} />
            <Route path="/lessons/:id" element={<LessonDetailPage />} />
            <Route path="/observations" element={<ObservationForms />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin" 
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              } 
            />

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer for Public Routes */}
      {!isAdminRoute && (
        <Footer onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)} />
      )}

      {/* Assessment Marking Guide Modal for Public Routes */}
      {!isAdminRoute && (
        <AssessmentModal
          isOpen={isAssessmentModalOpen}
          onClose={() => setIsAssessmentModalOpen(false)}
        />
      )}

      {/* Floating Back to Top Button */}
      {!isAdminRoute && <BackToTop />}
    </div>
  );
}

export function App() {
  return (
    <PortfolioProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </PortfolioProvider>
  );
}

export default App;

