import { useState } from 'react';
import { Building2, Server, Network, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionPill, SectionHeading, GridBackground } from '../ui';

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
    <section className="w-full bg-gradient-to-b from-white to-[#f4f7f6] pt-10 sm:pt-16 pb-8 sm:pb-12">
      
      {/* Top Section: Hero/Header area */}
      <div className="relative w-full z-10 flex flex-col items-center">
        <GridBackground opacity={1} />
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
        </div>

        {/* Content Container */}
        <motion.div 
          className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pb-8 sm:pb-16 lg:pb-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-center lg:items-center gap-6 md:gap-12">
            {/* Left Header */}
            <div className="w-full md:flex-[1.5] flex flex-col items-center md:items-start text-center md:text-left">
              <SectionPill className="mb-4 sm:mb-6 mx-auto md:mx-0">
                Engineering Experience
              </SectionPill>
              
              <SectionHeading className="mt-2 text-center md:text-left">
                Infrastructure <span className="text-[#a1a1aa] font-[800]">that</span><br/>Must Perform
              </SectionHeading>
            </div>
            
            {/* Right Paragraph */}
            <div className="w-full md:flex-1 md:mt-16 lg:mt-24 max-w-[500px] text-center md:text-left mt-0">
              <p className="text-[#64748b] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] sm:leading-[1.7] font-[500] px-4 md:px-0">
                Supporting Electrical and Low Voltage Infrastructure, Mission-Critical operations, and large scale facilities where downtime is not acceptable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Cards Strip Area */}
      <div className="w-full bg-transparent relative z-20">
        
        {/* --- DESKTOP/TABLET GRID --- */}
        <motion.div 
          className="hidden md:grid w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 grid-cols-4"
        >
          {cards.map((card, index) => {
            const isActive = activeCard === index;
            const ActIcon = card.Icon;

            return (
              <motion.div 
                key={card.id}
                className="relative z-10 w-full min-h-[260px]"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div 
                  className={`
                    absolute inset-x-[-1px] inset-y-0 flex flex-col px-4 sm:px-8 lg:px-10 z-20 
                    border transition-all duration-300 ease-in-out cursor-pointer
                    ${isActive 
                      ? '-top-6 -bottom-6 bg-white shadow-2xl border-[#e2e8f0] z-40' 
                      : 'top-0 bottom-0 hover:bg-white/50 border-transparent border-r-[#e2e8f0]'
                    }
                  `}
                >
                  <div className={`transition-all duration-300 flex items-start justify-start ${isActive ? 'mt-14' : 'mt-12'}`}>
                    <ActIcon className="w-10 h-10 text-brand-green" strokeWidth={1.5} />
                  </div>
                  
                  <div className={`mt-auto whitespace-pre-line transition-all duration-300 text-left ${isActive ? 'mb-12' : 'mb-10'}`}>
                    <h3 className="font-[800] text-[20px] lg:text-[22px] tracking-tight text-[#0f172a] leading-[1.2]">{card.title}</h3>
                    <p className="text-[#a1a1aa] text-[14px] mt-2 font-[600] leading-snug">{card.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- MOBILE STACK --- */}
        <div className="flex md:hidden flex-col gap-4 w-full px-4 mt-6">
          {cards.map((card, index) => {
             const ActIcon = card.Icon;
             return (
               <div key={card.id} className="relative overflow-hidden bg-white rounded-[20px] p-6 border border-[#e2e8f0]/60 shadow-lg shadow-[#379768]/5 flex items-start gap-5">
                  {/* Subtle Background Glow per card */}
                  <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#d7e9e1] rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="w-[48px] h-[48px] rounded-xl bg-[#f0f7f4] flex items-center justify-center shrink-0 border border-[#cfe2d9]/50 relative z-10">
                     <ActIcon className="w-6 h-6 text-brand-green" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col relative z-10">
                     <h3 className="font-[800] text-[16px] text-[#0f172a] leading-tight tracking-tight">{card.title.replace('\n', ' ')}</h3>
                     <p className="text-[#64748b] text-[13.5px] font-[500] mt-1.5 leading-[1.4]">{card.subtitle}</p>
                  </div>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
