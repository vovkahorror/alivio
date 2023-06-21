import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.svg';
import {Nav} from './Nav/Nav';
import {useEffect, useState} from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const disableIsOpen = () => isOpen && setIsOpen(false);

    useEffect(() => {
        isOpen && (document.body.style.overflow = 'hidden');
        !isOpen && (document.body.style.overflow = 'unset');
    }, [isOpen]);

    return (
        <header className={`${styles.header} ${isOpen ? styles.open : ''}`}>
            <div className={styles.headerContainer}>
                <img className={styles.logo} src={logo} alt="logo"/>

                <Nav isOpen={isOpen} disableIsOpen={disableIsOpen}/>

                <div className={`${styles.headerActions} ${isOpen ? styles.open : ''}`}>
                    <button className={styles.signIn} onClick={disableIsOpen}>Sign in</button>
                    <button className={styles.startTrial} onClick={disableIsOpen}>Start Trial</button>
                </div>

                <div className={styles.burgerButtonWrapper} onClick={toggleMenu}>
                    <div className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}></div>
                </div>
            </div>
        </header>
    );
};