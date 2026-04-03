import { XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DesignRisk() {
  return (
    <section className="w-full bg-[#f4f7f6] pt-8 sm:pt-12 pb-16 sm:pb-32 relative z-10">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        
        <motion.div 
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-4 py-2 rounded-xl text-[13px] font-[800] tracking-wide border border-[#d2efe2] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
            The Risk Most Organizations Overlook
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[clamp(28px,8.5vw,42px)] sm:text-[clamp(42px,7vw,72px)] font-[800] leading-[1.05] tracking-tight text-[#0a0a0a] text-center max-w-[1100px] mb-4 sm:mb-8 break-words whitespace-normal px-2">
            Most Infrastructure Failures <br className="hidden md:block"/> Start With Design.
          </h2>

          {/* Paragraph */}
          <p className="text-[#64748b] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.65] font-medium text-center max-w-[900px] mb-10 md:mb-20 px-4">
            Many organizations operate critical systems on infrastructure that was never engineered for resilience.<br className="hidden lg:block"/>
            Single points of failure, aging systems, and fragmented infrastructure leave operations exposed to outages that disrupt revenue, productivity, compliance, and safety.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-12">
          
          {/* Left Card: Fragmented Infrastructure */}
          <motion.div 
            className="bg-white/80 backdrop-blur-md border border-[#fecaca] p-5 sm:p-10 flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-[28px] sm:rounded-[32px] overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-[200px] sm:h-[320px] bg-slate-100 overflow-hidden mb-6 sm:mb-10 relative">
                <div className="absolute inset-0 bg-[#ef4444]/15 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
                    alt="Fragmented Server Cables" 
                    className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 hover:scale-[1.05]"
                />
            </div>

            {/* Title */}
            <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-[800] tracking-tight text-[#0f172a] mb-6 px-2 break-words">
              Fragmented Infrastructure
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-4 sm:gap-5 px-2 pb-2">
              {[
                "Single Point of Failure",
                "Reactive Fixes",
                "High Downtime Risk"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <XCircle size={22} className="text-[#ef4444]" strokeWidth={2.5} />
                  <span className="text-[16px] text-[#64748b] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card: Engineered Infrastructure */}
          <motion.div 
            className="bg-white/80 backdrop-blur-md border border-[#bbf7d0] p-5 sm:p-10 flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-[28px] sm:rounded-[32px] overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-[200px] sm:h-[320px] bg-slate-100 overflow-hidden mb-6 sm:mb-10 relative">
                <div className="absolute inset-0 bg-[#22c55e]/15 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" 
                    alt="Engineered Clean Infrastructure" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
            </div>

            {/* Title */}
            <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-[800] tracking-tight text-[#0f172a] mb-6 px-2 break-words">
              Engineered Infrastructure
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-4 sm:gap-5 px-2 pb-2">
              {[
                "Redundant System",
                "Integrated Architecture",
                "Operational Resilience"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <CheckCircle2 size={22} className="text-[#22c55e]" strokeWidth={2.5} />
                  <span className="text-[16px] text-[#64748b] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
