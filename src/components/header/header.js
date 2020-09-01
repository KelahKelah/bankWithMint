import React from 'react';
import styles from './header.module.css';
import {FaSearch, FaRegBell } from 'react-icons/fa';
import ProfileImg from '../../assets/profileImg.png';


const Header = () => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <b>TransMonitor</b>
            </div>
            <form className={styles.formSearch}>
                <FaSearch aria-hidden="true" className={styles.searchIcon} />
                <input type="text" placeholder="Search" aria-label="Search" className={styles.inputField} />
            </form>
            <ul className={styles.menu}>
                <li>Support</li>
                <li>FAQ</li>
                <li><FaRegBell /></li>
                {/* <li>
                    <p>Oluwaleke Ojo</p>
                    <img src={ProfileImg} alt={'Profile'} className={styles.photo} />
                </li> */}
            </ul>
        </div>
    )
}
export default Header;