import React from 'react';
import Chart from "./Chart";
const Charts = ({statistic}) => {
    let clicks = statistic.map(el => el.clicks);
    let page_views = statistic.map(el => el.page_views);
    let labels = statistic.map(el => el.date);
    let height;
    let width;

    if (window.innerWidth <= 768 && window.innerWidth > 460) {
        height = 25;
        width = 60;
    }   else if (window.innerWidth <= 460 ) {
        height = 20;
        width = 40;
    }   else {
        height = 20;
        width = 90;
    }

    const charts = [{
        title: "Clicks",
        height: height,
        width: width,
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: true
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        },
        data: {
            labels: labels,
            datasets: [{
                fill: false,
                borderColor: 'blue',
                borderWidth: 3,
                data: clicks
            }]
        }
    },
        {
            title: "Views",
            height: height,
            width: width,
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            },
            data: {
                labels: labels,
                datasets: [{
                    fill: false,
                    borderColor: 'blue',
                    borderWidth: 3,
                    data: page_views
                }]
            }
        }
    ];


    return (
        <div className="charts">
            {charts.map(el =>
                <Chart
                    key={el.title}
                    title={el.title}
                    height={el.height}
                    width={el.width}
                    options={el.options}
                    data={el.data} />)}
        </div>
    )
}
export default Charts;