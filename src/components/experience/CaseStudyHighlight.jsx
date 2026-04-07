import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Asset imports - matching user-specified paths
import expImage from '../../assets/exp_image.png';
import subtractShape from '../../assets/Subtract (1).png';
import linesDecoration from '../../assets/lines.png';

export default function CaseStudyHighlight({ setCurrentView }) {
  return (
    <section className="w-full bg-white relative pt-10 lg:pt-20 pb-8 border-t border-[#f0f0f0]">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side - Featured Image */}
          <motion.div 
            className="w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-[32px] shadow-2xl shadow-gray-200"
          >
            <img 
              src={expImage} 
              alt="Featured Infrastructure" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right Side - Custom Shape Content */}
          <div className="relative w-full h-full flex flex-col justify-center">
            
            {/* Aspect Wrapper with Integrated Background Clipping */}
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-full">
              
              {/* 1. ARCHITECTURAL BACKGROUND LAYER (Clipped) */}
              <div className="absolute inset-0 overflow-hidden rounded-[32px] z-0">
                {/* Base Subtract Shape */}
                <img 
                  src={subtractShape} 
                  alt="Architectural shape" 
                  className="w-full h-full object-fill"
                />

                {/* Wavy Lines - Absolute matching with internal clipping only */}
                <div className="absolute inset-0 z-5 pointer-events-none opacity-100">
                  <img 
                    src={linesDecoration} 
                    alt="Detail lines" 
                    className="w-full h-full object-contain object-center scale-[1.05]"
                  />
                </div>
              </div>

              {/* 2. INTERACTIVE CONTENT LAYER (Not Clipped) */}
              <div className="absolute inset-0 z-10 p-4 lg:p-8">
                
                {/* Header Info - Locked into the Top Left Cutout area */}
                <div className="absolute top-[0%] left-[1%] sm:top-[0.5%] sm:left-[1%] lg:top-[1%] lg:left-[1%] max-w-[60%] sm:max-w-[55%]">
                  <div className="inline-flex items-center gap-1.5 bg-[#f0f7f4] text-[#3e976c] px-2.5 sm:px-4 py-0.5 sm:py-2 rounded-lg text-[9.5px] sm:text-[13px] font-[700] tracking-tight border border-[#cfe2d9] mb-4 lg:mb-10 -translate-y-1 sm:translate-y-0">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#3e976c]"></div>
                    Featured
                  </div>
                  
                  <h2 
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[clamp(24px,7.5vw,32px)] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-[800] leading-[1.05] tracking-[-0.04em] text-[#0a0a0a] max-w-[450px] sm:max-w-[550px] lg:max-w-[650px]"
                  >
                    Large-Scale <br /> Infrastructure <br /> Environments
                  </h2>
                </div>

                {/* Button - RESTORED TO EXACT MAXIMUM EDGE ANCHOR */}
                <div className="absolute bottom-[2%] right-[4%] sm:bottom-[-2.5%] sm:right-[-2%] lg:bottom-[0.5%] lg:right-[0%]">
                  <motion.button 
                    onClick={() => setCurrentView('caseStudy')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#3e976c] hover:bg-[#347d5a] text-white flex items-center justify-center gap-2 sm:gap-4 px-4 sm:px-[62px] py-1.5 sm:py-6 rounded-[10px] lg:rounded-[18px] text-[11px] sm:text-[18px] lg:text-[19px] font-[800] transition-all shadow-xl shadow-[#3e976c]/30 sm:min-w-[315px] lg:min-w-[355px]"
                  >
                    <span className="tracking-tight">Explore Case Study</span>
                    <ArrowRight size={14} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.5} />
                  </motion.button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
