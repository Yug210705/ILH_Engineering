import { Play } from 'lucide-react';

function Curve({ className, type, style }) {
  if (type === 'bottom-out') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" className={`pointer-events-none ${className}`} style={style}>
        <path d="M0 24 V0 C0 13.255 10.745 24 24 24 H0 Z" fill="#ffffff" />
      </svg>
    );
  }
  if (type === 'bottom-in') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" className={`pointer-events-none ${className}`} style={style}>
        <path d="M0 0 V24 C0 10.745 10.745 0 24 0 H0 Z" fill="#ffffff" />
      </svg>
    );
  }
  if (type === 'top-in') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" className={`pointer-events-none ${className}`} style={style}>
         <path d="M24 24 H0 C13.255 24 24 13.255 24 0 V24 Z" fill="#ffffff" />
      </svg>
    );
  }
  if (type === 'top-out') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" className={`pointer-events-none ${className}`} style={style}>
         <path d="M24 0 H0 C13.255 0 24 10.745 24 24 V0 Z" fill="#ffffff" />
      </svg>
    );
  }
  return null;
}

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto mt-8 lg:mt-12 px-6 sm:px-8 lg:px-12">
      {/* Container for the Hero with Image inside */}
      <div className="relative w-full h-[750px] lg:h-[860px] rounded-[24px] overflow-hidden bg-[#2a2a2a] shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
          alt="Industrial Facility Aerial View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* The White Overlay containing text blocks */}
        <div className="absolute top-0 left-[-32px] lg:left-[-48px] h-full flex flex-col items-start justify-center pointer-events-none z-10 w-[200%] pb-20 lg:pb-32">
          
          {/* Block 0: Pill (Short) */}
          <div className="bg-[#ffffff] pr-[20px] lg:pr-[28px] pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-4 pt-10 flex items-end shrink-0 w-max z-10 animate-slide-in"
               style={{ borderTopRightRadius: '24px', borderBottomRightRadius: '0px' }}>
            <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-3 py-1.5 rounded-[8px] text-[12.5px] font-[600] tracking-tight">
              <div className="w-[5.5px] h-[5.5px] rounded-full bg-brand-green mb-[0px]"></div>
              Mission-Critical Infrastructure Engineering
            </div>
            {/* Out-step from Block 0 to 1 */}
            <div className="absolute bottom-0 w-[24px] h-[24px] z-40 pointer-events-none" 
                 style={{ right: '-24px', backgroundImage: 'radial-gradient(circle at 100% 0%, transparent 23.5px, #ffffff 24px)' }}></div>
          </div>

          {/* Block 1: Infrastructure (Long) */}
          <div className="bg-[#ffffff] pr-[16px] lg:pr-[24px] pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-1 lg:pb-2 pt-1 lg:pt-2 flex flex-col shrink-0 w-max z-20 animate-slide-in stagger-1"
               style={{ borderTopRightRadius: '24px', borderBottomRightRadius: '24px' }}>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[56px] lg:text-[76px] font-[700] tracking-tight text-[#0a0a0a] leading-[0.95]">
              Infrastructure
            </h1>
          </div>

          {/* Block 2: that Performs (Short) */}
          <div className="bg-[#ffffff] pr-[20px] lg:pr-[28px] pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-2 lg:pb-3 pt-1 lg:pt-2 flex flex-col shrink-0 w-max z-30 animate-slide-in stagger-1"
               style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[56px] lg:text-[76px] font-[700] tracking-tight text-[#0a0a0a] leading-[0.95]">
              that <span className="text-brand-green">Performs</span>
            </h1>
            {/* In-step from Block 1 to 2 */}
            <div className="absolute top-0 w-[24px] h-[24px] z-40 pointer-events-none" 
                 style={{ right: '-24px', backgroundImage: 'radial-gradient(circle at 100% 100%, transparent 23.5px, #ffffff 24px)' }}></div>
            {/* Out-step from Block 2 to 3 */}
            <div className="absolute bottom-0 w-[24px] h-[24px] z-40 pointer-events-none" 
                 style={{ right: '-24px', backgroundImage: 'radial-gradient(circle at 100% 0%, transparent 23.5px, #ffffff 24px)' }}></div>
          </div>

          {/* Block 3: when Failure isn't (Long) */}
          <div className="bg-[#ffffff] pr-[32px] lg:pr-[56px] pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-2 lg:pb-3 pt-1 lg:pt-2 flex flex-col shrink-0 w-max z-40 animate-slide-in stagger-2"
               style={{ borderTopRightRadius: '24px', borderBottomRightRadius: '24px' }}>
             <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[56px] lg:text-[76px] font-[700] tracking-tight text-[#0a0a0a] leading-[0.95]">
               when Failure isn&#39;t
             </h1>
          </div>

          {/* Block 4: an Option. (Short) */}
          <div className="bg-[#ffffff] pr-[24px] lg:pr-[32px] pl-[32px] lg:pl-[48px] relative pointer-events-auto pb-8 lg:pb-12 pt-2 lg:pt-3 flex flex-col shrink-0 w-max z-50 animate-slide-in stagger-3"
               style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '24px' }}>
             <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[56px] lg:text-[76px] font-[700] tracking-tight text-[#0a0a0a] leading-[0.95]">
               an <span className="text-brand-green">Option.</span>
             </h1>
             {/* In-step from Block 3 to 4 */}
             <div className="absolute top-0 w-[24px] h-[24px] z-40 pointer-events-none" 
                  style={{ right: '-24px', backgroundImage: 'radial-gradient(circle at 100% 100%, transparent 23.5px, #ffffff 24px)' }}></div>
          </div>

        </div>

        {/* Bottom Left "Hear from Ralph" */}
        <div className="absolute bottom-8 left-6 lg:left-12 z-30 flex items-center text-white animate-slide-in-bottom stagger-4">
          <div className="bg-[#4a463c]/80 backdrop-blur-md border border-white/10 rounded-[14px] p-3 pr-8 flex items-center gap-4 hover:bg-[#4a463c]/90 transition-all cursor-pointer shadow-xl w-fit">
            <div className="relative shrink-0 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" 
                   alt="Ralph" className="w-[52px] h-[52px] rounded-[10px] object-cover border border-[#2d2a26]" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Play size={20} fill="#ffffff" stroke="transparent" className="ml-0.5 opacity-90 drop-shadow-md" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-[14px] leading-tight mb-[2px] tracking-tight text-white drop-shadow-sm">Hear from Ralph</span>
              <span className="text-[#a1a1aa] text-[12px] leading-[1.3] font-[500] max-w-[180px]">Founding Director & Principal Engineer of ILH Engineering</span>
            </div>
          </div>
        </div>

        {/* Mouse icon */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col justify-center items-center mix-blend-overlay animate-slide-in-bottom stagger-5">
          <div className="w-[20px] h-[30px] border-[2px] border-white/90 rounded-full flex justify-center pt-[5px]">
            <div className="w-[2px] h-[5px] bg-white/90 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Bottom Right Box */}
        <div className="absolute bottom-0 right-0 z-20 pointer-events-auto animate-slide-in-right stagger-5">
          <div className="bg-[#ffffff] px-8 lg:px-10 pt-8 pb-8 rounded-tl-[32px] w-max">
             <div className="flex flex-col items-start w-full">
                <button className="bg-brand-green hover:bg-[#2e8451] text-white font-[600] text-[16px] px-8 w-full py-4 rounded-[8px] transition-colors tracking-wide">
                  Schedule Infrastructure Consultation
                </button>
                <p className="mt-4 text-[#6b7280] text-[13.5px] text-left font-[500] w-full tracking-tight">
                  Speak directly with an infrastructure engineer.
                </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
