import React from 'react';
import Layout from '../../components/layout/layout';
import MyChart from '../../components/myChart';

const Merchant = () => {

    return(
        <div>
            <MyChart />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">2000</div>
                    <div className="col-md-3">2000</div>
                    <div className="col-md-3">2000</div>
                    <div className="col-md-3">2000</div>
                </div>
            </div>
        </div>
    )
}
export default Layout(Merchant);