import { ArrowUpRight } from 'lucide-react';
import capImage from '../../assets/cap1.jpg';
import img1 from '../../assets/img1.jpg';

export default function CapabilitiesPage() {
  const powerGrid = [
    {
      title: "Power Distribution",
      desc: "System Design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#3e976c] mb-6">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Generator & Backup",
      desc: "Power Systems",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#3e976c] mb-6">
          <rect x="3" y="6" width="14" height="12" rx="2" />
          <path d="M17 10h4v4h-4" />
          <circle cx="9" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: "Load Calculations",
      desc: "& Panel Schedules",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#3e976c] mb-6">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
          <path d="M4 20h16" />
        </svg>
      )
    },
    {
      title: "Short Circuit",
      desc: "& Voltage Drop Analysis",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#3e976c] mb-6">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinejoin="round" />
          <path d="M12 9v4" strokeLinejoin="round" />
          <path d="M12 17h.01" />
        </svg>
      )
    },
    {
      title: "Grounding & Bonding",
      desc: "System Design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#3e976c] mb-6">
          <path d="M12 2v8" />
          <path d="M8 10h8" />
          <path d="M12 10v12" />
          <path d="M4 22h16" />
        </svg>
      )
    },
    {
      title: "Arc Flash Analysis",
      desc: "& Code Compliance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-[#3e976c] mb-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white relative">
      
      {/* 1. Hero Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 relative isolate">
        <div className="relative w-full h-[500px] sm:h-[700px] lg:h-[800px] rounded-[24px] sm:rounded-[40px] overflow-hidden bg-[#2a2a2a]">
          <img
            src={capImage}
            alt="Electrical Infrastructure"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Subtle gradient overlay to darken the sky nicely for text legibility if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Top Left Cutout Replacement using robust floating white box */}
          <div className="absolute top-0 left-0 bg-white rounded-br-[20px] sm:rounded-br-[40px] pr-6 sm:pr-12 pb-6 sm:pb-10 pt-6 sm:pt-8 pl-4 sm:pl-8 lg:pl-10 z-20">
            <div className="inline-flex items-center gap-2 lg:gap-2.5 bg-[#f0f7f4] text-[#0a0a0a] px-3 sm:px-4 py-2 rounded-[8px] text-[11px] sm:text-[14px] font-[700] tracking-tight border border-[#cfe2d9] mb-4 sm:mb-6 leading-tight whitespace-normal break-words max-w-[280px] sm:max-w-none">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
              Electrical Engineering - Power Infrastructure
            </div>
            
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] sm:text-[54px] lg:text-[76px] font-[800] leading-[0.95] tracking-tight text-[#0a0a0a] m-0 p-0 text-left">
              Electrical <br />
              <span className="text-[#3e976c]">Power</span> Systems
            </h1>
          </div>

          {/* Smooth Inner Corner Trick Top Left */}
          <div className="absolute top-0 flex flex-col hidden lg:flex" style={{ left: 'clamp(300px, 45%, 600px)' }}>
             {/* Small hack for inner rounded corners could be applied, but sticking to clean flat design */}
          </div>

          {/* Mouse Scroll indicator */}
          <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-20 hidden sm:flex">
            <div className="w-[20px] h-[34px] border-2 border-white/70 rounded-full flex justify-center pt-1.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Bottom Right Cutout Replacement */}
          <div className="absolute bottom-0 right-0 bg-white rounded-tl-[20px] sm:rounded-tl-[40px] pl-6 sm:pl-10 pt-6 sm:pt-8 pb-4 sm:pb-6 pr-4 sm:pr-8 z-20 text-center sm:text-right">
             <button className="bg-[#3e976c] hover:bg-[#34835d] text-white font-[800] text-[15px] sm:text-[18px] px-6 sm:px-10 py-3.5 sm:py-5 rounded-[12px] shadow-lg shadow-[#3e976c]/30 transition-all active:-translate-y-1 w-full sm:w-auto">
               Schedule a Consultation
             </button>
             <p className="text-[#a1a1aa] text-[12px] sm:text-[14px] font-[500] mt-3 tracking-tight">
               Speak directly with an infrastructure engineer
             </p>
          </div>
        </div>
      </section>

      {/* 2. What We Do Grid */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #cedfde 1px, transparent 1px), linear-gradient(to bottom, #cedfde 1px, transparent 1px)`,
               backgroundSize: '48px 48px',
               maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 50%, transparent 90%, transparent 100%)'
             }}>
        </div>

        <div className="relative z-10">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-12 mb-12 sm:mb-20">
            {/* Pill & Heading side */}
            <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
               <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-[#0a0a0a] px-3 py-1.5 rounded-[8px] text-[12px] font-[600] tracking-tight border border-[#cfe2d9] whitespace-nowrap shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                  What We Do
               </div>
               <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[28px] sm:text-[42px] lg:text-[46px] font-[800] leading-[1.05] tracking-tight text-[#0a0a0a] max-w-[600px]">
                 Electrical Power Systems <br className="hidden sm:block"/>
                 We <span className="text-[#3e976c]">Design</span> and <span className="text-[#3e976c]">Deliver.</span>
               </h2>
            </div>
            {/* Description side */}
            <div className="flex-1 lg:max-w-[400px]">
               <p className="text-[#848484] text-[16px] sm:text-[18px] leading-[1.6] font-[500] tracking-tight">
                 Body Electrical infrastructure designed to perform under load and keep operations running without interruption.
               </p>
            </div>
          </div>

          {/* Desktop Borders Grid */}
          <div className="hidden md:grid w-full grid-cols-3 border border-gray-100 rounded-[20px] overflow-hidden bg-white/50 backdrop-blur-sm relative z-10 shadow-sm">
            {powerGrid.map((item, idx) => (
               <div key={idx} className={`p-8 lg:p-12 flex flex-col ${
                 idx < 3 ? 'border-b border-gray-100' : ''
               } ${
                 idx % 3 !== 2 ? 'border-r border-gray-100' : ''
               } transition-colors hover:bg-white`}>
                  {item.icon}
                  <h3 className="font-[800] text-[20px] lg:text-[22px] text-[#0a0a0a] tracking-tight leading-none mb-1.5">{item.title}</h3>
                  <p className="text-[#a1a1aa] font-[500] text-[15px]">{item.desc}</p>
               </div>
            ))}
          </div>

          {/* Mobile Stack Grid */}
          <div className="flex md:hidden flex-col gap-4 relative z-10">
            {powerGrid.map((item, idx) => (
               <div key={idx} className="p-6 bg-white rounded-[16px] shadow-sm border border-gray-100 flex flex-col pt-8">
                  {item.icon}
                  <h3 className="font-[800] text-[18px] text-[#0a0a0a] tracking-tight leading-tight mb-1">{item.title}</h3>
                  <p className="text-[#a1a1aa] font-[500] text-[14px]">{item.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Problem Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
           
           {/* Text Block */}
           <div className="flex-[0.85] flex flex-col items-start w-full order-2 lg:order-1 pt-0 lg:pt-8 xl:pt-12">
             <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#0a0a0a] px-3.5 py-1.5 rounded-[6px] text-[12.5px] font-[600] tracking-tight border border-[#cfe2d9] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                The Problem
             </div>

             <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] sm:text-[46px] lg:text-[48px] xl:text-[54px] font-[800] leading-[1.05] tracking-tight text-[#0a0a0a] w-full mb-6">
               Most Power <span className="text-[#3e976c]">Failures</span> Are<br />
               <span className="text-[#3e976c]">Designed</span> In
             </h2>

             <p className="text-[#848484] text-[15px] sm:text-[17px] leading-[1.65] font-[400] max-w-[500px] mb-10">
               Undersized distribution systems, missing redundancy, and non-compliant installations don't fail by accident. They fail because they were never engineered for the demands placed on them. The cost is measured in downtime, liability, and unplanned capital expenditure.
             </p>

             {/* Image 2 Exact Split Button CTA */}
             <div className="flex w-max rounded-lg overflow-hidden shadow-lg shadow-[#3e976c]/20 transition-transform active:scale-95 cursor-pointer group">
               <button className="bg-[#3e976c] group-hover:bg-[#34835d] text-white font-[700] text-[15.5px] px-6 py-3.5 flex items-center justify-center transition-colors">
                 Review Your Deployment Plan
               </button>
               <div className="bg-[#34835d] group-hover:bg-[#2c7150] flex items-center justify-center px-4 py-3.5 border-l border-[#40a373]/30 transition-colors">
                 <ArrowUpRight strokeWidth={2.5} size={20} className="text-white" />
               </div>
             </div>
           </div>

           {/* Image Block with Exact Custom Cutout Vector Mask */}
           <div className="flex-[1.15] w-full relative order-1 lg:order-2 flex justify-end items-center">
             <svg viewBox="0 0 100 100" className="w-[100%] max-w-[620px] h-auto aspect-square overflow-visible drop-shadow-2xl" preserveAspectRatio="none">
                <defs>
                  <clipPath id="exactProblemMask">
                     {/* 1. Top Left Floating Box */}
                     <rect x="22" y="5" width="16" height="13" rx="4.5" />
                     
                     {/* 2. Main Body - Horizontal Top Segment */}
                     <rect x="42" y="5" width="58" height="45" rx="4.5" />
                     
                     {/* 3. Main Body - Vertical Left Segment */}
                     <rect x="22" y="22" width="35" height="78" rx="4.5" />
                     
                     {/* 4. Middle Right Floating Box (Sleeve) */}
                     <rect x="61" y="54" width="18" height="18" rx="4.5" />
                     
                     {/* 5. Right Edge Floating A (Small Box) */}
                     <rect x="83" y="54" width="17" height="16" rx="4.5" />
                     
                     {/* 6. Bottom Right Floating B (Meter) */}
                     <rect x="76" y="74" width="19" height="26" rx="4.5" />
                  </clipPath>
                </defs>
                
                {/* Apply the mask seamlessly to the requested image */}
                <image 
                  href={img1} 
                  width="100%" 
                  height="100%" 
                  preserveAspectRatio="xMidYMid slice" 
                  clipPath="url(#exactProblemMask)" 
                />
             </svg>
           </div>
        </div>
      </section>

      {/* 4. Engineering Methodology Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate overflow-hidden">
        <div className="flex flex-col items-center mb-16 sm:mb-24 relative z-10 w-full text-center">
            <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#0a0a0a] px-3 py-1.5 rounded-[8px] text-[12px] font-[600] tracking-tight border border-[#cfe2d9] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
              Engineering Methodology
            </div>
            
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[32px] sm:text-[46px] lg:text-[54px] font-[800] leading-[1.05] tracking-tight text-[#0f172a] max-w-[800px]">
              From First Assessment to <br className="hidden sm:block"/>
              Final Sign-Off.
            </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative w-full max-w-[900px] mx-auto">
           {/* Center Vertical Line */}
           <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-[#d2efe2] -translate-x-[1px]"></div>
           <div className="absolute left-4 sm:left-1/2 bottom-0 h-1/4 w-[2px] bg-[#3e976c] -translate-x-[1px]"></div>

           <div className="flex flex-col gap-12 sm:gap-0 relative z-10">
              
              {/* Step 1 - Left */}
              <div className="flex w-full items-start justify-start sm:justify-start">
                 <div className="hidden sm:flex w-1/2 pr-12 justify-end items-center relative">
                    {/* Faint Clipboard Icon Right */}
                    <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 z-0 opacity-40">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="1" className="w-[80px] h-[80px]">
                         <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                         <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      </svg>
                    </div>

                    <div className="bg-[#46a275] text-white w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-[18px] absolute right-[-19px] z-20">1</div>
                    <div className="text-right z-10">
                       <h3 className="font-[800] text-[22px] sm:text-[24px] text-[#3e976c] mb-2 tracking-tight">Load & Risk Analysis</h3>
                       <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug">We assess operational demand, failure<br/>points, and compliance gaps.</p>
                    </div>
                 </div>

                 {/* Mobile Step 1 */}
                 <div className="sm:hidden flex flex-col w-full pl-12 relative">
                    <div className="bg-[#46a275] text-white w-[36px] h-[36px] rounded-full flex items-center justify-center font-bold text-[16px] absolute left-[-18px] top-2 z-20">1</div>
                    <h3 className="font-[800] text-[22px] text-[#3e976c] mb-2 tracking-tight">Load & Risk Analysis</h3>
                    <p className="text-[#a1a1aa] font-[500] text-[15px] leading-relaxed">We assess operational demand, failure points, and compliance gaps.</p>
                 </div>
              </div>

              {/* Step 2 - Right */}
              <div className="flex w-full items-start justify-end sm:justify-end sm:-mt-[20px]">
                 <div className="hidden sm:flex w-1/2 pl-12 justify-start items-center relative">
                    {/* Faint Chart Icon Left */}
                    <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 z-0 opacity-40">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="1" className="w-[80px] h-[80px]">
                         <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                         <line x1="3" y1="9" x2="21" y2="9"/>
                         <line x1="9" y1="21" x2="9" y2="9"/>
                      </svg>
                    </div>

                    <div className="bg-[#46a275] text-white w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-[18px] absolute left-[-19px] z-20">2</div>
                    <div className="text-left z-10">
                       <h3 className="font-[800] text-[22px] sm:text-[24px] text-[#46a275] mb-2 tracking-tight">System Architecture</h3>
                       <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug">Power distribution and redundancy are<br/>mapped against real operational needs.</p>
                    </div>
                 </div>

                 {/* Mobile Step 2 */}
                 <div className="sm:hidden flex flex-col w-full pl-12 relative">
                    <div className="bg-[#46a275] text-white w-[36px] h-[36px] rounded-full flex items-center justify-center font-bold text-[16px] absolute left-[-18px] top-2 z-20">2</div>
                    <h3 className="font-[800] text-[22px] text-[#46a275] mb-2 tracking-tight">System Architecture</h3>
                    <p className="text-[#a1a1aa] font-[500] text-[15px] leading-relaxed">Power distribution and redundancy are mapped against real operational needs.</p>
                 </div>
              </div>

              {/* Step 3 - Left */}
              <div className="flex w-full items-start justify-start sm:justify-start sm:-mt-[20px]">
                 <div className="hidden sm:flex w-1/2 pr-12 justify-end items-center relative">
                    <div className="bg-[#46a275] text-white w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-[18px] absolute right-[-19px] z-20">3</div>
                    <div className="text-right z-10">
                       <h3 className="font-[800] text-[22px] sm:text-[24px] text-[#3e976c] mb-2 tracking-tight">Design & Documentation</h3>
                       <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug">Every circuit, conduit, and panel schedule<br/>engineered and fully documented.</p>
                    </div>
                 </div>

                 {/* Mobile Step 3 */}
                 <div className="sm:hidden flex flex-col w-full pl-12 relative">
                    <div className="bg-[#46a275] text-white w-[36px] h-[36px] rounded-full flex items-center justify-center font-bold text-[16px] absolute left-[-18px] top-2 z-20">3</div>
                    <h3 className="font-[800] text-[22px] text-[#3e976c] mb-2 tracking-tight">Design & Documentation</h3>
                    <p className="text-[#a1a1aa] font-[500] text-[15px] leading-relaxed">Every circuit, conduit, and panel schedule engineered and fully documented.</p>
                 </div>
              </div>

              {/* Step 4 - Right */}
              <div className="flex w-full items-start justify-end sm:justify-end sm:-mt-[20px]">
                 <div className="hidden sm:flex w-1/2 pl-12 justify-start items-center relative">
                    <div className="bg-[#46a275] border-2 border-white text-white w-[42px] h-[42px] rounded-full flex items-center justify-center font-bold text-[20px] absolute left-[-21px] z-20 shadow-md">
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                       </svg>
                    </div>
                    <div className="text-left z-10">
                       <div className="font-[800] text-[22px] sm:text-[24px] text-[#46a275] mb-2 tracking-tight flex items-center gap-2">
                           <span className="text-[20px] bg-[#46a275] text-white rounded-full w-6 h-6 flex items-center justify-center pt-[1px] shadow-sm">4</span>
                           Commissioning & Handoff
                       </div>
                       <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug">We verify the system performs exactly<br/>as designed before we step away.</p>
                    </div>
                 </div>

                 {/* Mobile Step 4 */}
                 <div className="sm:hidden flex flex-col w-full pl-12 relative">
                    <div className="bg-[#46a275] border-[3px] border-white ring-1 ring-[#e2e8f0] text-white w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[16px] absolute left-[-20px] top-2 z-20">
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                       </svg>
                    </div>
                    <div className="font-[800] text-[22px] text-[#46a275] mb-2 tracking-tight flex items-center gap-2">
                         <span className="text-[18px] bg-[#46a275] text-white rounded-full w-6 h-6 flex items-center justify-center mt-[-2px]">4</span>
                         Commissioning & Handoff
                    </div>
                    <p className="text-[#a1a1aa] font-[500] text-[15px] leading-relaxed">We verify the system performs exactly as designed before we step away.</p>
                 </div>
              </div>

           </div>
        </div>
      </section>

    </div>
  );
}
