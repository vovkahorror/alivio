import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <h3 className={styles.footerTitle}>Alivio</h3>
                <nav className={styles.footerNav}>
                    <ul className={styles.footerNavList}>
                        <li><a href="#main">Why Alivio</a></li>
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#community">Community</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};