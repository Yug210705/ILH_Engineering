import { Users, HardHat, Puzzle, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import siteLogo from '../../assets/Logo.png';

export default function Footer({ showTopRow = true }) {
  const features = [
    {
      Icon: Users,
      title: "Multidisciplinary Collaboration",
      desc: "Engineers and specialists working across critical systems."
    },
    {
      Icon: HardHat,
      title: "Infrastructure Deployment Support",
      desc: "Coordination with contractors and technology vendors."
    },
    {
      Icon: Puzzle,
      title: "Systems Integration Oversight",
      desc: "Ensuring infrastructure systems perform reliably together."
    }
  ];

  return (
    <footer className="w-full bg-white pt-10">
      {/* Top Features Row */}
      {showTopRow && (
        <div className="w-full border-y border-gray-100 mb-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {features.map((f, i) => (
            <div key={i} className="px-8 lg:px-14 py-8 lg:py-12 flex flex-col items-start gap-5">
              <div className="p-3 rounded-xl bg-[#f0f9f4]">
                <f.Icon className="w-7 h-7 text-brand-green" strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[20px] font-[800] text-[#0a0a0a] leading-tight mb-3 tracking-tight">{f.title}</h3>
                <p className="text-[#94a3b8] text-[15px] leading-[1.5] font-medium">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* Main Footer Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 sm:pb-24">
        
        {/* --- DESKTOP/TABLET FOOTER --- */}
        <div className="hidden lg:flex flex-col-reverse xl:flex-row gap-8 items-stretch">
          
          {/* Left Dark Card */}
          <div className="flex-[1.5] bg-[#0a120b] rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 lg:p-16 text-white flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-16 gap-x-12">
              {/* Capabilities */}
              <div className="flex flex-col">
                <h4 className="text-[11px] font-[800] uppercase tracking-[0.12em] text-[#9ca3af] mb-4 sm:mb-8">Capabilities</h4>
                <ul className="flex flex-col gap-4 text-[14px] text-[#9ca3af] font-medium">
                  <li className="hover:text-white cursor-pointer transition-colors">Electrical Power Systems</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Mission Critical Infrastructure</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Communication & Network Resilience</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Life Safety & Security Systems</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Project Management for Critical Deployments</li>
                </ul>
              </div>

              {/* Get in Touch */}
              <div className="flex flex-col order-last lg:order-none">
                <h4 className="text-[11px] font-[800] uppercase tracking-[0.12em] text-[#9ca3af] mb-4 sm:mb-8">Get in Touch</h4>
                <ul className="flex flex-col gap-6 text-[14.5px] text-[#9ca3af] font-medium">
                  <li className="flex items-start gap-3.5 transition-colors">
                    <Phone size={18} className="shrink-0 mt-0.5 text-[#379768]" />
                    786-297-8226
                  </li>
                  <li className="flex items-start gap-3.5 transition-colors">
                    <Mail size={18} className="shrink-0 mt-0.5 text-[#379768]" />
                    ILHEngineering.com
                  </li>
                  <li className="flex items-start gap-3.5 leading-relaxed transition-colors">
                    <MapPin size={18} className="shrink-0 mt-0.5 text-[#379768]" />
                    <span>333 SE 2nd Ave Suite<br/>#2000, Miami, Florida<br/>33131</span>
                  </li>
                </ul>
              </div>

              {/* Logo / Badge Area - Horizontal on mobile, vertical on desktop */}
              <div className="flex flex-row lg:flex-col items-center lg:items-end gap-6 sm:gap-12">
                <div className="flex flex-col items-center">
                   <div className="flex flex-col items-center gap-3">
                     <img src={siteLogo} alt="ILH" className="h-[60px] sm:h-[90px] w-auto brightness-0 invert opacity-100" />
                   </div>
                </div>
                {/* Secondary Badge Mockup */}
                <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-[16px] sm:rounded-[20px] border border-blue-400/30 flex items-center justify-center text-[6.5px] sm:text-[8px] text-blue-200 font-bold text-center leading-[1.3] uppercase tracking-tighter shrink-0">
                  MIAMI-DADE DISADVANTAGED BUSINESS ENTERPRISE
                </div>
              </div>

              {/* Insights */}
              <div className="flex flex-col">
                <h4 className="text-[11px] font-[800] uppercase tracking-[0.12em] text-[#9ca3af] mb-4 sm:mb-8">Insights</h4>
                <ul className="flex flex-col gap-4 text-[14px] text-[#9ca3af] font-medium">
                  <li className="hover:text-white cursor-pointer transition-colors">Technical Insights</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Infrastructure Briefings</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Capability Statement</li>
                </ul>
              </div>

              {/* Experience */}
              <div className="flex flex-col">
                <h4 className="text-[11px] font-[800] uppercase tracking-[0.12em] text-[#9ca3af] mb-4 sm:mb-8">Experience</h4>
                <ul className="flex flex-col gap-4 text-[14px] text-[#9ca3af] font-medium">
                  <li className="hover:text-white cursor-pointer transition-colors">Projects</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
                </ul>
              </div>

              {/* The Firm */}
              <div className="flex flex-col">
                <h4 className="text-[11px] font-[800] uppercase tracking-[0.12em] text-[#9ca3af] mb-4 sm:mb-8">The Firm</h4>
                <ul className="flex flex-col gap-4 text-[14px] text-[#9ca3af] font-medium">
                  <li className="hover:text-white cursor-pointer transition-colors">About ILH Eng.</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Founder</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Engineering Approach</li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 sm:pt-12 border-t border-dashed border-white/10 mt-10 sm:mt-20 flex flex-col md:flex-row items-center justify-between gap-8">
              <span className="text-[#64748b] text-[13px] font-[600]">© 2026 ILH Engineering. All rights reserved.</span>
              <div className="flex items-center gap-8">
                <div className="w-[18px] h-[18px] bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"></div>
                <div className="w-[18px] h-[18px] bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"></div>
                <div className="w-[18px] h-[18px] bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"></div>
                <div className="w-[18px] h-[18px] bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"></div>
              </div>
            </div>
          </div>

          {/* Right Mint CTA Card */}
          <div className="flex-1 bg-[#e8f2ee] rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 lg:p-16 flex flex-col justify-between">
            <div>
               <div className="inline-flex items-center gap-2 bg-[#d7e9e1] text-[#1f2937] px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-[800] tracking-tight border border-white/30 mb-6 sm:mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                Start the Conversation
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[clamp(28px,8.5vw,42px)] sm:text-[clamp(32px,10vw,76px)] font-[800] text-[#0a0a0a] leading-[1.05] tracking-tight mb-6 sm:mb-10 break-words whitespace-normal px-1">
                Discuss Your<br className="hidden sm:block"/>Infrastructure<br />Challenges With <br className="sm:hidden"/><span className="text-[#94a3b8] font-[500] italic">an</span> <br className="sm:hidden"/>Engineer
              </h2>
              <p className="text-[#6b7280] text-[15.5px] sm:text-[18px] font-medium leading-[1.6] max-w-[460px]">
                ILH Engineering helps organizations design resilient infrastructure for environments where reliability matters.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <button className="w-full bg-brand-green hover:bg-[#2e8451] text-white font-[800] py-4 sm:py-6 px-4 rounded-xl text-[14px] sm:text-[18px] transition-all shadow-xl shadow-brand-green/20 mb-6 leading-tight break-words whitespace-normal">
                Schedule Infrastructure Consultation
              </button>
              <p className="text-[#6b7280] text-[14px] font-semibold text-center opacity-80">
                Speak directly with an experienced infrastructure engineer.
              </p>
            </div>
          </div>

        </div>

        {/* --- MOBILE FOOTER --- */}
        <div className="flex lg:hidden flex-col gap-6">
          {/* Right Mint CTA Card (Mobile) */}
          <div className="bg-[#e8f2ee] rounded-[32px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#d7e9e1] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/60 backdrop-blur-sm text-[#1f2937] px-3.5 py-1.5 rounded-full text-[11px] font-[800] tracking-tight border border-white/50 mb-8 w-fit shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                Start the Conversation
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[32px] sm:text-[40px] font-[800] text-[#0a0a0a] leading-[1.1] tracking-tight mb-5">
                Discuss Your Infrastructure Challenges
              </h2>
              <p className="text-[#4b5563] text-[14px] font-medium leading-[1.6]">
                ILH Engineering helps organizations design resilient infrastructure for environments where reliability matters.
              </p>
            </div>

            <div className="mt-10 relative z-10">
              <button className="w-full bg-[#0a0a0a] hover:bg-[#3e976c] text-white font-[800] py-4 rounded-[14px] text-[14px] transition-all shadow-xl shadow-black/10 mb-4 tracking-wide">
                Schedule Consultation
              </button>
              <p className="text-[#6b7280] text-[12px] font-semibold text-center opacity-80">
                Speak directly with an engineer.
              </p>
            </div>
          </div>

          {/* Left Dark Card (Mobile) */}
          <div className="bg-[#0a120b] rounded-[32px] p-6 sm:p-10 text-white flex flex-col gap-10 border border-[#1b2620]">
            {/* Logo & Info */}
            <div className="flex flex-col gap-6 border-b border-white/10 pb-8">
              <img src={siteLogo} alt="ILH" className="h-[42px] w-auto brightness-0 invert self-start" />
              <div className="flex flex-col gap-4 text-[14px] text-[#9ca3af] font-medium mt-2">
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-[#3e976c]" />
                  </div>
                  786-297-8226
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-[#3e976c]" />
                  </div>
                  ILHEngineering.com
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                     <MapPin size={14} className="text-[#3e976c]" />
                  </div>
                  <span className="leading-relaxed">333 SE 2nd Ave Suite #2000,<br/>Miami, Florida 33131</span>
                </div>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-6">
              <div className="flex flex-col col-span-2">
                <h4 className="text-[10px] font-[800] uppercase tracking-[0.16em] text-[#64748b] mb-5">Capabilities</h4>
                <ul className="flex flex-col gap-3.5 text-[13.5px] text-[#cbd5e1] font-medium leading-snug">
                  <li>Electrical Power Systems</li>
                  <li>Mission Critical Infrastructure</li>
                  <li>Communication & Network Resilience</li>
                  <li>Life Safety & Security Systems</li>
                  <li>Project Management</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[10px] font-[800] uppercase tracking-[0.16em] text-[#64748b] mb-5">Insights</h4>
                <ul className="flex flex-col gap-3.5 text-[13.5px] text-[#cbd5e1] font-medium">
                  <li>Technical Insights</li>
                  <li>Briefings</li>
                  <li>Capability Statement</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[10px] font-[800] uppercase tracking-[0.16em] text-[#64748b] mb-5">The Firm</h4>
                <ul className="flex flex-col gap-3.5 text-[13.5px] text-[#cbd5e1] font-medium">
                  <li>About ILH Eng.</li>
                  <li>Founder</li>
                  <li>Approach</li>
                </ul>
              </div>
            </div>

            {/* Badge & Copyright */}
            <div className="flex flex-col gap-8 pt-8 border-t border-dashed border-white/10 mt-2">
              <div className="w-full p-4 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent rounded-[16px] border border-blue-400/20 flex items-center justify-center text-[9.5px] text-blue-200 font-bold text-center leading-[1.5] uppercase tracking-[0.1em]">
                Miami-Dade Disadvantaged<br/>Business Enterprise
              </div>
              
              <div className="flex flex-col items-center gap-6 mt-2">
                <div className="flex items-center gap-5">
                  <div className="w-[32px] h-[32px] bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#3e976c] transition-colors cursor-pointer"></div>
                  <div className="w-[32px] h-[32px] bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#3e976c] transition-colors cursor-pointer"></div>
                  <div className="w-[32px] h-[32px] bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#3e976c] transition-colors cursor-pointer"></div>
                </div>
                <span className="text-[#64748b] text-[12px] font-[500] tracking-tight">© 2026 ILH Engineering. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
