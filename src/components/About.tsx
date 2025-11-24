import { motion } from 'framer-motion';
import { Target, TrendingUp, Award, Zap, BookOpen, Users, Mic } from 'lucide-react';

export function About() {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut" as const
            }
        })
    };

    const stats = [
        { text: "5.000+ SAAT EĞİTİM", icon: <BookOpen className="w-5 h-5" /> },
        { text: "20 YIL SATIŞ YÖNETİMİ", icon: <TrendingUp className="w-5 h-5" /> },
        { text: "10.000+ MÜŞTERİ (81 İL)", icon: <Users className="w-5 h-5" /> },
        { text: "102 KEYNOTE KONUŞMA", icon: <Mic className="w-5 h-5" /> },
        { text: "100+ KÖŞE YAZISI", icon: <Target className="w-5 h-5" /> },
        { text: "4 MBA DERECESİ", icon: <Award className="w-5 h-5" /> },
        { text: "TURKCELL 10 YIL EN İYİ YÖNETİCİ", icon: <Award className="w-5 h-5" /> },
        { text: "YÜKSEK ENERJİ", icon: <Zap className="w-5 h-5" /> },
    ];

    return (
        <section id="about" className="relative min-h-screen py-24 bg-[#050505] overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header with Parallax */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 md:mb-32"
                >
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4">
                        KİMDİR<span className="text-purple-500">?</span>
                    </h2>
                    <div className="h-1 w-24 bg-purple-500 rounded-full" />
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-16">

                    {/* Card 1: The Strategist */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={cardVariants}
                        className="md:col-span-7 group relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
                    >
                        <div className="absolute top-8 right-8 p-3 rounded-full bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">Stratejist & Lider</h3>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Satış yönetimi ve liderlik alanındaki <span className="text-white font-semibold">20 yıllık tecrübesini</span>, global iş ağıyla birleştiren bir stratejisttir. Türkiye’nin öncü kurumlarında edindiği birikimi; konuşmacı, yazar ve danışman kimliğiyle iş dünyasına aktarmaktadır.
                        </p>
                    </motion.div>

                    {/* Card 2: The Motto (Highlighted) */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={cardVariants}
                        className="md:col-span-5 group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full group-hover:bg-purple-500/50 transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-bold tracking-wide mb-6">
                                MOTTO
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                                #İçinizdenbiri
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Girişimcilere, satış profesyonellerine ve her kademeden yöneticiye rehberlik ederek, paydaşlarının <span className="text-purple-400 font-semibold">finansal ve operasyonel başarılarını</span> maksimize etmeyi hedefler.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: The Founder */}
                    <motion.div
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={cardVariants}
                        className="md:col-span-12 group relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center"
                    >
                        <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 text-white group-hover:scale-110 transition-transform duration-500">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Kurumsal Liderlik</h3>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-4xl">
                                Kurucusu olduğu <span className="text-white font-semibold">ÇokParaKazandıranAdam Danışmanlık</span> ve Partner/İstişare Kurulu Üyesi olduğu <span className="text-white font-semibold">GrowX Yönetim Danışmanlığı</span> çatısı altında; şirketlerin kurumsallaşma süreçlerine ve sürdürülebilir büyümelerine liderlik etmektedir.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Module */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            custom={index + 3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-purple-500/50 transition-colors duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-full bg-purple-500/20 text-purple-300 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <span className="text-sm md:text-base font-bold text-white tracking-wide">
                                    {stat.text}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
