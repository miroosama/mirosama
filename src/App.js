import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import Anim from './anim'
import './style.css'
import { Link } from 'react-router-dom'
class App extends Component {


  render() {
    return(
      <div className="App">
        <meta className="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <Anim />
      </div>
    );
  }
}

export default App;
