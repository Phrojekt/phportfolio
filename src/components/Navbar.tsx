import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-end p-8 items-center">
            <div className="flex gap-6 font-montserrat">
                <Link href="#quem-sou">
                        Quem sou?
                </Link>
                <Link href="#services">
                        Serviços
                </Link>
                <Link href="#projects">
                        Projetos
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;