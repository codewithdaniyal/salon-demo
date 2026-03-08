import { motion } from 'framer-motion';

const Testimonial = () => {
    return (
        <section className= "py-32 px-6 lg:px-12 bg-neutral-gray relative overflow-hidden flex flex-col items-center text-center" >
        <motion.span
        initial={ { opacity: 0, scale: 0.5, x: -100 } }
    whileInView = {{ opacity: 1, scale: 1, x: 0 }
}
viewport = {{ once: true }}
transition = {{ duration: 1 }}
className = "text-zinc-200 text-[15rem] md:text-[30rem] font-serif absolute -top-20 md:-top-40 -left-10 md:-left-20 leading-none select-none z-0"
    >
        “
</motion.span>

    < div className = "relative z-10 max-w-4xl" >
        <motion.blockquote
          initial={ { opacity: 0, y: 30 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, margin: '-100px' }}
transition = {{ duration: 0.8 }}
className = "font-serif italic text-3xl md:text-5xl lg:text-6xl leading-tight text-primary"
    >
    "Blade isn't just a haircut; it's the pinnacle of grooming excellence in Karachi. The attention to detail is unmatched by anyone in the city."
    </motion.blockquote>
    < motion.cite
initial = {{ opacity: 0 }}
whileInView = {{ opacity: 1 }}
viewport = {{ once: true }}
transition = {{ duration: 0.8, delay: 0.4 }}
className = "mt-12 block font-display text-2xl lg:text-3xl uppercase not-italic tracking-widest text-zinc-500"
    >
          — Bilal Maqsood, Karachi
    </motion.cite>
    </div>

    < motion.span
initial = {{ opacity: 0, scale: 0.5, x: 100 }}
whileInView = {{ opacity: 1, scale: 1, x: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 1 }}
className = "text-zinc-200 text-[15rem] md:text-[30rem] font-serif absolute -bottom-20 md:-bottom-60 -right-10 md:-right-20 leading-none select-none z-0"
    >
        ”
</motion.span>
    </section>
  );
};

export default Testimonial;
