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
        { name: 'About', path: '/about', id: 'about' },
        { name: 'Skills', path: '/skills', id: 'skills' },
        { name: 'Experience', path: '/experience', id: 'experience' },
        { name: 'Projects', path: '/projects', id: 'projects' },
        // { name: 'Contact', path: '/contact', id: 'contact' },
    ];

    const handleNavClick = (e, path, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', path);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
            <div className="container navbar-content">
                <a href="/" className="logo code-font" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '/');
                }}>
                    <span>&lt;</span>Aishwarya <span>/&gt;</span>
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav">
                    <ul className="nav-links">
                        {navLinks.map((link, index) => (
                            <li key={link.name}>
                                <a
                                    href={link.path}
                                    className="nav-link"
                                    onClick={(e) => handleNavClick(e, link.path, link.id)}
                                >
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
