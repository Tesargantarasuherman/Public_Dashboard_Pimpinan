import React from 'react'
import Chart from 'react-apexcharts';

function NilaiSmartCity() {
    const series = [{
        name: 'Nilai',
        data: [0, 4, 3, 4, 5, 3, 4]
    }]
    const options = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'date',
            categories: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    }
    return (
        <div id="chart">
            <h5 className='font-weight-bold'>Nilai Smart City</h5>
            <Chart options={options} series={series} type="area" height={350} />
        </div>
    )
}

export default NilaiSmartCity