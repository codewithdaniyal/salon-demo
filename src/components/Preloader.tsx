import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, 100, {
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1], // Custom easing for smooth deceleration
            onUpdate: (latest) => {
                setDisplayCount(Math.round(latest));
            },
            onComplete: () => {
                // Slight delay before lifting the preloader
                setTimeout(() => setIsAnimationComplete(true), 400);
            },
        });

        return controls.stop;
    }, []);

    return (
        <motion.div
      initial= {{ y: 0 }
}
animate = { isAnimationComplete? { y: '-100%' } : { y: 0 }}
transition = {{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
onAnimationComplete = {() => {
    if (isAnimationComplete) onComplete();
}}
className = "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-white overflow-hidden"
    >
    <div className="flex flex-col items-center" >
        <div className="text-[15vw] sm:text-[12vw] md:text-[min(10vw,150px)] font-display leading-none tracking-tighter flex items-end" >
            <motion.span>{ displayCount } </motion.span>
            < span className = "text-primary/50 text-[0.5em] mb-[0.2em] ml-2" >% </span>
                </div>

                < motion.div
initial = {{ opacity: 0, y: 10 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ delay: 0.5, duration: 0.8 }}
className = "mt-4 uppercase tracking-[0.3em] text-xs sm:text-sm text-zinc-400 font-display"
    >
    Initializing Experience
        </motion.div>
        </div>

{/* Loading Progress Bar */ }
<div className="absolute bottom-12 w-48 sm:w-64 h-[2px] bg-white/10 overflow-hidden" >
    <motion.div 
          className="h-full bg-white origin-left"
initial = {{ scaleX: 0 }}
animate = {{ scaleX: 1 }}
transition = {{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        />
    </div>
    </motion.div>
  );
};

export default Preloader;
