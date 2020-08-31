import React from 'react';
// import Layout from '../../components/layout/layout';
import styles from './merchant.module.css';
import MyChart from '../../components/charts/dailyChart';
import MainChart from '../../components/charts/mainChart';

const Merchant = () => {

    return(
        <div>
            <div className={"container"}>
                <div className={`row ${styles.rowOne}`}>
                    <div className={`col-md-3 ${styles.item}`}>
                        <div className ={`${styles.daily}`}>
                            <p>Daily Transaction Volume</p>
                            <p>#300000</p>
                        </div>
                        <MyChart />
                    </div>
                    <div className={`col-md-3 ${styles.item}`}>
                        <div className ={`${styles.daily}`}>
                            <p>Daily Transaction Volume</p>
                            <p>#300000</p>
                        </div>
                        <MyChart />
                    </div>
                    <div className={`col-md-3 ${styles.item}`}>
                        <div className ={`${styles.daily}`}>
                            <p>Daily Transaction Volume</p>
                            <p>#300000</p>
                        </div>
                        <MyChart />
                    </div>
                    <div className={`col-md-3 ${styles.item}`}>
                        <div className ={`${styles.daily}`}>
                            <p>Daily Transaction Volume</p>
                            <p>#300000</p>
                        </div>
                        <MyChart />
                    </div>
                </div>
                <div className={`row ${styles.rowTwo}`}>
                    <div className={`col-md-9 ${styles.itemTwo}`}><MainChart /></div>
                    <div className={`col-md-3 ${styles.itemTwo}`}>
                        <div>
                            <h1>Orders</h1>
                            <p>Pending Orders: 20</p>
                            <p>Reconciled Orders: 20</p>
                            <p>Total Orders: 20</p>
                        </div>
                        <div>
                        <h1>Orders</h1>
                            <p>Pending Orders: 20</p>
                            <p>Reconciled Orders: 20</p>
                            <p>Total Orders: 20</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Merchant;