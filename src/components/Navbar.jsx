import { ChevronDown, Building2 } from 'lucide-react';
import siteLogo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 py-2 bg-transparent relative z-20">
      {/* Logos side */}
      <div className="flex-1 flex items-center justify-start">
        <img src={siteLogo} alt="ILH Engineering" className="h-[60px] w-auto object-contain" />
      </div>
      
      {/* Center Links */}
      <div className="hidden md:flex shrink-0 items-center justify-center gap-2 lg:gap-3">
        <button className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-[8px] text-[13px] font-semibold text-gray-700">
          Capabilities <ChevronDown size={14} strokeWidth={2.25} className="text-gray-500" />
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-[8px] text-[13px] font-semibold text-gray-700">
          Experience
        </button>
        <button className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-[8px] text-[13px] font-semibold text-gray-700">
          The Firm <ChevronDown size={14} strokeWidth={2.25} className="text-gray-500" />
        </button>
        <button className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-[8px] text-[13px] font-semibold text-gray-700">
          Geographic Coverage <ChevronDown size={14} strokeWidth={2.25} className="text-gray-500" />
        </button>
      </div>

      {/* Action side */}
      <div className="flex-1 flex items-center justify-end">
        <button className="bg-brand-green hover:bg-brand-green-dark text-white px-5 py-[9px] rounded-[8px] text-[13px] font-semibold transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
