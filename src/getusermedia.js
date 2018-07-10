import PitchAnalyzer from './pitch-js/pitch';
//
const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream');
//

// MICROPHONE INPUT CODE
export default getUserMedia({ video: false, audio: true })

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
        console.log(freq);
      }
    });
  });



    //
    // .then((stream) => {
    //   const opts = { bufferSize: 4096 };
    //   const micStream = new MicrophoneStream(stream, opts);
    //   // get Buffers (Essentially a Uint8Array DataView of the same Float32 values)
    //   micStream.on('data', (chunk) => {
    //     if (!getState().recordingStatusReducer) {
    //       return;
    //     }
    //     // Optionally convert the Buffer back into a Float32Array
    //     // ( This actually just creates a new DataView -
    //     // the underlying audio data is not copied or modified.)
    //     const raw = MicrophoneStream.toRaw(chunk);
    //     const pitch = new PitchAnalyzer(44100);
    //     pitch.input(raw);
    //     pitch.process();
    // });
    // });
