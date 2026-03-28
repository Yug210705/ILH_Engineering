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
    <section className="w-full max-w-[1600px] mx-auto py-32 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 relative z-10 gap-x-12">
        {/* Left side */}
        <div className="flex-[1.5]">
          <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide border border-[#d2efe2] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green mb-[1px]"></div>
            Core Engineering Capabilities
          </div>
          
          <h2 className="text-[54px] sm:text-[68px] lg:text-[76px] font-extrabold leading-[1.0] tracking-[-0.03em] text-[#0a0a0a]">
            Critical<br/>
            Infrastructure<br/>
            Engineering
          </h2>
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col md:items-end justify-end mb-2 gap-8 w-full max-w-[600px]">
          <p className="text-[#848484] text-[16px] font-medium leading-[1.6] md:text-left">
            ILH Engineering Designs and<br/>
            Supports the infrastructure<br/>
            systems that enable<br/>
            organizations to operate<br/>
            continuously and securely.
          </p>
          <div className="w-full max-w-[320px] pb-2 md:mr-auto">
            <button className="bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-4 rounded-[12px] transition-colors flex items-center justify-center gap-3 w-full text-[16px] shadow-[0_4px_14px_0_rgba(55,151,104,0.39)]">
              <span>View All Capabilities</span> 
              <ArrowUpRight size={20} className="mt-0.5 border-l border-white/20 pl-2 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards list */}
      <div className="flex flex-col gap-4 w-full relative z-10 mx-auto w-full lg:w-[95%]">
        {capabilitiesList.map((item, index) => (
          <div 
            key={index}
            className="bg-[#fcfdfd] rounded-[24px] p-8 sm:px-10 py-10 shadow-[0_4px_30px_rgb(0,0,0,0.02)] border border-[#eff1f0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#def0e7] hover:-translate-y-1 transition-all flex flex-col group cursor-pointer"
          >
            <h3 className="text-[26px] font-extrabold text-[#0a0a0a] group-hover:text-brand-green transition-colors tracking-tight">{item.title}</h3>
            <p className="text-[#848484] text-[16px] font-medium mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
