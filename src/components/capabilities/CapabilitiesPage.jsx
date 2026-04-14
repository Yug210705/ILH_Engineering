import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BatteryCharging, ChartNoAxesColumnIncreasing, CircleCheck, Clipboard, FileText, Layers, Network, ShieldCheckIcon } from 'lucide-react';
import Electrical from '../../assets/Electrical.webp';
import Mosaic1 from '../../assets/Mosaic1.webp';
import ClientsEnvironmentSection from './components/ClientsEnvironmentSection';

/* ─── Reusable hook: fires once when element enters viewport ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const hidden  = 'opacity-0';
const visible = 'animate-fadeSlideUp';

export default function CapabilitiesPage({ setCurrentView }) {

  const [heroRef,    heroIn]    = useInView(0.1);
  const [whatRef,    whatIn]    = useInView(0.08);
  const [problemRef, problemIn] = useInView(0.1);
  const [methodRef,  methodIn]  = useInView(0.08);

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
      icon: <BatteryCharging size={40} strokeWidth={2} className="text-[#3e976c] mb-8" />
    },
    {
      title: "Load Calculations",
      desc: "& Panel Schedules",
      icon: <ChartNoAxesColumnIncreasing size={40} strokeWidth={2} className="text-[#3e976c] mb-8" />
    },
    {
      title: "Short Circuit",
      desc: "& Voltage Drop Analysis",
      icon: <BatteryCharging size={40} strokeWidth={2} className="text-[#3e976c] mb-8" />
    },
    {
      title: "Grounding & Bonding",
      desc: "System Design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-8">
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

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease both;
        }
        .delay-200 { animation-delay: 200ms !important; }
      `}</style>

      <div className="w-full bg-white relative">

        {/* ── 1. Hero Section ── */}
        <section
          ref={heroRef}
          className={`w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 relative isolate ${heroIn ? visible : hidden}`}
        >
          <div className="relative w-full h-[500px] sm:h-[700px] lg:h-[800px] rounded-[24px] sm:rounded-[40px] overflow-hidden">
            <img src={Electrical} alt="Electrical Infrastructure" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

           <div className="absolute top-0 left-0 z-20 mt-8 w-fit max-w-[70%] sm:max-w-none bg-white sm:bg-transparent rounded-br-[20px] sm:rounded-br-[40px] pr-3 sm:pr-12 pb-3 sm:pb-10 pt-3 sm:pt-8 pl-3 sm:pl-8 lg:pl-10">
              <div className="inline-flex items-center gap-2 lg:gap-2.5 bg-[#f0f7f4] text-[#0a0a0a] px-3 sm:px-4 py-2 rounded-[8px] text-[10px] sm:text-[14px] font-[600] tracking-tight border border-[#cfe2d9] mb-3 sm:mb-6 leading-tight flex-wrap sm:flex-nowrap sm:whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                Electrical Engineering . Power Infrastructure
              </div>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[20px] sm:text-[48px] lg:text-[64px] font-[600] leading-[1.15] sm:leading-[1.05] tracking-tight text-[#0a0a0a] m-0 p-0 text-left sm:whitespace-nowrap">
                Electrical<br />
                <span className="text-[#3e976c]">Power</span>
                <span className="text-[#0a0a0a]"> Systems</span>
              </h1>
            </div>

            <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-20 hidden sm:flex">
              <div className="w-[20px] h-[34px] border-2 border-white/70 rounded-full flex justify-center pt-1.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 bg-white rounded-tl-[20px] sm:rounded-tl-[40px] pl-6 sm:pl-10 pt-6 sm:pt-8 pb-4 sm:pb-6 pr-4 sm:pr-8 z-20 text-center sm:text-right">
              <button className="bg-[#3e976c] hover:bg-[#34835d] text-white font-[600] text-[15px] sm:text-[18px] px-6 sm:px-10 py-3.5 sm:py-5 rounded-[12px] shadow-lg shadow-[#3e976c]/30 transition-all active:-translate-y-1 w-full sm:w-auto">
                Schedule a Consultation
              </button>
              <p className="text-[#a1a1aa] text-[12px] sm:text-[14px] font-[500] mt-3 tracking-tight">
                Speak directly with an infrastructure engineer
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. What We Do Grid ── */}
        <section
          ref={whatRef}
          className="w-full max-w-full mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #cedfde 1px, transparent 1px), linear-gradient(to bottom, #cedfde 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
              maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 50%, transparent 90%, transparent 100%)'
            }}>
          </div>

          <div className="relative z-10 px-0 sm:px-8">
            {/* Header */}
            <div className={`flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-12 mb-12 sm:mb-20 stagger-children ${whatIn ? visible : hidden}`}>
              <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-[#0a0a0a] px-3 py-1.5 rounded-[8px] text-[12px] font-[600] tracking-tight border border-[#cfe2d9] whitespace-nowrap shrink-0 self-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                  What We Do
                </div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[28px] mt-2 sm:mt-6 sm:text-[42px] lg:text-[46px] font-[600] leading-[1.05] tracking-tight text-[#0a0a0a] max-w-[600px] flex-[2] text-center lg:text-left">
                  Electrical Power Systems <br className="hidden sm:block" />
                  We <span className="text-[#3e976c]">Design</span> and <span className="text-[#3e976c]">Deliver.</span>
                </h2>
                <div className="flex-1 lg:max-w-[320px] self-start lg:self-center">
                  <p className="text-[#848484] text-[15px] sm:text-[16px] leading-[1.6] font-[500] tracking-tight text-center lg:text-left">
                    Electrical infrastructure designed to perform under load and keep operations running without interruption.
                  </p>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid w-full grid-cols-3 border border-gray-100 rounded-none overflow-hidden bg-white/50 backdrop-blur-sm relative z-10 shadow-sm">
              {[
                {
                  title: "Power Distribution", desc: "System Design",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-8">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  )
                },
                { title: "Generator & Backup",      desc: "Power Systems",              icon: <BatteryCharging size={40} strokeWidth={2} className="text-[#3e976c] mb-8" /> },
                { title: "Load Calculations",        desc: "& Panel Schedules",          icon: <ChartNoAxesColumnIncreasing size={40} strokeWidth={2} className="text-[#3e976c] mb-8" /> },
                { title: "Short Circuit",            desc: "& Voltage Drop Analysis",    icon: <Layers size={40} strokeWidth={1.75} className="text-[#3e976c] mb-8" /> },
                { title: "Grounding & Bonding",      desc: "System Design",              icon: <ShieldCheckIcon size={40} strokeWidth={1.75} className="text-[#3e976c] mb-8" /> },
                { title: "Arc Flash Analysis",       desc: "& Code Compliance",          icon: <FileText size={40} strokeWidth={1.75} className="text-[#3e976c] mb-8" /> },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  className={`p-8 lg:p-12 flex flex-col
                    ${idx < 3 ? 'border-b border-gray-100' : ''}
                    ${idx % 3 !== 2 ? 'border-r border-gray-100' : ''}
                    transition-colors hover:bg-white
                    ${whatIn ? visible : hidden}`}
                >
                  {item.icon}
                  <h3 className="font-[600] text-[20px] lg:text-[22px] text-[#0a0a0a] tracking-tight leading-none mb-1.5">{item.title}</h3>
                  <p className="text-[#a1a1aa] font-[500] text-[15px]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Grid */}
            <div className="flex md:hidden flex-col gap-4 relative z-10">
              {[
                {
                  title: "Power Distribution", desc: "System Design",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#3e976c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-6">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  )
                },
                { title: "Generator & Backup",  desc: "Power Systems",           icon: <BatteryCharging size={40} strokeWidth={2} className="text-[#3e976c] mb-6" /> },
                { title: "Load Calculations",    desc: "& Panel Schedules",       icon: <ChartNoAxesColumnIncreasing size={40} strokeWidth={2} className="text-[#3e976c] mb-6" /> },
                { title: "Short Circuit",        desc: "& Voltage Drop Analysis", icon: <Layers size={40} strokeWidth={1.75} className="text-[#3e976c] mb-6" /> },
                { title: "Grounding & Bonding",  desc: "System Design",           icon: <ShieldCheckIcon size={40} strokeWidth={1.75} className="text-[#3e976c] mb-6" /> },
                { title: "Arc Flash Analysis",   desc: "& Code Compliance",       icon: <FileText size={40} strokeWidth={1.75} className="text-[#3e976c] mb-6" /> },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  className={`p-6 bg-[#ffffff] sm:bg-white rounded-[20px] sm:rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:shadow-sm border border-[#eef5f1] sm:border-gray-100 flex flex-col items-center text-center pt-8 ${whatIn ? visible : hidden}`}
                >
                  {item.icon}
                  <h3 className="font-[600] text-[18px] text-[#0a0a0a] tracking-tight leading-tight mb-1">{item.title}</h3>
                  <p className="text-[#a1a1aa] font-[500] text-[14px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. The Problem Section ── */}
        <section
          ref={problemRef}
          className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4">

            {/* Text Block */}
            <div className={`flex-[1] flex flex-col items-center lg:items-start w-full order-2 lg:order-1 pt-0 lg:pt-8 xl:pt-12 stagger-children ${problemIn ? visible : hidden}`}>
              <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#0a0a0a] px-3.5 py-1.5 rounded-[6px] text-[12.5px] font-[600] tracking-tight border border-[#cfe2d9] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                The Problem
              </div>

              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[36px] sm:text-[46px] lg:text-[48px] xl:text-[45px] font-[600] leading-[1.05] tracking-tight text-[#0a0a0a] w-full mb-6 text-center lg:text-left">
                Most Power <span className="text-[#3e976c]">Failures</span> Are<br />
                <span className="text-[#3e976c]">Designed</span> In
              </h2>

              <p className="text-[#848484] text-[15px] sm:text-[17px] leading-[1.65] font-[400] max-w-[500px] mb-10 text-center lg:text-left">
                Undersized distribution systems, missing redundancy, and non-compliant installations don't fail by accident. They fail because they were never engineered for the demands placed on them. The cost is measured in downtime, liability, and unplanned capital expenditure.
              </p>

              <div className="flex w-full sm:w-max rounded-[12px] sm:rounded-lg overflow-hidden shadow-[0_8px_24px_rgba(62,151,108,0.25)] sm:shadow-lg sm:shadow-[#3e976c]/20 transition-transform active:-translate-y-0.5 sm:active:scale-95 cursor-pointer group">
                <button className="bg-[#3e976c] group-hover:bg-[#34835d] text-white font-[600] text-[15px] sm:text-[15.5px] px-6 py-4 sm:py-3.5 flex items-center justify-center transition-colors flex-1 sm:flex-none">
                  Review Your Deployment Plan
                </button>
                <div className="bg-[#34835d] group-hover:bg-[#2c7150] flex items-center justify-center px-5 sm:px-4 py-4 sm:py-3.5 border-l border-[#40a373]/30 transition-colors">
                  <ArrowUpRight strokeWidth={2.5} size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Image Mosaic — fade in with slight delay */}
            <div className={`flex-[1] w-full relative order-1 lg:order-2 flex justify-end items-start ${problemIn ? 'animate-fadeIn delay-200' : hidden}`}>
              <img src={Mosaic1} alt="" />
            </div>

          </div>
        </section>

        {/* ── 4. Engineering Methodology ── */}
        <section
          ref={methodRef}
          className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative isolate overflow-hidden"
        >

          {/* Header */}
          <div className={`flex flex-col items-center mb-16 sm:mb-20 relative z-10 w-full text-center ${methodIn ? visible : hidden}`}>
            <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#0a0a0a] px-3 py-1.5 rounded-[8px] text-[12px] font-[600] tracking-tight border border-[#cfe2d9] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
              Engineering Methodology
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[32px] sm:text-[46px] lg:text-[54px] font-[600] leading-[1.05] tracking-tight text-[#0f172a] max-w-[800px]">
              From First Assessment to <br className="hidden sm:block" />
              Final Sign-Off.
            </h2>
          </div>

          {/* ── DESKTOP TIMELINE ── */}
          <div className="hidden sm:block relative w-full max-w-[860px] mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#d2efe2] -translate-x-[1px] z-0" />
            <div className="absolute left-1/2 bottom-0 h-[28%] w-[2px] bg-[#3e976c] -translate-x-[1px] z-0" />

            <div className="flex flex-col gap-0 relative z-10">

              {/* Step 1 */}
              <div
                style={{ animationDelay: '0ms' }}
                className={`flex items-start w-full min-h-[180px] pb-6 ${methodIn ? visible : hidden}`}
              >
                <div className="w-1/2 pr-16 flex flex-col items-end text-right pt-1">
                  <div className="w-[38px] h-[38px] rounded-full bg-[#3e976c] text-white flex items-center justify-center font-[600] text-[17px] shadow-md shadow-[#3e976c]/20 mb-3">1</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[600] text-[22px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                    Facility &amp; Risk Assessment
                  </h3>
                  <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug max-w-[240px]">
                    We map existing infrastructure, identify single points of failure and compliance gaps.
                  </p>
                </div>
                <div className="w-1/2 pl-16 flex items-start pt-0">
                  <Clipboard size={68} strokeWidth={1} className="text-[#3e976c] opacity-25" />
                </div>
              </div>

              {/* Step 2 */}
              <div
                style={{ animationDelay: '120ms' }}
                className={`flex items-start w-full min-h-[180px] pb-6 ${methodIn ? visible : hidden}`}
              >
                <div className="w-1/2 pr-16 flex justify-end pt-0">
                  <Network size={68} strokeWidth={1} className="text-[#3e976c] opacity-25" />
                </div>
                <div className="w-1/2 pl-16 flex flex-col items-start text-left pt-1">
                  <div className="w-[38px] h-[38px] rounded-full bg-[#3e976c] text-white flex items-center justify-center font-[600] text-[17px] shadow-md shadow-[#3e976c]/20 mb-3">2</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[600] text-[22px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                    Redundancy Architecture
                  </h3>
                  <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug max-w-[240px]">
                    Power, cooling, and communications are designed with layered failover from the ground up.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                style={{ animationDelay: '240ms' }}
                className={`flex items-start w-full min-h-[180px] pb-6 ${methodIn ? visible : hidden}`}
              >
                <div className="w-1/2 pr-16 flex flex-col items-end text-right pt-1">
                  <div className="w-[38px] h-[38px] rounded-full bg-[#3e976c] text-white flex items-center justify-center font-[600] text-[17px] shadow-md shadow-[#3e976c]/20 mb-3">3</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[600] text-[22px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                    Integrated System Design
                  </h3>
                  <p className="text-[#a1a1aa] font-[500] text-[15px] leading-snug max-w-[240px]">
                    Every subsystem is engineered to work together under both normal and failure conditions.
                  </p>
                </div>
                <div className="w-1/2 pl-16 flex items-start pt-0">
                  <FileText size={68} strokeWidth={1} className="text-[#3e976c] opacity-25" />
                </div>
              </div>

              {/* Step 4 */}
              <div
                style={{ animationDelay: '360ms' }}
                className={`flex items-start w-full min-h-[160px] pb-6 ${methodIn ? visible : hidden}`}
              >
                <div className="w-1/2 pr-16 flex justify-end pt-0">
                  <CircleCheck size={68} strokeWidth={1} className="text-[#3e976c] opacity-25" />
                </div>
                <div className="w-1/2 pl-16 flex flex-col items-start text-left pt-1">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#3e976c] text-white flex items-center justify-center border-[3px] border-white shadow-md shadow-[#3e976c]/25 ring-1 ring-[#d2efe2] mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[600] text-[22px] text-[#3e976c] tracking-tight mb-2 leading-tight">
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
            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#d2efe2] z-0" />
            <div className="absolute left-[18px] bottom-0 h-[25%] w-[2px] bg-[#3e976c] z-0" />

            {[
              { num: 1, title: "Facility & Risk Assessment",  body: "We map existing infrastructure, identify single points of failure and compliance gaps.", isCheck: false },
              { num: 2, title: "Redundancy Architecture",      body: "Power, cooling, and communications are designed with layered failover from the ground up.", isCheck: false },
              { num: 3, title: "Integrated System Design",     body: "Every subsystem is engineered to work together under both normal and failure conditions.", isCheck: false },
              { num: 4, title: "Commissioning & Handoff",      body: "We verify every system performs to specification before the facility goes live.", isCheck: true },
            ].map((step, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 100}ms` }}
                className={`flex items-start pl-12 relative pb-10 last:pb-0 z-10 ${methodIn ? visible : hidden}`}
              >
                <div className={`absolute left-0 top-0 ${step.isCheck ? 'w-[40px] h-[40px] border-[3px] border-white ring-1 ring-[#d2efe2]' : 'w-[38px] h-[38px]'} rounded-full bg-[#3e976c] text-white flex items-center justify-center font-[600] text-[16px] z-20 shadow-sm`}>
                  {step.isCheck ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : step.num}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-[600] text-[20px] text-[#3e976c] tracking-tight mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#a1a1aa] font-[500] text-[14px] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        <ClientsEnvironmentSection setCurrentView={setCurrentView} />
      </div>
    </>
  );
}
