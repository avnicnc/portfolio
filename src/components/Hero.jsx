import { useState, useEffect } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "I build things for the web.",
        "I create custom WordPress plugins.",
        "I design modern interfaces.",
        "I develop API solutions."
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '60px' // Offset for navbar
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Hello, world
                </h3>
                <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                    I'm <span className="text-gradient">Developer</span>.
                    <br />
                    <span style={{ minHeight: '1.1em', display: 'inline-block' }}>
                        {text}
                        <span style={{ borderRight: '4px solid var(--accent-secondary)', animation: 'blink 0.7s infinite' }}>&nbsp;</span>
                    </span>
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem auto'
                }}>
                    I'm a software engineer specializing in building exceptional digital experiences.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <a href="#projects">
                        <button>View My Work</button>
                    </a>
                    <a href="#contact">
                        <button style={{ background: 'transparent', border: '2px solid var(--accent-secondary)' }}>Contact Me</button>
                    </a>
                </div>
            </div>
            <style>{`
                @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
            `}</style>
        </section>
    );
}
