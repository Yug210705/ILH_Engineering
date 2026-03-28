import { ArrowUpRight } from 'lucide-react';

export default function Capabilities() {
  const capabilitiesList = [
    {
      title: "Electrical Power Systems",
      desc: "Resilient power distribution and backup systems."
    },
    {
      title: "Data Center & Mission-Critical Infrastructure",
      desc: "Infrastructure engineered for continuous uptime."
    },
    {
      title: "Connectivity & Network Resilience",
      desc: "Redundant communications infrastructure."
    },
    {
      title: "Life Safety & Security Systems",
      desc: "Integrated safety and compliance systems."
    },
    {
      title: "Project Management for Critical Deployments",
      desc: "End-to-End management of mission critical installations."
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

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12 w-full lg:w-[95%]">
          
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
            <div className="flex items-stretch shadow-md rounded-[8px] overflow-hidden group cursor-pointer w-max transition-transform hover:-translate-y-0.5">
              <div className="bg-[#3e976c] text-white font-[600] tracking-wide text-[14.5px] px-5 py-3 flex items-center justify-center transition-colors group-hover:bg-[#34835d]">
                View All Capabilities
              </div>
              <div className="bg-[#2f855a] text-white px-3 flex items-center justify-center border-l border-white/10 transition-colors group-hover:bg-[#276e4a]">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Cards list */}
        <div className="flex flex-col gap-4 w-full relative z-10 w-full lg:w-[95%]">
          {capabilitiesList.map((item, index) => (
            <div 
              key={index}
              className="bg-[#ffffff] rounded-[16px] px-8 sm:px-10 py-6 shadow-[0_4px_30px_rgb(0,0,0,0.015)] border border-[#eff1f0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:border-[#def0e7] transition-all flex flex-col justify-center cursor-pointer"
            >
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
                  className="text-[22px] sm:text-[24px] font-[700] text-[#0a0a0a] tracking-tight mb-1">{item.title}</h3>
              <p className="text-[#9ca3af] text-[13.5px] font-[500] tracking-tight">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
