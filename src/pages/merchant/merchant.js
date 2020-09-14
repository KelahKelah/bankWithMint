import React, { useState, useEffect } from 'react';
// import Layout from '../../components/layout/layout';
import styles from './merchant.module.css';
import ChartImg from '../../assets/miniChart.svg';
import MyLIne from '../../components/charts/mainChart';
import {BiChevronLeft , BiChevronRight, BiChevronDown,  BiSearch, BiCircle } from 'react-icons/bi';
import {items} from '../../components/data';

const Merchant = () => {
    const [notification, setNotification] = useState(0);

    useEffect (() => {
        
    })

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
                       
                        <MyLIne />
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
               
                <div className={`row ${styles.rowThree}`}>
                    <h2>Payments</h2>
                    <div className={`col-md-12 ${styles.itemThree}`}>
                        <p><span className={styles.caret}>20<BiChevronDown /> </span>Out of 500 Payments </p>
                        {/* <span><BiSearch /></span> */}
                        <input type='search' placeholder='Search' className={styles.tableSearch} />

                        <div className={`dropdown ${styles.default}`}>

                            <button className={`btn btn-default dropdown-toggle `} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                All
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">All</a>
                                <a className="dropdown-item">Pending</a>
                                <a className="dropdown-item">Reconciled</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* THIRD ROW  */}
             
            <div className={'table-responsive'}>
                <table className={`table ${styles.rowFour}`}>
                    <thead className={styles.tableHead} >
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Transaction Nos</th>
                            <th scope="col">Time</th>
                            <th scope="col">Button</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {
                            items.length > 0 && items.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td scope="row"><span className={styles.sideItem}>vw</span>{item.productName}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.productNo}</td>
                                        <td>{item.time}</td>
                                        <button className={`btn btn-light ${styles.buttonYellow}`}><BiCircle className={styles.iconsYellow} />{item.status}</button>                           
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

                <div className={`row ${styles.rowFive}`}>
                    <div className={`col-md-12 ${styles.itemFive}`}>
                        <p>1 Out of 50 Payments </p>   

                        <div className={`btn-group ${styles.btnGroup}`}>
                            <button type="button" className="btn btn-default">Previous</button>
                            <button type="button" className="btn btn-primary">1</button>
                            <button type="button" className="btn btn-default">2</button>
                            <button type="button" className="btn btn-default">Next</button>
                        </div> 
                    </div>               
                </div>
        </div>
    )
}
export default Merchant;