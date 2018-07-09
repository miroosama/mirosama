import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import ReactPlayer from 'react-player'

class FirstTooth extends React.Component {


  render () {
    console.log("g")
    return(
      <div>
    hi
      </div>
    )
  }
}

export default GSAP()(FirstTooth);
