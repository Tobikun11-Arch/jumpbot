import React from 'react';
import { motion } from 'motion/react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
}

export default function AnimatedBorder({ children, className = '', rounded = 'rounded-xl' }: AnimatedBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx={rounded === 'rounded-xl' ? '12' : rounded === 'rounded-2xl' ? '16' : '8'}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          initial={{ strokeDashoffset: 1000 }}
          whileHover={{
            strokeDashoffset: 0,
          }}
          transition={{
            duration: 1.5,
            ease: 'linear',
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Content */}
      {children}
    </div>
  );
}
