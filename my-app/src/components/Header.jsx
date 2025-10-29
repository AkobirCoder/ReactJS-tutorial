import {Link} from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../images/image.png';

function Header() {
    return (
        <div className={styles.headerSection}>
            <Link href="./home" className={styles.headerSectionLogo}>
                <img src={logo} alt="" />
            </Link>
            <nav className={styles.headerSectionNavbar}>
                <ul className={styles.headerSectionNavbarMenu}>
                    <li className={styles.navbarMenuItem}>
                        <a href="./home">
                            home
                        </a>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <a href="./home">
                            about us
                        </a>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <a href="./home">
                            blog
                        </a>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <a href="./home">
                            products
                        </a>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <a href="./home">
                            contact us
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.headerSectionSearch}>
                <input type="text" name="" id="" />
            </div>
        </div>
    )
}

export default Header;