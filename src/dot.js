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

test = () => {
  console.log(this.props.freqs)
}


  render(){

    return(
      <div>
      {this.test()}
      </div>
    )
  }
}


export default withFauxDOM(Dots)
