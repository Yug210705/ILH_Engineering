import { motion } from 'framer-motion';
import groupPhoto from '../../assets/groupphoto.webp';
import { SectionPill, SectionHeading } from '../ui';

export default function EngineeringNetwork() {
  return (
    <section className="w-full relative overflow-hidden bg-white pt-8 lg:pt-12 pb-0">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div 
          className="flex justify-center lg:justify-start mb-4"
        >
          {/* Pill */}
          <SectionPill>
            Engineering Network
          </SectionPill>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-10 mb-10 text-center lg:text-left"
        >
          {/* Title */}
          <div className="flex-[3]">
            <SectionHeading className="text-center lg:text-left">
              Expertise for Complex<br className="hidden sm:block"/> Infrastructure Projects
            </SectionHeading>
          </div>
          
          {/* Description */}
          <div className="flex-1 lg:max-w-[380px] pt-2 lg:pt-6">
            <p className="text-[#71717a] text-[16px] lg:text-[18px] font-[500] leading-[1.6] px-4 lg:px-0">
              ILH Engineering works with a trusted network of engineers, infrastructure specialists, and project partners to support complex deployments.
            </p>
          </div>
        </motion.div>

        <motion.div 
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
