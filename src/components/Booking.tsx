import { motion } from 'framer-motion';

const Booking = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className= "py-20 px-6 lg:px-12 border-t-4 border-primary bg-white" id = "about" >
            <motion.h3
        initial={ { opacity: 0, x: -50 } }
    whileInView = {{ opacity: 1, x: 0 }
}
viewport = {{ once: true, margin: '-100px' }}
transition = {{ duration: 0.8 }}
className = "font-display text-5xl mb-12 uppercase"
    >
        05 BOOK YOUR SLOT
    </motion.h3>

    < div className = "grid grid-cols-1 md:grid-cols-2 gap-20" >
        <motion.div
          variants={ containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true, margin: '-50px' }}
        >
    <motion.p variants={ itemVariants } className = "font-display text-3xl mb-8 uppercase tracking-wide" > Contact Us </motion.p>
        < div className = "space-y-6" >
            <motion.div variants={ itemVariants }>
                <p className="font-display text-xl text-zinc-400 uppercase tracking-widest" > Address </p>
                    < p className = "font-display text-2xl uppercase" > Building 42 - C, Lane 4, Bukhari Commercial, DHA Phase 6, Karachi </p>
                        </motion.div>
                        < motion.div variants = { itemVariants } >
                            <p className="font-display text-xl text-zinc-400 uppercase tracking-widest" > Phone </p>
                                < p className = "font-display text-2xl uppercase" > +92 300 1234567 </p>
                                    </motion.div>
                                    < motion.div variants = { itemVariants } >
                                        <p className="font-display text-xl text-zinc-400 uppercase tracking-widest" > Opening Hours </p>
                                            < p className = "font-display text-2xl uppercase" > Mon - Sun: 11:00 AM - 10:00 PM </p>
                                                </motion.div>
                                                </div>
                                                </motion.div>

                                                < motion.form
initial = {{ opacity: 0, x: 50 }}
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true, margin: '-50px' }}
transition = {{ duration: 0.8 }}
className = "flex flex-col gap-10"
    >
    <div className="border-b-2 border-primary pb-2 group" >
        <label className="font-display text-lg text-zinc-400 uppercase tracking-widest block transition-colors group-focus-within:text-primary" > Your Name </label>
            < input className = "w-full border-none focus:ring-0 focus:outline-none p-0 text-2xl font-display uppercase tracking-wider placeholder:text-zinc-200" placeholder = "John Doe" type = "text" />
                </div>
                < div className = "border-b-2 border-primary pb-2 group" >
                    <label className="font-display text-lg text-zinc-400 uppercase tracking-widest block transition-colors group-focus-within:text-primary" > Phone Number </label>
                        < input className = "w-full border-none focus:ring-0 focus:outline-none p-0 text-2xl font-display uppercase tracking-wider placeholder:text-zinc-200" placeholder = "+92 --- -------" type = "tel" />
                            </div>
                            < div className = "border-b-2 border-primary pb-2 group" >
                                <label className="font-display text-lg text-zinc-400 uppercase tracking-widest block transition-colors group-focus-within:text-primary" > Preferred Service </label>
                                    < select className = "w-full border-none focus:ring-0 focus:outline-none p-0 text-2xl font-display uppercase tracking-wider bg-transparent" >
                                        <option>Signature Fade </option>
                                            < option > Classic Cut </option>
                                                < option > The Signature Package </option>
                                                    < option > Beard Sculpting </option>
                                                        </select>
                                                        </div>
                                                        < motion.button
whileHover = {{ scale: 1.02, backgroundColor: '#27272a' }}
whileTap = {{ scale: 0.98 }}
className = "bg-primary text-white py-6 font-display text-3xl tracking-widest uppercase transition-all"
type = "button"
    >
    CONFIRM BOOKING
        </motion.button>
        </motion.form>
        </div>
        </section>
  );
};

export default Booking;
