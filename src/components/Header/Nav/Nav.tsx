import styles from './Nav.module.scss';

export const Nav = () => {
    return (
        <>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li><a href="#main">Why Alivio</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>
            </nav>
            <div className={styles.headerActions}>
                <button className={styles.signIn}>Sign in</button>
                <button className={styles.startTrial}>Start Trial</button>
            </div>
        </>
    );
};