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


// import PitchAnalyzer from './pitch.js';
// import getUserMedia from "./getusermedia"

import PitchAnalyzer from './pitch-js/pitch';
import Dots from './dot.js'
// import p5 from 'p5'
// import 'p5/lib/addons/p5.sound'
// import P5Wrapper from 'react-p5-wrapper';
// import Audio from "./audio.js"

//or get to the parts that aren't included inside TweenMax:
// import Draggable from "gsap/Draggable";
// import ScrollToPlugin from "gsap/ScrollToPlugin";
// let mic, fft;
// const getUserMedia = require('get-user-media-promise');
// const MicrophoneStream = require('microphone-stream');
//
//
// // MICROPHONE INPUT CODE
// let frequency;
// getUserMedia({ video: false, audio: true})
// getUserMedia({ video:false, audio:true })
//   .then((stream) => {
//     const micStream = new MicrophoneStream(stream, { bufferSize: 4096 });
//     micStream.on('data', (chunk) => {
//       const raw = MicrophoneStream.toRaw(chunk);
//       const pitch = new PitchAnalyzer(44100); // all pitch analysis functionality stems from this object
//       pitch.input(raw); // the object takes in raw Float32 integer arrays
//       pitch.process(); // it takes a split-second to turn it into actionable data
//       const tone = pitch.findTone();
//       if (tone) {
//         const freq = tone.freq; // line 16
//         console.log(freq)
//         frequency = freq
//       }
//     });
//   });

class Anim extends Component {
  state = {
    freq: [],
    record: false,
    size: 20,
    space: false,
  }

  // componentDidMount(){
  //   this.getSound()
  // }

getSound = () => {
  const getUserMedia = require('get-user-media-promise');
  const MicrophoneStream = require('microphone-stream');


  // MICROPHONE INPUT CODE
  getUserMedia({ video: false, audio: true})
  getUserMedia({ video:false, audio:true })
    .then((stream) => {
      const micStream = new MicrophoneStream(stream, { bufferSize: 4096 });
      micStream.on('data', (chunk) => {
        const raw = MicrophoneStream.toRaw(chunk);
        const pitch = new PitchAnalyzer(44100); // all pitch analysis functionality stems from this object
        pitch.input(raw); // the object takes in raw Float32 integer arrays
        pitch.process(); // it takes a split-second to turn it into actionable data
        const tone = pitch.findTone();
        if (tone) {
          const freq = tone.freq; // line 16
          console.log(freq)
          this.setFreq(freq)
          // this.setState({
          //   freq: freq
          // })
        }
      });
    });
}
  // recordAudio = () => {
  //   navigator.mediaDevices.getUserMedia({ audio: true })
  //     .then(stream => {
  //       const mediaRecorder = new MediaRecorder(stream);
  //       mediaRecorder.start();
  //       console.log(mediaRecorder)
  //     });

  // };

  //   sound = () => {
  //
  //     const getUserMedia = require('get-user-media-promise');
  //     const MicrophoneStream = require('microphone-stream');
  //
  //     getUserMedia({ video:false, audio:true })
  //       .then((stream) => {
  //         const micStream = new MicrophoneStream(stream, { bufferSize: 4096 });
  //         micStream.on('data', (chunk) => {
  //           const raw = MicrophoneStream.toRaw(chunk);
  //           const pitch = new PitchAnalyzer(44100); // all pitch analysis functionality stems from this object
  //           pitch.input(raw); // the object takes in raw Float32 integer arrays
  //           pitch.process(); // it takes a split-second to turn it into actionable data
  //           const tone = pitch.findTone();
  //           if (tone) {
  //             const freq = tone.freq; // line 16
  //             console.log(freq);
  //           }
  //         });
  //       });
  // }

  setFreq = (num) => {
    if(this.state.record == true){
    let arr = this.state.freq
    arr.push(num)
    this.setState({
      freq: arr
      })
    } else {
      null
    }
  }

  startRecording = () => {
    this.getSound()
    this.setState({
      record: !this.state.record
    })
  }

  handleSize = (e) => {
    console.log(e.target.value)
    let newSize = e.target.value
    this.setState({
      size: newSize
    })
  }

  handleSpace = (e) => {
    this.setState({
      space: !this.state.space
    })
}

  render(){
    console.log(this.state.freq)

    return (
      <div className="page">
      <button
      className="btn"
      onClick={this.startRecording}
      >
      Start
      </button>
      {this.state.record ? <Dots freqs={this.state.freq} space={this.state.space} size={this.state.size} /> : null}
      <form>
        <label>
          Size:
          <input onChange={this.handleSize} type="text" name="size" />
        </label>
      </form>
      <button
      className="btn"
      onClick={this.handleSpace}
      >
      Randomize
      </button>
      </div>
    );
  }
}

export default GSAP()(Anim);

        // <input type="submit" value="Submit" />

      // <getUserMedia getFreqs={this.setFreq} />
// setup = () => {
//    p5.createCanvas(710,400);
//    p5.noFill();
//
//    mic = new p5.AudioIn();
//    mic.start();
//    fft = new p5.FFT();
//    fft.setInput(mic);
// }
//
//  draw = () => {
//    p5.background(200);
//
//    let spectrum = fft.analyze();
//
//    p5.beginShape();
//    for (p5.i = 0; p5.i<spectrum.length; p5.i++) {
//     p5.vertex(p5.i, p5.map(spectrum[p5.i], 0, 255, p5.height, 0) );
//    }
//    p5.endShape();
// }


    // <div className="about" ref={c => this.container = c} />
