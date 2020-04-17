function setup() {
  noCanvas();
  var foo = new p5.Speech(voiceReady); // speech synthesis object
  foo.speak("hi there"); // say something
  foo.start(); // start listening

  function voiceReady() {
    console.log(foo.voices);
  }
}
