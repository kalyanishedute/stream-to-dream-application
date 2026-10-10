import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { QuizPage } from './pages/QuizPage';
import { ResultsPage } from './pages/ResultsPage';
import { ExploreStreamsPage } from './pages/ExploreStreamsPage';
import { StreamDetailPage } from './pages/StreamDetailPage';
import { CareersPage } from './pages/CareersPage';
import { CareerDetailPage } from './pages/CareerDetailPage';
import { CoursesPage } from './pages/CoursesPage';
import { EntranceExamsPage } from './pages/EntranceExamsPage';
import { CompareCareersPage } from './pages/CompareCareersPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { FAQPage } from './pages/FAQPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyTermsPage } from './pages/PrivacyTermsPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-slate-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/streams" element={<ExploreStreamsPage />} />
          <Route path="/streams/:streamId" element={<StreamDetailPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:careerId" element={<CareerDetailPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/entrance-exams" element={<EntranceExamsPage />} />
          <Route path="/compare" element={<CompareCareersPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-terms" element={<PrivacyTermsPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
