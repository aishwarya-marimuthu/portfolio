import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo code-font">
                    <span>&lt;</span>Aishwarya <span>/&gt;</span>
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav">
                    <ul className="nav-links">
                        {navLinks.map((link, index) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">
                                    <span className="nav-number">0{index + 1}.</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Toggle would go here */}
            </div>
        </nav>
    );
};

export default Navbar;
