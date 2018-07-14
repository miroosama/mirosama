import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'


class Dots extends Component{

componentDidMount(){
    const faux = this.props.connectFauxDOM('div', 'circle')
    d3.select(faux)
      .append('div')
      .html('Hello World!')
    this.props.animateFauxDOM(800)
  }

makeDot = () => {
  for(let i = 0; i < this.props.freqs.length; i++){
    if(this.props.freqs[i] < 250){
    d3.selectAll("circle")
    .classed('item--transitioning', true)
    .style('fill', 'white')
    .attr("r", 30)
    .transition().duration(750)
    .attr("r", 30)
    .style('fill', 'blue')
    return <circle cx={40} cy={40} r="20"></circle>
  } else {
  d3.selectAll("circle")
  .classed('item--transitioning', true)
  .style('fill', 'white')
  .attr("r", 30)
  .transition().duration(750)
  .attr("r", 20)
  .style('fill', 'red')
  return <circle cx={60} cy={100} r="20"></circle>
    }
  }
}


  render(){

    return(
      <div>
      <svg width="1300" height="720">
      {this.makeDot()}
      </svg>
      </div>
    )
  }
}


export default withFauxDOM(Dots)
