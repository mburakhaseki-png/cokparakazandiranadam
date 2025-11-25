import { motion } from 'framer-motion';
import { Users, Phone, Share2, Globe, Network } from 'lucide-react';

export function Networking() {
    const stats = [
        {
            value: "30.000+",
            label: "Profesyonel LinkedIn Bağlantısı",
            icon: <Users className="w-5 h-5" />
        },
        {
            value: "27.000+",
            label: "Doğrudan Telefon Kontağı",
            subLabel: "(Karar Vericiler)",
            icon: <Phone className="w-5 h-5" />
        },
        {
            value: "10.000+",
            label: "Aktif Sosyal Medya Takipçisi",
            icon: <Share2 className="w-5 h-5" />
        }
    ];

    return (
        <section id="networking" className="relative min-h-screen py-20 bg-[#050505] overflow-hidden flex items-center">

            {/* 1. Dynamic Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Main Image - Positioned to show the person on the left */}
                <img
                    src="/back2.png"
                    alt="Networking Background"
                    className="w-full h-full object-cover object-[15%_center] md:object-[10%_center] opacity-90"
                />

                {/* Gradient Overlay - Cinematic Fade to Black on Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-[#050505] md:via-black/70 md:to-black" />

                {/* Tech Grid Overlay for "Networking" feel */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_right,black_60%,transparent_100%)] pointer-events-none" />
            </div>

            {/* 2. Content Container */}
            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="flex flex-col items-end text-right ml-auto max-w-[900px]">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-10"
                    >
                        {/* Badge */}
                        <div className="flex items-center justify-end gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                                B2B Networking
                            </span>
                            <div className="h-px w-16 bg-gradient-to-l from-purple-500 to-transparent" />
                        </div>

                        {/* Main Title */}
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            Güvenilir <br />
                            Ticari Aracılık <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500">
                                “B2B Networking”
                            </span>
                        </h2>

                        {/* Subtitle */}
                        <h3 className="text-2xl md:text-3xl font-light text-gray-200 mb-8 leading-snug">
                            Sadece Strateji yapmıyor, <br />
                            <span className="font-bold text-white relative inline-block">
                                "Kapıları" da Açıyoruz.
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                />
                            </span>
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-gray-400 leading-relaxed font-light max-w-2xl ml-auto">
                            Sürdürülebilir Satış ve Gelir arttırmada <span className="text-purple-300 font-medium">“kalıcı başarının formülü”</span> sadece <span className="text-purple-300 font-medium">"ne bildiğiniz"</span> değil, aynı zamanda <span className="text-purple-300 font-medium">"kimi tanıdığınızdır"</span>. Biz, ilişki sermayemizi sizin <span className="text-purple-300 font-medium">“işinizin büyümesi”</span> için katalizör olarak kullanıyoruz.
                        </p>
                    </motion.div>

                    {/* Interactive "Size Ne Sağlar?" Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 w-full relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl hover:border-purple-500/30 transition-colors duration-300">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-4 border-b border-white/5 pb-4">
                                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                                    <Network className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-bold text-white text-right flex-1">Size Ne Sağlar?</h4>
                            </div>

                            <div className="space-y-4 text-right">
                                <p className="text-gray-300 leading-relaxed">
                                    Bu güçlü <span className="text-purple-300 font-semibold">“Network BAĞımız”</span> sayesinde; ulaşmakta zorlandığınız kurumlara, tanışmak istediğiniz kilit iş insanları ve üst yöneticilere ulaştırıyor, girmek istediğiniz yeni pazarlara sizin için köprü oluyor.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Doğru müzakere masasında tarafları buluşturarak iş geliştirme ve satış sürecini kolaylaştırıp ve de hızlandırıyoruz.
                                </p>
                                <div className="pt-4 flex items-center justify-end gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                    35 resmi stratejik iş ortağımız ile <span className="text-purple-300 font-medium">“güvenilir ticari aracılık“</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Row - Modern Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 w-full">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="p-5 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-purple-500/40 hover:bg-purple-900/10 transition-all duration-300 group flex flex-col items-end"
                            >
                                <div className="mb-3 p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider text-right group-hover:text-gray-300 transition-colors">
                                    {stat.label}
                                    {stat.subLabel && <span className="block text-[10px] opacity-70 mt-0.5">{stat.subLabel}</span>}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Quote */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative py-6 pl-8 border-r-4 border-purple-500 bg-gradient-to-l from-purple-900/10 to-transparent w-full md:w-auto rounded-r-xl"
                    >
                        <p className="text-xl md:text-2xl font-light text-white italic leading-relaxed text-right pr-4">
                            "Satış & Liderlik Bizim Tek İşimiz, <br />
                            <span className="text-purple-400 font-bold not-italic">Networkümüz En Büyük Gücümüz."</span>
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
