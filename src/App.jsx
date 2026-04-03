import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import DesignRisk from './components/DesignRisk';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';
import ProjectExperience from './components/ProjectExperience';
import Testimonials from './components/Testimonials';
import Leadership from './components/Leadership';
import EngineeringNetwork from './components/EngineeringNetwork';
import Footer from './components/Footer';
import ExperienceHero from './components/ExperienceHero';
import ScopeOfWork from './components/ScopeOfWork';
import CaseStudyHighlight from './components/CaseStudyHighlight';
import CaseStudyGallery from './components/CaseStudyGallery';
import CaseStudyPage from './components/CaseStudyPage';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden relative text-[#0a0a0a]">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      {currentView === 'home' ? (
        <>
          <Hero />
          <Experience />
          <DesignRisk />
          <Philosophy />
          <Capabilities />
          <ProjectExperience />
          <Testimonials />
          <Leadership />
          <EngineeringNetwork />
        </>
      ) : currentView === 'caseStudy' ? (
        <>
          <CaseStudyPage />
        </>
      ) : (
        <>
          <ExperienceHero />
          <ScopeOfWork />
          <CaseStudyHighlight setCurrentView={setCurrentView} />
          <CaseStudyGallery />
        </>
      )}
      <Footer showTopRow={currentView === 'home'} />
    </div>
  );
}

export default App;
