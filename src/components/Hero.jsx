import { Play } from 'lucide-react';
import heroImg from '../assets/heroimg.jpg';
import ralphImg from '../assets/ralph.png';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto mt-2 lg:mt-4 px-4 sm:px-8 lg:px-12">
      {/* Container for the Hero with Image inside */}
      <motion.div 
        initial={{ opacity: 0.9, scale: 0.995 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full h-[530px] sm:h-[620px] lg:h-[700px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#2a2a2a]"
      >
        <img 
          src={heroImg} 
          alt="Industrial Facility Aerial View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* The White Overlay containing text blocks */}
        <div className="absolute top-0 left-0 h-full flex flex-col items-center sm:items-start justify-center pointer-events-none z-10 w-full pb-16 lg:pb-24">
          
          {/* Block 0: Pill (Short) */}
          <motion.div 
            initial={{ opacity: 0.7, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="bg-[#ffffff] px-4 lg:pr-[28px] lg:pl-[48px] relative pointer-events-auto pb-1 pt-3 sm:pt-5 flex items-end shrink-0 w-max max-w-[95vw] sm:max-w-[calc(100vw-32px)] z-10 rounded-[12px] sm:rounded-l-none sm:rounded-r-[12px]">
            <div className="inline-flex items-center gap-1.5 bg-[#e8f2ee] text-brand-green px-2.5 py-1.5 rounded-[8px] text-[11px] sm:text-[12.5px] font-[700] tracking-tight whitespace-normal break-words leading-tight">
              <div className="w-[5px] h-[5px] rounded-full bg-brand-green shrink-0 mt-[1px]"></div>
              <span>Mission-Critical Infrastructure Engineering</span>
            </div>
          </motion.div>

          {/* Block 1: Infrastructure (Long) */}
          <motion.div 
            initial={{ opacity: 0.7, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="bg-[#ffffff] px-5 sm:pr-[32px] lg:pr-[48px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-1 lg:pb-3 pt-1 lg:pt-3 flex flex-col shrink-0 w-max max-w-[95vw] sm:max-w-[calc(100vw-32px)] z-20 rounded-[20px] sm:rounded-l-none sm:rounded-r-[20px]">
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[20px] sm:text-[clamp(28px,7vw,64px)] lg:text-[64px] font-[800] tracking-tight text-[#0a0a0a] leading-[0.95] break-words">
              Infrastructure
            </h1>
          </motion.div>

          {/* Block 2: that Performs (Short) */}
          <motion.div 
            initial={{ opacity: 0.7, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="bg-[#ffffff] px-5 sm:pr-[32px] lg:pr-[48px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-1 lg:pb-3 pt-1 lg:pt-3 flex flex-col shrink-0 w-max max-w-[95vw] sm:max-w-[calc(100vw-32px)] z-30 rounded-[20px] sm:rounded-l-none sm:rounded-r-[20px]">
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[20px] sm:text-[clamp(28px,7vw,64px)] lg:text-[64px] font-[800] tracking-tight text-[#0a0a0a] leading-[0.95] break-words">
              that <span className="text-brand-green">Performs</span>
            </h1>
          </motion.div>

          {/* Block 3: when Failure isn't (Long) */}
          <motion.div 
            initial={{ opacity: 0.7, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="bg-[#ffffff] px-5 sm:pr-[32px] lg:pr-[48px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-1 lg:pb-3 pt-1 lg:pt-3 flex flex-col shrink-0 w-max max-w-[95vw] sm:max-w-[calc(100vw-32px)] z-40 rounded-[20px] sm:rounded-l-none sm:rounded-r-[20px]">
             <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[20px] sm:text-[clamp(28px,7vw,64px)] lg:text-[64px] font-[800] tracking-tight text-[#0a0a0a] leading-[0.95] break-words">
               when Failure isn&#39;t
             </h1>
          </motion.div>

          {/* Block 4: an Option. (Short) */}
          <motion.div 
            initial={{ opacity: 0.7, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            className="bg-[#ffffff] px-5 sm:pr-[32px] lg:pr-[48px] sm:pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-3 sm:pb-4 lg:pb-6 pt-1 lg:pt-3 flex flex-col shrink-0 w-max max-w-[95vw] sm:max-w-[calc(100vw-32px)] z-50 rounded-[20px] sm:rounded-l-none sm:rounded-tr-[20px] sm:rounded-br-[24px]">
             <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[20px] sm:text-[clamp(28px,7vw,64px)] lg:text-[64px] font-[800] tracking-tight text-[#0a0a0a] leading-[0.95] break-words">
               an <span className="text-brand-green">Option.</span>
             </h1>
          </motion.div>

        </div>
 
        {/* Bottom Left "Hear from Ralph" */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="absolute bottom-[130px] sm:bottom-6 left-4 sm:left-6 lg:left-8 z-30 flex items-center text-white"
        >
          <div className="bg-[#524f46]/95 backdrop-blur-md flex items-center justify-center p-1.5 sm:p-2 rounded-[12px] sm:rounded-[14px] shadow-xl w-max hover:bg-[#524f46] transition-all cursor-pointer group">
            <div className="relative shrink-0 flex items-center justify-center mr-2.5 sm:mr-3">
              <img src={ralphImg} 
                   alt="Ralph" className="w-[36px] sm:w-[40px] md:w-[50px] h-[36px] sm:h-[40px] md:h-[50px] rounded-[8px] sm:rounded-[10px] object-cover" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play size={16} fill="#ffffff" stroke="transparent" className="ml-0.5 opacity-90" />
              </div>
            </div>

            <div className="flex flex-col justify-center pr-4 md:pr-6">
              <span className="font-bold text-[13px] md:text-[14px] leading-tight mb-[1px] tracking-tight whitespace-nowrap">Hear from Ralph</span>
              <span className="text-[#a1a1aa] text-[10px] md:text-[12px] leading-[1.2] font-[500] max-w-[130px] md:max-w-[150px] line-clamp-2 overflow-hidden">
                Founding Director & Principal Engineer
              </span>
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
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="absolute bottom-0 right-0 z-20 pointer-events-auto w-full sm:w-auto"
        >
          <div className="bg-[#ffffff] px-4 sm:px-10 py-5 sm:py-8 rounded-t-[20px] sm:rounded-tl-[32px] sm:rounded-tr-none flex justify-center">
             <div className="flex flex-col items-start w-full max-w-[100%] sm:max-w-none">
                <button className="bg-brand-green hover:bg-[#328b58] text-white font-[800] text-[clamp(12px,3.8vw,16px)] sm:text-[16px] px-2 sm:px-6 py-3.5 sm:py-4 rounded-[10px] w-full transition-all tracking-wide shadow-lg shadow-brand-green/20 leading-tight whitespace-normal break-words flex items-center justify-center">
                  Schedule Infrastructure Consultation
                </button>
                <p className="mt-3.5 sm:mt-4 text-[#6b7280] text-[11px] sm:text-[13.5px] text-center sm:text-left font-semibold w-full">
                  Speak directly with an infrastructure engineer.
                </p>
             </div>
          </div>
        </motion.div>
 
      </motion.div>
    </section>
  );
}
