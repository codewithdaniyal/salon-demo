import { motion } from 'framer-motion';

const Packages = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className= "py-20 px-6 lg:px-12 bg-neutral-gray border-t-4 border-primary" id = "packages" >
            <motion.h3
        initial={ { opacity: 0, x: -50 } }
    whileInView = {{ opacity: 1, x: 0 }
}
viewport = {{ once: true, margin: '-100px' }}
transition = {{ duration: 0.8 }}
className = "font-display text-5xl mb-12 uppercase"
    >
        02 GROOMING PACKAGES
    </motion.h3>

    < motion.div
variants = { containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true, margin: '-100px' }}
className = "grid grid-cols-1 md:grid-cols-3 gap-8"
    >
    {/* Basic */ }
    < motion.div variants = { cardVariants } className = "border-4 border-primary p-8 flex flex-col h-full bg-white group hover:shadow-xl transition-shadow duration-300" >
        <h4 className="font-display text-4xl mb-4 group-hover:text-zinc-600 transition-colors" > THE BASIC </h4>
            < p className = "font-display text-2xl text-zinc-500 mb-8 border-b-2 border-zinc-100 pb-4" > PKR 4,000 </p>
                < ul className = "flex-grow space-y-4 font-display text-xl tracking-wide" >
                    <li>- HAIR CUT </li>
                        < li > - BEARD TRIM </li>
                            < li > - REFRESHING WASH </li>
                                </ul>
                                < button className = "mt-12 border-4 border-primary py-3 font-display text-2xl hover:bg-primary hover:text-white transition-all" > SELECT </button>
                                    </motion.div>

{/* Signature (Inverted & Highlighted) */ }
<motion.div variants={ cardVariants } className = "border-4 border-primary p-8 flex flex-col h-full bg-primary text-white scale-100 md:scale-105 shadow-2xl relative z-10 transition-transform duration-300 hover:md:scale-110" >
    <div className="absolute -top-4 right-8 bg-white text-primary font-display px-4 py-1 text-lg uppercase tracking-widest" > MOST POPULAR </div>
        < h4 className = "font-display text-4xl mb-4 text-zinc-200" > THE SIGNATURE </h4>
            < p className = "font-display text-2xl text-zinc-400 mb-8 border-b-2 border-zinc-800 pb-4" > PKR 6, 500 </p>
                < ul className = "flex-grow space-y-4 font-display text-xl tracking-wide" >
                    <li>- SIGNATURE FADE </li>
                        < li > - HOT TOWEL SHAVE </li>
                            < li > - MINI FACIAL </li>
                                < li > - HEAD MASSAGE </li>
                                    </ul>
                                    < button className = "mt-12 bg-white text-primary py-3 font-display text-2xl hover:bg-zinc-200 transition-all" > SELECT </button>
                                        </motion.div>

{/* Groom */ }
<motion.div variants={ cardVariants } className = "border-4 border-primary p-8 flex flex-col h-full bg-white group hover:shadow-xl transition-shadow duration-300" >
    <h4 className="font-display text-4xl mb-4 group-hover:text-zinc-600 transition-colors" > THE GROOM </h4>
        < p className = "font-display text-2xl text-zinc-500 mb-8 border-b-2 border-zinc-100 pb-4" > PKR 12,000 </p>
            < ul className = "flex-grow space-y-4 font-display text-xl tracking-wide" >
                <li>- FULL TRANSFORMATION </li>
                    < li > - LUXURY FACIAL </li>
                        < li > - MANICURE & PEDICURE </li>
                        < li > - PREMIUM STYLING </li>
                            </ul>
                            < button className = "mt-12 border-4 border-primary py-3 font-display text-2xl hover:bg-primary hover:text-white transition-all" > SELECT </button>
                                </motion.div>
                                </motion.div>
                                </section>
  );
};

export default Packages;
