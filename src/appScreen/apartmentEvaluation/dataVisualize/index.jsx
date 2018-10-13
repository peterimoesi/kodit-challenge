// compare price to age

import React from 'react';
import { select } from 'd3-selection';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { max } from 'd3-array';
import { mouse } from 'd3-selection';

import './styles.scss';

import PropTypes from 'prop-types';

class DataVisualize extends React.Component {
    constructor(props) {
        super(props);
        this.graphInitialize = this.graphInitialize.bind(this);
        this.updateGraphRef = this.updateGraphRef.bind(this);
        this.graphRef = null;
        // this.apartments = this.props.apartments.slice(0, 10);
    }

    componentDidMount() {
        this.graphInitialize(this.props.apartments.slice(0, 50));
    }

    componentDidUpdate(prevProps) {
        // if the data is not available on initial mount
        if (!prevProps.apartments.length && this.props.apartments.length) {
            this.graphInitialize(this.props.apartments.slice(0, 50));
        }
    }

    updateGraphRef(e) {
        this.graphRef = e;
    }

    graphInitialize(apartments) {
        const { graphRef } = this;
        const margin = { top : 0, right : 10, bottom : 0, left : 60 };

        const canvas = select(graphRef)
            .append('svg')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr('viewBox', '0 0 600 400')
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const svgNode = graphRef.querySelector('svg'); // get nodeRef for svg;
        
        const width  = (svgNode.clientWidth / 2) - margin.left - margin.right;
        const height = (svgNode.clientHeight / 2) - margin.bottom - margin.top;

        // scale
        const x = scaleBand().rangeRound([0, width]).paddingInner(0);
        const y = scaleLinear().range([height, 0]);

        // axis
        const xAxis = axisBottom().scale(x).ticks(6);
        const yAxis = axisLeft().scale(y).ticks(4);

        x.domain(apartments.map(d => d.built_year));
        y.domain([0, max(apartments, (d) => d.price_sqm)]);

        canvas.append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis)
            .selectAll('text')
            // .style('text-anchor', 'end')
            .attr('dx', '-0.5em')
            .attr('dy', '-0.55em')
            .attr('y', 30)
            .attr('transform', 'rotate(-45)');
        
        canvas.append('g')
            .attr('class', 'y axis')
            .call(yAxis);
        
        canvas.append('text')
            .attr('transform', 'rotate(0)')
            .attr('dy', '3em')
            .attr('x', '-1em')
            .attr('y', 10)
            .style('text-anchor', 'end')
            .text('Price');


        canvas.selectAll('circle')
            .data(apartments)
            .enter()
            .append('circle')
            .style('fill', '#2bbbad')
            .style('stroke', '#fff')
            .attr('cx', d => x(d.built_year) + 25)
            .attr('r', d => d.size_sqm / 5)
            .attr('cy', d => y(d.price_sqm))
            // .attr('cy', d => height - y(d.price_sqm))
            .on('mouseover', () => {
                tooltip.style('display', null);
            })
            .on('mouseout', () => {
                tooltip.style('display', 'none');
            })
            .on('mousemove', function(d) {
                const xPos = mouse(this)[0] - 105;
                const yPos = mouse(this)[1] + 15;
                tooltip.attr('transform', `translate(${xPos}, ${yPos})`);
                tooltip.select('text').text(`Street : ${d.street} - Size/sqm : ${d.size_sqm} - Price/sqm : ${d.price_sqm} - ${d.built_year}`);
            }); 

        const tooltip = canvas.append('g')
            .attr('class', 'svg-tooltip')
            .style('display', 'none');
        
        tooltip.append('text')
            .attr('x', 15)
            .attr('dy', '1.2em')
            .style('font-size', '8px')
            .style('font-weight', 'bold');
        
    }
    render() {
        return (
            <div ref={this.updateGraphRef} className="canvas-cont"></div>
        );
    }
}

DataVisualize.propTypes = {
    apartments : PropTypes.array.isRequired
};

export default DataVisualize;
