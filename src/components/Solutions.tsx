import { motion } from 'framer-motion';
import {
    Stethoscope,
    Search,
    Puzzle,
    UserCheck,
    Briefcase,
    GraduationCap,
    Mic,
    Crown,
    Smile,
    Trophy,
    ArrowRight
} from 'lucide-react';

export function Solutions() {
    const methodology = [
        {
            title: "Saha Ziyareti & Analiz",
            desc: "Önce ekiple sahaya & üretim hattına & işin mutfağına iniyor, gerçek ihtiyaçları yerinde tespit ediyoruz.",
            icon: <Search className="w-5 h-5" />
        },
        {
            title: "Teşhis & Reçete",
            desc: <>
                Bir <span className="text-purple-300">"Satış & Yönetim & İletişim Doktoru"</span> gibi kurumunuza özel teşhisi koyup reçeteyi beraberce yazıyoruz.
            </>,
            icon: <Stethoscope className="w-5 h-5" />
        },
        {
            title: "Entegrasyon",
            desc: <>
                Kurumunuza ve ihtiyacınıza özel farklı, yenilikçi ve inovatif projeler üreterek <span className="text-purple-300">#içinizdenbiri</span> gibi çalışıyoruz.
            </>,
            icon: <Puzzle className="w-5 h-5" />
        }
    ];

    const services = [
        {
            title: "Mentorluk",
            desc: "Satış yöneticileri, girişimciler, üst yöneticiler ve profesyonel her birimden liderlere kişiye özel gelişim seansları.",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Danışmanlık",
            desc: "Kuruma özgü satış strateji, sistemleri ve süreçlerinin sıfırdan tasarımı ya da yeniden re-organizasyonu.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Eğitim",
            desc: "Saha ekipleri & yöneticiler & merkez kadrolar için özel tasarlanmış sınıf içi /online eğitimler & uzun soluklu Mini MBA programları.",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            title: "Konuşmacılık",
            desc: <>
                Zirve, kongre ve kamplarda, bayi toplantılarında motivasyon ve vizyon odaklı sahne konuşmaları <span className="text-purple-300">#keynotespeaker</span>
            </>,
            icon: <Mic className="w-6 h-6" />
        }
    ];

    const programs = [
        {
            title: "İç'ten Lider",
            desc: <>
                Kitleleri peşinden sürükleyen ve paydaşlarına sürekli kazandıran <span className="text-purple-300">"kişiye özgü liderlik"</span> yetkinlikleri.
            </>,
            icon: <Crown className="w-5 h-5" />
        },
        {
            title: "Mutlu Müşteri",
            desc: <>
                Müşterisini mutlu ederek <span className="text-purple-300">"sürdürülebilir kazanç"</span> sağlayan <span className="text-purple-300">"yeni nesil satıcı"</span> profili yaratma.
            </>,
            icon: <Smile className="w-5 h-5" />
        },
        {
            title: "Sahada Kazan",
            desc: <>
                Teoride değil, iş başında gelişim sağlayan <span className="text-purple-300">"beraber saha ziyareti ve koçluğu"</span> programı.
            </>,
            icon: <Trophy className="w-5 h-5" />
        },
        {
            title: "Sihirli İletişim & Kazanan Takım",
            desc: <>
                Birimler arası çatışmaları azaltan, kazan&kazan felsefesi ile <span className="text-purple-300">"Duygusal Zeka (EQ) kullanma"</span> yetkinlikleri.
            </>,
            icon: <Puzzle className="w-5 h-5" />
        },
        {
            title: "Liderlik & Satış Okulu",
            desc: <>
                Uzun soluklu, farklı disiplinlerden eğitim serisi, sınav, vaka, kep töreni ile <span className="text-purple-300">"Mini MBA"</span> programları.
            </>,
            icon: <GraduationCap className="w-5 h-5" />
        },
        {
            title: "Satış Arenası",
            desc: <>
                Hem profesyonel konuşmacılar, hem de başarılı ekipleriniz panelde <span className="text-purple-300">"Birbirinden Öğreniyor"</span> sohbetleri.
            </>,
            icon: <Mic className="w-5 h-5" />
        }
    ];

    return (
        <section id="solutions" className="relative min-h-screen py-20 bg-[#050505] overflow-hidden">

            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Blobs */}
                <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-orange-900/20 to-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-purple-900/20 to-orange-900/20 rounded-full blur-[100px]" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

                {/* Geometric Elements */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F97316" />
                            <stop offset="100%" stopColor="#A855F7" />
                        </linearGradient>
                    </defs>
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#grad2)" strokeWidth="1" />
                    <path d="M100 100 L200 150 L100 200 Z" fill="none" stroke="url(#grad2)" strokeWidth="2" />
                    <path d="M900 400 L950 500 L850 500 Z" fill="none" stroke="url(#grad2)" strokeWidth="2" />
                    <circle cx="50%" cy="50%" r="300" stroke="url(#grad2)" strokeWidth="0.5" fill="none" strokeDasharray="10 10" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-px w-8 bg-purple-500" />
                        <span className="text-purple-400 font-medium tracking-widest uppercase text-xs">Çözümlerimiz</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
                    >
                        Size Nasıl <br />
                        <span className="font-bold text-white">Yardımcı Oluyoruz?</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4 text-lg text-gray-400 max-w-3xl leading-relaxed font-light"
                    >
                        <p>
                            1- Ezbere hizmetler değil, <span className="text-purple-300">"Satış & Yönetim & İletişim Doktoru"</span> titizliğiyle teşhis koyup, ihtiyaçlarınıza özel terzi usulü çözümler üretiyoruz.
                        </p>
                        <p>
                            2- <span className="text-purple-300">"Mutlu Müşteri"</span> ve <span className="text-purple-300">"İçten Lider"</span> ve <span className="text-purple-300">"Sihirli İletişim"</span> gibi kendi yerli geliştirdiğimiz modellerimizi uyguluyoruz.
                        </p>
                        <p>
                            3- Sadece yıllarca uygulamaya devam ettiğimiz, <span className="text-purple-300">"sonuca dönmüş ve pratik deneyimleri"</span> işinize uyarlayarak sunuyoruz.
                        </p>
                    </motion.div>
                </div>

                {/* 1. Methodology (Process) */}
                <div className="mb-24">
                    <h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-gray-300">01</span>
                        Çalışma Metodolojimiz
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {methodology.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-colors duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                    {step.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Service Models */}
                <div className="mb-24">
                    <h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-gray-300">02</span>
                        Hizmet Modellerimiz
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300 flex items-start gap-4"
                            >
                                <div className="p-3 rounded-lg bg-white/5 text-gray-300 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">{service.title}</h4>
                                    <p className="text-sm text-gray-500 font-light">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. Featured Programs */}
                <div className="mb-24">
                    <h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-gray-300">03</span>
                        Öne Çıkan Gelişim & Eğitim Programlarımız
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {program.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{program.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">{program.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section - Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Satış Ekibinizin <span className="text-purple-400">Röntgenini Çekelim.</span>
                    </h2>

                    <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300">
                        Hemen İletişime Geçin
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
