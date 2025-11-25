import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
    Facebook,
    Youtube,
    Twitter,
    MessageCircle
} from 'lucide-react';

export function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setStatus('success');
                    form.current?.reset();
                }, (error) => {
                    console.log(error.text);
                    setStatus('error');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    return (
        <section id="contact" className="relative min-h-screen py-16 md:py-20 bg-[#050505] overflow-hidden flex items-center">

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-tr from-purple-900/20 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-bl from-blue-900/20 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
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
                        <div className="mb-10 md:mb-12 text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 md:mb-6">
                                Çözüm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">Neredeyse Oradayız.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 font-light">
                                Projeleriniz ve iş birlikleri için bize ulaşın.
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-8">

                            {/* Web Site */}
                            <a href="https://www.cokparakazandiranadam.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group p-4 md:p-0 rounded-2xl bg-white/5 md:bg-transparent border border-white/10 md:border-none hover:bg-white/10 transition-all">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10 shrink-0">
                                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-0.5 md:mb-1">Web Sitesi</p>
                                    <p className="text-base md:text-lg text-white font-medium group-hover:text-purple-400 transition-colors truncate">www.cokparakazandiranadam.com</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:murat.tavsanci@growx.com.tr" className="flex items-center gap-4 md:gap-6 group p-4 md:p-0 rounded-2xl bg-white/5 md:bg-transparent border border-white/10 md:border-none hover:bg-white/10 transition-all">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10 shrink-0">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-0.5 md:mb-1">E-Posta</p>
                                    <p className="text-base md:text-lg text-white font-medium group-hover:text-purple-400 transition-colors truncate">murat.tavsanci@growx.com.tr</p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a href="tel:+905322104607" className="flex items-center gap-4 md:gap-6 group p-4 md:p-0 rounded-2xl bg-white/5 md:bg-transparent border border-white/10 md:border-none hover:bg-white/10 transition-all">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10 shrink-0">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-0.5 md:mb-1">Telefon</p>
                                    <p className="text-base md:text-lg text-white font-medium group-hover:text-purple-400 transition-colors">+90 532 210 46 07</p>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a href="https://wa.me/905322104607" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group p-4 md:p-0 rounded-2xl bg-white/5 md:bg-transparent border border-white/10 md:border-none hover:bg-white/10 transition-all">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10 shrink-0">
                                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-0.5 md:mb-1">WhatsApp Hattı</p>
                                    <p className="text-base md:text-lg text-white font-medium group-hover:text-[#25D366] transition-colors">+90 532 210 46 07</p>
                                </div>
                            </a>

                            {/* Address */}
                            <div className="flex items-start gap-4 md:gap-6 group p-4 md:p-0 rounded-2xl bg-white/5 md:bg-transparent border border-white/10 md:border-none">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/10 shrink-0">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-0.5 md:mb-1">Adres</p>
                                    <p className="text-sm md:text-lg text-white font-medium leading-relaxed group-hover:text-purple-400 transition-colors">
                                        Atatürk Mahallesi Ertuğrul Gazi Sk.<br />
                                        Metropol İstanbul Sitesi C1 Blok Kat: 25 Ofis: 376<br />
                                        Ataşehir / İSTANBUL
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex gap-3 md:gap-4 pt-4 justify-center md:justify-start">
                                <a href="https://www.linkedin.com/in/murat-tav%C5%9Fanc%C4%B1-5787b262/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="https://www.instagram.com/murattavsanci" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300">
                                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="https://www.facebook.com/murat.tavsanci.7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300">
                                    <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="https://www.youtube.com/@cokparakazandranadam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300">
                                    <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="https://x.com/murattavsanci" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-black hover:border-white/20 transition-all duration-300">
                                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
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
                        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-12">
                            <h3 className="text-2xl font-bold text-white mb-6 md:mb-8 text-center md:text-left">Bize Yazın</h3>

                            <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium ml-1">Ad Soyad</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                                            placeholder="Adınız Soyadınız"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium ml-1">E-Posta</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                                            placeholder="ornek@sirket.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Konu</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                                        placeholder="Mesajınızın konusu"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">İçerik</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all resize-none"
                                        placeholder="Mesajınız..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Gönderiliyor...' : 'Gönder'}
                                    {!isLoading && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </button>

                                {status === 'success' && (
                                    <p className="text-green-400 text-center text-sm mt-2">Mesajınız başarıyla gönderildi!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-center text-sm mt-2">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                                )}
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
                className="fixed bottom-6 right-6 md:bottom-10 md:right-12 w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-purple-500 hover:text-white transition-all duration-300 z-50 group"
            >
                <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
        </section>
    );
}
