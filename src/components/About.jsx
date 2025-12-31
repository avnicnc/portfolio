import avatar from '../assets/avatar.png';

export default function About() {
    const skills = ['HTML & CSS', 'WordPress', 'PHP', 'WooCommerce', 'JavaScript (ES6+)', 'React (Basics)', 'API Development', 'Elementor', 'Custom Plugins', 'MySQL', 'Git'];

    return (
        <section id="about" style={{ background: '#162033' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                    {/* Image Placeholder */}
                    {/* Image */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            width: '100%',
                            paddingBottom: '100%',
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                        }}>
                            <img
                                src={avatar}
                                alt="Developer Avatar"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>About Me</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Hello! My name is [Your Name] and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Fast-forward to today, and I've had the privilege of building accessible, inclusive products and digital experiences.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Technologies I work with:</h3>
                        <ul style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                            gap: '10px',
                            listStyle: 'none',
                            padding: 0
                        }}>
                            {skills.map(skill => (
                                <li key={skill} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <span style={{ color: 'var(--accent-primary)', marginRight: '10px' }}>▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
