import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceHero from './components/ExperienceHero';

const Experience = lazy(() => import('./components/Experience'));
const DesignRisk = lazy(() => import('./components/DesignRisk'));
const Philosophy = lazy(() => import('./components/Philosophy'));
const Capabilities = lazy(() => import('./components/Capabilities'));
const ProjectExperience = lazy(() => import('./components/ProjectExperience'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Leadership = lazy(() => import('./components/Leadership'));
const EngineeringNetwork = lazy(() => import('./components/EngineeringNetwork'));
const Footer = lazy(() => import('./components/Footer'));
const ScopeOfWork = lazy(() => import('./components/ScopeOfWork'));
const CaseStudyHighlight = lazy(() => import('./components/CaseStudyHighlight'));
const CaseStudyGallery = lazy(() => import('./components/CaseStudyGallery'));
const CaseStudyPage = lazy(() => import('./components/CaseStudyPage'));

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden relative text-[#0a0a0a] flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-1 flex flex-col">
      {currentView === 'home' ? (
        <>
          <Hero />
          <Suspense fallback={<div className="min-h-[50vh] bg-white w-full animate-pulse" />}>
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
      ) : currentView === 'caseStudy' ? (
        <Suspense fallback={<div className="min-h-screen bg-white w-full animate-pulse" />}>
          <CaseStudyPage />
        </Suspense>
      ) : (
        <>
          <ExperienceHero />
          <Suspense fallback={<div className="min-h-[50vh] bg-white w-full animate-pulse" />}>
            <ScopeOfWork />
            <CaseStudyHighlight setCurrentView={setCurrentView} />
            <CaseStudyGallery />
          </Suspense>
        </>
      )}
      </div>
      <Suspense fallback={<div className="h-100" />}>
        <Footer showTopRow={currentView === 'home'} />
      </Suspense>
    </div>
  );
}

export default App;
