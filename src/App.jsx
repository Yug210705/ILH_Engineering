import { useState, lazy, Suspense } from 'react';
import { VIEWS } from './constants';
import { Navbar } from './components/layout';
import { Hero } from './components/home';

/* ────────────────────────────────────────────
 * Lazy-loaded page sections (code-split)
 * Only the Hero + Navbar are in the initial bundle.
 * ──────────────────────────────────────────── */

// Home page sections
const Experience        = lazy(() => import('./components/home/Experience'));
const DesignRisk        = lazy(() => import('./components/home/DesignRisk'));
const Philosophy        = lazy(() => import('./components/home/Philosophy'));
const Capabilities      = lazy(() => import('./components/home/Capabilities'));
const ProjectExperience = lazy(() => import('./components/home/ProjectExperience'));
const Testimonials      = lazy(() => import('./components/home/Testimonials'));
const Leadership        = lazy(() => import('./components/home/Leadership'));
const EngineeringNetwork = lazy(() => import('./components/home/EngineeringNetwork'));

// Experience page sections
const ExperienceHero     = lazy(() => import('./components/experience/ExperienceHero'));
const ScopeOfWork        = lazy(() => import('./components/experience/ScopeOfWork'));
const CaseStudyHighlight = lazy(() => import('./components/experience/CaseStudyHighlight'));
const CaseStudyGallery   = lazy(() => import('./components/experience/CaseStudyGallery'));

// Standalone pages
const CaseStudyPage    = lazy(() => import('./components/casestudy/CaseStudyPage'));
const CapabilitiesPage = lazy(() => import('./components/capabilities/CapabilitiesPage'));

// Layout
const Footer = lazy(() => import('./components/layout/Footer'));

/* ────────────────────────────────────────────
 * Shared loading fallback
 * ──────────────────────────────────────────── */
const PageLoader = () => (
  <div className="min-h-[50vh] bg-white w-full animate-pulse" />
);

/* ────────────────────────────────────────────
 * App — Root component & view router
 * ──────────────────────────────────────────── */
function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden relative text-[#0a0a0a] flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="flex-1 flex flex-col">
        {currentView === VIEWS.HOME && (
          <>
            <Hero />
            <Suspense fallback={<PageLoader />}>
              <Experience />
              <DesignRisk />
              <Philosophy />
              <Capabilities />
              <ProjectExperience />
              <Testimonials />
              <Leadership />
              <EngineeringNetwork />
            </Suspense>
          </>
        )}

        {currentView === VIEWS.CASE_STUDY && (
          <Suspense fallback={<PageLoader />}>
            <CaseStudyPage />
          </Suspense>
        )}

        {currentView === VIEWS.CAPABILITIES && (
          <Suspense fallback={<PageLoader />}>
            <CapabilitiesPage />
          </Suspense>
        )}

        {currentView === VIEWS.EXPERIENCE && (
          <Suspense fallback={<PageLoader />}>
            <ExperienceHero />
            <ScopeOfWork />
            <CaseStudyHighlight setCurrentView={setCurrentView} />
            <CaseStudyGallery />
          </Suspense>
        )}
      </main>

      <Suspense fallback={<div className="h-100" />}>
        <Footer showTopRow={currentView === VIEWS.HOME} />
      </Suspense>
    </div>
  );
}

export default App;
