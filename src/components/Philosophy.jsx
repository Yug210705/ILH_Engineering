import { Zap, Share2, Shield, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  const highlightCards = [
    { icon: Zap, title: "Power", delay: 0.1 },
    { icon: Shield, title: "Security", delay: 0.2 },
    { icon: Share2, title: "Connectivity", delay: 0.3 },
    { icon: Settings, title: "Operations", delay: 0.4 }
  ];

  const ServerBlock = ({ x, y }) => (
    <g transform={`translate(${x}, ${y})`}>
      <polygon points="0,30 -30,15 -30,185 0,200" fill="#a7f3d0" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="0,30 30,15 30,185 0,200" fill="#6ee7b7" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" />
      {[25, 45, 65, 85, 105, 125, 145, 165].map(ly => (
        <line key={ly} x1="0" y1={ly + 10} x2="30" y2={ly - 5} stroke="#0f172a" strokeWidth="2.5" />
      ))}
      <polygon points="0,0 -30,15 0,30 30,15" fill="#f8fafc" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" />
    </g>
  );

  return (
    <section className="w-full relative bg-[#f4f7f6] pt-24 sm:pt-32 pb-24 sm:pb-32 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none w-full">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(55,151,104,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(55,151,104,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 80%)'
          }}
        ></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col items-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-[#e8f2ee] text-brand-green px-4 py-2 rounded-xl text-[13px] font-[800] tracking-wide border border-[#d2efe2] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
            Engineering Philosophy
          </div>

          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] sm:text-[52px] lg:text-[72px] font-[800] leading-[1.0] tracking-[-0.04em] text-[#0a0a0a] text-center max-w-[1200px] mb-8">
            Reliability Is Not Luck.<br className="hidden md:block"/> It Is Engineered.
          </h2>

          <p className="text-[#64748b] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] font-medium text-center max-w-[900px]">
            At ILH Engineering, infrastructure is designed as an integrated system where electrical power, communications networks, and operational technologies work together under failure conditions.
          </p>
        </motion.div>

        {/* The Graphic / Interactive Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-20 lg:mb-32">
          
          {/* Mobile Stacking Cards (Desktop Left) */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 w-full lg:w-[260px] order-2 lg:order-1">
            {highlightCards.slice(0, 2).map((card) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: card.delay }}
                className="bg-white border border-gray-100 rounded-[24px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <card.icon size={36} className="text-brand-green mb-4" strokeWidth={2} />
                <span className="font-[800] text-[16px] sm:text-[18px] text-[#0f172a] tracking-tight">{card.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Central Diagram */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full max-w-[600px] aspect-[4/3] sm:aspect-square relative flex items-center justify-center order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-[40px] border border-white shadow-2xl overflow-hidden">
               <svg viewBox="0 100 1200 600" className="w-full h-full scale-[1.2] sm:scale-110">
                  <g transform="translate(0, 50)">
                    <path d="M 600,285 L 790,380 L 600,475 L 410,380 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="12" strokeLinejoin="round" />
                    <ServerBlock x={600} y={150} />
                    <ServerBlock x={565} y={167.5} />
                    <ServerBlock x={635} y={167.5} />
                    <ServerBlock x={600} y={185} />
                    <text x="600" y="540" textAnchor="middle" fill="#0a0a0a" className="font-[800] text-[38px] tracking-tighter">Integrated System</text>
                  </g>
               </svg>
            </div>
          </motion.div>

          {/* Mobile Stacking Cards (Desktop Right) */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 w-full lg:w-[260px] order-3">
             {highlightCards.slice(2, 4).map((card) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: card.delay }}
                className="bg-white border border-gray-100 rounded-[24px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <card.icon size={36} className="text-brand-green mb-4" strokeWidth={2} />
                <span className="font-[800] text-[16px] sm:text-[18px] text-[#0f172a] tracking-tight">{card.title}</span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Footer CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0a120f] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="flex-1 text-center lg:text-left relative z-10">
            <h3 className="text-white text-[28px] sm:text-[36px] font-[800] leading-tight mb-4 tracking-tight">Ready to Engineer Your Resilience?</h3>
            <p className="text-gray-400 text-[16px] sm:text-[18px] font-medium max-w-[560px]">Speak with our principals today to audit your current infrastructure and eliminate vulnerabilities.</p>
          </div>

          <button className="bg-brand-green hover:bg-[#328b58] text-white font-[800] text-[16px] sm:text-[18px] px-10 py-5 rounded-xl transition-all tracking-wide whitespace-nowrap shadow-lg shadow-brand-green/20 relative z-10">
            Schedule Infrastructure Consultation
          </button>
        </motion.div>

      </div>
    </section>
  );
}
