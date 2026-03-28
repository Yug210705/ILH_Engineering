import { Building2, Server, Network, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Experience() {
  const [activeCard, setActiveCard] = useState(null); 

  const cards = [
    {
      id: 0,
      title: "Multi-Facility",
      subtitle: "Infrastructure Environments",
      Icon: Building2,
    },
    {
      id: 1,
      title: "Redundant and\nHigh Availability",
      subtitle: "System Design",
      Icon: Server,
    },
    {
      id: 2,
      title: "Complex",
      subtitle: "Infrastructure Integration",
      Icon: Network,
    },
    {
      id: 3,
      title: "Mission-Critical",
      subtitle: "Operation",
      Icon: ShieldCheck,
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-white to-[#f4f7f6] pt-24 sm:pt-32 text-sans flex flex-col">
      
      {/* Top Section: Hero/Header area */}
      <div className="relative w-full z-10 flex flex-col items-center">
        {/* Glow & Masked Grid Container */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div 
            className="absolute rounded-full"
            style={{
              width: 'min(500px, 90vw)',
              height: 'min(500px, 90vw)',
              top: '10%',
              left: '50%',
              transform: 'translateX(-40%)',
              background: 'radial-gradient(circle, rgba(144, 219, 203, 0.3) 0%, rgba(144, 219, 203, 0) 70%)',
              filter: 'blur(40px)'
            }}
          ></div>
          
          <div 
            className="absolute inset-x-0 top-0 h-[150%] w-full pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(55,151,104,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(55,151,104,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
              backgroundPosition: 'top 32px center',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 85%)'
            }}
          ></div>
        </div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-full max-w-[1600px] px-6 sm:px-10 lg:px-12 relative z-10 pb-16 lg:pb-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-8 md:gap-12">
            {/* Left Header */}
            <div className="w-full md:flex-[1.5]">
              <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-4 py-2 rounded-xl text-[12px] font-[800] tracking-wide border border-[#d2efe2] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                Engineering Experience
              </div>
              
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[38px] sm:text-[52px] lg:text-[72px] font-[800] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a] mt-2">
                Infrastructure <span className="text-[#a1a1aa] font-[800]">that</span><br/>Must Perform
              </h2>
            </div>
            
            {/* Right Paragraph */}
            <div className="w-full md:flex-1 md:mt-16 lg:mt-24 max-w-[500px]">
              <p className="text-[#64748b] text-[16px] lg:text-[18px] leading-[1.7] font-medium">
                Supporting Electrical and Low Voltage Infrastructure, Mission-Critical operations, and large scale facilities where downtime is not acceptable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Cards Strip Area */}
      <div className="w-full bg-[#f4f7f6] border-y border-[#e2e8f0] relative z-20">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
          className="w-full max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-x border-[#e2e8f0]"
        >
          {cards.map((card, index) => {
            const isActive = activeCard === index;
            const ActIcon = card.Icon;

            return (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } }
                }}
                key={card.id}
                className="relative z-10 w-full min-h-[220px] sm:min-h-[260px]"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div 
                  className={`
                    absolute inset-x-[-1px] inset-y-0 flex flex-col px-8 lg:px-10 z-20 
                    border transition-all duration-300 ease-in-out cursor-pointer
                    ${isActive 
                      ? 'md:-top-6 md:-bottom-6 bg-white shadow-2xl border-[#e2e8f0] z-40' 
                      : 'top-0 bottom-0 hover:bg-white/50 border-transparent border-r-[#e2e8f0]'
                    }
                  `}
                >
                  <div className={`transition-all duration-300 ${isActive ? 'mt-12 sm:mt-14' : 'mt-10 sm:mt-12'}`}>
                    <ActIcon size={40} className="text-brand-green" strokeWidth={1.5} />
                  </div>
                  
                  <div className={`mt-auto whitespace-pre-line transition-all duration-300 ${isActive ? 'mb-10 sm:mb-12' : 'mb-8 sm:mb-10'}`}>
                    <h3 className="font-[800] text-[20px] sm:text-[22px] tracking-tight text-[#0f172a] leading-[1.2]">{card.title}</h3>
                    <p className="text-[#a1a1aa] text-[14px] mt-2 font-semibold leading-snug">{card.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
