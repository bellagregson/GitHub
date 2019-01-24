#Speech Synthesis

SpeechSynthesisUtterance()
-------------------------------------

SpeechSynthesisUtterance.lang
-------------------------------------
```
var myLang = speechSynthesisUtteranceInstance.lang;
speechSynthesisUtteranceInstance.lang = 'en-US';
```

The lang property of the SpeechSynthesisUtterance interface gets and sets the language of the utterance.

If unset, the app's (i.e. the _html_ lang value) lang will be used, or the user-agent default if that is unset too.


SpeechSynthesis.getVoices()
-------------------------------------
``speechSynthesisInstance.getVoices();``

The getVoices() method of the SpeechSynthesis interface returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device.

**Example**
```
 voices = speechSynthesis.getVoices();

  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voiceSelect").appendChild(option);
  }
```


find()
-------------------------------------





voiceschanged() event
-------------------------------------
