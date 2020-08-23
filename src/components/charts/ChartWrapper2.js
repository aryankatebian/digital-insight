import React, { useRef, useState, useEffect } from 'react';
import BubbleChart from './BubbleChart';

const ChartWrapper2 = () => {
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)

    useEffect(() => {
        if (!chart) {
            setChart(new BubbleChart(chartArea.current))
        }
        else {
            // chart.update()
        }
    }, [chart])

    return (
        <div className="chart-area" ref={chartArea}></div>
    )
}

export default ChartWrapper2