import { ChevronsRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionPill, SplitButton, SectionHeading, GridBackground } from '../ui';

export default function Capabilities() {
  const capabilitiesList = [
    {
      title: "Electrical Power Systems",
      desc: "Resilient power distribution and backup systems.",
      img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Data Center & Mission-Critical Infrastructure",
      desc: "Infrastructure engineered for continuous uptime.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Connectivity & Network Resilience",
      desc: "Redundant communications infrastructure.",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Life Safety & Security Systems",
      desc: "Integrated safety and compliance systems.",
      img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Project Management for Critical Deployments",
      desc: "End-to-End management of mission critical installations.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#f4f7f6] to-white pt-16 pb-12">
      <GridBackground />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Area */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 gap-12 w-full lg:w-[95%]"
        >
          
          {/* Left / Center Column */}
          <div className="flex-[1.8] flex flex-col items-center md:items-start text-center md:text-left">
            <SectionPill className="mb-12 mx-auto md:mx-0">
              Core Engineering Capabilities
            </SectionPill>
            
            <SectionHeading className="ml-0 lg:ml-10 text-center md:text-left">
              Critical<br />
              Infrastructure<br />
              Engineering
            </SectionHeading>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-start pt-2 lg:pt-24 w-full">
            <p className="text-[#848484] text-[15px] font-[500] leading-[1.5] tracking-tight mb-6 max-w-[340px] text-center md:text-left">
              ILH Engineering Designs and<br/>
              Supports the infrastructure<br/>
              systems that enable<br/>
              organizations to operate<br/>
              continuously and securely.
            </p>
            
            {/* Split Button */}
            <SplitButton className="mx-auto md:mx-0">
              View All Capabilities
            </SplitButton>
          </div>
        </motion.div>

        {/* Cards list Container with 'group/list' for sibling fade effects */}
        {/* --- DESKTOP CAPABILITIES LIST --- */}
        <motion.div 
          className="hidden lg:flex flex-col gap-4 w-full relative z-10 w-[95%] group/list"
        >
          {capabilitiesList.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-[16px] px-8 sm:px-10 py-[22px] shadow-[0_4px_30px_rgb(0,0,0,0.015)] border border-[#eff1f0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:border-[#def0e7] flex items-center cursor-pointer relative group/card group-hover/list:opacity-[0.35] hover:!opacity-100 transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:translate-x-[48px]"
            >
              
              {/* External Floating Chevrons icon (Visually placed where the card used to be) */}
              <div className="absolute left-[-48px] top-1/2 -translate-y-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-75 hidden sm:block">
                <ChevronsRight size={26} className="text-[#3e976c]" strokeWidth={2.5} />
              </div>

              {/* Expanding Thumbnail Image Container */}
              <div className="h-[64px] overflow-hidden rounded-[8px] opacity-0 w-0 group-hover/card:opacity-100 group-hover/card:w-[124px] group-hover/card:mr-6 transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] shrink-0 shadow-sm border border-gray-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover scale-110 group-hover/card:scale-100 transition-transform duration-700" />
              </div>
              
              {/* Card Typography */}
              <div className="flex flex-col justify-center">
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
                    className="text-[18px] sm:text-[22px] lg:text-[24px] font-[700] text-[#0a0a0a] group-hover/card:text-[#3e976c] transition-colors duration-300 tracking-tight mb-1 whitespace-normal break-words leading-snug pr-4">
                  {item.title}
                </h3>
                <p className="text-[#9ca3af] text-[13.5px] font-[500] tracking-tight whitespace-normal break-words pr-4">{item.desc}</p>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* --- MOBILE CAPABILITIES LIST --- */}
        <div className="flex lg:hidden flex-col gap-5 w-full relative z-10 mt-6 md:mt-12">
          {capabilitiesList.map((item, index) => (
            <div key={index} className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100/80 flex flex-col gap-4 relative overflow-hidden group">
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-10 -right-10 w-[120px] h-[120px] bg-brand-green/5 blur-3xl rounded-full"></div>
               
               <div className="w-full h-[140px] rounded-2xl overflow-hidden shadow-sm relative z-10 border border-gray-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
               </div>
               
               <div className="flex flex-col mt-1 relative z-10">
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[20px] font-[800] text-[#0a0a0a] tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#64748b] text-[14px] font-[500] tracking-tight leading-[1.6]">
                    {item.desc}
                  </p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
