import { motion } from 'framer-motion';

const Marquee = () => {
    const textItems = [
        'Precision Fades',
        'Hot Towel Shave',
        'Beard Sculpting',
        'Luxury Facials',
        'Elite Experience',
    ];

    return (
        <div className= "flex whitespace-nowrap overflow-hidden" >
        <motion.div
        animate={ { x: [0, -1000] } }
    transition = {{
        repeat: Infinity,
            ease: 'linear',
                duration: 20,
        }
}
className = "flex font-display text-3xl tracking-widest uppercase items-center"
    >
    {/* Render the items multiple times for an infinite scroll illusion */ }
{
    [...Array(4)].map((_, arrayIndex) => (
        <div key= { arrayIndex } className = "flex shrink-0" >
        {
            textItems.map((item, index) => (
                <span key= {`${arrayIndex}-${index}`} className = "flex items-center px-4 shrink-0" >
                { item }
                < span className = "mx-4 mb-2" >•</span>
    </span>
    ))
}
</div>
        ))}
</motion.div>
    </div>
  );
};

export default Marquee;
