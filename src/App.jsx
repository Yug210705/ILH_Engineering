import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import DesignRisk from './components/DesignRisk';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';

function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden pt-4 pb-20 text-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Experience />
      <DesignRisk />
      <Philosophy />
      <Capabilities />
    </div>
  );
}

export default App;
