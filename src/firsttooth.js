import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import ReactPlayer from 'react-player'

class FirstTooth extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    console.log(el)
    TweenMax.fromTo(el, 0.8, {y: 100, opacity: 0}, {y: -100, opacity: .8, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.8, {y: 0, opacity: .8}, {y: 100, opacity: 0, onComplete: callback});
  }

  render () {
    console.log("g")
    return(
      <div>
      <div className="boxfour" ref={c => this.container = c}/>
      <ReactPlayer className="vid" height="40%" width="45%"url='https://youtu.be/jrcQQ4Fc-Qs' loop="true" playing />
      </div>
    )
  }
}

export default GSAP()(FirstTooth);
