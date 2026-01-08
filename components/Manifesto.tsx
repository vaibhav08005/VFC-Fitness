import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.9"]
  });

  const words = "ELEVATE YOUR STANDARD. CRAFTING YOUR DREAM PHYSIQUE. FITNESS IS NOT A HOBBY. IT IS A WAY OF LIFE. WELCOME TO VFC CLUB.".split(" ");

  return (
    <section 
      id="manifesto" 
      ref={containerRef} 
      className="relative min-h-[120vh] bg-sanctum-black flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-[1.5vw]">
        {words.map((word, i) => {
          // Stagger the opacity animation based on index
          const start = i / words.length;
          const end = start + (1 / words.length);
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          
          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className="text-[5vw] md:text-[4vw] font-display font-bold uppercase leading-[0.9] text-white tracking-tighter transition-colors duration-100"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
};

export default Manifesto;