import { motion } from 'framer-motion';
import { Users, Globe, Award, MapPin, TrendingUp, Leaf, HeartHandshake } from 'lucide-react';

export function WhoWeAre() {
    const stats = [
        { value: "%258", label: "1. Yıl Büyüme", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "%348", label: "2. Yıl Büyüme", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "3 Kıta", label: "Global Erişim", icon: <Globe className="w-6 h-6" /> },
        { value: "100+", label: "Mutlu Marka", icon: <Award className="w-6 h-6" /> }
    ];

    const references = [
        "Turkcell", "Evidea", "Ebebek", "Herbalife", "KKTCELL",
        "Türk Telekom", "Wingie Enuygun", "Re/Max", "AzerCell",
        "Vizyon Gold", "Vodafone", "Hedef Akademi"
    ];

    return (
        <section id="who-we-are" className="relative py-24 bg-[#050505] overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-px w-12 bg-purple-500" />
                            <span className="text-purple-400 font-medium tracking-widest uppercase text-sm">Grup Şirketimiz</span>
                            <div className="h-px w-12 bg-purple-500" />
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Biz Kim Miyiz? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                                İKİ MARKA, TEK VİZYON.
                            </span>
                        </h2>

                        <h3 className="text-2xl text-white font-light italic mb-8">
                            "İki Şirket. İki Merkez. Bütüncül Çözüm."
                        </h3>

                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                            Biz; yönetim bilimi ve satışın matematiğini birleştiren, İstanbul ve İzmir merkezli iki danışmanlık grup şirketiyiz.
                        </p>

                        <div className="mt-8 text-lg text-purple-300 font-medium">
                            Grup Şirketimiz GROWX'i ve ÇPKA’yı Tanıyın
                        </div>
                    </motion.div>
                </div>

                {/* Companies Grid - Desktop */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

                    {/* GrowX - İzmir */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 hover:border-blue-500/30 transition-all duration-500"
                    >
                        <div className="absolute top-6 right-6 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> İzmir
                        </div>

                        <div className="mb-8">
                            <img src="/growx.png" alt="GrowX" className="h-32 md:h-40 mb-8 object-contain" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                                    <Users className="w-6 h-6 text-gray-400" />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Dr. Savaş Tavşancı</div>
                                    <div className="text-xs text-gray-500">Kurucu & Lider</div>
                                </div>
                            </div>
                            <div className="text-xl text-white font-light italic border-l-2 border-blue-500 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
                                "Şirketin 'Beyni ve İskeleti'"
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {["Kurumsallaşma", "Aile Anayasası", "Sürdürülebilir Büyüme", "Yatırım Danışmanlığı", "Dijital Kültür Dönüşümü"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="text-blue-500 font-bold tracking-wider">#BirlikteHepİleriye</div>
                    </motion.div>

                    {/* ÇPKA - İstanbul */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 hover:border-purple-500/30 transition-all duration-500"
                    >
                        <div className="absolute top-6 right-6 px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> İstanbul
                        </div>

                        <div className="mb-8">
                            <img src="/logo.png" alt="ÇokParaKazandıranAdam" className="h-32 md:h-40 mb-8 object-contain" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                                    <Users className="w-6 h-6 text-gray-400" />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Murat Tavşancı</div>
                                    <div className="text-xs text-gray-500">Kurucu & Lider</div>
                                </div>
                            </div>
                            <div className="text-xl text-white font-light italic border-l-2 border-purple-500 pl-4 py-2 bg-purple-500/5 rounded-r-lg">
                                "Şirketin 'Kasları ve Sesi'"
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {["Satış, İkna, Müzakere & İş Geliştirme", "Liderlik ve İnsan Yönetimi", "Girişimcilik ve Gelir Arttırma", "Dijital dönüşüm ve İnovasyon", "Global Network Bağı (81 ile 82 Ülke)"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="text-purple-500 font-bold tracking-wider">#İçinizdenBiri</div>
                    </motion.div>

                </div>

                {/* Companies Stack - Mobile */}
                <div className="md:hidden flex flex-col gap-6 mb-16">
                    {/* GrowX - Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <img src="/growx.png" alt="GrowX" className="h-16 object-contain" />
                            <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> İzmir
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="text-white font-bold mb-1">Dr. Savaş Tavşancı</div>
                            <div className="text-xs text-gray-500 mb-3">Kurucu & Lider</div>
                            <div className="text-sm text-white font-light italic border-l-2 border-purple-500 pl-3 py-1 bg-purple-500/5 rounded-r">
                                "Şirketin 'Beyni ve İskeleti'"
                            </div>
                        </div>

                        <div className="text-purple-500 text-sm font-bold tracking-wider">#BirlikteHepİleriye</div>
                    </motion.div>

                    {/* ÇPKA - Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <img src="/logo.png" alt="ÇokParaKazandıranAdam" className="h-16 object-contain" />
                            <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> İstanbul
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="text-white font-bold mb-1">Murat Tavşancı</div>
                            <div className="text-xs text-gray-500 mb-3">Kurucu & Lider</div>
                            <div className="text-sm text-white font-light italic border-l-2 border-purple-500 pl-3 py-1 bg-purple-500/5 rounded-r">
                                "Şirketin 'Kasları ve Sesi'"
                            </div>
                        </div>

                        <div className="text-purple-500 text-sm font-bold tracking-wider">#İçinizdenBiri</div>
                    </motion.div>
                </div>

                {/* Stats Section - Desktop */}
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section - Mobile */}
                <div className="md:hidden grid grid-cols-2 gap-3 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-4 rounded-xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center"
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                                {stat.icon}
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider leading-tight">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* References Ticker */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white mb-4">Referanslarımızdan Bazıları</h3>
                        <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="relative w-full overflow-hidden py-8 bg-white/5 border-y border-white/5">
                        {/* Blur Effects */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />

                        <motion.div
                            className="flex gap-16 whitespace-nowrap"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...references, ...references].map((ref, index) => (
                                <span key={index} className="text-2xl md:text-3xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">
                                    {ref}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Values Section - Desktop */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/20"
                    >
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                            <Leaf className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Sürdürülebilirlik</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Kendi raporunu yazan ve uygulayan sektör öncüsüyüz. Sadece ciroya değil, topluma kattığımız değere de odaklanıyoruz.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/20"
                    >
                        <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-500 mb-6">
                            <HeartHandshake className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Sosyal Sorumluluk</h3>
                        <p className="text-gray-400 leading-relaxed">
                            100 üzerinde Üniversite konuşması ve GrowX Talks ile sosyal sorumluluk projelerine imza atıyor, geleceğe değer bırakıyoruz.
                        </p>
                    </motion.div>
                </div>

                {/* Values Section - Mobile */}
                <div className="md:hidden flex flex-col gap-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                                <Leaf className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Sürdürülebilirlik</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Kendi raporunu yazan ve uygulayan sektör öncüsüyüz. Topluma kattığımız değere odaklanıyoruz.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                                <HeartHandshake className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Sosyal Sorumluluk</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Üniversite konuşmaları ve GrowX Talks ile sosyal sorumluluk projelerine imza atıyoruz.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
