import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className= "bg-white px-6 lg:px-12 py-20 border-t-[3px] border-primary overflow-hidden" >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10" >
            <motion.div
          initial={ { opacity: 0, y: 50 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true, margin: '-50px' }}
transition = {{ duration: 0.8 }}
        >
    <h2 className="font-display text-[15vw] md:text-[10vw] leading-none tracking-tighter" > BLADE </h2>
        < p className = "font-display text-xl md:text-2xl tracking-[0.2em] text-zinc-400" > EST. 2014 / KARACHI </p>
            </motion.div>

            < motion.div
initial = {{ opacity: 0, x: 50 }}
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true, margin: '-50px' }}
transition = {{ duration: 0.8, delay: 0.2 }}
className = "flex flex-col items-start md:items-end gap-6 text-left md:text-right"
    >
    <div className="flex flex-wrap gap-8 font-display text-xl md:text-2xl tracking-widest uppercase" >
    {
        ['Instagram', 'Facebook', 'TikTok'].map((social) => (
            <a key= { social } href = "#" className = "relative group overflow-hidden" >
            <span className="block transition-transform duration-300 group-hover:-translate-y-full" > { social } </span>
        < span className = "absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0" > { social } </span>
        </a>
        ))
    }
        </div>
        < p className = "font-display text-lg md:text-xl tracking-widest uppercase text-zinc-500" >
            © 2024 BLADE GROOMING STUDIO.MADE IN KARACHI.
          </p>
    </motion.div>
    </div>
    </footer>
  );
};

export default Footer;
