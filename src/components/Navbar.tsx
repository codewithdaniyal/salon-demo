import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.header
      initial= {{ y: -100 }
}
animate = {{ y: 0 }}
transition = {{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
className = "sticky top-0 z-50 bg-white border-b-4 border-primary px-6 lg:px-12 py-4 flex items-center justify-between"
    >
    <div className="flex items-center gap-2" >
        <h1 className="font-display text-4xl tracking-tighter" > BLADE </h1>
            </div>

            < nav className = "hidden md:flex items-center gap-10 font-display text-xl tracking-widest uppercase" >
            {
                ['Services', 'Packages', 'Gallery', 'About'].map((item) => (
                    <a
            key= { item }
            href = {`#${item.toLowerCase()}`}
className = "relative group overflow-hidden"
    >
    <span className="block transition-transform duration-300 group-hover:-translate-y-full" >
        { item }
        </span>
        < span className = "absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0" >
            { item }
            </span>
            </a>
        ))}
</nav>

    < motion.button
whileHover = {{ scale: 1.05 }}
whileTap = {{ scale: 0.95 }}
className = "bg-primary text-white font-display text-xl px-8 py-2 rounded-full hover:bg-zinc-800 transition-colors"
    >
    BOOK NOW
        </motion.button>
        </motion.header>
  );
};

export default Navbar;
