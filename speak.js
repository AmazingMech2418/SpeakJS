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
var speakSlow = function(text) {
speakWithSettings(text,"en",null,1,0.5,0.5);
};
