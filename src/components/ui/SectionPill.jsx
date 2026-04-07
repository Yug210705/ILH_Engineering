/**
 * SectionPill — Reusable green pill/badge used as section labels
 * throughout the site. Keeps visual consistency across all sections.
 *
 * @param {string} children - The label text
 * @param {string} [className] - Optional extra Tailwind classes
 */
export default function SectionPill({ children, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-[#e8f2ee] text-[#0a0a0a] px-4 py-2 rounded-lg text-[12.5px] font-[700] tracking-tight border border-[#cfe2d9] ${className}`}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[#3e976c] shrink-0" />
      {children}
    </div>
  );
}
