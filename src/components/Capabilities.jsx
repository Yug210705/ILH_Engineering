import { ArrowUpRight, ChevronsRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
      img: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#f3f7f5] py-24 lg:py-32">
      {/* Absolute Grid Background */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(to right, #e2e8e4 1px, transparent 1px), linear-gradient(to bottom, #e2e8e4 1px, transparent 1px)`, 
             backgroundSize: '48px 48px' 
           }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12 w-full lg:w-[95%]"
        >
          
          {/* Left / Center Column */}
          <div className="flex-[1.8] flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-3 py-1.5 rounded-[8px] text-[12.5px] font-[600] tracking-tight border border-[#d2efe2] mb-12 shadow-sm">
              <div className="w-[5.5px] h-[5.5px] rounded-full bg-brand-green mb-[0px]"></div>
              Core Engineering Capabilities
            </div>
            
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
                className="text-[48px] sm:text-[60px] lg:text-[72px] font-[700] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a] ml-0 lg:ml-10">
              Critical<br/>
              Infrastructure<br/>
              Engineering
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col md:items-start justify-start pt-2 lg:pt-24 w-full">
            <p className="text-[#848484] text-[15px] font-[500] leading-[1.5] tracking-tight mb-6 max-w-[340px]">
              ILH Engineering Designs and<br/>
              Supports the infrastructure<br/>
              systems that enable<br/>
              organizations to operate<br/>
              continuously and securely.
            </p>
            
            {/* Split Button */}
            <div className="flex items-stretch shadow-md rounded-[8px] overflow-hidden group cursor-pointer w-max transition-transform border border-[#3e976c] hover:-translate-y-0.5">
              <div className="bg-[#3e976c] text-white font-[600] tracking-wide text-[14.5px] px-5 py-3 flex items-center justify-center transition-colors group-hover:bg-[#34835d]">
                View All Capabilities
              </div>
              <div className="bg-[#2f855a] text-white px-3 flex items-center justify-center border-l border-white/20 transition-colors group-hover:bg-[#276e4a]">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards list Container with 'group/list' for sibling fade effects */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="flex flex-col gap-4 w-full relative z-10 w-full lg:w-[95%] group/list"
        >
          {capabilitiesList.map((item, index) => (
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } }
              }}
              key={index}
              className="bg-[#ffffff] rounded-[16px] px-8 sm:px-10 py-[22px] shadow-[0_4px_30px_rgb(0,0,0,0.015)] border border-[#eff1f0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:border-[#def0e7] flex items-center cursor-pointer relative group/card group-hover/list:opacity-[0.35] hover:!opacity-100 transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:translate-x-[48px]"
            >
              
              {/* External Floating Chevrons icon (Visually placed where the card used to be) */}
              <div className="absolute left-[-48px] top-1/2 -translate-y-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-75">
                <ChevronsRight size={26} className="text-[#3e976c]" strokeWidth={2.5} />
              </div>

              {/* Expanding Thumbnail Image Container */}
              <div className="h-[64px] overflow-hidden rounded-[8px] opacity-0 w-0 group-hover/card:opacity-100 group-hover/card:w-[124px] group-hover/card:mr-6 transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] shrink-0 shadow-sm border border-gray-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover scale-110 group-hover/card:scale-100 transition-transform duration-700" />
              </div>
              
              {/* Card Typography */}
              <div className="flex flex-col justify-center">
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
                    className="text-[22px] sm:text-[24px] font-[700] text-[#0a0a0a] group-hover/card:text-[#3e976c] transition-colors duration-300 tracking-tight mb-1 whitespace-nowrap overflow-visible">
                  {item.title}
                </h3>
                <p className="text-[#9ca3af] text-[13.5px] font-[500] tracking-tight">{item.desc}</p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
