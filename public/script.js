function setup() {
  noCanvas();
  let lang = navigator.language || "en-US";
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = false;
  speechRec.start(continuous, interim);

  // Store result string
  let res;
  let responseString = "";

  // (function doStuff() {
  //   function doStuff() {
  //     console.log("refreashing page!");
  //     location.reload();
  //   }
  //   setInterval(doStuff, 50000);
  // });

  function check_resultString(res) {
    location.reload();
    if (res == "hello computer") {
      resp("Hello Mukund! What can I do for you?");
    } else if (res == "can you make a recording") {
      resp("Sure Mukund. Please record your message after the beep  ");
    } else if (res == "thank you computer") {
      resp("Anytime Mukund");
    } else if (res == "can you say hello to Manmohan sir") {
      resp("hello Manmohan sir");
    } else {
      resp("Sorry I did not get that ");
    }
  }

  function gotSpeech() {
    console.log(speechRec);
    if (speechRec.resultValue) {
      createP(speechRec.resultString);
      res = speechRec.resultString;
      check_resultString(res);
    }
  }
}

function resp(responseString) {
  let voice = new p5.Speech();
  voice.speak(responseString);
}
