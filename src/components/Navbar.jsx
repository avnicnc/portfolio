import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.5rem 0',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
    };

    const linkStyle = {
        color: 'var(--text-primary)',
        fontWeight: '500',
        marginLeft: '2rem',
        fontSize: '0.95rem',
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                    Portfolio<span className="text-gradient">.</span>
                </a>
                <div style={{ display: 'flex' }}>
                    <a href="#about" style={linkStyle}>About</a>
                    <a href="#projects" style={linkStyle}>Projects</a>
                    <a href="#contact" style={linkStyle}>Contact</a>
                </div>
            </div>
        </nav>
    );
}
