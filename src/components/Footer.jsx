export default function Footer() {
    return (
        <footer style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <p style={{ marginBottom: '1rem' }}>Designed & Built with React</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <a href="#" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
                <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
                <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
    );
}
