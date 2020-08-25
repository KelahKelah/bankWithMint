import React from 'react';
// import Layout from '../../components/layout/layout';
import MyChart from '../../components/myChart';

const Merchant = () => {

    return(
        <div>
            <MyChart />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">Daily Transaction Volume</div>
                    <div className="col-md-3">Daily Transaction Volume</div>
                    <div className="col-md-3">Daily Transaction Volume</div>
                    <div className="col-md-3">Daily Transaction Volume</div>
                </div>
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}
export default Merchant;