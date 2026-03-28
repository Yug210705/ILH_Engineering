import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectExperience() {
  const projects = [
    {
      title: "Large-Scale Infrastructure\nEnvironments",
      desc: "Systems integration across complex\noperational facilities.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Enterprise Infrastructure\nModernization",
      desc: "Infrastructure upgrades supporting\nredundancy and centralized systems.",
      img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Mission-Critical\nCommunications Infrastru...",
      desc: "Infrastructure designed for continuous\nglobal operations.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#f8faf9] py-24 lg:py-32 border-t border-[#e2e8f0]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="w-full max-w-[1200px] mx-auto px-6 mb-16 flex flex-col items-center"
      >
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-3.5 py-1.5 rounded-[12px] text-[12.5px] font-bold tracking-wide border border-[#d2efe2] mb-8 shadow-sm shadow-[#379768]/10">
          <div className="w-[5.5px] h-[5.5px] rounded-full bg-brand-green mb-[0px]"></div>
          Project Experience
        </div>

        {/* Heading */}
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[48px] sm:text-[60px] lg:text-[72px] font-[700] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a] text-center max-w-[1000px] mb-6">
          Engineering Infrastructure <br className="hidden md:block"/> 
          <span className="text-[#cbd5e1] font-[800]">for</span> Critical Environments
        </h2>

        {/* Subtitle */}
        <p className="text-[#848484] text-[15.5px] font-[500] leading-[1.6] text-center max-w-[700px] mix-blend-multiply">
          Selected work supporting enterprise systems, large-scale facilities, and mission-critical operations where reliability is essential.
        </p>
      </motion.div>

      {/* Grid Strip */}
      <div className="w-full border-y border-[#e2e8f0] relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
          className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 border-x border-[#e2e8f0] relative"
        >
          {projects.map((item, index) => (
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } }
              }}
              key={index}
              className={`relative group/card cursor-pointer h-full flex flex-col z-0 hover:z-30 ${index !== projects.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#e2e8f0]' : ''}`}
            >
              {/* White hover pop-out background */}
              <div className="absolute inset-[-1px] bg-white opacity-0 group-hover/card:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-[0_12px_45px_rgb(0,0,0,0.06)] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col p-6 sm:p-8 xl:p-10 h-full">
                
                {/* Image Box */}
                <div className="w-full aspect-[4/2.6] overflow-hidden mb-8 relative bg-slate-100 border border-gray-100/50">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale-[15%] group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
                  
                  {/* Square CTA Button overlay */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#3e976c] group-hover/card:bg-[#0a0a0a] flex items-center justify-center transition-colors duration-400 z-20">
                    <ArrowUpRight className="text-white" size={22} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Typography */}
                <div className="flex flex-col flex-1">
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[20px] sm:text-[22px] font-[700] text-[#0a0a0a] tracking-tight mb-3 whitespace-pre-line leading-[1.25]">
                    {item.title}
                  </h3>
                  <p className="text-[#a1a1aa] text-[13.5px] font-[500] tracking-tight leading-snug whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View All Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        className="w-full flex justify-center mt-16 px-6"
      >
        <button className="bg-[#3e976c] hover:bg-[#34835d] text-white font-[600] tracking-wide text-[14.5px] px-8 py-3.5 rounded-[8px] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
          View Project Experience
        </button>
      </motion.div>

    </section>
  );
}
