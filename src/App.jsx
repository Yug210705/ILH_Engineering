import { useState, lazy, Suspense, useEffect } from 'react';
import { VIEWS } from './constants';
import { Navbar } from './components/layout';
import { Hero } from './components/home';

/* ───────── Lazy Imports ───────── */

// Home
const Experience         = lazy(() => import('./components/home/Experience'));
const DesignRisk         = lazy(() => import('./components/home/DesignRisk'));
const Philosophy         = lazy(() => import('./components/home/Philosophy'));
const Capabilities       = lazy(() => import('./components/home/Capabilities'));
const ProjectExperience  = lazy(() => import('./components/home/ProjectExperience'));
const Testimonials       = lazy(() => import('./components/home/Testimonials'));
const Leadership         = lazy(() => import('./components/home/Leadership'));
const EngineeringNetwork = lazy(() => import('./components/home/EngineeringNetwork'));

// Experience
const ExperienceHero     = lazy(() => import('./components/experience/ExperienceHero'));
const ScopeOfWork        = lazy(() => import('./components/experience/ScopeOfWork'));
const CaseStudyHighlight = lazy(() => import('./components/experience/CaseStudyHighlight'));
const CaseStudyGallery   = lazy(() => import('./components/experience/CaseStudyGallery'));
const DataCenterPage     = lazy(() => import('./components/capabilities/DataCenterCapabilitiesPage'));

// Standalone
const CaseStudyPage    = lazy(() => import('./components/casestudy/CaseStudyPage'));
const CapabilitiesPage = lazy(() => import('./components/capabilities/CapabilitiesPage'));

// Layout
const Footer = lazy(() => import('./components/layout/Footer'));

/* ───────── Loader ───────── */
const PageLoader = () => (
  <div className="min-h-[50vh] bg-white w-full animate-pulse" />
);

/* ───────── View Config Map ───────── */
const VIEW_COMPONENTS = {
  [VIEWS.HOME]: ({ setCurrentView }) => (
    <>
      <Hero />
      <Suspense fallback={<PageLoader />}>
        <Experience />
        <DesignRisk />
        <Philosophy />
        <Capabilities setCurrentView={setCurrentView} />
        <ProjectExperience />
        <Testimonials />
        <Leadership />
        <EngineeringNetwork />
      </Suspense>
    </>
  ),

  [VIEWS.CASE_STUDY]: () => (
    <Suspense fallback={<PageLoader />}>
      <CaseStudyPage />
    </Suspense>
  ),

  [VIEWS.CAPABILITIES]: ({ setCurrentView }) => (
  <Suspense fallback={<PageLoader />}>
    <CapabilitiesPage setCurrentView={setCurrentView} />
  </Suspense>
  ),

  [VIEWS.EXPERIENCE]: ({ setCurrentView }) => (
    <Suspense fallback={<PageLoader />}>
      <ExperienceHero />
      <ScopeOfWork />
      <CaseStudyHighlight setCurrentView={setCurrentView} />
      <CaseStudyGallery />
    </Suspense>
  ),
  [VIEWS.DATA_CENTER]: ({ setCurrentView }) => (
    <Suspense fallback={<PageLoader />}>
      <DataCenterPage setCurrentView={setCurrentView} />
    </Suspense>
  ),
};

/* ───────── App ───────── */
function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const ActiveView = VIEW_COMPONENTS[currentView];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden text-[#0a0a0a] flex flex-col">
      
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="flex-1 flex flex-col">
        {ActiveView && <ActiveView setCurrentView={setCurrentView} />}
      </main>

      <Suspense fallback={<div className="h-100" />}>
        <Footer showTopRow={currentView === VIEWS.HOME} />
      </Suspense>

    </div>
  );
}

export default App;
