import Img from '../assets/miniChart.svg'

const items = [
    {
        productName: 'Apple Mac book 15" 250 SSD 12GB',
        amount: '$73430',
        productNo: '1234567890',
        time: '12:30',
        status: 'Reconciled'
    },
    {
        productName: 'Apple Mac book 15" 250 SSD 12GB',
        amount: '$73430',
        productNo: '1234567890',
        time: '12:30',
        status: 'Pending'
    },
    {
        productName: 'Apple Mac book 15" 250 SSD 12GB',
        amount: '$73430',
        productNo: '1234567890',
        time: '12:30',
        status: 'Un-reconciled'
    },
    {
        productName: 'Apple Mac book 15" 250 SSD 12GB',
        amount: '$73430',
        productNo: '1234567890',
        time: '12:30',
        status: 'Pending'
    },
    {
        productName: 'Apple Mac book 15" 250 SSD 12GB',
        amount: '$73430',
        productNo: '1234567890',
        time: '12:30',
        status: 'Un-reconciled'
    },
    {
        productName: 'Apple Mac book 15" 250 SSD 12GB',
        amount: '$73430',
        productNo: '1234567890',
        time: '12:30',
        status: 'Reconciled'
    },
    {
        productName: 'Apple Mac book 15" 250 SSD 12GB',
        amount: '$73430',
        productNo: '1234567890',
        time: '12:30',
        status: 'Pending'
    },
    {
        productName: 'Apple Mac book 15" 250 SSD 12GB',
        amount: '$73430',
        productNo: '1234567890',
        time: '12:30',
        status: 'Un-reconciled'
    },
]

// MINI CHARTS DATA
const chart = [
    {item: 'Daily transaction Volume', amount: 2342, img: Img},
    {item: 'Daily transaction Volume', amount: 4000000, img: Img},
    {item: 'Daily transaction Volume', amount: 452000, img: Img},
    {item: 'Daily transaction Volume', amount: 4000000, img: Img}
]

// CHART DATA FOR LABELS X-AXIS
 const labels = ['January',10,20,30, 'February', 10, 20, 30, 'March', 15, 25, 'April', 25,30,'May', 10,20,30,'June', 15, 'July',10,20,30,'Aug',20,'Sept','Oct',15,'Nov','Dec']

// CHART DATA Y-AXIS
 const data = [65, 59, 80, 81, 56, 55, 40,30,7,39,50,0,10,49,50,30,25,21,30,45,70,90,90,100,80,20,37,78,70,40,21]


export {data, labels, chart, items};