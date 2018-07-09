import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import FirstTooth from './firsttooth.js'
import './style.css'
import ReactPlayer from 'react-player';

//or get to the parts that aren't included inside TweenMax:
// import Draggable from "gsap/Draggable";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

class Anim extends Component {

  // recordAudio = () => {
  //   navigator.mediaDevices.getUserMedia({ audio: true })
  //     .then(stream => {
  //       const mediaRecorder = new MediaRecorder(stream);
  //       mediaRecorder.start();
  //       console.log(mediaRecorder)
  //     });
  //
  // };

  newSound = (source,volume,loop) => {
  {
      this.source=source;
      this.volume=volume;
      this.loop=loop;
      var son;
      this.son=son;
      this.finish=false;
      this.stop=function()
      {
          document.body.removeChild(this.son);
      }
      this.start=function()
      {
          if(this.finish)return false;
          this.son=document.createElement("embed");
          this.son.setAttribute("src",this.source);
          this.son.setAttribute("hidden","true");
          this.son.setAttribute("volume",this.volume);
          this.son.setAttribute("autostart","true");
          this.son.setAttribute("loop",this.loop);
          document.body.appendChild(this.son);
      }
      this.remove=function()
      {
          document.body.removeChild(this.son);
          this.finish=true;
      }
      this.init=function(volume,loop)
      {
          this.finish=false;
          this.volume=volume;
          this.loop=loop;
      }
  }
}

  render() {
    console.log(this.recordAudio)
    return(
      <div className="page">
      </div>
    );
  }
}

export default GSAP()(Anim);

    // <div className="about" ref={c => this.container = c} />
