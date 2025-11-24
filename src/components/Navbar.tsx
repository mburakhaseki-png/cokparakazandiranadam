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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
