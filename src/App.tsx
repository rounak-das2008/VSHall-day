import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationCard } from './components/NavigationCard';
import { Character } from './components/Character';
import { Timeline } from './components/Timeline';
import { navigationCards } from './data';
import { SelectUser } from './components/SelectUser';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    if (currentIndex < navigationCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const [roomNumber, setRoomNumber] = useState("0");
  const [imgVar, setImgVar] = useState("0");

  useEffect(()=>{
    console.log(roomNumber)
  },[roomNumber])

  if(roomNumber=="0"){
    return(
      <div className="h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden relative flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            animate={{
              x: ['-100%', '200%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col items-center justify-center gap-12 px-4 py-8">
      <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-4"
        >
          <h1> Welcome to VS Hall Day</h1>
          <h2>Whose room you wanna visit ?</h2> 
        </motion.h1> 
        <SelectUser setRoomNumber={setRoomNumber} setImgVar={setImgVar}/>
        </div>
        </div>
    )
  }

  return (
    <div className="h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden relative flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            animate={{
              x: ['-100%', '200%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col items-center justify-center gap-12 px-4 py-8">

        
      <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white text-center"
        >
          Welcome to My Room
          <span className="block text-lg md:text-xl mt-2 text-blue-300">
            Follow the path to C-{roomNumber}
          </span>
        </motion.h1>

        <SelectUser setRoomNumber={setRoomNumber} setImgVar={setImgVar}/>
        

        {/* Progress bar */}
        <div className="w-[80%] max-w-3xl relative">
          <div className="h-2 bg-white/20 rounded-full">
            <motion.div
              className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
              animate={{
                width: `${(currentIndex / (navigationCards.length - 1)) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
          <Character progress={currentIndex / (navigationCards.length - 1)} />
        </div>

        {/* Cards container with stacking effect */}
        <div className="relative w-full h-[450px] flex items-center justify-center">
          <div className="absolute w-full max-w-md">
            <AnimatePresence mode="popLayout">
              {navigationCards.map((card, index) => (
                <NavigationCard
                imgVar={imgVar}
                roomNumber = {roomNumber}
                  key={card.id}
                  card={card}
                  isActive={currentIndex === index}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  hasNext={currentIndex < navigationCards.length - 1}
                  hasPrev={currentIndex > 0}
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '-190px',
                    transform: 'translate(-50%, -50%)',
                  }}
                  isVisible={Math.abs(currentIndex - index) <= 2}
                  offset={index - currentIndex}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline at the bottom */}
        <Timeline 
          roomNumber = {roomNumber}
          steps={navigationCards} 
          currentIndex={currentIndex}
          className="w-full max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
}

export default App