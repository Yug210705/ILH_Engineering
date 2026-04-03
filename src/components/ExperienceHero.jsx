import { ArrowDown } from 'lucide-react';
import experienceImg from '../assets/Subtract.png';
import { motion } from 'framer-motion';

export default function ExperienceHero() {
  return (
    <section className="w-full bg-white relative overflow-hidden pt-4 pb-16 lg:pb-24">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        <div className="relative w-full rounded-[40px]">
          {/* Main Image Base */}
          <img 
            src={experienceImg} 
            alt="Infrastructure Case Studies" 
            className="w-full h-auto block object-cover rounded-[40px]"
          />

          {/* ===== TEXT positioned securely inside the built-in white cutout area ===== */}
          {/* Re-aligned precisely to the image cutout's physical boundaries based on accurate constraints */}
          <div className="absolute top-[8%] sm:top-[6%] lg:top-[3%] left-[5%] sm:left-[8%] lg:left-[10%] z-10 flex flex-col items-start w-full max-w-[90%] sm:max-w-[75%] lg:max-w-[55%]">
            
            {/* Project Experience Tag */}
            <div className="inline-flex items-center gap-2.5 bg-[#f0f7f4] text-[#0a0a0a] px-4 sm:px-6 py-1.5 sm:py-1.5 rounded-full text-[11px] sm:text-[15px] lg:text-[16px] font-[500] tracking-tight border border-[#cfe2d9] mb-2 sm:mb-5 lg:mb-6 sm:ml-4 lg:ml-6 ml-1">
              <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-[#3e976c]"></div>
              Project Experience
            </div>

            <h1 
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
              className="leading-[1.0] lg:leading-[0.95] tracking-tight w-full pl-1 sm:pl-4 lg:pl-6"
            >
              <span className="block text-[#c8cfd6] font-[500] text-[clamp(24px,8vw,76px)] xl:text-[76px] break-words whitespace-normal leading-tight">
                Infrastructure
              </span>
              <span className="block text-[#0a0a0a] font-[800] text-[clamp(26px,9vw,84px)] xl:text-[84px] mt-1 lg:mt-2 break-words whitespace-normal leading-[0.95]">
                Case Studies.
              </span>
            </h1>
          </div>

          {/* ===== Scroll Indicator - center bottom of image ===== */}
          <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-20">
            <div className="w-[18px] sm:w-[22px] h-[28px] sm:h-[34px] border-2 border-white/60 rounded-full flex justify-center pt-1.5">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>

          {/* ===== Green Button - bottom right cutout area ===== */}
          {/* Positioning and Scale adjusted for higher prominence with clean edge spacing */}
          <div className="absolute bottom-[1.8%] right-[1%] z-30 hidden lg:block">
            <button 
              onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#3e976c] hover:bg-[#2d7d56] text-white p-9 rounded-[24px] shadow-2xl shadow-[#3e976c]/40 transition-all duration-300 transform active:scale-95"
            >
              <ArrowDown size={36} className="w-12 h-12" strokeWidth={2.5} />
            </button>
          </div>
          
          {/* Mobile Green Button */}
          <div className="absolute bottom-[2.5%] right-[1.5%] z-30 lg:hidden">
            <button 
              onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#3e976c] text-white p-5 rounded-[16px] shadow-xl transform active:scale-95"
            >
              <ArrowDown size={28} strokeWidth={2.5} />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
