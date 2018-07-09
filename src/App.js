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
        <Anim />
      </div>
    );
  }
}

export default App;
