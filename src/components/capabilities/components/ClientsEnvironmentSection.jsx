import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Frame_1 from "../../../assets/Frame_1.webp";
import Frame_2 from "../../../assets/Frame_2.webp";
import { VIEWS } from "../../../constants";

const facilityCards = [
  { title: "Data centers and server environments", img: Frame_1 },
  { title: "Municipal and government facilities", img: Frame_2 },
];

const relatedServices = [
  {
    title: "Data Center & Mission-Critical Infrastructure",
    desc: "Infrastructure engineered for continuous uptime.",
    view: VIEWS.DATA_CENTER,
  },
  {
    title: "Connectivity & Network Resilience",
    desc: "Redundant communications infrastructure.",
    view: VIEWS.CONNECTIVITY,
  },
  {
    title: "Life Safety & Security Systems",
    desc: "Integrated safety and compliance systems.",
    view: VIEWS.SAFETY,
  },
  {
    title: "Project Management for Critical Deployments",
    desc: "End-to-end management of mission-critical installations.",
    view: VIEWS.PROJECT_MANAGEMENT,
  },
];

export default function ClientsEnvironmentSection({ setCurrentView }) {
  const [startIdx, setStartIdx] = useState(0);

  const prev = () =>
    setStartIdx((i) => (i - 1 + facilityCards.length) % facilityCards.length);
  const next = () =>
    setStartIdx((i) => (i + 1) % facilityCards.length);

  const visibleCards = [
    facilityCards[startIdx],
    facilityCards[(startIdx + 1) % facilityCards.length],
  ];

  return (
    <div className="w-full bg-white">

      {/* ── Clients & Environment ── */}
      <section className="w-full px-5 sm:px-12 lg:px-24 xl:px-40 py-16 sm:py-24">
        
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left */}
          <div className="flex flex-col items-start gap-8 flex-shrink-0 w-full lg:w-[300px]">
            <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#0a0a0a] px-3 py-1.5 rounded-[8px] text-[12.5px] font-[600] tracking-tight border border-[#cfe2d9]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]" />
              Clients &amp; Environment
            </div>

            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-[36px] sm:text-[46px] lg:text-[48px] xl:text-[45px] font-[700] leading-[1.05] tracking-tight text-[#0a0a0a] w-full mb-6"
            >
              Built for
              <br />
              <span className="text-[#3e976c]">Facilities</span>
              <br />
              Where <span className="text-[#3e976c]">Power</span>
              <br />
              Cannot Fail.
            </h2>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-[48px] h-[40px] rounded-[6px] border border-[#d1d5db] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft size={16} className="text-[#6b7280]" />
              </button>
              <button
                onClick={next}
                className="w-[48px] h-[40px] rounded-[6px] bg-[#3e976c] border border-[#3e976c] flex items-center justify-center hover:bg-[#34835d] transition-colors"
              >
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="flex gap-5 flex-1 w-full">
            {visibleCards.map((card, idx) => (
              <div
                key={(startIdx + idx) % facilityCards.length}
                className="flex-1 bg-white overflow-hidden flex flex-col min-w-0 shadow-sm border border-gray-200"
              >
                <div className="p-6 pb-0">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[160px] sm:h-[190px] lg:h-[210px] object-cover"
                  />
                </div>
                <div className="px-4 py-5">
                  <p
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="font-[700] text-[18px] sm:text-[20px] text-[#0a0a0a] leading-snug m-0"
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Related Services ── */}
      <section
        className="w-full px-6 sm:px-12 lg:px-24 xl:px-40 pb-16 sm:pb-24 pt-12 sm:pt-16"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(232,244,239,0.6) 100%),
            linear-gradient(to right, #c8dfd7 1px, transparent 1px),
            linear-gradient(to bottom, #c8dfd7 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      >
        <div className="max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-12 flex-wrap gap-6">
            
            {/* Left side (pill + heading) */}
            <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
              
              {/* Pill */}
              <div className="inline-flex items-center gap-2 bg-[#f0f7f4] text-[#0a0a0a] px-3 py-1.5 rounded-[8px] text-[12px] font-[600] tracking-tight border border-[#cfe2d9] whitespace-nowrap">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c]" />
                More Offerings
              </div>

              {/* Heading */}
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-[36px] sm:text-[44px] lg:text-[52px] xl:text-[56px] px-12 font-[600] leading-[1.1] tracking-tight text-[#0a0a0a]"
              >
                Related <span className="text-[#3e976c]">Services</span>
              </h2>
            </div>

            {/* CTA Button */}
            <div className="flex w-max rounded-lg overflow-hidden shadow-md shadow-[#3e976c]/20 cursor-pointer group">
              <button className="bg-[#3e976c] group-hover:bg-[#34835d] text-white font-[700] text-[14px] px-5 py-3 whitespace-nowrap">
                View All Capabilities
              </button>
              <div className="bg-[#34835d] group-hover:bg-[#2c7150] flex items-center justify-center px-3.5 border-l border-[#40a373]/30">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </div>
          </div>

          {/* Service Rows */}
          <div className="flex flex-col gap-4 max-w-[900px] ml-auto mr-0 p-3">
            {relatedServices.map((service, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (service.view && setCurrentView) {
                    setCurrentView(service.view);
                  }
                }}
                className="flex items-center justify-between px-5 py-5 bg-white rounded-[14px] border border-gray-100 shadow-sm hover:bg-[#f9fdfb] hover:border-[#cfe2d9] transition-all cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-[800] text-[20px] sm:text-[22px] lg:text-[24px] text-[#0a0a0a] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[#a1a1aa] text-[14px] sm:text-[15px]">
                    {service.desc}
                  </p>
                </div>

                <div className="ml-6 w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3e976c] hover:border-[#3e976c] transition-all">
                  <ArrowUpRight size={16} className="text-[#9ca3af] hover:text-white" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
