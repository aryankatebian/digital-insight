import React, { useRef, useState, useEffect } from 'react';
import MapChart from './MapChart';

const ChartWrapper4 = () => {
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)

    useEffect(() => {
        if (!chart) {
            setChart(new MapChart(chartArea.current))
        }
        else {
            // chart.update()
        }
    }, [chart])

    return (
        <div className="chart-area" ref={chartArea}></div>
    )
}

export default ChartWrapper4