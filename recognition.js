function recognize(callback,lang) {
var speechdata = new webkitSpeechRecognition();
speechdata.lang = lang;
speechdata.onresult = callback;
speechdata.start();
}
