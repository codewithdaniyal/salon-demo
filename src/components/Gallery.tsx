import { motion } from 'framer-motion';

const images = [
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDddUnUXOxvDDDx8WGklAJ5tMMIctRcJDDBQob5SAicCO9pCtk2t627ymu1vpXPX-sAmFTlEBzI0wzzWdbRuAztWGHf6wUDWt39u-Fb4P_Cm1kPfra3lOe9ioKZUzkLyGhI9U_Xk3Dj1G_ov9eTeeqUokoQXjck5Jg6VbLoZyhBljg-z_qPEUnfUYRK9KuJj8TqvbNyN_0_mlb5oj9UsH1Q7KTQ7dg-TlDxCSgt97Qg0EFPBwkq5XqhxzzUgOX6HOzWumDkeIGfNEcc',
        alt: 'Close up haircut',
        span: 'md:col-span-4'
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs0G1q8TNldkrlCzwzA7qhTBmukPc5TGJkgBan3LcJ-GC_1keMBhZToPps7Kuh0pwfN8EPRfEnFaoTD-bVPSK8xU4yKb4A1kBbPjGIlF6cCgSIABRtX6420qJnXfz1QkX5tBqRj_6FG0AAAbWej5kk20PHPs1M0Oh-z_EyIj9FdRUYIN9WmS4M3wz7PUq1IcFQNjmGYXMQHQIF3Hl9wE79LR_jlRj9wOX_zph9TD9BTJSMV1reJZQcbK2jWN8KVhKXs46zXYcTL3--',
        alt: 'Salon interior',
        span: 'md:col-span-8'
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtkh1Mhm8kfD5ONnBiacB9GzBy-d0qZUipTx7se21CNG3niKzQ5Fv5qBBcN_HStuFrkQDOQtr38rLb9_EQMsOP_-rdtAkeKnkBAdTXlT52ucbLVT-Cil0Ca2QjBDFjk23c6EN5Tr_FQcnz3GVPtssfrmaM0cpigIMCH8fDBa0ipo6769ALfSoMH_Ho3E9BTlfnprqO39ogRGFKVgAZU7uili_KgB1PLSUMQ3JW97zNZYcdvjYsLamzSlL9LBEwGbKDFHlbOl2wl3my',
        alt: 'Beard trimming',
        span: 'md:col-span-3'
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWm9u44QsbwZVpU099bdHNMjvmU5nSWPqEKNN4qvG7EToc0jaYtNtMUSWG2R-Ixk1CSNQSJ9s8CZ4B86fUURGS3jLy4RsJC9dwsquRwgBZECaptokEfpi8k1G3blNP2tDJ7TCgiEL6n7twCwrZjkfuuyV_2K4_C44Abacs0JyN8p1uPcZ3NpaMVB30UyXRCBRiNBZs8Kbb-gYvpXPkXUncHqaWn8c3RqgbnVsraDZ23dAM0RZe579E7rzbQpRZlDuRosU1dZTEqHXa',
        alt: 'Shaving tools',
        span: 'md:col-span-5'
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs1GM5Sr5Y62CIjbaDPnYlFtTVdMsSZ5i-3Tv2-TWdXAdT8Huhk5a5qQNs_DGjPX0IMnPzUYBBpuJUYCQzAaGnTiTWtx2V1ZEQ2baSV2y6jVoGwgdw7ltmyw8Hs7d5UFPANmTXE2PMcWocibjwFQFi4P1B41TrKBNCAtk_VcMVHJ73PCWDS6kmFk0W8cqf_OW5sk1hapi9cAXwMOCs3F1LnRtFSqZmEAiCOhg_sBRtjjHf5uGfa_ihXBlbtTkBUocHQ94BhfNs2nVc',
        alt: 'Styling',
        span: 'md:col-span-4'
    }
];

const Gallery = () => {
    return (
        <section className= "py-20 px-6 lg:px-12 bg-white border-t-4 border-primary" id = "gallery" >
            <motion.h3
        initial={ { opacity: 0, x: -50 } }
    whileInView = {{ opacity: 1, x: 0 }
}
viewport = {{ once: true, margin: '-100px' }}
transition = {{ duration: 0.8 }}
className = "font-display text-5xl mb-12 uppercase"
    >
        03 THE WORK
    </motion.h3>

    < div className = "grid grid-cols-1 md:grid-cols-12 gap-4 h-[1000px] md:h-[700px]" >
    {
        images.map((img, index) => (
            <motion.div
            key= { index }
            initial = {{ opacity: 0, scale: 0.95 }}
whileInView = {{ opacity: 1, scale: 1 }}
viewport = {{ once: true, margin: '-50px' }}
transition = {{ duration: 0.6, delay: index * 0.1 }}
className = {`${img.span} h-full bg-zinc-200 overflow-hidden group relative`}
          >
    <img
              alt={ img.alt }
className = "w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
src = { img.src }
    />
    {/* Optional overlay reveal */ }
    < div className = "absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
        </motion.div>
        ))}
</div>
    </section>
  );
};

export default Gallery;
