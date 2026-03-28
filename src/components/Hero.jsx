import { Play } from 'lucide-react';
import heroImg from '../assets/heroimg.jpg';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto mt-6 lg:mt-10 px-4 sm:px-8 lg:px-12">
      {/* Container for the Hero with Image inside */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative w-full h-[600px] sm:h-[750px] lg:h-[860px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#2a2a2a] shadow-2xl"
      >
        <img 
          src={heroImg} 
          alt="Industrial Facility Aerial View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* The White Overlay containing text blocks */}
        <div className="absolute top-0 left-0 h-full flex flex-col items-start justify-center pointer-events-none z-10 w-full pb-20 lg:pb-32">
          
          {/* Block 0: Pill (Short) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#ffffff] pr-[20px] lg:pr-[28px] pl-[20px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-3 pt-8 sm:pt-10 flex items-end shrink-0 w-max z-10"
            style={{ borderTopLeftRadius: '24px', borderTopRightRadius: '24px', borderBottomRightRadius: '24px' }}>
            <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-3 py-1.5 rounded-[8px] text-[11px] sm:text-[12.5px] font-[700] tracking-tight">
              <div className="w-[5px] h-[5px] rounded-full bg-brand-green"></div>
              Mission-Critical Infrastructure Engineering
            </div>
          </motion.div>

          {/* Block 1: Infrastructure (Long) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#ffffff] pr-[20px] sm:pr-[32px] lg:pr-[48px] pl-[20px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-1 lg:pb-3 pt-1 lg:pt-3 flex flex-col shrink-0 w-min sm:w-max z-20"
            style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[36px] sm:text-[56px] lg:text-[76px] font-[800] tracking-tight text-[#0a0a0a] leading-[0.95]">
              Infrastructure
            </h1>
          </motion.div>

          {/* Block 2: that Performs (Short) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#ffffff] pr-[20px] sm:pr-[32px] lg:pr-[48px] pl-[20px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-1 lg:pb-3 pt-1 lg:pt-3 flex flex-col shrink-0 w-max z-30"
            style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[36px] sm:text-[56px] lg:text-[76px] font-[800] tracking-tight text-[#0a0a0a] leading-[0.95]">
              that <span className="text-brand-green">Performs</span>
            </h1>
          </motion.div>

          {/* Block 3: when Failure isn't (Long) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-[#ffffff] pr-[20px] sm:pr-[32px] lg:pr-[48px] pl-[20px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-1 lg:pb-3 pt-1 lg:pt-3 flex flex-col shrink-0 w-max z-40"
            style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
             <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[36px] sm:text-[56px] lg:text-[76px] font-[800] tracking-tight text-[#0a0a0a] leading-[0.95]">
               when Failure isn&#39;t
             </h1>
          </motion.div>

          {/* Block 4: an Option. (Short) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#ffffff] pr-[20px] sm:pr-[32px] lg:pr-[48px] pl-[20px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-6 sm:pb-8 lg:pb-12 pt-1 lg:pt-3 flex flex-col shrink-0 w-max z-50"
            style={{ borderBottomLeftRadius: '24px', borderTopRightRadius: '24px', borderBottomRightRadius: '24px' }}>
             <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[36px] sm:text-[56px] lg:text-[76px] font-[800] tracking-tight text-[#0a0a0a] leading-[0.95]">
               an <span className="text-brand-green">Option.</span>
             </h1>
          </motion.div>

        </div>
 
        {/* Bottom Left "Hear from Ralph" */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 lg:left-12 z-30 flex items-center text-white"
        >
          <div className="bg-[#4a463c]/80 backdrop-blur-md border border-white/10 rounded-[14px] p-2.5 sm:p-3 pr-6 sm:pr-8 flex items-center gap-3 sm:gap-4 hover:bg-[#4a463c]/90 transition-all cursor-pointer shadow-xl w-fit">
            <div className="relative shrink-0 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" 
                   alt="Ralph" className="w-[44px] sm:w-[52px] h-[44px] sm:h-[52px] rounded-[10px] object-cover border border-[#2d2a26]" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play size={16} fill="#ffffff" stroke="transparent" className="ml-0.5 opacity-90" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-[13px] sm:text-[14px] leading-tight mb-[1px] tracking-tight">Hear from Ralph</span>
              <span className="text-[#a1a1aa] text-[10px] sm:text-[12px] leading-[1.3] font-[500] max-w-[140px] sm:max-w-[180px]">Founding Director & Principal Engineer</span>
            </div>
          </div>
        </motion.div>
 
        {/* Mouse icon - hidden on small mobile */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col justify-center items-center mix-blend-overlay">
          <div className="w-[20px] h-[30px] border-[2px] border-white/90 rounded-full flex justify-center pt-[5px]">
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-[2px] h-[5px] bg-white/90 rounded-full"
            />
          </div>
        </div>
 
        {/* Bottom Right Box */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-0 right-0 z-20 pointer-events-auto w-full sm:w-auto"
        >
          <div className="bg-[#ffffff] px-6 sm:px-10 py-6 sm:py-8 rounded-t-[20px] sm:rounded-tl-[32px] sm:rounded-tr-none flex justify-center">
             <div className="flex flex-col items-start w-full max-w-[320px] sm:max-w-none">
                <button className="bg-brand-green hover:bg-[#328b58] text-white font-[800] text-[15px] sm:text-[16px] px-6 py-3.5 sm:py-4 rounded-[10px] w-full transition-all tracking-wide shadow-lg shadow-brand-green/20">
                  Schedule Consultation
                </button>
                <p className="mt-4 text-[#6b7280] text-[12px] sm:text-[13.5px] text-center sm:text-left font-semibold w-full">
                  Speak directly with an infrastructure engineer.
                </p>
             </div>
          </div>
        </motion.div>
 
      </motion.div>
    </section>
  );
}
