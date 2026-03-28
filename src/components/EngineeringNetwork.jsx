import { motion } from 'framer-motion';

export default function EngineeringNetwork() {
  return (
    <section className="w-full relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex justify-start mb-6 lg:mb-8"
        >
          {/* Pill */}
          <div className="inline-flex items-center gap-[6px] bg-[#e8f2ee] text-[#1f2937] px-4 py-[6px] rounded-full text-[13px] font-[500] tracking-tight border border-[#d2efe2]">
            <div className="w-[5px] h-[5px] rounded-full bg-brand-green"></div>
            Engineering Network
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-20 mb-12 lg:mb-16"
        >
          {/* Title */}
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="flex-1 text-[46px] sm:text-[56px] lg:text-[72px] font-[700] leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
            Expertise for Complex<br/>Infrastructure Projects
          </h2>
          
          {/* Description */}
          <div className="flex-none lg:w-[400px] pt-2 lg:pt-4">
            <p className="text-[#9ca3af] text-[16px] lg:text-[17px] font-[400] leading-[1.6]">
              ILH Engineering works with a trusted network of engineers, infrastructure specialists, and project partners to support complex deployments.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-full relative"
        >
          <div className="w-full min-h-[400px] lg:h-[700px] bg-[#f4f4f5] overflow-hidden">
            {/* 
              NOTE: Using a placeholder Unsplash image.
              You can replace this with your actual image by either importing it like:
              import teamImg from '../assets/team.png'
              and setting src={teamImg} 
            */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
              alt="ILH Engineering Network Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
