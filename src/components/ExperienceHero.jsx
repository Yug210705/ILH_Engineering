import { ArrowDown } from 'lucide-react';
import experienceImg from '../assets/Subtract.png';
import { motion } from 'framer-motion';

export default function ExperienceHero() {
  return (
    <section className="w-full bg-transparent relative overflow-hidden pt-4 pb-16">

      {/* Main Image + Text Overlays */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 relative">
        
        {/* The image already has built-in white cutouts (Figma subtract) */}
        <img 
          src={experienceImg} 
          alt="Infrastructure Case Studies" 
          className="w-full h-auto block"
        />

        {/* ===== TEXT positioned inside the built-in white cutout area ===== */}
        <div className="absolute top-[2%] sm:top-[3%] left-[12%] sm:left-[13%] lg:left-[14%] z-10 flex flex-col">
          {/* Project Experience Tag */}
          <div className="inline-flex self-start items-center gap-1.5 bg-[#e8f2ee] text-brand-green px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg text-[8px] sm:text-[10px] lg:text-[12px] font-[800] tracking-wide border border-[#d2efe2] mb-6 sm:mb-7 lg:mb-8 -mt-2 sm:-mt-3">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-brand-green"></div>
            Project Experience
          </div>

          <h1 
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
            className="leading-[0.95] tracking-tight"
          >
            <span className="block text-[#c8cfd6] text-[32px] sm:text-[46px] md:text-[58px] lg:text-[76px] xl:text-[90px] font-[400]">
              Infrastructure
            </span>
            <span className="block text-[#0a0a0a] text-[32px] sm:text-[46px] md:text-[58px] lg:text-[76px] xl:text-[90px] font-[800]">
              Case Studies.
            </span>
          </h1>
        </div>

        {/* ===== Scroll Indicator - center bottom of image ===== */}
        <div className="absolute bottom-[8%] left-[46%] z-20">
          <div className="w-[14px] sm:w-[18px] h-[22px] sm:h-[30px] border-2 border-white/50 rounded-full flex justify-center pt-1">
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 bg-white rounded-full"
            />
          </div>
        </div>

        {/* ===== Green Button - bottom right cutout area ===== */}
        <div className="absolute -bottom-[0.2%] right-[2%] sm:-bottom-[0.5%] sm:right-[2.5%] lg:bottom-[0%] lg:right-[3%] z-10">
          <button className="bg-brand-green hover:bg-[#2d7d56] text-white p-6 sm:p-8 lg:p-10 rounded-[18px] sm:rounded-[24px] lg:rounded-[36px] transition-all duration-300 shadow-2xl shadow-brand-green/40">
            <ArrowDown size={32} className="sm:w-12 sm:h-12 lg:w-16 lg:h-16" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
