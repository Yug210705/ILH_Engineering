import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ralphImg from '../assets/ralph.png';

export default function Leadership() {
  return (
    <section className="w-full relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-10">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-[6px] bg-[#e8f2ee] text-[#374151] px-3.5 py-[5px] rounded-[6px] text-[12px] font-[500] tracking-tight border border-[#d2efe2] mb-6">
              <div className="w-[4.5px] h-[4.5px] rounded-full bg-brand-green"></div>
              Not a biography, credibility narrative.
            </div>

            {/* Title */}
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[52px] sm:text-[64px] lg:text-[68px] font-[700] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a]">
              Engineering<br/>Leadership
            </h2>

            {/* CTA Button */}
            <div className="flex items-center gap-[6px] mt-8">
              <div className="bg-[#3e976c] text-white font-[500] tracking-wide text-[16px] px-8 h-[50px] rounded-[6px] flex items-center justify-center transition-all cursor-pointer hover:bg-[#34835d] hover:shadow-md hover:-translate-y-0.5">
                Learn More
              </div>
              <div className="bg-[#3e976c] text-white w-[50px] h-[50px] rounded-[6px] flex items-center justify-center transition-all cursor-pointer hover:bg-[#34835d] hover:shadow-md hover:-translate-y-0.5">
                <ArrowUpRight size={20} strokeWidth={2} />
              </div>
            </div>
          </motion.div>

          {/* Center Column: Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col items-center w-full max-w-[480px]"
          >
            <div className="w-full h-[580px] bg-[#f1f5f9] overflow-hidden mb-4 relative flex items-center justify-center">
              <img 
                src={ralphImg} 
                alt="Ralph F. Iles III" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Small Stat Pills */}
            <div className="flex gap-[10px] w-full justify-between mt-1">
              <div className="bg-[#f4f4f5] text-[#0a0a0a] text-[12px] font-[700] px-4 py-3 rounded-[6px] tracking-tight flex-1 text-center whitespace-nowrap">
                25+ Yrs Experience
              </div>
              <div className="bg-[#f4f4f5] text-[#0a0a0a] text-[12px] font-[700] px-4 py-3 rounded-[6px] tracking-tight flex-1 text-center whitespace-nowrap">
                Principal Engineer
              </div>
              <div className="bg-[#f4f4f5] text-[#0a0a0a] text-[12px] font-[700] px-4 py-3 rounded-[6px] tracking-tight flex-1 text-center whitespace-nowrap">
                Veteran
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex-1 flex flex-col text-center lg:text-left pt-6 lg:pt-[180px] max-w-[450px]"
          >
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[38px] lg:text-[42px] font-[700] text-[#0a0a0a] tracking-tight leading-[1.0] mb-3">
              Ralph F. Iles III
            </h3>
            <h4 className="text-[17px] font-[500] text-[#6b7280] leading-[1.35] mb-8 lg:pr-10 mix-blend-multiply">
              Founding Director & Principal Engineer of ILH Engineering
            </h4>
            <p className="text-[#9ca3af] text-[15px] font-[400] leading-[1.7] mb-5 lg:pr-6">
              With over 25+ yrs of experience in electrical and technology infrastructure, Ralph founded ILH Engineering to bring senior-level expertise directly to every project.
            </p>
            <p className="text-[#9ca3af] text-[15px] font-[400] leading-[1.7] lg:pr-6">
              His hands-on approach ensures that every design is precise, compliant, & built to perform.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
