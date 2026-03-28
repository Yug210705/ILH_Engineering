import { Zap, Share2, Shield, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const ServerBlock = ({ x, y }) => (
    <g transform={`translate(${x}, ${y})`}>
      <polygon points="0,30 -30,15 -30,185 0,200" fill="#a7f3d0" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="0,30 30,15 30,185 0,200" fill="#6ee7b7" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" />
      {[25, 45, 65, 85, 105, 125, 145, 165].map(ly => (
        <line key={ly} x1="0" y1={ly + 10} x2="30" y2={ly - 5} stroke="#0f172a" strokeWidth="2.5" />
      ))}
      <polygon points="0,0 -30,15 0,30 30,15" fill="#f8fafc" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="0,6 -15,13.5 0,21 15,13.5" fill="#334155" />
      <ellipse cx="0" cy="13.5" rx="5" ry="2.5" fill="#0f172a" />
    </g>
  );

  return (
    <section ref={sectionRef} className="w-full relative bg-[#f4f7f6] pt-28 pb-32 overflow-hidden">
      
      {/* Inline styles for FAANG animations */}
      <style>{`
        @keyframes drawLine {
          0% { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-line {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawLine 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.6s;
        }

        @keyframes fadeInScale {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.85); box-shadow: 0 0 0 rgba(0,0,0,0); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); box-shadow: 0 16px 50px rgba(0,0,0,0.06); }
        }
        .animate-card {
          opacity: 0;
          animation: fadeInScale 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes drawDot {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-dot {
          transform-origin: center;
          transform-box: fill-box;
          opacity: 0;
          animation: drawDot 0.4s ease-out forwards;
        }

        @keyframes fadeUpPlatform {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-platform {
          opacity: 0;
          animation: fadeUpPlatform 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.1s;
        }
        
        @keyframes fadeUpText {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-text {
          opacity: 0;
          animation: fadeUpText 0.8s ease-out forwards;
          animation-delay: 1.8s;
        }
      `}</style>

      {/* Background Vignette Grid */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none w-full max-w-[100vw]">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(55,151,104,0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(55,151,104,0.14) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            backgroundPosition: 'center center',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 80%)'
          }}
        ></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="w-full max-w-[1600px] mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center"
      >
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-4 py-2 rounded-[14px] text-[14px] font-bold tracking-wide border border-[#d2efe2] mb-8 shadow-sm shadow-[#379768]/10">
          <div className="w-[6px] h-[6px] rounded-full bg-brand-green mb-[1px]"></div>
          Our Engineering Philosophy
        </div>

        {/* Heading */}
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] sm:text-[52px] lg:text-[72px] font-[800] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a] text-center max-w-[1200px] mb-8">
          Reliability Is Not Luck. <br className="hidden md:block"/> It Is Engineered.
        </h2>

        {/* Paragraph */}
        <p className="text-[#64748b] text-[16px] md:text-[18px] xl:text-[20px] leading-[1.7] font-medium text-center max-w-[1000px] mb-12 mix-blend-multiply">
          At ILH Engineering, infrastructure is designed as an integrated system.<br className="hidden md:block"/>
          Electrical power, communications networks, life-safety systems, & operational technologies<br className="hidden lg:block"/>
          must work together under failure conditions. At the lowest cost possible.
        </p>
      </motion.div>

      {/* Graphic Container with horizontal scroll on mobile to prevent squishing */}
      <div className="relative w-full overflow-x-auto lg:overflow-x-visible pb-12">
        <div className="relative min-w-[1000px] lg:min-w-0 w-full max-w-[1400px] aspect-[1200/600] mx-auto mt-6 pointer-events-auto px-12">
          
          <svg viewBox="0 100 1200 600" className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none">
            
            {/* Connection Lines */}
            <g id="connection-lines">
              <path d="M 520,330 h -85 q -30,0 -30,-30 v -70 q 0,-30 -30,-30 h -105" fill="none" stroke="#0f172a" strokeWidth="3.5" className={isVisible ? 'animate-line' : 'opacity-0'} />
              <circle cx="270" cy="200" r="5" fill="#0f172a" className={isVisible ? 'animate-dot' : 'opacity-0'} style={{ animationDelay: '1.9s' }} />
              
              <path d="M 520,450 h -85 q -30,0 -30,30 v 70 q 0,30 -30,30 h -105" fill="none" stroke="#0f172a" strokeWidth="3.5" className={isVisible ? 'animate-line' : 'opacity-0'} />
              <circle cx="270" cy="580" r="5" fill="#0f172a" className={isVisible ? 'animate-dot' : 'opacity-0'} style={{ animationDelay: '1.9s' }} />
              
              <path d="M 680,330 h 85 q 30,0 30,-30 v -70 q 0,-30 30,-30 h 105" fill="none" stroke="#0f172a" strokeWidth="3.5" className={isVisible ? 'animate-line' : 'opacity-0'} />
              <circle cx="930" cy="200" r="5" fill="#0f172a" className={isVisible ? 'animate-dot' : 'opacity-0'} style={{ animationDelay: '1.9s' }} />
              
              <path d="M 680,450 h 85 q 30,0 30,30 v 70 q 0,30 30,30 h 105" fill="none" stroke="#0f172a" strokeWidth="3.5" className={isVisible ? 'animate-line' : 'opacity-0'} />
              <circle cx="930" cy="580" r="5" fill="#0f172a" className={isVisible ? 'animate-dot' : 'opacity-0'} style={{ animationDelay: '1.9s' }} />
            </g>

            {/* Central Platform */}
            <g id="isometric-platform" className={isVisible ? 'animate-platform' : 'opacity-0'}>
              <path d="M 410,380 L 600,475 L 790,380 L 790,405 L 600,500 L 410,405 Z" fill="#0f172a" strokeLinejoin="round" />
              <path d="M 410,405 L 600,500 L 790,405" fill="none" stroke="#0f172a" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M 600,285 L 790,380 L 600,475 L 410,380 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="12" strokeLinejoin="round" />
              <path d="M 600,305 L 760,385 L 600,465 L 440,385 Z" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="8 8" strokeLinejoin="round" />

              <ServerBlock x={600} y={150} />
              <ServerBlock x={565} y={167.5} />
              <ServerBlock x={635} y={167.5} />
              <ServerBlock x={600} y={185} />
            </g>

            {/* Text Overlay */}
            <g className={isVisible ? 'animate-text' : 'opacity-0'}>
              <text x="600" y="555" textAnchor="middle" fill="#0a0a0a" className="font-bold text-[34px]">Integrated</text>
              <text x="600" y="595" textAnchor="middle" fill="#0a0a0a" className="font-bold text-[34px]">Infrastructure</text>
            </g>
          </svg>

          {/* HTML Overlay Cards */}
          <div 
            className={`absolute bg-white border border-gray-100/60 rounded-[24px] flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:!scale-[1.04] transition-transform duration-400 ${isVisible ? 'animate-card' : 'opacity-0'}`}
            style={{ left: '13.33%', top: '16.66%', width: '18%', height: '30%', transform: 'translate(-50%, -50%)', animationDelay: '1.8s' }}
          >
            <Zap size={34} className="text-brand-green mb-4" strokeWidth={2.4} />
            <span className="font-bold text-[19px] text-[#0f172a]">Power</span>
          </div>

          <div 
            className={`absolute bg-white border border-gray-100/60 rounded-[24px] flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:!scale-[1.04] transition-transform duration-400 ${isVisible ? 'animate-card' : 'opacity-0'}`}
            style={{ left: '13.33%', top: '80%', width: '18%', height: '30%', transform: 'translate(-50%, -50%)', animationDelay: '1.8s' }}
          >
            <Shield size={34} className="text-brand-green mb-4" strokeWidth={2.4} />
            <span className="font-bold text-[19px] text-[#0f172a]">Security</span>
          </div>

          <div 
            className={`absolute bg-white border border-gray-100/60 rounded-[24px] flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:!scale-[1.04] transition-transform duration-400 ${isVisible ? 'animate-card' : 'opacity-0'}`}
            style={{ left: '86.66%', top: '16.66%', width: '18%', height: '30%', transform: 'translate(-50%, -50%)', animationDelay: '1.8s' }}
          >
            <Share2 size={34} className="text-brand-green mb-4" strokeWidth={2.4} />
            <span className="font-bold text-[19px] text-[#0f172a]">Connectivity</span>
          </div>

          <div 
            className={`absolute bg-white border border-gray-100/60 rounded-[24px] flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:!scale-[1.04] transition-transform duration-400 ${isVisible ? 'animate-card' : 'opacity-0'}`}
            style={{ left: '86.66%', top: '80%', width: '18%', height: '30%', transform: 'translate(-50%, -50%)', animationDelay: '1.8s' }}
          >
            <Settings size={34} className="text-brand-green mb-4" strokeWidth={2.4} />
            <span className="font-bold text-[19px] text-[#0f172a]">Operations</span>
          </div>
        </div>
      </div>

      {/* Bottom Text and CTA */}
      <div className="w-full max-w-[1600px] mx-auto px-6 flex flex-col items-center mt-12">
        <p className="text-[#64748b] text-[16px] md:text-[17px] font-medium text-center max-w-[800px] mb-8 mix-blend-multiply">
          Our approach prioritizes redundancy, system integration, and disciplined infrastructure <br className="hidden md:block"/>
          planning to ensure critical operations remain online when disruption occurs.
        </p>

        <button className="bg-brand-green hover:bg-[#2e8451] text-white font-bold text-[16px] px-10 py-4.5 rounded-[12px] transition-all tracking-wide shadow-md hover:shadow-xl hover:-translate-y-0.5">
          Explore Our Capabilities
        </button>
      </div>

    </section>
  );
}
