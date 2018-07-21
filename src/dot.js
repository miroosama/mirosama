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

// notes for friday 20... make options (squares, distances between, adjusting colors)
makeDot = () => {
  let num3 = Math.random() * 100
  let num1 = 20
  let num2 = 40
  let frequencies = this.props.freqs
  return frequencies.map(freq => {
    if(num1 >= 1270){
      num1 = 20
      num2 += 25
      // 40 has space
  } else {
    const placement = Math.floor((Math.random() * 60) + 1)

    // num1 += placement
    num1 += 30
    // num2 += 1
  }
    if(freq < 250){
  return  <circle onLoad={this.handleLoad()} opacity=".75" fill="red" cx={num1} cy={num2} r="20"></circle>
} else if (freq > 250 && freq < 290 ) { return <circle onLoad={this.handleLoad()} opacity=".75" fill="orange" cx={num1} cy={num2} r="20"></circle>
} else if (freq > 290 && freq< 365) { return <circle onLoad={this.handleLoad()} opacity=".75" fill="yellow" cx={num1} cy={num2} r="20"></circle>
} else if (freq > 365 && freq< 450) { return <circle onLoad={this.handleLoad()} opacity=".75" fill="green" cx={num1} cy={num2} r="20"></circle>
} else if (freq > 450 && freq< 760) { return <circle onLoad={this.handleLoad()} opacity=".75" fill="blue" cx={num1} cy={num2} r="20"></circle>
} else {return <circle onLoad={this.handleLoad()} opacity=".75" fill="violet" cx={num1} cy={num2} r="20"></circle>
}
} )
  // for(let i = 0; i < this.props.freqs.length; i++){
  //
  // }
  //   if(this.props.freqs[i] < 250){
  //   d3.selectAll("circle")
  //   .classed('item--transitioning', true)
  //   .style('fill', 'white')
  //   .attr("r", 30)
  //   .transition().duration(750)
  //   .attr("r", 30)
  //   .style('fill', 'blue')
  //   return <circle cx={40} cy={40} r="20"></circle>
  // } else {
  // d3.selectAll("circle")
  // .classed('item--transitioning', true)
  // .style('fill', 'white')
  // .attr("r", 30)
  // .transition().duration(750)
  // .attr("r", 20)
  // .style('fill', 'red')
  // return <circle cx={60} cy={100} r="20"></circle>
  //   }
  // }
}

handleLoad = () => {
   // let circle1 = d3.select("circle:nth-child(1n)")
   // let curcle = d3.selectAll("circle")
   //  d3.select("circle:nth-child(-1n)")
   //  .classed('item--transitioning', true)
   //  .style('fill', 'white')
   //  .attr("r", 30)
   //  .transition().duration(750)
   //  .attr("r", 30)
   //  .style('fill', 'blue')
   //  return <circle cx={40} cy={40} r="20"></circle>
   let last = d3.selectAll("circle").select(function() {
  return this.lastElementChild;
});
 last.classed('item--transitioning', true)
 last.style('fill', 'white')
 last.attr("r", 30)
 last.transition().duration(750)
 last.attr("r", 30)

}

// makeDot = () => {
//   return
//   let p = d3.select("div")
//     .selectAll("p")
//     .data(this.props.freqs)
//     .text(function(d) { return d; });
// }


  render(){
    // d3.selectAll("circle")
    // .classed('item--transitioning', true)
    // .style('fill', 'white')
    // .attr("r", 30)
    // .transition().duration(750)
    // .attr("r", 20)
console.log(this.makeDot())
// console.log("ahhhhhhhhh", Math.random())
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
