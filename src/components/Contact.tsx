import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Globe,
    Linkedin,
    Instagram,
    ArrowUp,
    Send,
    BookOpen
} from 'lucide-react';

export function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact" className="relative min-h-screen py-20 bg-[#050505] overflow-hidden flex items-center">

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-purple-900/20 to-transparent rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-900/20 to-transparent rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <div className="mb-12">
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                                İletişime <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Geçelim.</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-light">
                                Projeleriniz ve iş birlikleri için bize ulaşın.
                            </p>
                        </div>

                        <div className="space-y-8">

                            <a href="https://www.cokparakazandiranadam.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Web Sitesi</p>
                                    <p className="text-lg text-white font-medium group-hover:text-purple-400 transition-colors">www.cokparakazandiranadam.com</p>
                                </div>
                            </a>

                            <a href="mailto:murat.tavsanci@growx.com.tr" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">E-Posta</p>
                                    <p className="text-lg text-white font-medium group-hover:text-purple-400 transition-colors">murat.tavsanci@growx.com.tr</p>
                                </div>
                            </a>

                            <a href="tel:+905322104607" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Telefon</p>
                                    <p className="text-lg text-white font-medium group-hover:text-purple-400 transition-colors">+90 532 210 46 07</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Adres</p>
                                    <p className="text-lg text-white font-medium leading-relaxed group-hover:text-purple-400 transition-colors">
                                        Atatürk Mahallesi Ertuğrul Gazi Sk.<br />
                                        Metropol İstanbul Sitesi C1 Blok Kat: 25 Ofis: 376<br />
                                        Ataşehir / İSTANBUL
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a href="https://www.linkedin.com/in/murat-tav%C5%9Fanc%C4%B1-5787b262/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/murattavsanci" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://murattavsanci.blogspot.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300" title="Blog">
                                    <BookOpen className="w-5 h-5" />
                                </a>
                            </div>

                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl" />
                        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-white mb-8">Bize Yazın</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium ml-1">Ad Soyad</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                                            placeholder="Adınız Soyadınız"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium ml-1">E-Posta</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                                            placeholder="ornek@sirket.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Konu</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                                        placeholder="Mesajınızın konusu"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">İçerik</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all resize-none"
                                        placeholder="Mesajınız..."
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    Gönder
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Scroll to Top Button - Fixed to viewport */}
            <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onClick={scrollToTop}
                className="fixed bottom-10 right-6 md:right-12 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-purple-500 hover:text-white transition-all duration-300 z-50 group"
            >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
        </section>
    );
}
