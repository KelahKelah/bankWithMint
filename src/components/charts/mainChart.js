import React from 'react';
import {Chart } from 'react-charts';

const MainChart = () => {
   const data = React.useMemo(() => {
       return(
       [
           {
               label: 'series',
               data: [
                   [1,2],
                   [2,3],
                   [3,4],
                   [4,5],
                   [3,4],
                   [2,3],
                   [1,2],

               ]
           }
       ]
       )
   }, [])

   const axes = React.useMemo(() => {
       return(
       [
           {primary: true, type: 'linear' ,position: 'bottom'},
           {type: 'linear', position: 'left' }
       ]
       )
   }, [])

   const lineChart = (
       <div style = {{width: '100%', height: '75%'  }}>
            <Chart data={data} axes={axes} />
       </div>
   )

   return(
       <>
       {lineChart}
       </>
   )
}
export default MainChart;