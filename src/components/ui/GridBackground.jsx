/**
 * GridBackground — Decorative subtle grid overlay used behind sections.
 * Provides the engineering-blueprint texture.
 *
 * @param {'linear'|'radial'} [maskType='linear'] - Fade style
 * @param {number} [opacity=0.45] - Grid line opacity
 * @param {string} [className] - Extra positioning / sizing classes
 */
export default function GridBackground({
  maskType = 'linear',
  opacity = 0.45,
  className = '',
}) {
  const maskImage =
    maskType === 'radial'
      ? 'radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 90%)'
      : 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%)';

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(to right, #cedfde 1px, transparent 1px),
          linear-gradient(to bottom, #cedfde 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage,
        WebkitMaskImage: maskImage,
      }}
    />
  );
}
