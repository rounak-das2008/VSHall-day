import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { LocationCard } from '../types';
import img225 from "../public/new/image225.gif"
import img238 from "../public/new/image238.gif"
import img229 from "../public/new/image229.gif"
import img220 from "../public/new/image220.gif"
import img208 from "../public/new/image208.gif"
import img242 from "../public/new/image242.gif"
import id1 from "../public/new/gate.jpeg"
import id2 from "../public/new/hallboard.jpeg"
import id3 from "../public/new/mess_entry.jpeg"
import id4 from "../public/new/handwash.jpeg"
import id5 from "../public/new/mess_exit.jpeg"
import id6 from "../public/new/stairs.jpeg"
import id7 from "../public/new/toilet.jpg"




interface Props {
  imgVar:string,
  roomNumber: string,
  card: LocationCard;
  isActive: boolean;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  style?: React.CSSProperties;
  isVisible: boolean;
  offset: number;
}

export const NavigationCard: React.FC<Props> = ({
  imgVar,
  roomNumber,
  card,
  isActive,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  style,
  isVisible,
  offset
}) => {
  if (!isVisible) return null;

  const cardVariants = {
    enter: (offset: number) => ({
      scale: 1 - Math.abs(offset) * 0.1,
      y: offset > 0 ? 40 : -40,
      opacity: 0,
      zIndex: -Math.abs(offset)
    }),
    center: {
      scale: 1,
      y: 0,
      opacity: 1,
      zIndex: 0
    },
    exit: (offset: number) => ({
      scale: 1 - Math.abs(offset) * 0.1,
      y: offset < 0 ? 40 : -40,
      opacity: 0,
      zIndex: -Math.abs(offset)
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="enter"
      animate={isActive ? "center" : "enter"}
      exit="exit"
      custom={offset}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      style={{
        ...style,
        transformOrigin: "center center"
      }}
      className="w-full max-w-sm"
    >
      <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/30 backdrop-blur-sm">
        <div className="relative h-[400px] w-full">
          {
            card.id===1 &&
            <img 
            src={id1}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          }
          {
            card.id===2 &&
            <img 
            src={id2}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          }
          {
            card.id===3 &&
            <img 
            src={id3}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          }
          {
            card.id===4 &&
            <img 
            src={id4}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          }
          {
            card.id===5 &&
            <img 
            src={id5}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          }
          {
            card.id===6 &&
            <img 
            src={id6}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          }
          {
            card.id===7 &&
            <img 
            src={id7}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          }
          {
            card.id===8 &&
            <img 
            src={roomNumber==="225" ? img225 : roomNumber==="238" ? img238 : roomNumber==="229" ? img229 : roomNumber==="220" ? img220 : roomNumber==="208" ? img208 : roomNumber==="242" ? img242 : ""} 
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          }
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          {/* Navigation buttons at the center */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 pointer-events-none z-20">
            {hasPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="pointer-events-auto bg-gradient-to-br from-purple-900 via-blue-900 to-black bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="pointer-events-auto bg-gradient-to-br from-purple-900 via-blue-900 to-black bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all transform hover:scale-110 ml-auto"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{card.id==8 ? `Room - ${roomNumber}` : card.title}</h3>
            <p className="text-sm mb-4">{card.description}</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm font-medium">{card.direction}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};