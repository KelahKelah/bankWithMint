import React from 'react';
import {Line} from 'react-chartjs-2';
import {data, labels} from '../data';

class MyLine extends React.Component {  

    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
        this.state = {
            dataItem: [],
            labelItem: []
        }
    }

    componentDidMount() {
            this.setState({dataItem:data});
            this.setState({labelItem:labels});  
    }
            render(){
            var data = {
                labels: this.state.labelItem,
                datasets: [
                {
                    label: 'Transactions',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(2, 148, 255, 0.45)',
                    borderColor: 'rgba(2, 148, 255, 0.45)',
                    borderCapStyle: 'butt',
                    borderDash: [3],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(2, 148, 255, 0.45)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 3,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(2, 148, 255, 0.45)',
                    pointHoverBorderColor: 'rgba(2, 148, 255, 0.45)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data:this.state.dataItem
                }
                ]
            };
            return(
                <div>
                    <Line data={data} 
                    width={250}
                    height={350}
                    options={{maintainAspectRatio: false}}
                     />
                </div>
            )
        }
    } 
       
export default MyLine;

