import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({title, data, options, height, width}) => {
    return (
        <div className="chart">
            <h2>{title}</h2>
            <Line
                data={data}
                options={options}
                height={height}
                width={width} />
        </div>
    )
}
export default Chart;