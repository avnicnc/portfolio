import { useState } from 'react';

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: 'Project Alpha',
            category: 'React',
            description: 'A responsive web application built with React and Node.js. Features real-time data sync and dark mode.',
            tech: ['React', 'Node.js', 'MongoDB'],
        },
        {
            title: 'WooCommerce Shop',
            category: 'WordPress',
            description: 'Custom e-commerce theme with payment gateway integration and optimized checkout flow.',
            tech: ['WordPress', 'WooCommerce', 'PHP'],
        },
        {
            title: 'Project Gamma',
            category: 'Frontend',
            description: 'Mobile-first landing page with high conversion rates and modern animations.',
            tech: ['HTML/CSS', 'JavaScript', 'GSAP'],
        },
        {
            title: 'Custom API Plugin',
            category: 'WordPress',
            description: 'A WordPress plugin that exposes custom endpoints for a headless architecture.',
            tech: ['PHP', 'WordPress API', 'React'],
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = ['All', 'React', 'WordPress', 'Frontend'];

    return (
        <section id="projects">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Projects</h2>

                {/* Filter Buttons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                background: filter === cat ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' : 'transparent',
                                border: filter === cat ? 'none' : '1px solid var(--text-secondary)',
                                color: filter === cat ? '#fff' : 'var(--text-secondary)',
                                padding: '0.5rem 1.5rem',
                                fontSize: '0.9rem'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map((project, index) => (
                        <div key={index} style={{
                            background: 'var(--card-bg)',
                            padding: '2rem',
                            borderRadius: '16px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            opacity: 1,
                            transform: 'translateY(0)'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ color: 'var(--text-primary)', margin: 0 }}>{project.title}</h3>
                                <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                                    {project.category}
                                </span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '3rem' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>
                                {project.tech.map(t => <span key={t}>#{t}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
