import P5Wrapper from 'react-p5-wrapper';
import React, { Component } from 'react';
import p5 from 'p5'
import 'p5/lib/addons/p5.sound'


export default function Audio (p) {
let mic, fft;
  p.setup = function () {
     p.createCanvas(710,400);
     p.noFill();

     mic = new p.AudioIn();
     mic.start();
     fft = new p.FFT();
     fft.setInput(mic);
  }

   p.draw = function () {
     p.background(200);

     let spectrum = fft.analyze();

     p.beginShape();
     for (p.i = 0; p.i<spectrum.length; p.i++) {
      p.vfertex(p.i, p.map(spectrum[p.i], 0, 255, p.height, 0) );
     }
     p.endShape();
  }

};
