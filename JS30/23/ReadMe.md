# Speech Synthesis

SpeechSynthesisUtterance()
-------------------------------------

The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

**Example**

In our basic Speech synthesiser demo, we first grab a reference to the SpeechSynthesis controller using window.speechSynthesis. 

After defining some necessary variables, we retrieve a list of the voices available using SpeechSynthesis.getVoices() and populate a select menu with them so the user can choose what voice they want.

Inside the inputForm.onsubmit handler, we stop the form submitting with preventDefault(),  use the constructor to create a new utterance instance containing the text from the text _input_, set the utterance's voice to the voice selected in the _select_ element, and start the utterance speaking via the SpeechSynthesis.speak() method.

```
var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

var voices = synth.getVoices();

for(i = 0; i < voices.length ; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  option.setAttribute('data-lang', voices[i].lang);
  option.setAttribute('data-name', voices[i].name);
  voiceSelect.appendChild(option);
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
}
```


SpeechSynthesisUtterance.voice Property
-------------------------------------
```
var myVoice = speechSynthesisUtteranceInstance.voice;
speechSynthesisUtteranceInstance.voice = speechSynthesisVoiceInstance;
```

The voice property of the SpeechSynthesisUtterance interface gets and sets the voice that will be used to speak the utterance.

This should be set to one of the SpeechSynthesisVoice objects returned by SpeechSynthesis.getVoices(). 

If not set by the time the utterance is spoken, the voice used will be the most suitable default voice available for the utterance's lang setting.

**Value**

A SpeechSynthesisVoice object.


SpeechSynthesisUtterance.text Property
-------------------------------------
```
var myText = speechSynthesisUtteranceInstance.text;
speechSynthesisUtteranceInstance.text = 'Hello I am speaking';
```
The text property of the SpeechSynthesisUtterance interface gets and sets the text that will be synthesised when the utterance is spoken.

The text may be provided as plain text, or a well-formed SSML document. The SSML tags will be stripped away by devices that don't support SSML.

**Value**

A DOMString representing the text to the synthesised. The maximum length of the text that can be spoken in each utterance is 32,767 characters.


SpeechSynthesisUtterance.lang Property
-------------------------------------
```
var myLang = speechSynthesisUtteranceInstance.lang;
speechSynthesisUtteranceInstance.lang = 'en-US';
```

The lang property of the SpeechSynthesisUtterance interface gets and sets the language of the utterance.

If unset, the app's (i.e. the _html_ lang value) lang will be used, or the user-agent default if that is unset too.

**Value**

A DOMString representing a BCP 47 language tag.


SpeechSynthesisUtterance.pitch Property
-------------------------------------
```
// default 1
speechSynthesisUtteranceInstance.pitch = 1.5; 
```

The pitch property of the SpeechSynthesisUtterance interface gets and sets the pitch at which the utterance will be spoken at.

If unset, a default value of 1 will be used.

**Value**
A float representing the pitch value. 

It can range between 0 (lowest) and 2 (highest), with 1 being the default pitch for the current platform or voice. Some speech synthesis engines or voices may constrain the minimum and maximum rates further. 

If SSML is used, this value will be overridden by prosody tags in the markup.


SpeechSynthesisUtterance.rate Property
-------------------------------------
```
var myRate = speechSynthesisUtteranceInstance.rate;
speechSynthesisUtteranceInstance.rate = 1.5;
```

The rate property of the SpeechSynthesisUtterance interface gets and sets the speed at which the utterance will be spoken at.

If unset, a default value of 1 will be used.

**Value**

A float representing the rate value. It can range between 0.1 (lowest) and 10 (highest), with 1 being the default pitch for the current platform or voice, which should correspond to a normal speaking rate. Other values act as a percentage relative to this, so for example 2 is twice as fast, 0.5 is half as fast, etc.

Some speech synthesis engines or voices may constrain the minimum and maximum rates further. If SSML is used, this value will be overridden by prosody tags in the markup.


SpeechSynthesis.getVoices() Method
-------------------------------------
``speechSynthesisInstance.getVoices();``

