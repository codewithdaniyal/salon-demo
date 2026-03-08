import { motion } from 'framer-motion';

const servicesList = [
    { name: 'Classic Cut', desc: 'Consultation, wash & style', price: 'PKR 2,500' },
    { name: 'Signature Fade', desc: 'Precision taper or skin fade', price: 'PKR 3,000' },
    { name: 'Buzz Cut', desc: 'One guard all over', price: 'PKR 1,500' },
    { name: 'Junior Cut', desc: 'For the young gentlemen', price: 'PKR 1,800' },
];

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className= "py-20 px-6 lg:px-12 bg-white" id = "services" >
            <motion.h3
        initial={ { opacity: 0, x: -50 } }
    whileInView = {{ opacity: 1, x: 0 }
}
viewport = {{ once: true, margin: '-100px' }}
transition = {{ duration: 0.8 }}
className = "font-display text-5xl mb-12 uppercase"
    >
        01 OUR SERVICES
    </motion.h3>

    < div className = "border-b-4 border-primary flex gap-12 overflow-x-auto pb-0 no-scrollbar relative" >
        <button className="font-display whitespace-nowrap text-3xl pb-4 border-b-[6px] border-primary px-2 transition-all" >
            HAIRCUT
            </button>
            < button className = "font-display whitespace-nowrap text-3xl pb-4 border-b-[6px] border-transparent text-zinc-400 hover:text-primary px-2 transition-all" >
                BEARD & SHAVE
                </button>
                < button className = "font-display whitespace-nowrap text-3xl pb-4 border-b-[6px] border-transparent text-zinc-400 hover:text-primary px-2 transition-all" >
                    FACIALS
                    </button>
                    < button className = "font-display whitespace-nowrap text-3xl pb-4 border-b-[6px] border-transparent text-zinc-400 hover:text-primary px-2 transition-all" >
                        HAIR COLOR
                            </button>
                            </div>

                            < motion.div
variants = { containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true, margin: '-50px' }}
className = "grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-12"
    >
{
    servicesList.map((service, index) => (
        <motion.div
            key= { index }
            variants = { itemVariants }
            className = "flex justify-between items-end border-b-2 border-zinc-200 py-6 hover:border-primary transition-colors"
        >
        <div>
        <h4 className="font-display text-3xl uppercase" > { service.name } </h4>
    < p className = "text-zinc-500 uppercase tracking-widest text-sm" > { service.desc } </p>
    </div>
    < span className = "font-display text-3xl" > { service.price } </span>
    </motion.div>
    ))
}
    </motion.div>
    </section>
  );
};

export default Services;
