import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Phone, Users, Globe } from 'lucide-react';

export function Networking() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const stats = [
        {
            value: "30.000+",
            label: "Profesyonel LinkedIn Bağlantısı",
            icon: <Linkedin className="w-6 h-6" />
        },
        {
            value: "27.000+",
            label: "Doğrudan Telefon Kontağı (Karar Vericiler)",
            icon: <Phone className="w-6 h-6" />
        },
        {
            value: "10.000+",
            label: "Aktif Sosyal Medya Takipçisi",
            icon: <Users className="w-6 h-6" />
        }
    ];

    return (
        <section id="networking" ref={containerRef} className="relative min-h-screen py-32 bg-[#050505] overflow-hidden flex items-center">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/back2.png')] bg-cover bg-center bg-no-repeat" />
                {/* Gradient Overlay: Transparent on left (showing the person), Dark on right (for text) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/80 to-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Side - Spacer to keep text on the right */}
                    <div className="hidden lg:block" />

                    {/* Right Side - Content */}
                    <div className="flex flex-col justify-center">

                        <motion.div
                            style={{ y }}
                            className="mb-12"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-6"
                            >
                                <span className="text-purple-400 font-medium tracking-widest uppercase text-sm">Networking</span>
                                <div className="h-px w-12 bg-purple-500" />
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                                Sadece Strateji Değil, <br />
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">"Kapıları" da Açıyoruz.</span>
                            </h2>

                            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
                                Satışta başarının formülü sadece "ne bildiğiniz" değil, aynı zamanda <span className="text-white font-medium">"kimi tanıdığınızdır"</span>. Biz, ilişki sermayemizi sizin büyümeniz için kullanıyoruz.
                            </p>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-12">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-purple-400" />
                                    Size Ne Sağlar?
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Bu güçlü network ağı sayesinde; ulaşmakta zorlandığınız kurumlara, tanışmak istediğiniz kilit kişilere ve girmek istediğiniz yeni pazarlara sizin için köprü oluyor, süreci hızlandırıyoruz.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-6 rounded-2xl bg-[#0a0a0a]/80 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                                >
                                    <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Slogan */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative py-8"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-transparent" />
                            <p className="pl-6 text-2xl md:text-3xl font-light text-white italic">
                                "Satış Bizim Tek İşimiz, <br />
                                <span className="font-bold not-italic">Network En Büyük Gücümüz."</span>
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
