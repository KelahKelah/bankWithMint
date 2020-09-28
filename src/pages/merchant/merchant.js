import React, { useState, useEffect } from 'react';
import styles from './merchant.module.css';
import MyLIne from '../../components/charts/mainChart';
import {BiChevronLeft , BiChevronRight, BiChevronDown,  BiSearch, BiCircle } from 'react-icons/bi';
import {items, chart} from '../../components/data';
import { BiWallet, BiWalletAlt, BiTachometer, BiRadioCircleMarked, BiSpreadsheet, BiUser, BiMenu} from 'react-icons/bi';
// IMPORTING CSS SIDEBAR HERE FOR THE SIDEBAR 
// import sideBarStyles from '../../components/sidebar/sidebar.module.css';


const Merchant = () => {
    const [notification, setNotification] = useState(0);
    const [sideBarToggle, setSideBarToggle] = useState(false)

    useEffect (() => {
        
    })

    return(
            <div className={`container ${styles.mainContainer}`}>
                <div className={styles.hamburger} onClick={() => {setSideBarToggle(true)}}>
                    <BiMenu />
                </div>

                {/* SIDE BAR  */}
            {/* <div className={sideBarStyles.wrapper}>
                <button className={sideBarStyles.invoice}>Generate Invoice</button>
                <div className={sideBarStyles.content} >
                    <ul className={sideBarStyles.ulHeader}>
                        <li><BiTachometer className={sideBarStyles.icons} />All Payments</li>
                    </ul>
                    <h6 className={sideBarStyles.sideBarHeader}>Payments</h6>
                    <ul className={sideBarStyles.ulHeader}>
                        <li className={'active'}><BiWallet className={sideBarStyles.icons} />Overview</li>
                        <li><BiWalletAlt className={sideBarStyles.icons} />Reconciled Payments</li>
                        <li><BiWalletAlt className={sideBarStyles.icons} />Un-reconciled Payements</li>
                        <li><BiRadioCircleMarked className={sideBarStyles.icons} />Manual Settlement</li>
                    </ul>
                    <h6 className={sideBarStyles.sideBarHeader}>Orders</h6>
                    <ul className={sideBarStyles.ulHeader}>
                        <li><BiSpreadsheet className={sideBarStyles.icons} />All orders</li>
                        <li><BiSpreadsheet className={sideBarStyles.icons} />Pending orders</li>
                        <li><BiSpreadsheet className={sideBarStyles.icons} />Reconciled orders</li>
                        <li><BiUser className={sideBarStyles.icons} />Merchant</li>
                    </ul>
                </div>
            </div> */}
                {/* SIDEBAR ENDS  */}

                {/* FIRST ROW STARTS  */}
                <div  className={styles.rowOne}>
                {
                    chart.length>0 && chart.map((chartItem, index) => {
                        return(
                        <div key={index} className={styles.item}>
                            <div className ={styles.daily}>
                                <p>{chartItem.item}</p>
                                <p>{chartItem.amount}</p>
                            </div>
                            <img src={chartItem.img} alt="Dialy chart" className={styles.ChartImg} />
                        </div>
                        )
                    })
                }
                </div>
                {/* FIRST ROW ENDS  */}

                {/* SECOND ROW */}
                <div className={`row mx-0 ${styles.rowTwo}`}>
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
               
                <div className={`row mx-0 ${styles.rowThree}`}>
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
                                        {
                                            item.status === 'Pending' ? <td><button className={`btn btn-light ${styles.buttonYellow}`}><BiCircle className={`mr-1 ${styles.iconsYellow}`} />{item.status}</button></td>  
                                            : item.status === 'Reconciled' ? <td><button className={`btn btn-light ${styles.buttonGreen}`}><BiCircle className={`mr-1 ${styles.iconsGreen}`} />{item.status}</button></td>    
                                            : item.status === 'Un-reconciled' ? <td><button className={`btn btn-light ${styles.buttonGray}`}><BiCircle className={`mr-1 ${styles.iconsGray}`} />{item.status}</button></td>
                                            : null                          
                                        }
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