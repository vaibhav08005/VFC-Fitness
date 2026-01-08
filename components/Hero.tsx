import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        {/* Reduced overlay opacity for better video visibility */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="h-full w-full object-cover opacity-100"
          poster="https://images.unsplash.com/photo-1540497077202-7c8a33801524?q=80&w=2670&auto=format&fit=crop"
        >
          {/* High-quality gym aesthetic video */}
          <source src="https://videos.pexels.com/video-files/5319759/5319759-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-sanctum-black via-transparent to-transparent z-20" />
      </motion.div>

      {/* Centered Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-4">
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center"
        >
            <h1 className="text-[12vw] leading-none font-display font-bold uppercase tracking-tighter text-white text-center drop-shadow-2xl">
            VFC <span className="text-sanctum-orange">FITNESS</span>
            </h1>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="mt-8 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-md text-sm md:text-lg font-medium tracking-widest text-sanctum-white/90 uppercase drop-shadow-md">
            Crafting Fitness Club
          </p>
          <div className="h-px w-12 bg-sanctum-orange shadow-[0_0_10px_rgba(227,28,37,0.8)]" />
          <p className="text-xs text-white/80 tracking-widest uppercase drop-shadow-md">
            Opp. Kisan Mall, Shivaji Nagar
          </p>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest animate-bounce z-30 drop-shadow-md"
      >
        SCROLL TO ASCEND
      </motion.div>
    </section>
  );
};

export default Hero;