import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReconciledPayments from "./pages/reconciledPayments/reconciledPayments";
import Layouts from "./components/layouts/layouts";
import AllOrders from "./pages/allOrders/allOrders";
import PendingOrders from "./pages/pendingOrders/pendingOrders";
import Merchant from './pages/merchant/merchant';
import UnreconciledPayments from './pages/unreconciledPayments/unreconciledPayments';


const Approute = ({path, exact, Component}) => {
    return(
        <Route path={path} exact={exact} render={props=> {
            return(
                <Layouts>
                    <Component {...props} />
                </Layouts>
            )
        }} 
        />
    );
};

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Approute exact path="/" Component={Merchant} />
            {/* <Approute exact path="*"><div>Page not found</div></Approute>  */}
            <Approute exact path="/reconciled" Component={ReconciledPayments} />
            <Approute exact path="/unreconciled" Component={UnreconciledPayments} />
            <Approute exact path="/all/orders" Component={AllOrders} />
            <Approute exact path="/pending" Component={PendingOrders} />
            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;