import React from 'react';
import  './sidebar.css';
import { BiWallet, BiWalletAlt, BiTachometer, BiRadioCircleMarked, BiSpreadsheet, BiUser} from 'react-icons/bi';
import { BrowserRouter, Link, Switch } from 'react-router-dom';


const Sidebar = () => {

    return(
        <div className="wrapper">
            <button className="invoice">Generate Invoice</button>
            <div className="content" >
                <ul className="{ulHeader">
                    <BrowserRouter>
                    <Link to=""><BiTachometer className="icons" />All Payments</Link>
                    </BrowserRouter>
                </ul>
                <h6 className="sideBarHeader">Payments</h6>
                <ul className="ulHeader">
                    <BrowserRouter>
                   <li><Link className="linkTag" to="/" className='active'><BiWallet />Overview</Link></li>
                    <li><Link className="linkTag" to="/reconciled"><BiTachometer />Reconciled Payments</Link></li>
                    <li><Link className="linkTag" to="/unreconciled"><BiTachometer />Un-reconciled Payements</Link></li>
                    <li><Link className="linkTag" to="/reconciled"><BiRadioCircleMarked />Manual Settlement</Link></li>
                    </BrowserRouter>
                </ul>
                <h6 className="sideBarHeader">Orders</h6>
                <ul className='ulHeader'>
                    <BrowserRouter>
                    <li><Link className="linkTag" to=""><BiSpreadsheet className="icons" />All orders</Link></li>
                    <li><Link className="linkTag" to=""><BiSpreadsheet className="icons" />Pending orders</Link></li>
                    <li><Link className="linkTag" to=""><BiSpreadsheet className="icons" />Reconciled orders</Link></li>
                    <li><Link className="linkTag" to=""><BiUser className="icons" />Merchant</Link></li>
                    </BrowserRouter>
                </ul>
            </div>
        </div>

    )
}
export default Sidebar;

