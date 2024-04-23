'use client';

import { motion } from 'framer-motion';

export default function Skills () {
    const text = 'HTML CSS JavaScript React.js Node.js Express.js MongoDB';
  // Calculate the duration based on the text length for smoother animation
  const duration = text.length * 0.1;

  const marqueeVariants = {
    animate: {
      x: [0, -1000], // Adjust this based on your container size or text length
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <motion.div
        variants={marqueeVariants}
        
        animate="animate"
        style={{ display: 'inline-block' }}
      ><div className='text-5xl'> {text} {text} </div>
       
      </motion.div>
    </div>
  );
};

