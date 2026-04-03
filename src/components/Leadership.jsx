import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ralphImg from '../assets/ralph.png';

export default function Leadership() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#f8faf9] to-white pt-24 lg:pt-32 pb-8">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-10">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0.8, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-[6px] bg-[#e8f2ee] text-[#1f2937] px-4 py-[6px] rounded-full text-[13px] font-[500] tracking-tight border border-[#d2efe2] mb-6">
              <div className="w-[5px] h-[5px] rounded-full bg-brand-green"></div>
              Engineering Leadership
            </div>

            {/* Title */}
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[clamp(36px,10vw,76px)] font-[700] leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] break-words whitespace-normal px-2">
              Engineering<br/>Leadership
            </h2>

            {/* CTA Button */}
            <div className="flex items-center gap-[8px] mt-10">
              <div className="bg-[#3e976c] text-white font-[500] tracking-wide text-[16px] px-12 h-[52px] rounded-[6px] flex items-center justify-center transition-all cursor-pointer hover:bg-[#34835d] shadow-[0_10px_20px_rgba(55,151,104,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(55,151,104,0.25)]">
                Learn More
              </div>
              <div className="bg-[#3e976c] text-white w-[52px] h-[52px] rounded-[6px] flex items-center justify-center transition-all cursor-pointer hover:bg-[#34835d] shadow-[0_10px_20px_rgba(55,151,104,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(55,151,104,0.25)]">
                <ArrowUpRight size={22} strokeWidth={2} />
              </div>
            </div>
          </motion.div>

          {/* Center Column: Portrait */}
          <motion.div 
            initial={{ opacity: 0.8, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center w-full max-w-[480px]"
          >
            <div className="w-full h-[580px] bg-slate-100 overflow-hidden mb-4 relative flex items-center justify-center rounded-[20px] shadow-lg">
              <img 
                src={ralphImg} 
                alt="Ralph F. Iles III" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Small Stat Pills */}
            <div className="flex flex-wrap sm:flex-nowrap gap-[10px] w-full justify-between mt-1 px-4 sm:px-8 lg:px-0">
              <div className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 text-[#0a0a0a] text-[11px] sm:text-[12px] font-[700] px-3 sm:px-4 py-2.5 sm:py-3 rounded-[6px] tracking-tight flex-1 sm:flex-1 text-center whitespace-normal sm:whitespace-nowrap break-words min-w-[30%]">
                25+ Yrs Experience
              </div>
              <div className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 text-[#0a0a0a] text-[11px] sm:text-[12px] font-[700] px-3 sm:px-4 py-2.5 sm:py-3 rounded-[6px] tracking-tight flex-1 sm:flex-1 text-center whitespace-normal sm:whitespace-nowrap break-words min-w-[30%]">
                Principal Engineer
              </div>
              <div className="bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 text-[#0a0a0a] text-[11px] sm:text-[12px] font-[700] px-3 sm:px-4 py-2.5 sm:py-3 rounded-[6px] tracking-tight flex-1 sm:flex-1 text-center whitespace-normal sm:whitespace-nowrap break-words min-w-[30%]">
                Veteran
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text block */}
          <motion.div 
            initial={{ opacity: 0.8, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            className="flex-none w-full lg:w-[400px] flex flex-col text-center lg:text-left pt-6 lg:pt-[190px] px-4 sm:px-8 lg:px-0"
          >
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] lg:text-[38px] font-[700] text-[#0a0a0a] tracking-[-0.02em] leading-[1.0] mb-4">
              Ralph F. Iles III
            </h3>
            <h4 className="text-[18px] lg:text-[20px] font-[500] text-[#6b7280] leading-[1.4] mb-8 lg:pr-10 mix-blend-multiply">
              Founding Director & Principal<br/>Engineer of ILH Engineering
            </h4>
            <p className="text-[#9ca3af] text-[15.5px] font-[400] leading-[1.7] mb-5 lg:pr-6">
              With over 25+ yrs of experience in electrical and technology infrastructure, Ralph founded ILH Engineering to bring senior-level expertise directly to every project.
            </p>
            <p className="text-[#9ca3af] text-[15.5px] font-[400] leading-[1.7] lg:pr-6">
              His hands-on approach ensures that every design is precise, compliant, & built to perform.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
