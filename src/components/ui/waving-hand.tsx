import React from 'react'
import {motion} from 'framer-motion'
const WavingHand = () => {
    const handVariants = {
      initial: { rotateY: 0 },
      mid: { rotateY: -1.5 },
      final: { rotateY: 1.5 },
    };
  
    const waveTransition = {
      type: 'spring',
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'mirror',
    };
  
    return (
      <motion.div
        variants={handVariants}
        initial="initial"
        animate="final"
        transition={waveTransition}
      >
        👋
      </motion.div>
    );
  };
export default WavingHand