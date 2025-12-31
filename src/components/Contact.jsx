export default function Contact() {
    return (
        <section id="contact" style={{ textAlign: 'center', padding: '100px 20px' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                    Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                <a href="mailto:user@example.com" style={{ textDecoration: 'none' }}>
                    <button style={{
                        padding: '1.25rem 3rem',
                        fontSize: '1.1rem',
                        background: 'transparent',
                        border: '2px solid var(--accent-primary)',
                        color: 'var(--accent-primary)',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Say Hello
                    </button>
                </a>
            </div>
        </section>
    );
}
