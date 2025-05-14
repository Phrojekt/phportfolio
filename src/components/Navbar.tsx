import Link from 'next/link';

    const Navbar: React.FC = () => {
        return (
            <nav className="flex justify-end p-8 items-center">
                <div className="flex gap-6">
                    <Link href="#quem-sou">
                            Quem sou?
                    </Link>
                    <Link href="#portfolio"> 
                            Portfolio
                    </Link>
                    <Link href="#briefing">
                            Briefing
                    </Link>
                    <Link href="#contato">
                            Contato
                    </Link>
                    <Link href="#link">
                            Link
                    </Link>
                </div>
            </nav>
        );
    };

    export default Navbar;