import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Asset imports
import expImage from '../../assets/exp_image.webp';
// Using the generated image from previous step
import modernizationImg from '../../assets/modernization.webp';

const projects = [
  {
    id: 1,
    title: "Large-Scale Infrastructure Environments",
    desc: "Systems integration across complex operational facilities.",
    image: expImage,
    tag: "Featured"
  },
  {
    id: 2,
    title: "Enterprise Infrastructure Modernization",
    desc: "Infrastructure upgrades supporting redundancy and centralized systems.",
    image: modernizationImg,
    tag: "Systems"
  },
  {
    id: 3,
    title: "Mission-Critical Communications Infrastru...",
    desc: "Infrastructure designed for continuous global operations.",
    image: expImage, // Using expImage as placeholder as 3rd gen failed
    tag: "Critical"
  }
];

export default function CaseStudyGallery() {
  return (
    <section className="w-full bg-[#fafafa] relative pt-8 pb-12 border-t border-[#f0f0f0]">
      
      {/* 1. Header Area */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 text-center mb-12 lg:mb-16">
        <div className="inline-flex items-center gap-1.5 bg-[#e8f2ee] text-[#3e976c] px-4 py-2 rounded-lg text-[13px] font-[600] tracking-tight border border-[#cfe2d9] mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
          All Case Studies
        </div>

        <h2 
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          className="text-[clamp(28px,8.5vw,42px)] sm:text-[clamp(42px,7vw,84px)] font-[600] leading-[1.05] tracking-tight text-[#0a0a0a] mb-6 break-words whitespace-normal px-2"
        >
          Explore <span className="text-[#c8cfd6]">Infrastructure</span> <br className="hidden sm:block"/> Case Studies
        </h2>
        
        <p className="text-[#8e9aaf] text-[17px] sm:text-[19px] lg:text-[21px] font-[500] max-w-[800px] mx-auto">
          Additional examples of infrastructure environments and engineering solutions.
        </p>
      </div>

      {/* 2. Projects Grid */}
      <div className="w-full border-y border-[#f0f0f0]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-3 border-x border-[#f0f0f0]">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`group flex flex-col bg-white overflow-hidden transition-all duration-500 ${index !== projects.length - 1 ? 'md:border-r border-[#f0f0f0]' : ''}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Diagonal Arrow Overlay */}
                <div className={`absolute top-4 right-4 p-3 rounded-lg transition-all duration-300 ${index === 0 ? 'bg-[#0a0a0a] text-white' : 'bg-[#3e976c] text-white'}`}>
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>

              <div className="p-5 sm:p-10 lg:p-12 flex flex-col gap-4">
                <h3 
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[20px] lg:text-[24px] xl:text-[28px] font-[600] text-[#0a0a0a] leading-tight group-hover:text-[#3e976c] transition-colors break-words whitespace-normal"
                >
                  {project.title}
                </h3>
                <p className="text-[#8e9aaf] text-[15px] xl:text-[16px] leading-relaxed font-[500]">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Footer Action */}
      <div className="w-full flex justify-center mt-20">
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: '#fafffe' }}
          whileTap={{ scale: 0.98 }}
          className="px-12 py-5 rounded-[12px] border-2 border-[#cfe2d9] text-[#3e976c] text-[16px] font-[600] transition-all hover:border-[#3e976c]"
        >
          Load More
        </motion.button>
      </div>

    </section>
  );
}
