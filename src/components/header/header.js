import React, { useState } from 'react';
import styles from './header.module.css';
import {FaSearch, FaRegBell } from 'react-icons/fa';
import ProfileImg from '../../assets/profileImg.png';


const Header = () => {
    const [toggle, setToggle]=useState(false)

    return(
        <div className={`${styles.wrapper} `}>
            <section className={"d-flex"} style={{flexGrow: 4}}>
            <div className={styles.logo}>
                <b>TransMonitor</b>
            </div>
            <form className={styles.formSearch}>
                <span className={"pr-1"}>
                <FaSearch aria-hidden="true" className={styles.searchIcon} />
                </span>
                <input type="text" placeholder="Search" aria-label="Search" className={styles.inputField} />
            </form>
            </section>
            <ul className={styles.menu}>
                <li className={styles.list}>Support</li>
                <li className={styles.list}>FAQ</li>
                <li className={styles.list}><FaRegBell className={styles.notificationIcon}/><div className={styles.notificationCount}>8</div></li>
                <li className={styles.list}>
                    <p className="mb-0">Oluwaleke Ojo</p>
                    <img src={ProfileImg} alt={'Profile'} className={styles.photo} />
                </li>
            </ul>
        </div>
    )
}
export default Header;