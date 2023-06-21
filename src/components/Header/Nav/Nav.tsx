import styles from './Nav.module.scss';
import {FC} from 'react';

export const Nav: FC<NavPropsType> = ({isOpen, disableIsOpen}) => {
    return (
        <nav className={styles.headerNav}>
            <ul className={`${styles.headerNavList} ${isOpen ? styles.open : ''}`}>
                <li><a href="#main" onClick={disableIsOpen}>Why Alivio</a></li>
                <li><a href="#solutions" onClick={disableIsOpen}>Solutions</a></li>
                <li><a href="#community" onClick={disableIsOpen}>Community</a></li>
                <li><a href="#pricing" onClick={disableIsOpen}>Pricing</a></li>
            </ul>
        </nav>
    );
};

type NavPropsType = {
    isOpen: boolean;
    disableIsOpen: () => void;
}