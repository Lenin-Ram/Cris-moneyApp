import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import '../assets/style/Home.scss';

const PieChartDemo = () => {
    const [chartData] = useState({
        labels: ['Ropa', 'Deudas', 'Casa', 'Formacion'],
        datasets: [
            {
                data: [420, 300, 120,60],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#2237F5",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#2237F5",
                    "#FFA726"
                ]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#rgba(46, 46, 46, 0.795)'
                }
            }
        }
    });

    return (
        <div id='Pie' className="card flex justify-content-center">
                  
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}
     
export default PieChartDemo;