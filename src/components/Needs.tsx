import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, Users, Heart, Globe, ArrowDown } from 'lucide-react';

export function Needs() {
    const problems = [
        {
            title: "Adaptasyon Sorunu",
            desc: "Yeni kurulan satış ekipleri veya bayiler sisteme yeterince hızlı adapte olamıyor mu?",
            icon: <AlertCircle className="w-6 h-6" />
        },
        {
            title: "Dengesiz Büyüme",
            desc: "Satışlarınız var ama bazı bayilerde dengesiz mi? Sürdürülebilir ve artan bir grafik mi arıyorsunuz?",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            title: "Pazar Sıkışması",
            desc: "Yeni pazarlara ve müşterilere ulaşmakta zorluk mu çekiyorsunuz?",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "Memnuniyet Eksikliği",
            desc: "Satış yapılıyor ancak müşteri memnuniyeti ve sadakati istediğiniz seviyede değil mi?",
            icon: <Heart className="w-6 h-6" />
        },
        {
            title: "Liderlik İhtiyacı",
            desc: "Satış ve bayileri yöneten ekiplerinizin liderlik becerilerini geliştirmesi mi gerekiyor?",
            icon: <Users className="w-6 h-6" />
        }
    ];

    return (
        <section id="needs" className="relative min-h-screen py-32 bg-[#050505] overflow-hidden">

            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Blobs */}
                <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-gradient-to-br from-purple-900/20 to-orange-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-purple-900/20 to-orange-900/20 rounded-full blur-[100px]" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

                {/* Geometric Elements */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                    </defs>
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#grad1)" strokeWidth="1" />
                    <path d="M850 100 L900 200 L800 200 Z" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                    <path d="M100 500 L150 600 L50 600 Z" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-px w-12 bg-white/20" />
                        <span className="text-white/60 font-medium tracking-widest uppercase text-sm">Tespit & Çözüm</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight"
                    >
                        İhtiyaçlarınızın <br />
                        <span className="font-bold text-white">Farkındayız.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light"
                    >
                        Satış operasyonlarınızda aşağıdaki darboğazlardan en az birini yaşıyorsanız, doğru yerdesiniz.
                    </motion.p>
                </div>

                {/* Minimal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-10 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500 flex flex-col justify-between min-h-[320px]"
                        >

                            <div>
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-medium text-white mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300 font-light">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Card with Animated Arrow */}
                    <div className="p-10 bg-[#0a0a0a] flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Çözüm Burada</h3>
                        <p className="text-gray-500 mb-8 font-light">Sizin için özel olarak hazırlanmış stratejilerimizle tanışın.</p>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-16 h-16 text-purple-500 stroke-[3]" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
