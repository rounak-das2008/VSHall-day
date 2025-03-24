import React from 'react';
import { motion } from 'framer-motion';
import { LocationCard } from '../types';
import { Check } from 'lucide-react';

interface Props {
  roomNumber: string,
  steps: LocationCard[];
  currentIndex: number;
  className?: string;
}

export const Timeline: React.FC<Props> = ({ roomNumber, steps, currentIndex, className }) => {
  return (
    <div className={`${className} px-4`}>
      <div className="relative flex justify-between items-center">
        {/* Progress line */}
        <div className="absolute left-0 top-1/2 w-full h-1 bg-white/20 -translate-y-1/2" />
        <motion.div 
          className="absolute left-0 top-1/2 h-1 bg-blue-500 -translate-y-1/2"
          animate={{
            width: `${(currentIndex / (steps.length - 1)) * 100}%`
          }}
          transition={{ type: "spring", stiffness: 100 }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div key={step.id} className={`relative z-10 flex flex-col items-center ${step.id%2==0 ? "!flex-col-reverse" : ""}`}>
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isCompleted || isCurrent ? 'bg-blue-500' : 'bg-white/20'
                }`}
                animate={{
                  scale: isCurrent ? 1.2 : 1,
                  backgroundColor: isCompleted || isCurrent ? '#3B82F6' : 'rgba(255, 255, 255, 0.2)'
                }}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <span className="text-sm text-white">{index + 1}</span>
                )}
              </motion.div>
              {isCurrent ? <p className="absolute top-full mt-2 text-xs text-white/80 whitespace-nowrap transform -translate-x-1/2 left-1/2">
                {step.id==8 ? <p>Room {roomNumber}</p> : <p>{step.title}</p>}
                
              </p> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};