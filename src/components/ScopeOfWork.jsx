import { Building, Server, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScopeOfWork() {
  const features = [
    {
      title: "Large-Scale Facilities",
      desc: "Coordinated systems across complex environments.",
      icon: <Building className="text-[#3e976c]" size={42} strokeWidth={1.5} />
    },
    {
      title: "Enterprise Infrastructure",
      desc: "Systems supporting large-scale business operations.",
      icon: <Server className="text-[#3e976c]" size={42} strokeWidth={1.5} />
    },
    {
      title: "Mission-Critical Systems",
      desc: "Infrastructure where downtime is unacceptable.",
      icon: <ShieldCheck className="text-[#3e976c]" size={42} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden">
      
      {/* 1. Header Grid Area - Precise vignette corner fading */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.55]"
          style={{
            backgroundImage: `linear-gradient(to right, #cedfde 1px, transparent 1px), linear-gradient(to bottom, #cedfde 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            backgroundPosition: '50% 0%',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 10%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 10%, transparent 90%)'
          }}
        ></div>
        {/* Atmospheric Blue Glow */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)'
          }}
        ></div>
      </div>

      {/* Header Container - 1:1 Proportional Match */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 pt-32 lg:pt-44 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-24">
          
          {/* Tag on Left - Exact pill styling */}
          <div className="shrink-0 pt-2">
            <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#3e976c] px-4 py-2 rounded-lg text-[13px] font-[700] tracking-tight border border-[#cfe2d9]/80 shadow-sm shadow-[#3e976c]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
              Scope of Work
            </div>
          </div>

          {/* Heading - Shifted Left, Ultra-Bold, 2 Lines exactly */}
          <div className="flex-1 flex justify-start lg:pl-10">
            <h2 
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
              className="text-[38px] sm:text-[48px] lg:text-[72px] xl:text-[80px] font-[800] leading-[0.96] tracking-[-0.045em] text-[#0a0a0a] text-left max-w-none"
            >
              <span className="lg:whitespace-nowrap">Infrastructure Across</span> <br className="hidden sm:block" /> 
              <span className="lg:whitespace-nowrap">Complex Environments</span>
            </h2>
          </div>

          {/* Description - Right aligned, light gray tight line-height */}
          <div className="lg:w-[320px] shrink-0 pt-3">
            <p className="text-[#8e9aaf] text-[16px] xl:text-[17px] leading-[1.6] font-[500] text-left lg:text-left opacity-90">
              Our work spans enterprise systems, large-scale facilities, & mission-critical environments where infrastructure performance is essential.
            </p>
          </div>

        </div>
      </div>

      {/* 2. Feature Cards Section - Divider-based architecture */}
      <div className="w-full border-t border-[#f0f0f0] bg-white relative z-20">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-3 border-x border-[#f0f0f0]">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ backgroundColor: '#fafffe' }}
              className={`p-12 lg:p-16 xl:p-20 flex flex-col items-start gap-12 bg-white relative overflow-hidden group transition-colors duration-500 ${index !== features.length - 1 ? 'md:border-r border-[#f0f0f0]' : ''}`}
            >
              {/* Icon Area - Dynamic Scale on hover */}
              <div className="transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(62,151,108,0.15)]">
                {item.icon}
              </div>

              {/* Text Area */}
              <div className="flex flex-col gap-5 mt-auto">
                <h3 
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
                  className="text-[22px] sm:text-[24px] lg:text-[28px] xl:text-[30px] font-[800] text-[#0a0a0a] tracking-tight leading-tight transition-colors duration-300 group-hover:text-[#3e976c]"
                >
                  {item.title}
                </h3>
                <p 
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[#8e9aaf] text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.65] font-[500] max-w-[340px] opacity-90"
                >
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent Bar Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[3.5px] bg-[#3e976c] transition-all duration-700 ease-in-out group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
        <div className="w-full border-b border-[#f0f0f0] max-w-[1600px] mx-auto"></div>
      </div>

    </section>
  );
}
