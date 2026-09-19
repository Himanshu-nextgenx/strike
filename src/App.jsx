import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SessionCouponProvider } from './context/SessionCouponContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { Home } from './pages/Home';
import { CourseDetail } from './pages/CourseDetail';
import { MembershipDetail } from './pages/MembershipDetail';
import { ComingSoon } from './pages/ComingSoon';
import { NotFound } from './pages/NotFound';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { getCourseById } from './data/courses';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function AppContent() {
  const [getStartedCourseModal, setGetStartedCourseModal] = useState(null);

  return (
    <div className="relative min-h-screen bg-paper text-ink transition-colors duration-250">
      <ScrollToTop />
      <Navbar onOpenGetStarted={() => setGetStartedCourseModal(getCourseById('thunder-web'))} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/membership/:slug" element={<MembershipDetail />} />

          {/* Secondary nav links */}
          <Route path="/practice" element={<ComingSoon />} />
          <Route path="/codearena" element={<ComingSoon />} />
          <Route path="/quiz" element={<ComingSoon />} />
          <Route path="/system-design" element={<ComingSoon />} />
          <Route path="/contests" element={<ComingSoon />} />

          {/* 404 Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <CheckoutModal
        isOpen={!!getStartedCourseModal}
        onClose={() => setGetStartedCourseModal(null)}
        course={getStartedCourseModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SessionCouponProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </SessionCouponProvider>
    </ThemeProvider>
  );
}
