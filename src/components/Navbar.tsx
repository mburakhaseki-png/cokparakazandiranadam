import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Ana Sayfa', href: '#' },
        { name: 'Hakkımda', href: '#about' },
        { name: 'İhtiyaçlar', href: '#needs' },
        { name: 'Çözümler', href: '#solutions' },
        { name: 'Network', href: '#networking' },
        { name: 'Danışmanlık', href: '#consultancy' },
        { name: 'Biz Kimiz', href: '#whoweare' },
        { name: 'İletişim', href: '#contact' },
    ];

    return (
        <nav className="relative w-full z-50 flex items-center justify-between px-6 py-4 bg-[#050505] border-b border-white/10">
            <a
                href="/"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.reload();
                }}
                className="text-2xl font-bold tracking-tighter text-white cursor-pointer"
            >
                MT<span className="text-purple-500">.</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-gradient-to-b from-black via-purple-950 to-black md:hidden flex flex-col items-center justify-center"
                    >
                        <div className="absolute top-6 right-6">
                            <button
                                className="text-white/50 hover:text-white transition-colors p-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col items-center space-y-8 p-6">
                            {links.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                                    className="text-3xl font-bold text-white/80 hover:text-white hover:scale-110 transition-all tracking-tight"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="absolute bottom-12 text-white/20 text-sm tracking-widest uppercase">
                            ÇokParaKazandıranAdam
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
