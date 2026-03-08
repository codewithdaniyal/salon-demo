import { motion } from 'framer-motion';

const stats = [
    { value: '10+', label: 'Years of craft' },
    { value: '05', label: 'Master Barbers' },
    { value: '3K+', label: 'Loyal Clients' },
    { value: '02', label: 'Karachi Locations' }
];

const Stats = () => {
    return (
        <section className= "bg-primary text-white py-20 border-y-4 border-primary overflow-hidden" >
        <div className="px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-12 md:gap-4" >
        {
            stats.map((stat, index) => (
                <motion.div
            key= { index }
            initial = {{ opacity: 0, y: 30 }}
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true, margin: '-50px' }}
transition = {{ duration: 0.8, delay: index * 0.15 }}
className = "flex flex-col"
    >
    <span className="font-display text-[12vw] md:text-[8vw] leading-none mb-2" >
        { stat.value }
        </span>
        < span className = "font-display text-2xl lg:text-3xl tracking-widest uppercase text-zinc-400" >
            { stat.label }
            </span>
            </motion.div>
        ))}
</div>
    </section>
  );
};

export default Stats;
