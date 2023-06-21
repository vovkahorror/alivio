import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.svg';
import {Nav} from './Nav/Nav';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <img className={styles.logo} src={logo} alt="logo"/>
                <Nav/>

            </div>
        </header>
    );
};