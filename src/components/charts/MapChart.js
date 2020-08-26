import * as d3 from 'd3';
import * as topojson from 'topojson';

export default class MapChart {
    constructor(element) {
        const { innerWidth, innerHeight } = window;
        const w = innerWidth * 0.505;
        const h = innerHeight * 0.6;
        const svg = d3
            .select("#map-chart")
            .append("svg")
            .attr("height", h)
            .attr("width", w);

        const projection = d3.geoNaturalEarth1();
        const pathGenerator = d3.geoPath().projection(projection);

        const g = svg.append('g');

        const colorLegendG = svg.append('g')
            .attr('transform', `translate(40,310)`);


        g.append('path')
            .attr('class', 'sphere')
            .attr('d', pathGenerator({ type: 'Sphere' }));

        svg.call(d3.zoom().on('zoom', () => {
            g.attr('transform', d3.event.transform);
        }));
        const colorScale = d3.scaleOrdinal();

        const colorValue = d => d.properties.economy;

        const loadAndProcessData = () =>

            Promise.all([
                d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
                d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
            ])

                .then(([tsvData, topoJSONdata]) => {

                    const rowById = tsvData.reduce((accumulator, d) => {
                        accumulator[d.iso_n3] = d;
                        return accumulator;
                    }, {});

                    const countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries);

                    countries.features.forEach(d => {
                        Object.assign(d.properties, rowById[d.id])
                    });

                    return countries;

                });

        const colorLegend = (selection, props) => {
            const {
                colorScale,
                circleRadius,
                spacing,
                textOffset,
                backgroundRectWidth
            } = props;

            // const backgroundRect = selection.selectAll('rect')
            //     .data([null]);

            // const n = colorScale.domain().length;
            // backgroundRect.enter()
            //     .append('rect')
            //     .merge(backgroundRect)
            //     .attr('x', -circleRadius * 2)
            //     .attr('y', -circleRadius * 2)
            //     .attr('rx', circleRadius * 2)
            //     .attr('width', backgroundRectWidth)
            //     .attr('fill', 'white')
            //     .attr('height', spacing * n + circleRadius * 2)

            // const groups = selection.selectAll('.tick')
            //     .data(colorScale.domain());
            // const groupsEnter = groups
            //     .enter().append('g')
            //     .attr('class', 'tick');
            // groupsEnter
            //     .merge(groups)
            //     .attr('transform', (d, i) =>
            //         `translate(0, ${i * spacing})`
            //     );
            // groups.exit().remove();

            // groupsEnter.append('circle')
            //     .merge(groups.select('circle'))
            //     .attr('r', circleRadius)
            //     .attr('fill', colorScale);

            // groupsEnter.append('text')
            //     .merge(groups.select('text'))
            //     .text(d => d)
            //     .attr('dy', '0.32em')
            //     .attr('x', textOffset);
        }

        loadAndProcessData().then(countries => {
            console.log(colorScale);
            colorScale.domain(countries.features.map(colorValue))
                .domain(colorScale.domain().sort().reverse())
                .range(d3.schemeSpectral[colorScale.domain().length]);

            colorLegendG.call(colorLegend, {
                colorScale,
                circleRadius: 8,
                spacing: 20,
                textOffset: 15,
                backgroundRectWidth: 240
            });

            g.selectAll('path').data(countries.features)
                .enter().append('path')
                .attr('class', 'country')
                .attr('d', pathGenerator)
                .attr('fill', d => colorScale(colorValue(d)))
                .append('title')
                .text(d => d.properties.name + ' : ' + colorValue(d));

        });



    }
}