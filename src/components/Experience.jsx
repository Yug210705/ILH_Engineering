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
      title: "Redundant & High Availability",
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
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f4f7f6] pt-10 sm:pt-16 pb-8 sm:pb-12">

      {/* ── Top Section ── */}
      <div className="relative w-full z-10 flex flex-col items-center overflow-hidden">

        {/* Grid background */}
        <div
          className="absolute inset-x-0 top-0 h-full w-full pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(55,151,104,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(55,151,104,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: 'min(500px, 90vw)',
            height: 'min(500px, 90vw)',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            background:
              'radial-gradient(circle, rgba(144,219,203,0.3) 0%, rgba(144,219,203,0) 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Content */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pb-8 sm:pb-16 lg:pb-24">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-12">

            {/* Left — heading */}
            <div className="w-full md:flex-[1.5] flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-[#379768] px-4 py-2 rounded-xl text-[12px] font-[800] tracking-wide border border-[#d2efe2] mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#379768]" />
                Engineering Experience
              </div>

              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[clamp(30px,7vw,72px)] font-[800] leading-[1.05] tracking-tight text-[#0a0a0a]"
              >
                Infrastructure{' '}
                <span className="text-[#a1a1aa] font-[800]">that</span>
                <br />
                Must Perform
              </h2>
            </div>

            {/* Right — description */}
            <div className="w-full md:flex-1 max-w-[500px] text-center md:text-left">
              <p className="text-[#64748b] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] sm:leading-[1.7] font-[500]">
                Supporting Electrical and Low Voltage Infrastructure,
                Mission-Critical operations, and large-scale facilities where
                downtime is not acceptable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cards Strip ── */}
      <div className="w-full relative z-20">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Mobile: stacked list  |  sm: 2-col grid  |  xl: 4-col strip */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-3 sm:gap-4 xl:gap-0
          ">
            {cards.map((card, index) => {
              const isActive = activeCard === index;
              const ActIcon = card.Icon;

              return (
                <motion.div
                  key={card.id}
                  className="relative"
                  /* lift on xl only so mobile stays flat */
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Card shell */}
                  <motion.div
                    animate={
                      /* Only apply vertical pop on xl screens via JS;
                         on smaller screens keep flat */
                      isActive
                        ? { y: 0, boxShadow: '0 20px 60px -12px rgba(0,0,0,0.12)' }
                        : { y: 0, boxShadow: '0 0 0 0 rgba(0,0,0,0)' }
                    }
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`
                      flex flex-row sm:flex-col
                      items-center sm:items-start
                      gap-4 sm:gap-0
                      px-5 sm:px-8 lg:px-10
                      py-5 sm:py-10
                      min-h-[90px] sm:min-h-[200px] xl:min-h-[260px]
                      rounded-2xl xl:rounded-none
                      border
                      cursor-pointer
                      transition-colors duration-300
                      ${isActive
                        ? 'bg-white border-[#e2e8f0]'
                        : 'bg-white/60 sm:bg-transparent border-[#e9eef2] xl:border-transparent xl:border-r-[#e2e8f0]'
                      }
                    `}
                  >
                    {/* Icon */}
                    <div className="shrink-0 sm:mb-auto">
                      <ActIcon
                        className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#379768]"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Text */}
                    <div className="sm:mt-auto text-left">
                      <h3 className="font-[800] text-[15px] sm:text-[18px] lg:text-[22px] tracking-tight text-[#0f172a] leading-[1.2]">
                        {card.title}
                      </h3>
                      <p className="text-[#a1a1aa] text-[12px] sm:text-[13px] lg:text-[14px] mt-1 sm:mt-2 font-[600] leading-snug">
                        {card.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
