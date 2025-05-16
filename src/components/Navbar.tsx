'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex justify-end p-4 sm:p-8 items-center relative z-30">
            {/* Desktop Nav */}
            <div className="hidden sm:flex gap-6 font-montserrat">
                <Link href="#quem-sou">Quem sou?</Link>
                <Link href="#services">Serviços</Link>
                <Link href="#projects">Projetos</Link>
            </div>

            {/* Mobile Hamburger */}
            <button
                className="sm:hidden flex flex-col justify-center hover:cursor-pointer items-center w-10 h-10"
                aria-label="Abrir menu"
                onClick={() => setOpen(true)}
            >
                <span className="block w-7 h-1 bg-white rounded mb-1"></span>
                <span className="block w-7 h-1 bg-white rounded mb-1"></span>
                <span className="block w-7 h-1 bg-white rounded"></span>
            </button>

            {/* Overlay Menu */}
            {open && (
                <div className="fixed inset-0 bg-black/98 flex flex-col  items-center justify-center gap-8 font-montserrat text-2xl z-50 transition-all">
                    <button
                        className="absolute hover:cursor-pointer top-6 right-6 text-white text-4xl"
                        aria-label="Fechar menu"
                        onClick={() => setOpen(false)}
                    >
                        &times;
                    </button>
                    <Link href="#quem-sou" onClick={() => setOpen(false)}>
                        Quem sou?
                    </Link>
                    <Link href="#services" onClick={() => setOpen(false)}>
                        Serviços
                    </Link>
                    <Link href="#projects" onClick={() => setOpen(false)}>
                        Projetos
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;