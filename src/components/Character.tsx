import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

interface Props {
  progress: number;
}

export const Character: React.FC<Props> = ({ progress }) => {
  return (
    <motion.div
      className="absolute -top-8"
      animate={{
        left: `${progress * 100}%`,
        x: '-50%'
      }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
          You are here!
        </div>
        <div className="bg-blue-500 p-3 rounded-full">
          <User className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
};