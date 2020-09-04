import React from 'react';
import {Line} from 'react-chartjs-2';

 
class MyLine extends React.Component {  

        render(){
            var data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                {
                    label: '',
                    fill: false,
                    lineTension: 0.1,
                    // backgroundColor: 'linear-gradient(180deg, rgba(2, 148, 255, 0.45) 33.13%, rgba(255, 255, 255, 0.0001) 117.06%)',
                    backgroundColor: 'rgba(2, 148, 255, 0.45)',
                    borderColor: 'rgba(2, 148, 255, 0.45)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(2, 148, 255, 0.45)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(2, 148, 255, 0.45)',
                    pointHoverBorderColor: 'rgba(2, 148, 255, 0.45)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
                ]
            };
            return(
                <div>
                    <Line data={data} 
                    width={200}
                    height={300}
                    options={{maintainAspectRatio: false}}
                     />
                </div>
            )
        }
        } 
       
        
export default MyLine;

