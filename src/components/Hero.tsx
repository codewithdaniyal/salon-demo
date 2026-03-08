import { motion } from 'framer-motion';
import Marquee from './Marquee';
import heroImage from '../assets/unnamed.png';

const Hero = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
    };

    return (
        <section className= "relative min-h-[90vh] flex flex-col lg:flex-row items-stretch border-b-4 border-primary overflow-hidden" >
        <div className="flex-1 p-6 lg:p-12 flex flex-col justify-center border-r-0 lg:border-r-4 border-primary bg-white z-10" >
            <h2 className="font-display text-[15vw] lg:text-[10vw] leading-[0.85] uppercase tracking-tighter overflow-hidden" >
                <motion.div custom={ 0 } variants = { textVariants } initial = "hidden" animate = "visible" className = "origin-bottom" >
                    LOOK /
                    </motion.div>
                    < motion.div custom = { 1} variants = { textVariants } initial = "hidden" animate = "visible" className = "origin-bottom" >
                        SHARP. /
                        </motion.div>
                        < motion.div custom = { 2} variants = { textVariants } initial = "hidden" animate = "visible" className = "origin-bottom" >
                            BE SHARP.
          </motion.div>
                                </h2>
                                < motion.p
    custom = { 3}
    variants = { textVariants }
    initial = "hidden"
    animate = "visible"
    className = "mt-8 font-display text-2xl tracking-widest text-zinc-500 uppercase"
        >
        Premium Men's Grooming In Karachi
            </motion.p>
            </div>

            < motion.div
    initial = {{ scale: 1.1, opacity: 0 }
}
animate = {{ scale: 1, opacity: 1 }}
transition = {{ duration: 1.5, ease: 'easeOut' }}
className = "flex-1 relative bg-zinc-200"
    >
    <img
          alt="Portrait of well groomed man"
className = "w-full h-full object-cover grayscale"
src = { heroImage }
    />
    </motion.div>

{/* Marquee Ticker */ }
<div className="absolute bottom-0 w-full bg-primary text-white overflow-hidden flex items-center h-16 sm:h-20 lg:h-24 z-20" >
    <Marquee />
    </div>
    </section>
  );
};

export default Hero;
