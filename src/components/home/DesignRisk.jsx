import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { SectionPill, SectionHeading } from '../ui';

export default function DesignRisk() {
  return (
    <section className="w-full bg-[#f4f7f6] pt-8 sm:pt-12 pb-16 sm:pb-32 relative z-10">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        
        <motion.div 
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <SectionPill className="mb-8">
            The Risk Most Organizations Overlook
          </SectionPill>

          {/* Heading */}
          <SectionHeading className="text-center max-w-[1100px] mb-4 sm:mb-8">
            Most Infrastructure Failures <br className="hidden md:block"/> Start With Design.
          </SectionHeading>

          {/* Paragraph */}
          <p className="text-[#64748b] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.65] font-medium text-center max-w-[900px] mb-10 md:mb-20 px-4">
            Many organizations operate critical systems on infrastructure that was never engineered for resilience.<br className="hidden lg:block"/>
            Single points of failure, aging systems, and fragmented infrastructure leave operations exposed to outages that disrupt revenue, productivity, compliance, and safety.
          </p>
        </motion.div>

        {/* Cards Container - Sliding on Mobile, Grid on Desktop */}
        <div className="w-full flex lg:grid lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-12 overflow-x-auto snap-x snap-mandatory pb-6 lg:pb-0 px-4 sm:px-0 scrollbar-hide">
          
          {/* Left Card: Fragmented Infrastructure */}
          <motion.div 
            className="min-w-[88vw] lg:min-w-0 snap-center bg-white/80 backdrop-blur-md border border-[#fecaca] p-5 sm:p-10 flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-[28px] sm:rounded-[32px] overflow-hidden"
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
            <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-[600] tracking-tight text-[#0f172a] mb-6 px-2 break-words">
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
            className="min-w-[88vw] lg:min-w-0 snap-center bg-white/80 backdrop-blur-md border border-[#bbf7d0] p-5 sm:p-10 flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-[28px] sm:rounded-[32px] overflow-hidden"
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
            <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-[600] tracking-tight text-[#0f172a] mb-6 px-2 break-words">
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
