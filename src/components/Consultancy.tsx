import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Briefcase, ArrowDown, Building2 } from 'lucide-react';

export function Consultancy() {
    const features = [
        {
            title: "Organizasyonel Yapılanma",
            icon: <Users className="w-6 h-6" />,
            items: [
                {
                    subtitle: "Ekip Kurulumu & Re-Organizasyon",
                    desc: "Satış kadrolarının sıfırdan kurulması veya mevcut yapının verimlilik odaklı yeniden düzenlenmesi."
                },
                {
                    subtitle: "Kanal & Bayi Yönetimi",
                    desc: "Saha, mağaza ve bayi ağlarının günün şartlarına uygun şekilde yeniden yapılandırılması."
                }
            ]
        },
        {
            title: "Finansal Motivasyon",
            icon: <TrendingUp className="w-6 h-6" />,
            items: [
                {
                    subtitle: "Prim & Bonus Kurgusu",
                    desc: <>Adil, şeffaf ve satışı tetikleyen <span className="text-purple-300">prim & kazanç sistemlerinin</span> oluşturulması.</>
                },
                {
                    subtitle: "Incentive (Teşvik) Tasarımı",
                    desc: <>Ekibi yüksek <span className="text-purple-300">hedefe kilitleyen</span> özel ödül ve yarışma kurgularının tasarlanması.</>
                }
            ]
        },
        {
            title: "İş Çıktıları Yönetimi",
            icon: <Target className="w-6 h-6" />,
            items: [
                {
                    subtitle: "KPI & Hedef Belirleme",
                    desc: "Ölçülebilir, gerçekçi hedef ve performans göstergesi (KPI) sistemlerinin netleştirilmesi."
                },
                {
                    subtitle: "Veri Standartları",
                    desc: "Yönetilebilir ve izlenebilir raporlama sistemlerinin kuruma entegre edilmesi."
                }
            ]
        },
        {
            title: "Yönetimsel Rehberlik",
            icon: <Briefcase className="w-6 h-6" />,
            items: [
                {
                    subtitle: "Bağımsız Yönetim Danışmanlığı",
                    desc: <>Aylık performans sunumlarına <span className="text-purple-300">“Satış Bağımsız Yönetim Kurulu Üyesi”</span> vizyonuyla katılım.</>
                },
                {
                    subtitle: "Stratejik Yönlendirme",
                    desc: "Dış göz olarak stratejik kararlarda rehberlik ve yönlendirme sağlanması."
                }
            ]
        }
    ];

    return (
        <section id="consultancy" className="relative py-24 bg-[#080808] overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
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
                            <span className="text-purple-400 font-medium tracking-widest uppercase text-sm">Danışmanlık</span>
                            <div className="h-px w-12 bg-purple-500" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Sistem Kurguluyor, <br />
                            <span className="text-purple-500">Süreci Yönetiyoruz.</span>
                        </h2>

                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                            Satış operasyonunuzu şansa bırakmıyoruz. Ekip kurulumundan prim sistemine kadar, <span className="text-purple-300">satışın matematiğini ve psikolojisini</span> sizin için, <span className="text-purple-300 font-bold">SİZİNLE BERABER</span> kurguluyoruz.
                        </p>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/[0.07]"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                            </div>

                            <div className="space-y-8">
                                {feature.items.map((item, idx) => (
                                    <div key={idx} className="relative pl-6 border-l border-white/10">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500" />
                                        <h4 className="text-lg font-bold text-white mb-2">{item.subtitle}</h4>
                                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Consultant Staff Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Danışman Kadromuz</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Alanında uzman 10 farklı danışman kadromuz ile gerekli durumlarda çözümler sunuyoruz.
                    </p>
                </motion.div>

                {/* GROWX Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-[3rem] bg-gradient-to-br from-[#0f0f0f] to-[#050505] border border-white/10 p-12 md:p-20 text-center overflow-hidden mt-20"
                >
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />

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
                            <span className="text-sm font-bold text-white uppercase tracking-widest group-hover:text-purple-400 transition-colors">
                                Grup Şirketimiz GROWX'i Tanıyın
                            </span>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30"
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
