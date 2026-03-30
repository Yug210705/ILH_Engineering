import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Asset imports - matching user-specified paths
import expImage from '../assets/exp_image.png';
import subtractShape from '../assets/Subtract (1).png';
import linesDecoration from '../assets/lines.png';

export default function CaseStudyHighlight() {
  return (
    <section className="w-full bg-white relative py-20 lg:py-32 border-t border-[#f0f0f0]">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side - Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                <div className="absolute top-[0%] left-[1%] sm:top-[0.5%] sm:left-[2%] lg:top-[1%] lg:left-[2.5%] max-w-[85%]">
                  <div className="inline-flex items-center gap-1.5 bg-[#f0f7f4] text-[#3e976c] px-4 py-2 rounded-lg text-[11px] sm:text-[13px] font-[700] tracking-tight border border-[#cfe2d9] mb-4 lg:mb-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                    Featured
                  </div>
                  
                  <h2 
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-[32px] sm:text-[44px] lg:text-[52px] xl:text-[62px] font-[800] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a] max-w-[500px] lg:max-w-[700px]"
                  >
                    Large-Scale <br /> Infrastructure <br /> Environments
                  </h2>
                </div>

                {/* Button - RESTORED TO EXACT MAXIMUM EDGE ANCHOR */}
                <div className="absolute bottom-[1%] right-[-1%] sm:bottom-[-2.5%] sm:right-[-5%] lg:bottom-[0.5%] lg:right-[0%]">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#3e976c] hover:bg-[#347d5a] text-white flex items-center justify-center gap-4 px-12 lg:px-16 py-5 sm:py-6 rounded-[14px] lg:rounded-[18px] text-[17px] sm:text-[18px] lg:text-[19px] font-[800] transition-all shadow-2xl shadow-[#3e976c]/30 min-w-[290px] lg:min-w-[375px]"
                  >
                    <span className="tracking-tight">Explore Case Study</span>
                    <ArrowRight size={24} strokeWidth={2.5} />
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
