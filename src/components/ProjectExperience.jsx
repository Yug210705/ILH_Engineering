import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectExperience() {
  const projects = [
    {
      title: "Large-Scale Infrastructure Environments",
      desc: "Systems integration across complex operational facilities.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Enterprise Infrastructure Modernization",
      desc: "Infrastructure upgrades supporting redundancy and centralized systems.",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Mission-Critical Communications Infrastructure",
      desc: "Infrastructure designed for continuous global operations.",
      img: "https://images.unsplash.com/photo-1563770660941-20978e87081b?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-[#f8faf9] relative overflow-hidden pt-8 sm:pt-12 pb-10 sm:pb-16 lg:pb-20">
      
      {/* 1. Background Grid Area - Ultra-smooth responsive mask */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-0">
        <div className="absolute inset-0 z-0 opacity-[0.45]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #cedfde 1px, transparent 1px), linear-gradient(to bottom, #cedfde 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            backgroundPosition: '50% 0%',
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 8%, black 25%, black 75%, transparent 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 8%, black 25%, black 75%, transparent 92%, transparent 100%)'
          }}
        ></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* Tag - Aligned with Hero style */}
        <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-4 py-2 rounded-lg text-[11px] sm:text-[13px] font-[700] tracking-tight border border-[#d2efe2] mb-4 sm:mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
          Project Experience
        </div>

        {/* Heading - Responsively Sized */}
        <h2 
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
          className="text-[clamp(28px,8.5vw,42px)] sm:text-[clamp(42px,7vw,84px)] font-[800] leading-[1.05] tracking-tight text-[#0a0a0a] text-center max-w-[1200px] mb-4 sm:mb-12 break-words whitespace-normal px-2"
        >
          Engineering Infrastructure <br className="hidden sm:block"/> <span className="text-[#a1a1aa] font-[800]">for</span> Critical Environments
        </h2>

        {/* Description - Responsively Spaced */}
        <p className="text-[#71717a] text-[15px] sm:text-[18px] leading-[1.65] max-w-[800px] font-[500] text-center mb-8 sm:mb-24 px-4 sm:px-0">
          Selected work supporting enterprise systems, large-scale facilities, and mission-critical operations where reliability is essential.
        </p>

        {/* Project Cards Grid - Matching Hero corner radius and responsive sizing */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e2e8f0] bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`group relative flex flex-col bg-white overflow-hidden ${index !== projects.length - 1 ? 'md:border-r border-[#e2e8f0]' : ''}`}
            >
              {/* Image Area */}
              <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                />
                {/* Arrow up right on image overlay */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#0f172a]/80 backdrop-blur-md rounded-xl flex items-center justify-center text-white opacity-100 transition-all duration-300 group-hover:bg-brand-green group-hover:shadow-lg group-hover:shadow-brand-green/20">
                  <ArrowUpRight size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
                </div>
              </div>

              {/* Text Area - Responsively Padded */}
              <div className="px-6 sm:px-10 lg:px-12 pt-6 sm:pt-10 pb-6 sm:pb-8 flex flex-col bg-white text-center sm:text-left items-center sm:items-start">
                <h3 
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
                  className="text-[18px] sm:text-[22px] lg:text-[26px] font-[800] text-[#0a0a0a] mb-2 sm:mb-3 tracking-tight leading-tight transition-colors duration-300 group-hover:text-brand-green"
                >
                  {project.title}
                </h3>
                <p className="text-[#71717a] text-[14.5px] sm:text-[16px] leading-[1.6] sm:leading-[1.65] font-[500] px-2 sm:px-0">
                  {project.desc}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-green transition-all duration-700 ease-out group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button - Responsively Padded and Sized */}
        <div className="flex justify-center mt-6 sm:mt-16 lg:mt-20 w-full px-4 sm:px-0">
          <button className="bg-brand-green hover:bg-[#2d7d56] text-white font-[800] text-[14px] sm:text-[16px] px-6 sm:px-14 py-4 sm:py-5 rounded-[12px] transition-all duration-300 shadow-xl shadow-brand-green/20 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-green/30 w-full sm:w-auto">
            View Project Experience
          </button>
        </div>

      </div>

    </section>
  );
}
