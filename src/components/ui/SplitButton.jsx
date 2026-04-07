import { ArrowUpRight } from 'lucide-react';

/**
 * SplitButton — Green CTA with a separated arrow icon section.
 * Used on Capabilities, Leadership, and other sections.
 *
 * @param {string} children - Button label text
 * @param {function} [onClick] - Click handler
 * @param {string} [className] - Optional wrapper classes
 */
export default function SplitButton({ children, onClick, className = '' }) {
  return (
    <div
      className={`flex w-max rounded-lg overflow-hidden shadow-lg shadow-[#3e976c]/20 transition-transform active:scale-95 cursor-pointer group ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <button className="bg-[#3e976c] group-hover:bg-[#34835d] text-white font-[700] text-[15.5px] px-6 py-3.5 flex items-center justify-center transition-colors">
        {children}
      </button>
      <div className="bg-[#34835d] group-hover:bg-[#2c7150] flex items-center justify-center px-4 py-3.5 border-l border-[#40a373]/30 transition-colors">
        <ArrowUpRight strokeWidth={2.5} size={20} className="text-white" />
      </div>
    </div>
  );
}
