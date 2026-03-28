import { Users, HardHat, Puzzle, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
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
    <footer className="w-full bg-white pt-24">
      {/* Top Features Row */}
      <div className="w-full border-y border-gray-100 mb-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {features.map((f, i) => (
            <div key={i} className="px-8 lg:px-12 py-10 flex flex-col items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#f0f9f4]">
                <f.Icon className="w-7 h-7 text-brand-green" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#0a0a0a] leading-tight mb-2 tracking-tight">{f.title}</h3>
                <p className="text-[#9ea3af] text-[14.5px] leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-8 items-stretch">
          
          {/* Left Dark Card */}
          <div className="flex-[1.4] bg-[#0a120f] rounded-[32px] p-10 lg:p-14 text-white flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {/* Capabilities */}
              <div className="flex flex-col gap-6">
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9ca3af]">Capabilities</h4>
                <ul className="flex flex-col gap-3 text-[14px] text-[#9ca3af] font-medium transition-colors">
                  <li className="hover:text-white cursor-pointer transition-colors">Electrical Power Systems</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Mission Critical Infrastructure</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Communication & Network Resilience</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Life Safety & Security Systems</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Project Management for Critical Deployments</li>
                </ul>
              </div>

              {/* Get in Touch */}
              <div className="flex flex-col gap-6 order-last lg:order-none">
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9ca3af]">Get in Touch</h4>
                <ul className="flex flex-col gap-5 text-[14.5px] text-[#9ca3af] font-medium">
                  <li className="flex items-start gap-3 transition-colors">
                    <Phone size={18} className="shrink-0 mt-0.5" />
                    786-297-8226
                  </li>
                  <li className="flex items-start gap-3 transition-colors">
                    <Mail size={18} className="shrink-0 mt-0.5" />
                    ILHEngineering.com
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed transition-colors">
                    <MapPin size={18} className="shrink-0 mt-0.5" />
                    <span>333 SE 2nd Ave Suite<br/>#2000, Miami, Florida<br/>33131</span>
                  </li>
                </ul>
              </div>

              {/* Logo / Badge */}
              <div className="flex flex-col items-start lg:items-end gap-10">
                <div className="flex flex-col items-center">
                   {/* Simplified Logo SVG representation */}
                   <div className="flex flex-col items-center gap-2">
                     <img src="/ilh-logo-hd.png" alt="ILH" className="h-[80px] w-auto brightness-0 invert opacity-90" />
                   </div>
                </div>
                {/* Secondary Badge Mockup */}
                <div className="w-[85px] h-[85px] p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-[18px] border border-blue-400/30 flex items-center justify-center text-[8px] text-blue-200 font-bold text-center leading-[1.2]">
                  MIAMI-DADE DISADVANTAGED BUSINESS ENTERPRISE
                </div>
              </div>

              {/* Insights */}
              <div className="flex flex-col gap-6 pt-4">
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9ca3af]">Insights</h4>
                <ul className="flex flex-col gap-3 text-[14px] text-[#9ca3af] font-medium transition-colors">
                  <li className="hover:text-white cursor-pointer transition-colors">Technical Insights</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Infrastructure Briefings</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Capability Statement</li>
                </ul>
              </div>

              {/* Experience */}
              <div className="flex flex-col gap-6 pt-4">
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9ca3af]">Experience</h4>
                <ul className="flex flex-col gap-3 text-[14px] text-[#9ca3af] font-medium transition-colors">
                  <li className="hover:text-white cursor-pointer transition-colors">Projects</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
                </ul>
              </div>

              {/* The Firm */}
              <div className="flex flex-col gap-6 pt-4">
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#9ca3af]">The Firm</h4>
                <ul className="flex flex-col gap-3 text-[14px] text-[#9ca3af] font-medium transition-colors">
                  <li className="hover:text-white cursor-pointer transition-colors">About ILH Eng.</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Founder</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Engineering Approach</li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-10 border-t border-dashed border-white/20 mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <span className="text-[#64748b] text-[13px] font-[500]">© 2026 ILH Engineering. All rights reserved.</span>
              <div className="flex items-center gap-7">
                {/* Social icons removed for stability */}
              </div>
            </div>
          </div>

          {/* Right Mint CTA Card */}
          <div className="flex-1 bg-[#e8f2ee] rounded-[32px] p-10 lg:p-14 flex flex-col justify-between">
            <div>
               <div className="inline-flex items-center gap-2 bg-[#d7e9e1] text-[#1f2937] px-4 py-1.5 rounded-full text-[13px] font-bold tracking-tight border border-white/30 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                Start the Conversation
              </div>
              <h2 className="text-[44px] sm:text-[54px] lg:text-[72px] font-[800] text-[#0a0a0a] leading-[1.0] tracking-[-0.03em] mb-8">
                Discuss Your<br/>Infrastructure<br/>Challenges With <span className="text-[#a1a1aa] font-[600]">an</span><br/>Engineer
              </h2>
              <p className="text-[#6b7280] text-[17px] font-medium leading-[1.6] max-w-[440px]">
                ILH Engineering helps organizations design resilient infrastructure for environments where reliability matters.
              </p>
            </div>

            <div className="mt-20">
              <button className="w-full bg-brand-green hover:bg-[#2e8451] text-white font-bold py-5 rounded-[12px] text-[18px] transition-all shadow-xl shadow-brand-green/20 mb-6">
                Schedule Infrastructure Consultation
              </button>
              <p className="text-[#6b7280] text-[13.5px] font-medium text-center">
                Speak directly with an experienced infrastructure engineer.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
