import { Building2, Server, Network, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Experience() {
  // Start with no cards active so they are all their original size natively
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
    <section className="w-full relative overflow-hidden bg-[#f4f7f6] pt-32 text-sans flex flex-col">
      
      {/* Top Section: Hero/Header area */}
      <div className="relative w-full z-10 flex flex-col items-center">
        {/* Glow & Masked Grid Container - Centered to the content block */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          {/* Blue-Green Glow behind the center "that" area */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '500px',
              height: '500px',
              top: '10%',
              left: '50%',
              transform: 'translateX(-40%)',
              background: 'radial-gradient(circle, rgba(144, 219, 203, 0.4) 0%, rgba(144, 219, 203, 0) 70%)',
              filter: 'blur(40px)'
            }}
          ></div>
          
          {/* Fading Grid with higher visibility and wider mask */}
          <div 
            className="absolute inset-x-0 top-0 h-[150%] w-full pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(55,151,104,0.18) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(55,151,104,0.18) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
              backgroundPosition: 'top 32px center',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 85%)'
            }}
          ></div>
        </div>

        {/* Content Container spanning max-w-[1300] */}
        <div className="w-full max-w-[1300px] px-6 relative z-10 pb-[70px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            {/* Left Header */}
            <div className="flex-[1.6]">
              <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-3 py-1.5 rounded-[12px] text-[12px] font-bold tracking-wide border border-[#d2efe2] mb-6 shadow-sm shadow-[#379768]/10">
                <div className="w-[5px] h-[5px] rounded-full bg-brand-green mb-[1px]"></div>
                Engineering Experience
              </div>
              
              <h2 className="text-[52px] md:text-[68px] lg:text-[76px] font-[800] leading-[1.0] tracking-[-0.035em] text-[#0f172a] mt-2 flex flex-col items-start w-full">
                <div className="flex flex-wrap items-baseline gap-x-4 mb-[2px]">
                  <span>Infrastructure</span> 
                  {/* Visibly darker "that" matching Image 16 */}
                  <span className="text-[#a0aec0] font-[800]">that</span>
                </div>
                <div>
                  <span>Must Perform</span>
                </div>
              </h2>
            </div>
            
            {/* Right Paragraph */}
            <div className="flex-1 pb-4 md:mt-16 w-full max-w-sm md:ml-auto">
              <p className="text-[#64748b] text-[15px] leading-[1.7] font-medium mix-blend-multiply md:text-left pr-4">
                Supporting Electrical and Low Voltage Infrastructure, Mission-Critical operations, and large scale facilities where downtime is not acceptable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Cards Strip Area */}
      {/* 100% width horizontal strip */}
      <div className="w-full bg-[#f4f7f6] border-y border-[#e2e8f0] relative z-20 h-auto md:h-[260px] flex items-center mt-[-1px]">
        
        {/* Container for the 4 layout columns */}
        <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 h-full border-x border-[#e2e8f0] relative">
          
          {cards.map((card, index) => {
            const isActive = activeCard === index;
            const ActIcon = card.Icon;

            return (
              <div 
                key={card.id}
                className="relative z-10 w-full h-[260px]"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(isActive ? null : index)} // Clicking toggles it off if it's currently active 
              >
                {/* 
                  The Absolute Overlay Card 
                  We use `border border-transparent border-r-[#e2e8f0]` for the default state to 
                  ensure the vertical separator is visible, but the top/bottom/left edges are hidden.
                  On hover, we pop it forward by switching all colors to `border-[#e2e8f0]`.
                */}
                <div 
                  className={`
                    absolute left-[-1px] right-0 flex flex-col px-8 xl:px-10 z-20 
                    border transition-all duration-300 ease-in-out cursor-pointer
                    ${isActive 
                      ? 'md:top-[-26px] md:bottom-[-26px] bg-[#ffffff] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-[#e2e8f0] z-40' 
                      : 'top-0 bottom-0 hover:bg-[#edf2f0]/50 border-transparent border-r-[#e2e8f0]'
                    }
                  `}
                >
                  <div className={`transition-all duration-300 ${isActive ? 'mt-[50px]' : 'mt-[36px]'}`}>
                    <ActIcon size={32} className="text-brand-green" strokeWidth={1.75} />
                  </div>
                  
                  <div className={`mt-auto whitespace-pre-line transition-all duration-300 ${isActive ? 'mb-[40px]' : 'mb-[32px]'}`}>
                    <h3 className="font-bold text-[19px] tracking-tight text-[#0f172a] leading-[1.18]">{card.title}</h3>
                    <p className="text-[#a1a1aa] text-[13px] mt-1.5 font-medium leading-snug">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
