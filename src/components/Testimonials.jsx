import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      quote: "We had a great experience working with Ralph and the ILH team on several technology deployments. Their infrastructure, connectivity, and security approach consistently brought innovative designs that kept us forward-looking. The team is excellent.",
      author: "Manar E."
    },
    {
      quote: "We had the pleasure of working with ILH Engineering Services on several IT and low voltage security systems design projects. From the beginning, Ralph and his team were highly professional, knowledgeable, and committed to delivering exceptional results.\n\n...",
      author: "Francisco C."
    },
    {
      quote: "Smart Electronics worked with ILH Engineering on projects involving IT infrastructure, Wi-Fi & DAS, and access control systems. Their professionalism stood out as he provided clear requirements and responsive feedback throughout.",
      author: "David M."
    },
    {
      quote: "The strategic impact of their engineering methodology goes beyond simple deployments. They fundamentally restructured our backup power planning, leading to a zero-downtime quarter.",
      author: "Sarah J."
    }
  ];

  const CARD_WIDTH = 480;
  const GAP = 36; 
  const OFFSET = CARD_WIDTH + GAP;

  return (
    <section className="w-full relative overflow-hidden bg-[#f8faf9] pt-8 pb-32">
       
       {/* Full Width Overflow Track */}
       <div className="w-full relative h-[300px] flex items-center justify-center">
          {testimonials.map((t, idx) => {
             const dist = idx - activeIndex;
             const translateX = dist * OFFSET;

             return (
               <div
                 key={idx}
                 className="absolute w-[360px] md:w-[480px] h-[300px] bg-white border border-[#e2e8f0] p-8 md:p-10 flex flex-col justify-between transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform z-10"
                 style={{
                   transform: `translate(${translateX}px, -50%)`,
                   top: '50%',
                   opacity: Math.abs(dist) > 2 ? 0 : 1
                 }}
               >
                  <p 
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
                    className={`text-[15px] md:text-[17px] leading-[1.65] whitespace-pre-line transition-colors duration-[600ms] ${dist === 0 ? 'text-[#0a0a0a] font-[500]' : 'text-[#a1a1aa] font-[500]'}`}
                  >
                    {t.quote}
                  </p>
                  
                  <div className="w-full text-right mt-auto">
                     <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className={`transition-colors duration-[600ms] font-[700] text-[15px] tracking-tight ${dist === 0 ? 'text-[#3e976c]' : 'text-[#a1a1aa]'}`}>
                        {t.author}
                     </span>
                  </div>
               </div>
             );
          })}
       </div>

       {/* Navigation Layer */}
       <motion.div 
         initial={{ opacity: 0, y: 15 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, delay: 0.2 }}
         className="flex items-center gap-5 mt-16 justify-center relative z-20"
       >
          <button 
             onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
             disabled={activeIndex === 0}
             className={`w-[44px] h-[44px] rounded-[6px] border border-[#3e976c] flex items-center justify-center transition-all duration-300 ${activeIndex === 0 ? 'opacity-40 cursor-not-allowed bg-white text-[#3e976c]' : 'hover:bg-[#edf2f0] hover:scale-105 active:scale-95 cursor-pointer bg-white text-[#3e976c]'}`}
          >
             <ArrowLeft size={20} strokeWidth={1.75} />
          </button>
          
          <button 
             onClick={() => setActiveIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
             disabled={activeIndex === testimonials.length - 1}
             className={`w-[44px] h-[44px] rounded-[6px] flex items-center justify-center transition-all duration-300 shadow-sm ${activeIndex === testimonials.length - 1 ? 'opacity-40 cursor-not-allowed bg-[#3e976c] text-white' : 'bg-[#3e976c] hover:bg-[#34835d] hover:scale-105 active:scale-95 cursor-pointer text-white hover:shadow-md'}`}
          >
             <ArrowRight size={20} strokeWidth={1.75} />
          </button>
       </motion.div>
       
    </section>
  );
}
