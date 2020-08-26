import React, { useRef, useState, useEffect } from 'react';
import GitChart from './GitChart';

const ChartWrapper3 = () => {
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)

    useEffect(() => {
        if (!chart) {
            setChart(new GitChart(chartArea.current))
        }
        else {
            // chart.update()
        }
    }, [chart])

    return (
        <div className="chart-area" ref={chartArea}></div>
    )
}

export default ChartWrapper3