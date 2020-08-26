import * as d3 from 'd3';


export default class BubbleChart {
    constructor(element) {
        var json = {
            'children': [
                { 'name': 'web design', 'value': 50 },
                { 'name': 'UX / UI', 'value': 14 },
                { 'name': 'dev ops', 'value': 3 },
                { 'name': 'algorithm / data structure', 'value': 29 },
                { 'name': 'unit testing', 'value': 10 },
                { 'name': 'deployment', 'value': 29 },
                { 'name': 'database structure', 'value': 23 }
            ]
        }

        var diameter = 400,
            color = d3.scaleOrdinal(d3.schemeSet2);

        var colorScale = d3.scaleLinear()
            .domain([0, d3.max(json.children, function (d) {
                return d.value;
            })])
            .range(["rgb(46, 73, 123)", "rgb(71, 187, 94)"]);

        var bubble = d3.pack()
            .size([diameter, diameter])
            .padding(1);

        var margin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }

        var svg = d3.select('#bubble-chart').append('svg')
            .attr('viewBox', '0 0 ' + (diameter + margin.right) + ' ' + diameter)
            .attr('width', (diameter + margin.right))
            .attr('height', diameter)
            .attr('class', 'chart-svg');

        var root = d3.hierarchy(json)
            .sum(function (d) { return d.value; })
            .sort(function (a, b) { return b.value - a.value; });

        bubble(root);

        var node = svg.selectAll('.node')
            .data(root.children)
            .enter()
            .append('g').attr('class', 'node')
            .attr('transform', function (d) { return 'translate(' + d.x + ' ' + d.y + ')'; })
            .append('g').attr('class', 'graph');

        node.append("circle")
            .attr("r", function (d) { return d.r; })
            .style("fill", function (d) {
                return color(d.data.name);
            });

        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function (d) { return d.data.name; })
            .style("fill", "#ffffff")
            .style("font-size", '12px')
            .style("font-weight", '700');

        // svg.append("g")
        //     .attr("class", "legendOrdinal")
        //     .attr("transform", "translate(600,40)");


    }
}