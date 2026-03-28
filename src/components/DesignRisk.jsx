import { XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DesignRisk() {
  return (
    <section className="w-full bg-[#f4f7f6] pt-24 pb-32">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-4 py-2 rounded-xl text-[13px] font-[800] tracking-wide border border-[#d2efe2] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
            The Risk Most Organizations Overlook
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] sm:text-[52px] lg:text-[72px] font-[800] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a] text-center max-w-[1100px] mb-8">
            Most Infrastructure Failures <br className="hidden md:block"/> Start With Design.
          </h2>

          {/* Paragraph */}
          <p className="text-[#64748b] text-[16px] md:text-[18px] leading-[1.7] font-medium text-center max-w-[900px] mb-16 md:mb-20">
            Many organizations operate critical systems on infrastructure that was never engineered for resilience.<br className="hidden lg:block"/>
            Single points of failure, aging systems, and fragmented infrastructure leave operations exposed to outages that disrupt revenue, productivity, compliance, and safety.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          
          {/* Left Card: Fragmented Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-white border border-[#fecaca] p-6 sm:p-10 flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-[32px] overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-[240px] sm:h-[320px] bg-slate-100 overflow-hidden mb-10 relative">
                <div className="absolute inset-0 bg-[#ef4444]/15 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
                    alt="Fragmented Server Cables" 
                    className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 hover:scale-[1.05]"
                />
            </div>

            {/* Title */}
            <h3 className="text-[26px] sm:text-[30px] font-[800] tracking-tight text-[#0f172a] mb-6 px-2">
              Fragmented Infrastructure
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-5 px-2 pb-2">
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-white border border-[#bbf7d0] p-6 sm:p-10 flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-[32px] overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-[240px] sm:h-[320px] bg-slate-100 overflow-hidden mb-10 relative">
                <div className="absolute inset-0 bg-[#22c55e]/15 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" 
                    alt="Engineered Clean Infrastructure" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
            </div>

            {/* Title */}
            <h3 className="text-[26px] sm:text-[30px] font-[800] tracking-tight text-[#0f172a] mb-6 px-2">
              Engineered Infrastructure
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-5 px-2 pb-2">
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
