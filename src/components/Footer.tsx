import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 py-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Copyright */}
                    <div className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {currentYear} ÇokParaKazandıranAdam. Tüm hakları saklıdır.
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/kvkk"
                            className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                        >
                            KVKK Aydınlatma Metni
                        </Link>
                        <Link
                            to="/cookie-policy"
                            className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                        >
                            Çerez (Cookie) Politikası
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}
