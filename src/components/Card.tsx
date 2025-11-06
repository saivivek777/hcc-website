import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <motion.div
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 ${className}`}
      whileHover={hover ? { y: -8, shadow: '0 20px 40px rgba(0,0,0,0.15)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
