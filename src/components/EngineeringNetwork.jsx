import { motion } from 'framer-motion';
import groupPhoto from '../assets/groupphoto.png';

export default function EngineeringNetwork() {
  return (
    <section className="w-full relative overflow-hidden bg-white pt-24 lg:pt-32 pb-0">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex justify-start mb-4"
        >
          {/* Pill */}
          <div className="inline-flex items-center gap-[6px] bg-[#e8f2ee] text-[#1f2937] px-4 py-[5px] rounded-full text-[13px] font-[500] tracking-tight border border-[#d2efe2]">
            <div className="w-[5px] h-[5px] rounded-full bg-brand-green"></div>
            Engineering Network
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10 mb-10"
        >
          {/* Title */}
          <div className="flex-[3]">
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[44px] sm:text-[56px] lg:text-[72px] xl:text-[80px] font-[800] leading-[0.95] tracking-[-0.04em] text-[#0a0a0a] whitespace-normal">
              Expertise for Complex<br/>Infrastructure Projects
            </h2>
          </div>
          
          {/* Description */}
          <div className="flex-1 lg:max-w-[380px] pt-2 lg:pt-6">
            <p className="text-[#71717a] text-[16px] lg:text-[18px] font-[500] leading-[1.6]">
              ILH Engineering works with a trusted network of engineers, infrastructure specialists, and project partners to support complex deployments.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
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
