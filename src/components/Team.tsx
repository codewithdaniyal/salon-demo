import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Omar Khalil',
        role: 'Senior Master Barber',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJiXckwxLLBDdCxKOmOUkyg1gPaz0P6kR4ckcMhWjAFl_Js8Zgp_LwMy-1qC3RKwClSNvt_1DRtRiGe98riOFDbr633OkZ64W0G3kcuWfmXZXw79Br9g0CdjWR4VIaxeAhbpV4TzyKpGL5hY8FA5N27TAa-O-0VjxX1QrgJpfEihGEp3RTP8EbMu42idzzxMuHA7uATgrJalGUPeHh_COFsl-2ls3mgo5A-QsstSvS4QfefT2XBjh8ac1UQArVJfljEe2yJOvME1dK',
        borderClass: 'border-b-4 md:border-b-0 md:border-r-4 border-primary'
    },
    {
        name: 'Zaid Ahmed',
        role: 'Fade Specialist',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhZ9ejgBE-rS-DcnQjlFI86zkeZ4mmJV5s5F0d5lzG7UeT2NMz3SEydyEqfDC26EcMxDI8_5D9_wkUanvdtCJM9l04Pyak34LhAmCBcxOkHcV-u2UZnztDwnMdO42H2PmsTxUBs3hbV31kjdjAZ08D7jvJD8igLQB99bCABAy2jOMcCCPtIzdDQbZOLtKthxSnR0BXx4xWd5eX4gSvIYgzkT-a_QV6Yu-xnYthcO91WNp6_21JdRAyH40jVIJG0mmlTt5CLnc5mIRU',
        borderClass: 'border-b-4 md:border-b-0 md:border-r-4 border-primary'
    },
    {
        name: 'Hamza Khan',
        role: 'Stylist & Colorist',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzMRKqR0lfY9SeCXfhkCFMt-6ZCN4PWJZrSOeRLjUJUqANoaLW4pAk77ofc-_k1d9g-vBAzk3-btvg4ubiXR4ii-Ud9XgI3W9O4r87M4IlXIjK_bC0V6iPJ1-4YhXIv5jRjUllKQmFopxgzEkUXj5v1jjZei3H0OEasQ1m61LeibZ4HUVKndFmKlY0rooEQIoIiqDQmweCsNGfhFyJL_XTsntfEEWziwxOXkHPtfeZcNovQ27clJeQN5WqWeM2aR5TsLn-7TmqB_vN',
        borderClass: ''
    }
];

const Team = () => {
    return (
        <section className= "py-20 px-6 lg:px-12 bg-white" >
        <motion.h3
        initial={ { opacity: 0, x: -50 } }
    whileInView = {{ opacity: 1, x: 0 }
}
viewport = {{ once: true, margin: '-100px' }}
transition = {{ duration: 0.8 }}
className = "font-display text-5xl mb-12 uppercase"
    >
        04 THE TEAM
    </motion.h3>

    < div className = "grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-primary" >
    {
        teamMembers.map((member, index) => (
            <motion.div
            key= { index }
            initial = {{ opacity: 0, y: 50 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, margin: '-50px' }}
transition = {{ duration: 0.6, delay: index * 0.2 }}
className = {`${member.borderClass} group overflow-hidden bg-white`}
          >
    <div className="h-[400px] overflow-hidden" >
        <img
                alt={ member.name }
className = "w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
src = { member.image }
    />
    </div>
    < div className = "p-6 bg-white relative z-10" >
        <h4 className="font-display text-3xl uppercase" > { member.name } </h4>
            < p className = "font-display text-xl text-zinc-500 tracking-widest uppercase" > { member.role } </p>
                </div>
                </motion.div>
        ))}
</div>
    </section>
  );
};

export default Team;
