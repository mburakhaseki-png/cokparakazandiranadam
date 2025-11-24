import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
    Users,
    Coins,
    Target,
    Briefcase,
    ArrowDown,
    Building2
} from 'lucide-react';

export function Consultancy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const services = [
        {
            id: "01",
            title: "Organizasyonel Yapılanma",
            icon: <Users className="w-8 h-8" />,
            items: [
                { title: "Ekip Kurulumu & Re-Organizasyon", desc: "Satış kadrolarının sıfırdan kurulması veya mevcut yapının verimlilik odaklı yeniden düzenlenmesi." },
                { title: "Kanal Yönetimi", desc: "Mağaza ve bayi ağlarının günün şartlarına uygun şekilde yeniden yapılandırılması." }
            ]
        },
        {
            id: "02",
            title: "Finansal Motivasyon",
            icon: <Coins className="w-8 h-8" />,
            items: [
                { title: "Prim & Bonus Kurgusu", desc: "Adil, şeffaf ve satışı tetikleyen prim sistemlerinin oluşturulması." },
                { title: "Incentive (Teşvik) Tasarımı", desc: "Ekibi hedefe kilitleyen özel ödül ve yarışma kurgularının tasarlanması." }
            ]
        },
        {
            id: "03",
            title: "Performans Yönetimi",
            icon: <Target className="w-8 h-8" />,
            items: [
                { title: "KPI & Hedef Belirleme", desc: "Ölçülebilir, gerçekçi hedef ve performans göstergesi (KPI) sistemlerinin netleştirilmesi." },
                { title: "Raporlama Standartları", desc: "Yönetilebilir ve izlenebilir raporlama sistemlerinin kuruma entegre edilmesi." }
            ]
        },
        {
            id: "04",
            title: "Yönetimsel Rehberlik",
            icon: <Briefcase className="w-8 h-8" />,
            items: [
                { title: "Bağımsız Yönetim Danışmanlığı", desc: "Aylık performans sunumlarına 'Bağımsız Yönetim Kurulu Üyesi' vizyonuyla katılım." },
                { title: "Stratejik Yönlendirme", desc: "Dış göz olarak stratejik kararlarda rehberlik ve yönlendirme sağlanması." }
            ]
        }
    ];

    return (
        <section id="consultancy" ref={containerRef} className="relative min-h-screen py-20 bg-[#050505] overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-blue-900/10 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    style={{ y }}
                    className="max-w-4xl mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-px w-12 bg-blue-500" />
                        <span className="text-blue-400 font-medium tracking-widest uppercase text-sm">Danışmanlık</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
                        Sistem Kuruyor, <br />
                        <span className="font-bold text-white">Süreci Yönetiyoruz.</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
                        Satış operasyonunuzu şansa bırakmıyoruz. Ekip kurulumundan prim sistemine kadar, <span className="text-white font-medium">satışın matematiğini ve psikolojisini</span> sizin için kurguluyoruz.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="absolute top-10 right-10 text-8xl font-black text-white/5 select-none group-hover:text-blue-500/5 transition-colors duration-500">
                                {service.id}
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-8">{service.title}</h3>

                                <div className="space-y-6">
                                    {service.items.map((item, idx) => (
                                        <div key={idx} className="border-l-2 border-white/10 pl-6 group-hover:border-blue-500/30 transition-colors duration-300">
                                            <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GROWX Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] bg-gradient-to-br from-[#0f0f0f] to-[#050505] border border-white/10 p-12 md:p-20 text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-400 uppercase tracking-wider">Grup Şirketimiz</span>
                        </div>

                        <img
                            src="/growx.png"
                            alt="GrowX Logo"
                            className="h-24 md:h-32 lg:h-40 mb-8 object-contain"
                        />

                        <p className="text-xl text-gray-400 max-w-2xl mb-12 font-light">
                            Bu danışmanlık hizmetlerimiz, kurumsal yapılanma ve stratejik yönetim alanında uzmanlaşmış grup şirketimiz <strong className="text-white">GROWX</strong> güvencesiyle sunulmaktadır.
                        </p>

                        <motion.div
                            className="flex flex-col items-center gap-4 cursor-pointer group"
                            whileHover={{ y: 5 }}
                        >
                            <span className="text-sm font-bold text-white uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                                Grup Şirketimiz GROWX'i Tanıyın
                            </span>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30"
                            >
                                <ArrowDown className="w-6 h-6" />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
