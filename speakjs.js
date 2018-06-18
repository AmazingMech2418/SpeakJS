var langs = {
english:"en",
spanish:"es",
africaans:"af",
albanian:"sq",
arabic:"ar",
armenian:"hy",
belarusian:"be",
bengali:"bn",
tibetan:"bo",
bosnian:"bs",
bulgarian:"bg",
burmese:"my",
czech:"cs",
chinese:"zh",
welsh:"cy",
danish:"da",
german:"de",
dutch:"nl",
greek:"el",
estonian:"et",
persian:"fa",
finnish:"fi",
french:"fr",
gaelic:"gd",
irish:"ga",
hebrew:"he",
hindi:"hi",
hungarian:"hu",
icelandic:"is",
italian:"it",
japanese:"ja",
korean:"ko",
latin:"la",
mongolian:"mn",
nepali:"ne",
norwegian:"no",
polish:"pl",
portuguese:"pt",
romanian:"ro",
russian:"ru",
swahili:"sw",
sweedish:"sv",
turkish:"tr",
ukranian:"uk",
vietnamese:"vi"
};
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
var speak = function(text) {
speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};
var getSpeech = function(text) {
return (new SpeechSynthesisUtterance(text));
};
var speakWithSettings = function(text,lang,voice,volume,rate,pitch) {
var z = (new SpeechSynthesisUtterance(text));
z.lang = lang;
z.voice = voice;
z.volume = volume;
z.rate = rate;
z.pitch = pitch;
  speechSynthesis.speak(z);

};
var speakLang = function(text,lang) {
var z = (new SpeechSynthesisUtterance(text));
z.lang = lang;
    speechSynthesis.speak(z);

};
var speakSlow = function(text,speed) {
speakWithSettings(text,"en",null,1,speed,speed);
};
var speakSlowLang = function(text,speed,lang) {
speakWithSettings(text,lang,null,1,speed,speed);
};
