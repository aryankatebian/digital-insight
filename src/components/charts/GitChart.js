import * as d3 from 'd3';

export default class Gitchart {
    constructor(element) {

        const randomInt = (start, end) => {
            if (!end) return Math.floor(Math.random() * Math.floor(start))
            return start + Math.floor(Math.random() * Math.floor(end - start))
        }
        const { innerWidth, innerHeight } = window;
        const w = innerWidth * 0.5;
        const h = innerHeight * 0.5;
        const svg = d3
            .select("#git-chart")
            .append("svg")
            .attr("height", h)
            .attr("width", w);

        const margin = 40;
        const width = w - 2 * margin;
        const height = h - 2 * margin;

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const data = months.map(month => ({ month, value: randomInt(0, 100) }));

        const groupMain = svg
            .append("g")
            .attr("transform", `translate(${margin}, ${margin})`);

        const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, 100]);

        groupMain.append("g").call(d3.axisLeft(yScale)).attr('color', 'rgba(255, 152, 0, 0.4)');

        const xScale = d3
            .scaleBand()
            .range([0, width])
            .domain(data.map(i => i.month))
            .padding(0.1)




        groupMain
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale)).attr('color', 'rgba(255, 152, 0, 0.4)');

        groupMain
            .append("g")
            .attr("class", "grid")
            .call(
                d3
                    .axisLeft()
                    .scale(yScale)
                    .tickSize(-width, 0, 0)
                    .tickFormat("")


            ).attr('color', 'rgba(255, 152, 0, 0.4)');

        groupMain
            .selectAll()
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", s => xScale(s.month))
            .attr("y", s => yScale(s.value))
            .attr("height", s => height - yScale(s.value))
            .attr("fill", "rgb(102, 194, 165)")
            .attr("width", xScale.bandwidth());
        ;



    }
}