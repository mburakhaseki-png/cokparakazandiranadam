import { motion } from 'framer-motion';
import {
    MapPin,
    Globe,
    Phone,
    Mail,
    ArrowUpRight,
    Linkedin,
    Instagram,
    Brain,
    BicepsFlexed,
    Leaf,
    HeartHandshake
} from 'lucide-react';

export function WhoWeAre() {
    const companies = [
        {
            name: "GrowX Yönetim Danışmanlığı",
            location: "İzmir",
            leader: "Dr. Savaş Tavşancı",
            focus: "Şirketin \"Beyni ve İskeleti\"",
            services: ["Kurumsallaşma", "Aile Anayasası", "Sürdürülebilir Büyüme", "Yatırım Danışmanlığı", "Dijital Kültür Dönüşümü"],
            motto: "#BirlikteHepİleriye",
            color: "blue",
            icon: <Brain className="w-8 h-8" />
        },
        {
            name: "ÇokParaKazandıranAdam",
            location: "İstanbul",
            leader: "Murat Tavşancı",
            focus: "Şirketin \"Kasları ve Sesi\"",
            services: ["Satış Danışmanlığı", "Satış Ekibi Kurulumu", "Yönetici Mentorluğu", "Sahne Konuşmacılığı", "Global Networking (82 Ülke)"],
            motto: "#İçinizdenBiri",
            color: "purple",
            icon: <BicepsFlexed className="w-8 h-8" />
        }
    ];

    const stats = [
        { label: "1. Yıl Büyüme", value: "%258" },
        { label: "2. Yıl Büyüme", value: "%348" },
        { label: "Global Erişim", value: "3 Kıta" },
        { label: "Mutlu Marka", value: "100+" }
    ];

    const references = ["Turkcell", "Evidea", "Ebebek", "Herbalife"];

    return (
        <section id="whoweare" className="relative min-h-screen py-20 bg-[#050505] overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-900/10 to-transparent rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-900/10 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50" />
                        <span className="text-white/60 font-medium tracking-widest uppercase text-sm">Biz Kimiz?</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                        İKİ MARKA, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">TEK VİZYON.</span>
                    </h2>

                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                        "İki Şirket. İki Merkez. Bütüncül Çözüm." <br />
                        <span className="text-sm mt-4 block text-gray-500">
                            Biz; yönetim ve satışın matematiğini birleştiren, İstanbul ve İzmir merkezli iki grup şirketiyiz.
                        </span>
                    </p>
                </motion.div>

                {/* 1. The Duo Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`relative p-10 rounded-3xl bg-[#0a0a0a] border transition-all duration-500 group overflow-hidden ${company.color === 'blue'
                                ? 'border-blue-900/30 hover:border-blue-500/50'
                                : 'border-purple-900/30 hover:border-purple-500/50'
                                }`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${company.color === 'blue' ? 'from-blue-500 to-transparent' : 'from-purple-500 to-transparent'
                                }`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`p-4 rounded-2xl bg-white/5 ${company.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                                        }`}>
                                        {company.icon}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-wider border border-white/10 px-3 py-1 rounded-full">
                                        <MapPin className="w-3 h-3" />
                                        {company.location}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{company.name}</h3>
                                <p className={`text-sm font-medium mb-6 ${company.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                                    }`}>
                                    Lider: {company.leader}
                                </p>

                                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <p className="text-gray-300 italic">"{company.focus}"</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {company.services.map((service, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                                            <div className={`w-1.5 h-1.5 rounded-full ${company.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                                                }`} />
                                            {service}
                                        </li>
                                    ))}
                                </ul>

                                <div className={`text-sm font-bold tracking-widest uppercase ${company.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
                                    }`}>
                                    {company.motto}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2. Success & References */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                            >
                                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-gray-500 mb-8">Referanslarımızdan Bazıları</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {references.map((ref, index) => (
                                <span key={index} className="text-2xl md:text-3xl font-bold text-white">{ref}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/20"
                    >
                        <Leaf className="w-10 h-10 text-green-500 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Sürdürülebilirlik</h3>
                        <p className="text-gray-400">Kendi raporunu yazan ve uygulayan sektör öncüsüyüz. Sadece ciroya değil, topluma kattığımız değere de odaklanıyoruz.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/20"
                    >
                        <HeartHandshake className="w-10 h-10 text-pink-500 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Sosyal Sorumluluk</h3>
                        <p className="text-gray-400">GrowX Talks ve GrowX CSR ile sosyal sorumluluk projelerine imza atıyor, geleceğe değer bırakıyoruz.</p>
                    </motion.div>
                </div>

                {/* Contact Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[3rem] bg-[#0a0a0a] border border-white/10 p-12 md:p-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -mr-20 -mt-20" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/growx.png"
                                alt="GrowX Logo"
                                className="h-12 md:h-16 mb-8 object-contain"
                            />

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                                Çözüm Neredeyse <br />
                                <span className="text-blue-500">Oradayız.</span>
                            </h2>

                            <div className="space-y-6">
                                <a href="tel:02322181969" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">0 232 218 19 69</span>
                                </a>

                                <a href="mailto:iletisim@growx.com.tr" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">iletisim@growx.com.tr</span>
                                </a>

                                <a href="https://www.growx.com.tr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">www.growx.com.tr</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-start lg:items-end">
                            <div className="flex gap-4 mb-8">
                                <a href="https://www.linkedin.com/company/growxyonetimdoktoru/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://www.instagram.com/growxyonetimdoktoru/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300">
                                    <Instagram className="w-6 h-6" />
                                </a>
                            </div>

                            <a href="https://www.growx.com.tr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                Web Sitesini Ziyaret Et <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
