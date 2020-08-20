import React from 'react';
import styles from './header.module.css';
import {FaSearch, FaRegBell } from 'react-icons/fa';


const Header = () => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <b>TransMonitor</b>
            </div>
            {/* Search form  */}
            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <FaSearch aria-hidden="true" style={{position: 'absolute', left: '20.56%', right: '78.61%', top: '43.33%', bottom: '36.67%', fontFamily: 'Segoe UI',fontSize: '17px', lineHeight: '16px', color: '#979797' }} />
                <input type="text" placeholder="Search"
                    aria-label="Search" />
            </form>
            {/* <div className={styles.menu}>
                <p>Support</p>
                <p>FAQ</p>
                <FaRegBell />
                <p>Oluwaleke Ojo</p>
            </div> */}
        </div>
    )
}
export default Header;