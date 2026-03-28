import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Leadership() {
  return (
    <section className="w-full relative overflow-hidden bg-white py-24 lg:py-40">
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-3.5 py-1.5 rounded-[12px] text-[12.5px] font-[600] tracking-tight border border-[#d2efe2] mb-8 shadow-sm">
              <div className="w-[5.5px] h-[5.5px] rounded-full bg-brand-green mb-[0px]"></div>
              Not a biography, credibility narrative.
            </div>

            {/* Title */}
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[52px] sm:text-[64px] lg:text-[72px] font-[700] leading-[1.05] tracking-[-0.04em] text-[#0a0a0a]">
              Engineering<br/>Leadership
            </h2>

            {/* CTA Button */}
            <div className="flex items-stretch shadow-[0_12px_30px_rgba(55,151,104,0.22)] rounded-[8px] overflow-hidden group cursor-pointer w-max transition-transform border border-[#3e976c] hover:-translate-y-0.5 mt-10">
              <div className="bg-[#3e976c] text-white font-[600] tracking-wide text-[16px] px-7 py-3.5 flex items-center justify-center transition-colors group-hover:bg-[#34835d]">
                Learn More
              </div>
              <div className="bg-[#2f855a] text-white px-3.5 flex items-center justify-center border-l border-white/20 transition-colors group-hover:bg-[#276e4a]">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          {/* Center Column: Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col items-center w-full max-w-[360px]"
          >
            <div className="w-full h-[420px] bg-slate-100 overflow-hidden mb-5 border border-gray-100/50">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
                alt="Ralph F. Iles III" 
                className="w-full h-full object-cover object-top filter grayscale-[10%] contrast-105"
              />
            </div>
            {/* Small Stat Pills */}
            <div className="flex gap-2.5 w-full justify-between mt-1">
              <div className="bg-[#f4f4f5] text-[#0a0a0a] text-[11px] font-[700] px-3 py-2 rounded-[4px] tracking-tight flex-1 text-center border border-gray-100">
                25+ Yrs Experience
              </div>
              <div className="bg-[#f4f4f5] text-[#0a0a0a] text-[11px] font-[700] px-3 py-2 rounded-[4px] tracking-tight flex-1 text-center border border-gray-100">
                Principal Engineer
              </div>
              <div className="bg-[#f4f4f5] text-[#0a0a0a] text-[11px] font-[700] px-3 py-2 rounded-[4px] tracking-tight flex-1 text-center border border-gray-100">
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
            className="flex-1 flex flex-col text-center lg:text-left pt-6 lg:pt-24 max-w-[460px]"
          >
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[38px] lg:text-[44px] font-[800] text-[#0a0a0a] tracking-tight leading-[1.05] mb-4">
              Ralph F. Iles III
            </h3>
            <h4 className="text-[18px] lg:text-[20px] font-[600] text-[#64748b] leading-[1.4] mb-8 lg:pr-10 mix-blend-multiply">
              Founding Director & Principal Engineer of ILH Engineering
            </h4>
            <p className="text-[#9ca3af] text-[15.5px] font-[500] leading-[1.7] mb-5 lg:pr-6">
              With over 25+ yrs of experience in electrical and technology infrastructure, Ralph founded ILH Engineering to bring senior-level expertise directly to every project.
            </p>
            <p className="text-[#9ca3af] text-[15.5px] font-[500] leading-[1.7] lg:pr-6">
              His hands-on approach ensures that every design is precise, compliant, & built to perform.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
