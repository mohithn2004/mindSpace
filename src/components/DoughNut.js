import React from 'react'

import {Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
    
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function DoughnutGraph(props) {
    const data = {
        labels: ["Whatsapp", "Instagram", "Youtube", 'X.com'],
        datasets: [{
            data: [randomNumber(1,3), randomNumber(1,3), randomNumber(1,3), randomNumber(1,3)],
            backgroundColor: ['#000B3D','#414D84','#6F80C6','#7F9FD4'],
            borderColor:  ['#000B3D','#414D84','#6F80C6','#7F9FD4'],
        }]
    }

  const options= {legend: {
    textColor: "black"

},}

  return (
    <div style={{width: '250px', 'margin-left' : '120px', 'padding-top' : '25px'}}>
    <Doughnut className='doughnut-graph' data={data} options={options}></Doughnut>
    </div>
  )
}

export default DoughnutGraph;