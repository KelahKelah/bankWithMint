import React from 'react';
// import Layout from '../../components/layout/layout';
import styles from './merchant.module.css';
import ChartImg from '../../assets/miniChart.svg';
import MyChart from '../../components/charts/dailyChart';
import MainChart from '../../components/charts/mainChart';
import {BiChevronLeft , BiChevronRight, BiChevronDown, BiSearch, BiWifi0, BiCircle } from 'react-icons/bi';

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
                {/* SECOND ROW */}
                <div className={`row ${styles.rowTwo}`}>
                    <div className={`col-md-8 ${styles.itemTwo}`}>
                        <div className={styles.chartItem}>
                            <h3 className={styles.date}>Today: 5, Aug 2018</h3>
                            <input type="search" placeholder="1Jan - 1 Jan" className={styles.dateSearch} />
                            <div className={styles.caret}> 
                                <BiChevronLeft className={styles.caretLeft} />
                                <BiChevronRight className={styles.caretRight} />
                            </div>
                        </div>
                       
                        <MainChart />
                    </div>
                    <div className={`col-md-4 ${styles.itemTwo}`}>
                        <div className={styles.subCol} >
                            <h5 className={styles.header}>Orders</h5>
                            <div className={styles.progressBarContainer}> 
                                <div className={styles.progressBar}></div>
                            </div>
                            <p>Pending Orders:<span className={styles.yellow}>20</span></p>
                            <p>Reconciled Orders: <span className={styles.green}>20</span></p>
                            <p>Total Orders: <span className={styles.blue}>20</span></p>
                        </div>
                        <div className={styles.subCol}>
                            <h5 className={styles.header}>Orders</h5>
                            <div className={styles.progressBarContainer}> 
                                <div className={styles.progressBar}></div>
                            </div>
                            <p>Pending Orders: <span className={styles.yellow}>20</span></p>
                            <p>Reconciled Orders: <span className={styles.green}>20</span></p>
                            <p>Total Orders: <span className={styles.blue}>20</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.tableHeader}>
                    <p>20 </p>
                    <p>Out of 500 Payments </p>
                    <span><BiSearch /></span>
                    <input type='search' placeholder='Search' className={styles.tableSearch} />
                    <input type='select' placeholder='All' className={styles.dropdown} />
                </div>
                <h2>Payments</h2>
                {/* THIRD ROW  */}
            {/* <div className={'table-responsive'}>  */}
                <table className={`table ${styles.rowThree}`}>
                    <thead className={styles.tableHead} >
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Transaction Nos</th>
                            <th scope="col">Time</th>
                            <th scope="col">Button</th>
                            {/* <th scope="col">Caret</th> */}
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        <tr className={styles.tableRow}>
                            <td scope="row"><span className={styles.sideItem}>vw</span>Apple Mac book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <button className={`btn btn-light ${styles.buttonYellow}`}><BiCircle />Pending</button>
                            {/* <BiChevronDown /> */}
                        </tr>

                        <tr className={styles.tableRow}>
                            <td scope="row"><span className={styles.sideItem}>vw</span>Apple Mac book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <button className={`btn btn-light ${styles.buttonGreen}`   }><BiCircle />Reconciled</button>
                            {/* <BiChevronDown /> */}
                        </tr>

                        <tr className={styles.tableRow}>
                            <td scope="row"><span className={styles.sideItem}>vw</span>Apple Mac book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <button className={`btn btn-light ${styles.buttonYellow}`   }><BiCircle />Pending</button>
                            {/* <BiChevronDown /> */}
                        </tr>

                        <tr className={styles.tableRow}>
                            <td scope="row"><span className={styles.sideItem}>vw</span>Apple Mac book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <button className={`btn btn-light ${styles.buttonGreen}`   }><BiCircle />Reconciled</button>
                            {/* <BiChevronDown /> */}
                        </tr>

                        <tr className={styles.tableRow}>
                            <td scope="row"><span className={styles.sideItem}>vw</span>Apple Mac book 15" 250 SSD 12GB</td>
                            <td>$73430</td>
                            <td>1234567890</td>
                            <td>12:30</td>
                            <button className={`btn btn-light ${styles.buttonGreen}`   }><BiWifi0 />Pending</button>
                            {/* <BiChevronDown /> */}
                        </tr>

                    </tbody>
                </table>
            {/* </div> */}

        </div>
    )
}
export default Merchant;