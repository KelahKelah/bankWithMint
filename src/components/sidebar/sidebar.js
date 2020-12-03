import React from 'react';
import styles from './sidebar.module.css';
import { BiWallet, BiWalletAlt, BiTachometer, BiRadioCircleMarked, BiSpreadsheet, BiUser} from 'react-icons/bi';
// import {} from 'react-icons/fa';


const Sidebar = () => {

    return(
        <div className={styles.wrapper}>
            <button className={styles.invoice}>Generate Invoice</button>
            <div className={styles.content} >
                <ul className={styles.ulHeader}>
                    <li><BiTachometer className={styles.icons} />All Payments</li>
                </ul>
                <h6 className={styles.sideBarHeader}>Payments</h6>
                <ul className={styles.ulHeader}>
                    <li className={styles.active}><BiWallet className={styles.icons} />Overview</li>
                    <li><BiWalletAlt className={styles.icons} />Reconciled Payments</li>
                    <li><BiWalletAlt className={styles.icons} />Un-reconciled Payements</li>
                    <li><BiRadioCircleMarked className={styles.icons} />Manual Settlement</li>
                </ul>
                <h6 className={styles.sideBarHeader}>Orders</h6>
                <ul className={styles.ulHeader}>
                    <li><BiSpreadsheet className={styles.icons} />All orders</li>
                    <li><BiSpreadsheet className={styles.icons} />Pending orders</li>
                    <li><BiSpreadsheet className={styles.icons} />Reconciled orders</li>
                    <li><BiUser className={styles.icons} />Merchant</li>
                </ul>
            </div>
        </div>

    )
}
export default Sidebar;