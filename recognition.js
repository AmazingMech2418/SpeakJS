function recognize(callback,lang) {
var speechdata = new webkitSpeechRecognition();
speechdata.lang = lang;
speechdata.onresult = callback;
speechdata.start();
}
// This is not needed, but can be used as a callback to get the recognized speech into a variable.
// Just use recognize(speechToVar,"en"); to get the recognized speech in English.
var speechRecognized;
function speechToVar(e) {
speechRecognized = e.results;
}
