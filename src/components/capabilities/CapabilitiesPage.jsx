import { ArrowUpRight, CircleCheck, Clipboard, File, FileText, Layers, Network, Search } from 'lucide-react';
import capImage from '../../assets/cap1.jpg';
import Mosaic1 from '../../assets/Mosaic1.png';
import ClientsEnvironmentSection from './components/ClientsEnvironmentSection';

export default function CapabilitiesPage() {
const powerGrid = [
    {
      title: "Power Distribution",
      desc: "System Design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#3e976c] mb-8">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: "Generator & Backup",
      desc: "Power Systems",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-8">
          {/* Engine/motor icon */}
          <path d="M3 12h1m16 0h1M6 6l1.5 1.5M16.5 7.5L18 6M6 18l1.5-1.5m9 0L18 18" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8V6m0 12v-2" />
        </svg>
      )
    },
    {
      title: "Load Calculations",
      desc: "& Panel Schedules",
      icon: (
        <svg viewBox="0 0 24 24" fill="#3e976c" className="w-10 h-10 mb-8">
          <rect x="3" y="12" width="4" height="9" rx="1" />
          <rect x="10" y="7" width="4" height="14" rx="1" />
          <rect x="17" y="3" width="4" height="18" rx="1" />
        </svg>
      )
    },
    {
      title: "Short Circuit",
      desc: "& Voltage Drop Analysis",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-8">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <path d="M12 9v4" /><path d="M12 17h.01" />
        </svg>
      )
    },
    {
      title: "Grounding & Bonding",
      desc: "System Design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-8">
          {/* Anchor icon */}
          <circle cx="12" cy="5" r="3" />
          <path d="M12 8v13" />
          <path d="M5 10a7 7 0 0 0 14 0" />
          <path d="M5 10H3m18 0h-2" />
        </svg>
      )
    },
    {
      title: "Arc Flash Analysis",
      desc: "& Code Compliance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  const methodologySteps = [
    {
      number: 1,
      title: "Facility & Risk Assessment",
      body: "We map existing infrastructure, identify single points of failure and compliance gaps.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] opacity-30">
          <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      side: 'left', // text on left, icon on right
    },
    {
      number: 2,
      title: "Redundancy Architecture",
      body: "Power, cooling, and communications are designed with layered failover from the ground up.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] opacity-30">
          <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 17.5h7M17.5 14v7" />
        </svg>
      ),
      side: 'right', // icon on left, text on right
    },
    {
      number: 3,
      title: "Integrated System Design",
      body: "Every subsystem is engineered to work together under both normal and failure conditions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] opacity-30">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <path d="M8 10h8M8 14h5" /><circle cx="16" cy="14" r="2" />
        </svg>
      ),
      side: 'left',
    },
    {
      number: 4,
      title: "Commissioning & Handoff",
      body: "We verify every system performs to specification before the facility goes live.",
      icon: null,
      isLast: true,
      side: 'right',
    },
  ];

  return (
    <div className="w-full bg-white relative">

      {/* 1. Hero Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 relative isolate">
        <div className="relative w-full h-[500px] sm:h-[700px] lg:h-[800px] rounded-[24px] sm:rounded-[40px] overflow-hidden bg-[#2a2a2a]">
          <img src={capImage} alt="Electrical Infrastructure" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute top-0 left-0 bg-white rounded-br-[20px] sm:rounded-br-[40px] pr-6 sm:pr-12 pb-6 sm:pb-10 pt-6 sm:pt-8 pl-4 sm:pl-8 lg:pl-10 z-20">
            <div className="inline-flex items-center gap-2 lg:gap-2.5 bg-[#f0f7f4] text-[#0a0a0a] px-3 sm:px-4 py-2 rounded-[8px] text-[11px] sm:text-[14px] font-[700] tracking-tight border border-[#cfe2d9] mb-4 sm:mb-6 leading-tight whitespace-normal break-words max-w-[280px] sm:max-w-none">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
              Electrical Engineering - Power Infrastructure
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] sm:text-[54px] lg:text-[76px] font-[800] leading-[0.95] tracking-tight text-[#0a0a0a] m-0 p-0 text-left">
              Electrical <br /><span className="text-[#3e976c]">Power</span> Systems
            </h1>
          </div>

          <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-20 hidden sm:flex">
            <div className="w-[20px] h-[34px] border-2 border-white/70 rounded-full flex justify-center pt-1.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>

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
      <section className="w-full max-w-full mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #cedfde 1px, transparent 1px), linear-gradient(to bottom, #cedfde 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 50%, transparent 90%, transparent 100%)'
          }}>
        </div>
        <div className="relative z-10 px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-12 mb-12 sm:mb-20">
            <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-[#0a0a0a] px-3 py-1.5 rounded-[8px] text-[12px] font-[600] tracking-tight border border-[#cfe2d9] whitespace-nowrap shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                What We Do
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[28px] sm:text-[42px] lg:text-[46px] font-[800] leading-[1.05] tracking-tight text-[#0a0a0a] max-w-[600px]">
                Electrical Power Systems <br className="hidden sm:block" />
                We <span className="text-[#3e976c]">Design</span> and <span className="text-[#3e976c]">Deliver.</span>
              </h2>
            </div>
            <div className="flex-1 lg:max-w-[400px]">
              <p className="text-[#848484] text-[16px] sm:text-[18px] leading-[1.6] font-[500] tracking-tight">
                Electrical infrastructure designed to perform under load and keep operations running without interruption.
              </p>
            </div>
          </div>

          <div className="hidden md:grid w-full grid-cols-3 border border-gray-100 rounded-[20px] overflow-hidden bg-white/50 backdrop-blur-sm relative z-10 shadow-sm">
            {powerGrid.map((item, idx) => (
              <div key={idx} className={`p-8 lg:p-12 flex flex-col ${idx < 3 ? 'border-b border-gray-100' : ''} ${idx % 3 !== 2 ? 'border-r border-gray-100' : ''} transition-colors hover:bg-white`}>
                {item.icon}
                <h3 className="font-[800] text-[20px] lg:text-[22px] text-[#0a0a0a] tracking-tight leading-none mb-1.5">{item.title}</h3>
                <p className="text-[#a1a1aa] font-[500] text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>

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

      {/* 3. The Problem Section — FIXED IMAGE MOSAIC */}
      <section className="w-full max-w-[1200px] mx-auto px-12 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4">

          {/* Text Block */}
          <div className="flex-[1] flex flex-col items-start w-full order-2 lg:order-1 pt-0 lg:pt-8 xl:pt-12">
            <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#0a0a0a] px-3.5 py-1.5 rounded-[6px] text-[12.5px] font-[600] tracking-tight border border-[#cfe2d9] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
              The Problem
            </div>

            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[36px] sm:text-[46px] lg:text-[48px] xl:text-[45px] font-[700] leading-[1.05] tracking-tight text-[#0a0a0a] w-full mb-6">
              Most Power <span className="text-[#3e976c]">Failures</span> Are<br />
              <span className="text-[#3e976c]">Designed</span> In
            </h2>

            <p className="text-[#848484] text-[15px] sm:text-[17px] leading-[1.65] font-[400] max-w-[500px] mb-10">
              Undersized distribution systems, missing redundancy, and non-compliant installations don't fail by accident. They fail because they were never engineered for the demands placed on them. The cost is measured in downtime, liability, and unplanned capital expenditure.
            </p>

            <div className="flex w-max rounded-lg overflow-hidden shadow-lg shadow-[#3e976c]/20 transition-transform active:scale-95 cursor-pointer group">
              <button className="bg-[#3e976c] group-hover:bg-[#34835d] text-white font-[700] text-[15.5px] px-6 py-3.5 flex items-center justify-center transition-colors">
                Review Your Deployment Plan
              </button>
              <div className="bg-[#34835d] group-hover:bg-[#2c7150] flex items-center justify-center px-4 py-3.5 border-l border-[#40a373]/30 transition-colors">
                <ArrowUpRight strokeWidth={2.5} size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Image Mosaic */}
          <div className="flex-[1] w-full relative order-1 lg:order-2 flex justify-end items-start">
            <img src={Mosaic1} alt="" /> 
          </div>

        </div>
      </section>
    

      {/* 4. Engineering Methodology — FIXED TIMELINE (matches Image 4) */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate overflow-hidden">

        {/* Header */}
        <div className="flex flex-col items-center mb-16 sm:mb-20 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#0a0a0a] px-3 py-1.5 rounded-[8px] text-[12px] font-[600] tracking-tight border border-[#cfe2d9] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
            Engineering Methodology
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[32px] sm:text-[46px] lg:text-[54px] font-[800] leading-[1.05] tracking-tight text-[#0f172a] max-w-[800px]">
            From First Assessment to <br className="hidden sm:block" />
            Final Sign-Off.
          </h2>
        </div>

        {/* ── DESKTOP TIMELINE ── */}
        <div className="hidden sm:block relative w-full max-w-[860px] mx-auto">

          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#d2efe2] -translate-x-[1px] z-0" />
          {/* Green progress fill on bottom portion */}
          <div className="absolute left-1/2 bottom-0 h-[28%] w-[2px] bg-[#3e976c] -translate-x-[1px] z-0" />

          <div className="flex flex-col gap-0 relative z-10">

            {/* Step 1 — text LEFT, icon RIGHT */}
            <div className="flex items-start w-full min-h-[180px] pb-6">
              {/* Left: number + text */}
              <div className="w-1/2 pr-16 flex flex-col items-end text-right pt-1">
                <div className="w-[38px] h-[38px] rounded-full bg-[#3e976c] text-white flex items-center justify-center font-[800] text-[17px] shadow-md shadow-[#3e976c]/20 mb-3">
                  1
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[800] text-[22px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                  Facility &amp; Risk Assessment
                </h3>
                <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug max-w-[240px]">
                  We map existing infrastructure, identify single points of failure and compliance gaps.
                </p>
              </div>
              {/* Right: decorative icon only */}
              <div className="w-1/2 pl-16 flex items-start pt-0">
                <Clipboard size={68} strokeWidth={1} className="text-[#3e976c] opacity-25" />
              </div>
            </div>

            {/* Step 2 — icon LEFT, text RIGHT */}
            <div className="flex items-start w-full min-h-[180px] pb-6">
              {/* Left: decorative icon only */}
              <div className="w-1/2 pr-16 flex justify-end pt-0">
                <Network size={68} strokeWidth={1} className="text-[#3e976c] opacity-25" />
              </div>
              {/* Right: number + text */}
              <div className="w-1/2 pl-16 flex flex-col items-start text-left pt-1">
                <div className="w-[38px] h-[38px] rounded-full bg-[#3e976c] text-white flex items-center justify-center font-[800] text-[17px] shadow-md shadow-[#3e976c]/20 mb-3">
                  2
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[800] text-[22px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                  Redundancy Architecture
                </h3>
                <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug max-w-[240px]">
                  Power, cooling, and communications are designed with layered failover from the ground up.
                </p>
              </div>
            </div>

            {/* Step 3 — text LEFT, icon RIGHT */}
            <div className="flex items-start w-full min-h-[180px] pb-6">
              {/* Left: number + text */}
              <div className="w-1/2 pr-16 flex flex-col items-end text-right pt-1">
                <div className="w-[38px] h-[38px] rounded-full bg-[#3e976c] text-white flex items-center justify-center font-[800] text-[17px] shadow-md shadow-[#3e976c]/20 mb-3">
                  3
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[800] text-[22px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                  Integrated System Design
                </h3>
                <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug max-w-[240px]">
                  Every subsystem is engineered to work together under both normal and failure conditions.
                </p>
              </div>
              {/* Right: decorative icon only */}
              <div className="w-1/2 pl-16 flex items-start pt-0">
                <FileText size={68} strokeWidth={1} className="text-[#3e976c] opacity-25" />
              </div>
            </div>

            {/* Step 4 — icon LEFT, text RIGHT — checkmark badge */}
            <div className="flex items-start w-full min-h-[160px] pb-6">
              {/* Left: decorative icon only */}
              <div className="w-1/2 pr-16 flex justify-end pt-0">
                <CircleCheck size={68} strokeWidth={1} className="text-[#3e976c] opacity-25" />
              </div>
              {/* Right: checkmark + text */}
              <div className="w-1/2 pl-16 flex flex-col items-start text-left pt-1">
                <div className="w-[42px] h-[42px] rounded-full bg-[#3e976c] text-white flex items-center justify-center border-[3px] border-white shadow-md shadow-[#3e976c]/25 ring-1 ring-[#d2efe2] mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[800] text-[22px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                  Commissioning &amp; Handoff
                </h3>
                <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug max-w-[240px]">
                  We verify every system performs to specification before the facility goes live.
                </p>
              </div>
            </div>

          </div>
        </div>
        
        {/* ── MOBILE TIMELINE ── */}
        <div className="flex sm:hidden flex-col gap-0 relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#d2efe2] z-0" />
          <div className="absolute left-[18px] bottom-0 h-[25%] w-[2px] bg-[#3e976c] z-0" />

          {[
            { num: 1, title: "Facility & Risk Assessment", body: "We map existing infrastructure, identify single points of failure and compliance gaps.", isCheck: false },
            { num: 2, title: "Redundancy Architecture", body: "Power, cooling, and communications are designed with layered failover from the ground up.", isCheck: false },
            { num: 3, title: "Integrated System Design", body: "Every subsystem is engineered to work together under both normal and failure conditions.", isCheck: false },
            { num: 4, title: "Commissioning & Handoff", body: "We verify every system performs to specification before the facility goes live.", isCheck: true },
          ].map((step, i) => (
            <div key={i} className="flex items-start pl-12 relative pb-10 last:pb-0 z-10">
              <div className={`absolute left-0 top-0 ${step.isCheck ? 'w-[40px] h-[40px] border-[3px] border-white ring-1 ring-[#d2efe2]' : 'w-[38px] h-[38px]'} rounded-full bg-[#3e976c] text-white flex items-center justify-center font-[800] text-[16px] z-20 shadow-sm`}>
                {step.isCheck ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : step.num}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[800] text-[20px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#a1a1aa] font-[500] text-[14px] leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
      <ClientsEnvironmentSection />
    </div>
    
  );
}
