import { motion } from 'framer-motion';
import groupPhoto from '../assets/groupphoto.png';

export default function EngineeringNetwork() {
  return (
    <section className="w-full relative overflow-hidden bg-white pt-8 lg:pt-12 pb-0">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-center lg:justify-start mb-4"
        >
          {/* Pill */}
          <div className="inline-flex items-center gap-[6px] bg-[#e8f2ee] text-[#1f2937] px-4 py-[5px] rounded-full text-[13px] font-[500] tracking-tight border border-[#d2efe2]">
            <div className="w-[5px] h-[5px] rounded-full bg-brand-green"></div>
            Engineering Network
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-10 mb-10 text-center lg:text-left"
        >
          {/* Title */}
          <div className="flex-[3]">
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[clamp(32px,8vw,80px)] font-[800] leading-[0.95] tracking-[-0.04em] text-[#0a0a0a] whitespace-normal break-words z-10 relative text-center lg:text-left">
              Expertise for Complex<br className="hidden sm:block"/> Infrastructure Projects
            </h2>
          </div>
          
          {/* Description */}
          <div className="flex-1 lg:max-w-[380px] pt-2 lg:pt-6">
            <p className="text-[#71717a] text-[16px] lg:text-[18px] font-[500] leading-[1.6] px-4 lg:px-0">
              ILH Engineering works with a trusted network of engineers, infrastructure specialists, and project partners to support complex deployments.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0.7, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="w-full relative"
        >
          <div className="w-full overflow-hidden">
            <img 
              src={groupPhoto} 
              alt="ILH Engineering Network Team" 
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
