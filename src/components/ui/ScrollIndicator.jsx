import { motion } from 'framer-motion';

/**
 * ScrollIndicator — Animated mouse-scroll icon used in hero sections.
 *
 * @param {string} [color='white'] - Border / dot color (Tailwind-compatible)
 * @param {string} [className] - Additional positioning classes
 */
export default function ScrollIndicator({ color = 'white', className = '' }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div
        className="w-[20px] h-[34px] border-2 rounded-full flex justify-center pt-1.5"
        style={{ borderColor: `${color}B3` }} // ~70% opacity
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
