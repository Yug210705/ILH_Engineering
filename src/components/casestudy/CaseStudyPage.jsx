import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import expImage from '../../assets/exp_image.png';
import modernizationImg from '../../assets/modernization.png';

export default function CaseStudyPage() {
  const [activeSection, setActiveSection] = useState('problem');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white relative pb-0 pt-5 sm:pt-[65px] xl:pt-[70px]">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-[1600px] mx-auto mt-2 sm:mt-2 lg:mt-4 px-6 sm:px-10 lg:px-12 mb-8 sm:mb-20 lg:mb-24">
        <div className="w-full relative h-[340px] sm:h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden flex justify-end bg-[#0a0a0a]">
          
          {/* Main Image Base */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={expImage} 
              alt="Data Center Facility" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Mouse Scroll Icon (Bottom Center) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white opacity-80">
            <div className="w-6 h-9 border-2 border-white/60 rounded-full flex justify-center pt-2">
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>

          {/* Left White Overlay Box with architectural cutout curves */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[70%] sm:w-[65%] lg:w-[52%] xl:w-[50%] bg-white h-auto py-10 sm:py-12 lg:py-18 xl:py-24 rounded-r-[40px] lg:rounded-r-[48px] z-10 flex flex-col justify-center px-6 sm:px-16 lg:px-24">
            
            {/* Top Inverse Curve Pseudo-element */}
            <div className="absolute top-[-48px] left-0 w-[48px] h-[48px] bg-transparent rounded-bl-[48px] shadow-[-24px_24px_0_24px_white] pointer-events-none hidden lg:block"></div>
            {/* Bottom Inverse Curve */}
            <div className="absolute bottom-[-48px] left-0 w-[48px] h-[48px] bg-transparent rounded-tl-[48px] shadow-[-24px_-24px_0_24px_white] pointer-events-none hidden lg:block"></div>

            {/* Breadcrumb */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-[11.5px] sm:text-[13px] font-[600] mb-5 sm:mb-5 tracking-wide uppercase"
            >
              <span className="text-[#cbd5e1] hover:text-[#3e976c] cursor-pointer transition-colors">Experience</span>
              <span className="text-[#e2e8f0]">/</span>
              <span className="text-brand-green line-clamp-1">Large-Scale Infrastructure Environment...</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-[30px] sm:text-[54px] lg:text-[72px] xl:text-[84px] font-[800] leading-[0.95] tracking-[-0.04em] text-[#0a0a0a]"
            >
              Large-Scale <br /> Infrastructure <br /> Environments
            </motion.h1>

          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 mb-28 lg:mb-40 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          
          {/* Sidebar Nav */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-[120px] w-full max-w-[320px]">
              <div className="bg-[#f7f8f9] rounded-[24px] p-8 lg:p-10 mb-6">
                <span className="text-[#a0abbd] text-[13px] font-[700] uppercase tracking-wider mb-6 block">Content</span>
                
                <ul className="flex flex-col gap-5">
                  {[
                    { id: 'problem', label: 'Problem' },
                    { id: 'solution', label: 'Solution' },
                    { id: 'result', label: 'The Result' }
                  ].map((item) => (
                    <li 
                      key={item.id} 
                      className="relative"
                    >
                      <button 
                        onClick={() => {
                          setActiveSection(item.id);
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className={`text-[20px] font-[700] lg:text-[22px] transition-colors flex items-center gap-2 ${activeSection === item.id ? 'text-[#3e976c]' : 'text-[#8e9aaf] hover:text-[#0a0a0a]'}`}
                      >
                        {activeSection === item.id && <span className="text-[#3e976c] font-bold">»</span>}
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Highlight active indicator line */}
              <div className="flex w-full">
                <div className="w-[30%] h-1 bg-[#3e976c]"></div>
                <div className="w-[70%] h-1 bg-[#e2e8e5]"></div>
              </div>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="lg:col-span-8 flex flex-col gap-16 lg:gap-24">
            
            {/* Problem */}
            <div id="problem" className="scroll-mt-[150px]">
              <div className="inline-flex items-center gap-1.5 bg-[#e8f2ee] text-[#2c724f] px-3.5 py-1.5 rounded-lg text-[13px] font-[600] tracking-tight border border-[#cfe2d9] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                Problem
              </div>
              <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#556070] font-[500] leading-[1.8] sm:leading-[1.7]">
                Large scale theme park resorts require reliable technology infrastructure to support operations, security, communications, and guest services. Development of new parks in Orlando, Florida and Beijing, China required coordinated technology infrastructure across more than 100 facilities, including 30 mission critical environments such as data centers, security operations centers, and park operations centers. The Beijing project also introduced regulatory complexity, including government anti terrorism reviews for public venues designed for more than 50,000 occupants.
              </p>
            </div>

            {/* Solution */}
            <div id="solution" className="scroll-mt-[150px]">
              <div className="inline-flex items-center gap-1.5 bg-[#e8f2ee] text-[#2c724f] px-3.5 py-1.5 rounded-lg text-[13px] font-[600] tracking-tight border border-[#cfe2d9] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                Solution
              </div>
              <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#556070] font-[500] leading-[1.8] sm:leading-[1.7]">
                Ralph Iles supported the technology planning and systems integration team responsible for coordinating infrastructure requirements across Electrical, Communications, Attraction Safety, and Security systems. The work included infrastructure planning for more than 100 facilities and coordination of high availability and backup infrastructure strategies supporting 30 mission critical environments while ensuring compliance with Beijing public safety regulatory review requirements.
              </p>
            </div>

            {/* The Result */}
            <div id="result" className="scroll-mt-[150px]">
              <div className="inline-flex items-center gap-1.5 bg-[#e8f2ee] text-[#2c724f] px-3.5 py-1.5 rounded-lg text-[13px] font-[600] tracking-tight border border-[#cfe2d9] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
                The Result
              </div>
              <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#556070] font-[500] leading-[1.8] sm:leading-[1.7]">
                Integrated technology infrastructure was successfully deployed across both resort developments, supporting secure and reliable operations for large scale public venues. The infrastructure enabled continuous park operations, supported mission critical facilities, and satisfied international regulatory requirements for public safety and critical infrastructure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. READ MORE SECTION */}
      <section className="w-full bg-[#f4f7f6] pt-24 pb-28 lg:pt-32 lg:pb-36 border-t border-[#e2e8e5]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Read More Header */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <div className="inline-flex items-center gap-1.5 bg-[#e8f2ee] text-[#2c724f] px-3.5 py-1.5 rounded-lg text-[13px] font-[600] tracking-tight border border-[#cfe2d9] mb-8 lg:mb-12 self-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]"></div>
              Case Studies
            </div>
            
            <h2 
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-[42px] sm:text-[54px] lg:text-[62px] font-[800] leading-[1.05] tracking-tight text-[#0a0a0a] mb-12"
            >
              Read More
            </h2>

            <div className="flex items-center gap-4">
              <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-transparent border border-[#d0d7d3] text-[#8e9aaf] hover:bg-white transition-colors">
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#3e976c] text-white shadow-lg shadow-[#3e976c]/20 hover:bg-[#328b58] transition-colors">
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Cards Area */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-none flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="mb-0 relative p-6 pb-0 lg:p-8 lg:pb-0 overflow-hidden bg-white">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img 
                    src={modernizationImg} 
                    alt="Enterprise Infrastructure Modernization" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 p-3 bg-[#4aab81] text-white">
                    <ArrowUpRight size={22} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              
              <div className="p-8 pt-6 lg:p-10 lg:pt-8 bg-white flex-1 flex flex-col justify-start">
                <h3 
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[24px] lg:text-[28px] font-[800] leading-[1.2] text-[#0a0a0a] mb-4 group-hover:text-[#3e976c] transition-colors"
                >
                  Enterprise Infrastructure Modernization
                </h3>
                <p className="text-[16px] xl:text-[17px] text-[#8e9aaf] font-[500] leading-relaxed">
                  Infrastructure upgrades supporting redundancy and centralized systems.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-none flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="mb-0 relative p-6 pb-0 lg:p-8 lg:pb-0 overflow-hidden bg-white">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img 
                    src={expImage} 
                    alt="Mission-Critical Communications" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 p-3 bg-[#4aab81] text-white">
                    <ArrowUpRight size={22} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              
              <div className="p-8 pt-6 lg:p-10 lg:pt-8 bg-white flex-1 flex flex-col justify-start">
                <h3 
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  className="text-[24px] lg:text-[28px] font-[800] leading-[1.2] text-[#0a0a0a] mb-4 group-hover:text-[#3e976c] transition-colors"
                >
                  Mission-Critical Communications Infrastru...
                </h3>
                <p className="text-[16px] xl:text-[17px] text-[#8e9aaf] font-[500] leading-relaxed">
                  Infrastructure designed for continuous global operations.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
