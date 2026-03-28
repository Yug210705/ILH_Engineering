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
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-3.5 py-1.5 rounded-[12px] text-[13px] font-bold tracking-wide border border-[#d2efe2] mb-8 shadow-sm shadow-[#379768]/10">
            <div className="w-[6px] h-[6px] rounded-full bg-brand-green mb-[1px]"></div>
            The Risk Most Organizations Overlook
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[48px] sm:text-[60px] lg:text-[72px] font-[700] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a] text-center max-w-[1100px] mb-8">
            Most Infrastructure Failures <br className="hidden md:block"/> Start With Design.
          </h2>

          {/* Paragraph */}
          <p className="text-[#64748b] text-[16px] md:text-[18px] leading-[1.7] font-medium text-center max-w-[900px] mb-20 mix-blend-multiply">
            Many organizations operate critical systems on infrastructure that was never engineered for resilience.<br className="hidden lg:block"/>
            Single points of failure, aging systems, and fragmented infrastructure leave operations exposed to outages that<br className="hidden xl:block" /> disrupt revenue, productivity, compliance, and safety.
          </p>
        </motion.div>

        {/* Cards Container - Scaled up to match exactly the 1300px global grid */}
        <div className="w-full grid md:grid-cols-2 gap-8 xl:gap-12">
          
          {/* Left Card: Fragmented Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-white border border-[#fecaca] p-6 lg:p-10 flex flex-col shadow-[0_4px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-full h-[260px] lg:h-[320px] bg-slate-100 overflow-hidden mb-10 relative border border-gray-100/50">
                {/* Reddish tint overlay */}
                <div className="absolute inset-0 bg-[#ef4444]/10 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
                    alt="Fragmented Server Cables" 
                    className="w-full h-full object-cover grayscale-[30%] contrast-125 opacity-90 transition-transform duration-700 hover:scale-[1.03]"
                />
            </div>

            {/* Title */}
            <h3 className="text-[26px] lg:text-[30px] font-bold tracking-tight text-[#0f172a] mb-6 px-2 lg:px-4">
              Fragmented Infrastructure
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-4 lg:gap-5 px-2 lg:px-4 pb-2">
              <li className="flex items-center gap-4">
                <XCircle size={22} className="text-[#ef4444]" strokeWidth={2.2} />
                <span className="text-[15px] lg:text-[16px] text-[#64748b] font-medium mt-[1px]">Single Point of Failure</span>
              </li>
              <li className="flex items-center gap-4">
                <XCircle size={22} className="text-[#ef4444]" strokeWidth={2.2} />
                <span className="text-[15px] lg:text-[16px] text-[#64748b] font-medium mt-[1px]">Reactive Fixes</span>
              </li>
              <li className="flex items-center gap-4">
                <XCircle size={22} className="text-[#ef4444]" strokeWidth={2.2} />
                <span className="text-[15px] lg:text-[16px] text-[#64748b] font-medium mt-[1px]">High Downtime Risk</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Card: Engineered Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-white border border-[#bbf7d0] p-6 lg:p-10 flex flex-col shadow-[0_4px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-full h-[260px] lg:h-[320px] bg-slate-100 overflow-hidden mb-10 relative border border-gray-100/50">
                {/* Greenish tint overlay */}
                <div className="absolute inset-0 bg-[#22c55e]/10 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" 
                    alt="Engineered Clean Infrastructure" 
                    className="w-full h-full object-cover contrast-110 opacity-95 transition-transform duration-700 hover:scale-[1.03]"
                />
            </div>

            {/* Title */}
            <h3 className="text-[26px] lg:text-[30px] font-bold tracking-tight text-[#0f172a] mb-6 px-2 lg:px-4">
              Engineered Infrastructure
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-4 lg:gap-5 px-2 lg:px-4 pb-2">
              <li className="flex items-center gap-4">
                <CheckCircle2 size={22} className="text-[#22c55e]" strokeWidth={2.2} />
                <span className="text-[15px] lg:text-[16px] text-[#64748b] font-medium mt-[1px]">Redundant System</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 size={22} className="text-[#22c55e]" strokeWidth={2.2} />
                <span className="text-[15px] lg:text-[16px] text-[#64748b] font-medium mt-[1px]">Integrated Architecture</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 size={22} className="text-[#22c55e]" strokeWidth={2.2} />
                <span className="text-[15px] lg:text-[16px] text-[#64748b] font-medium mt-[1px]">Operational Resilience</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
