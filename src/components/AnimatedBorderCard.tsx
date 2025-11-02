import React from 'react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedBorderCardProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedBorderCard({ children, className = '' }: AnimatedBorderCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated Border Container */}
      <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          className="absolute inset-0"
          initial={{ background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 360deg)' }}
          whileHover={{
            background: [
              'conic-gradient(from 0deg at 50% 50%, #06b6d4 0deg, transparent 90deg, transparent 360deg)',
              'conic-gradient(from 0deg at 50% 50%, #06b6d4 0deg, #06b6d4 90deg, transparent 180deg, transparent 360deg)',
              'conic-gradient(from 0deg at 50% 50%, #06b6d4 0deg, #06b6d4 180deg, transparent 270deg, transparent 360deg)',
              'conic-gradient(from 0deg at 50% 50%, #06b6d4 0deg, #06b6d4 270deg, transparent 360deg)',
              'conic-gradient(from 0deg at 50% 50%, #06b6d4 0deg, #06b6d4 360deg)',
            ],
          }}
          transition={{
            duration: 1.5,
            ease: 'linear',
          }}
        />
        {/* Inner mask to create border effect */}
        <div className="absolute inset-[2px] bg-slate-900/50 backdrop-blur-sm rounded-xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
