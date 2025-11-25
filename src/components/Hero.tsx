import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative w-full h-screen min-h-screen flex items-center overflow-hidden bg-[#050505]">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/back.png')",
                }}
            >
                {/* Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            </div>

            {/* Desktop Layout (Hidden on Mobile) */}
            <div className="hidden md:flex relative z-10 container mx-auto px-6 md:px-12 flex-col items-start text-left">

                {/* Main Title */}
                <div className="relative mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-7xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 leading-[1.1] pb-4"
                    >
                        MURAT
                        <br />
                        TAVŞANCI
                    </motion.h1>
                </div>

                {/* Subtitle / Nickname */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full" />
                    <h2 className="relative text-2xl md:text-4xl font-bold text-purple-300 tracking-wide">
                        ÇokParaKazandıranAdam
                    </h2>
                </motion.div>

                {/* Motto */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="mb-12 max-w-3xl text-white/90 text-lg md:text-xl font-light italic leading-relaxed"
                >
                    "Satış ve liderlikte <span className="text-purple-300 underline uppercase font-bold">kalıcı başarı</span>; ancak beden, ruh ve herşeyini disiplin ve yüksek enerji ile yılmadan ortaya koyarsan ve tüm paydaşlarını mutlu edersen gelir."
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center gap-6"
                >
                    <a href="#contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden inline-block">
                        <span className="relative z-10 flex items-center gap-2">
                            Hemen İletişime Geç <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </a>
                </motion.div>
            </div>

            {/* Mobile Layout (Visible only on Mobile) */}
            <div className="md:hidden relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center h-full pt-20">

                {/* Mobile Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-[#050505] to-[#050505] z-[-1]" />

                {/* Mobile Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl font-black tracking-tighter text-white leading-[0.9] mb-6"
                >
                    MURAT
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-900">
                        TAVŞANCI
                    </span>
                </motion.h1>

                {/* Mobile Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-purple-500/30 blur-3xl" />
                    <h2 className="relative text-xl font-bold text-purple-200 tracking-widest">
                        ÇokParaKazandıranAdam
                    </h2>
                </motion.div>

                {/* Mobile Motto */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-10 text-gray-300 text-lg font-light italic leading-relaxed px-4"
                >
                    "Satış ve liderlikte <br /> <span className="text-purple-400 font-bold not-italic">KALICI BAŞARI</span> <br /> için buradayız."
                </motion.p>

                {/* Mobile CTA */}
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="group relative w-full max-w-xs px-8 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl overflow-hidden shadow-lg shadow-purple-900/30"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                        Hemen Başla <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.a>

            </div>
        </section>
    );
}
