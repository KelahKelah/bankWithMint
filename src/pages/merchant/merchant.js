import React from 'react';
// import Layout from '../../components/layout/layout';
import styles from './merchant.module.css';
import ChartImg from '../../assets/miniChart.svg';
import MyChart from '../../components/charts/dailyChart';
import MainChart from '../../components/charts/mainChart';

const Merchant = () => {

    return(
            <div className={`container ${styles.mainContainer}`}>
                <div className={`row ${styles.rowOne}`}>
                    <div className={`col-md-3 ${styles.item}`}>
                        <div className ={`${styles.daily}`}>
                            <p>Daily Transaction Volume</p>
                            <p>2,342</p>
                        </div>
                        <img src={ChartImg} alt="Dialy chart" />
                    </div>
                    <div className={`col-md-3 ${styles.item}`}>
                        <div className ={`${styles.daily}`}>
                            <p>Daily Transaction Volume</p>
                            <p>4,000,000</p>
                        </div>
                        <img src={ChartImg} alt="Dialy chart" />
                    </div>
                    <div className={`col-md-3 ${styles.item}`}>
                        <div className ={`${styles.daily}`}>
                            <p>Daily Transaction Volume</p>
                            <p>452,000</p>
                        </div>
                        <img src={ChartImg} alt="Dialy chart" />
                    </div>
                    <div className={`col-md-3 ${styles.item}`}>
                        <div className ={`${styles.daily}`}>
                            <p>Daily Transaction Volume</p>
                            <p>4,000,000</p>
                        </div>
                        <img src={ChartImg} alt="Dialy chart" />
                    </div>
                </div>
                <div className={`row ${styles.rowTwo}`}>
                    <div className={`col-md-9 ${styles.itemTwo}`}><MainChart /></div>
                    <div className={`col-md-3 ${styles.itemTwo}`}>
                        <div className={styles.subCol} >
                            <h3>Orders</h3>
                            <div className={styles.progressBarContainer}> 
                                <div className={styles.progressBar}></div>
                            </div>
                            <p>Pending Orders:<span className={styles.yellow}>20</span></p>
                            <p>Reconciled Orders: <span className={styles.green}>20</span></p>
                            <p>Total Orders: <span className={styles.blue}>20</span></p>
                        </div>
                        <div className={styles.subCol}>
                            <h3>Orders</h3>
                            <div className={styles.progressBarContainer}> 
                                <div className={styles.progressBar}></div>
                            </div>
                            <p>Pending Orders: <span className={styles.yellow}>20</span></p>
                            <p>Reconciled Orders: <span className={styles.green}>20</span></p>
                            <p>Total Orders: <span className={styles.blue}>20</span></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Merchant;