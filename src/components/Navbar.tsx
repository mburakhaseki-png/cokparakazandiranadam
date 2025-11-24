import { motion } from 'framer-motion';
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
            <div className="text-2xl font-bold tracking-tighter text-white">
                MT<span className="text-purple-500">.</span>
            </div>

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
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden shadow-2xl"
                >
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
                </motion.div>
            )}
        </nav>
    );
}
