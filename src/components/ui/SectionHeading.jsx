import { HEADING_FONT } from '../../constants/brand';

/**
 * SectionHeading — Large bold heading used across all sections.
 * Enforces consistent font, weight, tracking, and responsive sizing.
 *
 * @param {ReactNode} children - Heading content (supports JSX like <span> for green text)
 * @param {string} [className] - Extra Tailwind classes for alignment, max-width, etc.
 * @param {'h1'|'h2'|'h3'} [as='h2'] - HTML heading level
 */
export default function SectionHeading({ children, className = '', as: Tag = 'h2' }) {
  return (
    <Tag
      style={{ fontFamily: HEADING_FONT }}
      className={`text-[clamp(28px,8.5vw,42px)] sm:text-[clamp(42px,7vw,72px)] font-[800] leading-[1.05] tracking-tight text-[#0a0a0a] ${className}`}
    >
      {children}
    </Tag>
  );
}
