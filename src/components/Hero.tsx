import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative w-full flex-1 flex items-center overflow-hidden bg-[#050505]">
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

            {/* Main Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start text-left">

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
        </section>
    );
}