The getVoices() method of the SpeechSynthesis interface returns a list of **SpeechSynthesisVoice** objects representing all the available voices on the current device.

**Properties**

All of these properties are read-only:

SpeechSynthesisVoice.default 
* A Boolean indicating whether the voice is the default voice for the current app language (true), or not (false.)

SpeechSynthesisVoice.lang 
* Returns a BCP 47 language tag indicating the language of the voice.

SpeechSynthesisVoice.localService 
* A Boolean indicating whether the voice is supplied by a local speech synthesizer service (true), or a remote speech synthesizer service (false.)

SpeechSynthesisVoice.name 
* Returns a human-readable name that represents the voice.

SpeechSynthesisVoice.voiceURI 
* Returns the type of URI and location of the speech synthesis service for this voice.

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

SpeechSynthesisVoice.name Property
-------------------------------------
```var voiceName = speechSynthesisVoiceInstance.name;```

The name read-only property of the SpeechSynthesisVoice interface returns a human-readable name that represents the voice.

**Value**

A DOMString representing the name of the voice.


SpeechSynthesisVoice.lang Property
-------------------------------------
``var myLang = speechSynthesisVoiceInstance.lang;``

The lang read-only property of the SpeechSynthesisVoice interface returns a BCP 47 language tag indicating the language of the voice.

**Value**

A DOMString representing the language of the device.


SpeechSynthesis.speak() Method
-------------------------------------
``speechSynthesisInstance.speak(utterance);``

The speak() method of the SpeechSynthesis interface adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.


SpeechSynthesis.cancel() Method
-------------------------------------
``speechSynthesisInstance.cancel();``

The cancel() method of the SpeechSynthesis interface removes all utterances from the utterance queue.

If an utterance is currently being spoken, speaking will stop immediately.

**Example**
```
var synth = window.speechSynthesis;

var utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
var utterance2 = new SpeechSynthesisUtterance('We should say another sentence too, just to be on the safe side.');

synth.speak(utterance1);
synth.speak(utterance2);

synth.cancel(); // utterance1 stops being spoken immediately, and both are removed from the queue
```


SpeechSynthesis.onvoiceschanged() property
-------------------------------------
``speechSynthesisInstance.onvoiceschanged = function() { ... };``

The onvoiceschanged property of the SpeechSynthesis interface represents an event handler that will run when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)

This may occur when speech synthesis is being done on the server-side and the voices list is being determined asynchronously, or when client-side voices are installed/uninstalled while a speech synthesis application is running.

**Example**

This could be used to populate a list of voices that the user can choose between when the event fires (see our Speak easy synthesis demo.) Note that Firefox doesn't support it at present, and will just return a list of voices when SpeechSynthesis.getVoices() is fired. With Chrome however, you have to wait for the event to fire before populating the list, hence the bottom if statement seen below.


voiceschanged() Event
-------------------------------------

The voiceschanged event of the Web Speech API is fired when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)

* Bubbles:	No
* Cancelable:	No
* Target objects:	SpeechSynthesis
* Interface:	Event

**Example**

This could be used to repopulate a list of voices that the user can choose between when the event fires:
```
var synth = window.speechSynthesis;

  ...

synth.onvoicechanged = function() {
  var voices = synth.getVoices();
  }
``` 


Array.find() Method
-------------------------------------
``array.find(function(currentValue, index, arr),thisValue)``

The find() method returns the value of the first element in an array that pass a test (provided as a function).

The find() method executes the function once for each element present in the array:

* If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
* Otherwise it returns undefined

Note: find() does not execute the function for empty arrays.

Note: find() does not change the original array.

**Parameter Values**

function(currentValue, index, arr)
* Required. 
* A function to be run for each element in the array.
Function arguments:
	* _currentValue_	Required. The value of the current element
	* _index_	Optional. The array index of the current element
	* _arr_	Optional. The array object the current element belongs to

thisValue	
* Optional. 
* A value to be passed to the function to be used as its "this" value.
* If this parameter is empty, the value "undefined" will be passed as its "this" value

**Example**

Get the value of the first element in the array that has a value of 18 or more:
```
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}
```