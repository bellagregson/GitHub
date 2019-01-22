# Speech Detection

#Speech Recognition

SpeechRecognition
--------------------------------------
``var myRecognition = new SpeechRecognition();``

The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.

**Constructor**

SpeechRecognition.SpeechRecognition()
* Creates a new SpeechRecognition object.

**Properties**

SpeechRecognition also inherits properties from its parent interface, EventTarget.

SpeechRecognition.interimResults
* Controls whether interim results should be returned (true) or not (false.) 
* Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false.)


SpeechRecognition.interimResults
--------------------------------------
```
var myInterimResult = mySpeechRecognition.interimResults;
mySpeechRecognition.interimResults = false;
```
The interimResults property of the SpeechRecognition interface controls whether interim results should be returned (true) or not (false.) 

Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false.)

The default value for interimResults is false.

**Value**

A Boolean representing the state of the current SpeechRecognition's interim results. true means interim results are returned, and false means they aren't.


SpeechRecognition.start()
--------------------------------------
``mySpeechRecognition.start();``

The start() method of the Web Speech API starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.

```
var recognition = new SpeechRecognition();

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}
```


SpeechRecognitionAlternative
--------------------------------------
The SpeechRecognitionAlternative represents a simple view of the response that gets used in a n-best list.

transcript attribute
* Of type DOMString, readonly
* The transcript string represents the raw words that the user spoke. 
* For continuous recognition, leading or trailing whitespace MUST be included where necessary such that concatenation of consecutive SpeechRecognitionResults produces a proper transcript of the session.

confidence attribute
* Of type float, readonly
* The confidence represents a numeric estimate between 0 and 1 of how confident the recognition system is that the recognition is correct. 
* A higher number means the system is more confident.


SpeechRecognitionResult
--------------------------------------

The SpeechRecognitionResult interface of the Web Speech API represents a single recognition match, which may contain multiple SpeechRecognitionAlternative objects.

**Properties**

SpeechRecognitionResult.isFinal
* A Boolean that states whether this result is final (true) or not (false)
* If true, then this is the final time this result will be returned; 
* If false, then this result is an interim result, and may be updated later on.

SpeechRecognitionResult.length
* Returns the length of the "array" — the number of SpeechRecognitionAlternative objects contained in the result (also referred to as "n-best alternatives".)

**Methods**

SpeechRecognitionResult.item
* A standard getter that allows SpeechRecognitionAlternative objects within the result to be accessed via array syntax



result event
--------------------------------------
Fired when the recognition service has begun to listen to the audio with the intention of recognizing.



addEventListener 'start' event
--------------------------------------

Fired when the recognition service has begun to listen to the audio with the intention of recognizing.


addEventListener  'end' event
--------------------------------------
Fired when the service has disconnected. The event must always be generated when the session ends no matter the reason for the end.


#DOM

document.createElement
--------------------------------------
``document.createElement(nodename)``

The createElement() method creates an Element Node with the specified name.

Tip: Use the createTextNode() method to create a text node.

Tip: After the element is created, use the element.appendChild() or element.insertBefore() method to insert it to the document.

**Parameter values**

node	
* Type: String	
* Required. 
* The name of the element you want to create

**Example**

Create a <p> element with some text, and append it to the document:
```
var para = document.createElement("P");   // Create a <p> element
var t = document.createTextNode("HI Mom");    // Create a text node
para.appendChild(t);    // Append the text to <p>
document.body.appendChild(para);  // Append <p> to <body>
```


element.appendChild()
--------------------------------------
``node.appendChild(node)``

The appendChild() method appends a node as the last child of a node.

Tip: If you want to create a new paragraph, with text, remember to create the text as a Text node which you append to the paragraph, then append the paragraph to the document.

You can also use this method to move an element from one element to another (See "More Examples").

Tip: Use the insertBefore() method to insert a new child node before a specified, existing, child node.

**Parameter values**

node
* Type: Node object	
* Required. 
* The node object you want to append

**Example** 

Move a list item from one list to another:
```
var node = document.getElementById("myList2").lastChild;
document.getElementById("myList1").appendChild(node);
```


array.from()
--------------------------------------
``Array.from(object, mapFunction, thisValue)``

The Array.from() method returns an Array object from any object with a length property or an iterable object.

**Parameter values** 

* _object_	Required. The object to convert to an array
* _mapFunction_	Optional. A map function to call on each item of the array
* _thisValue_	Optional. A value to use as this when executing the mapFunction

**Return value**

An Array object

**Example**

Create an Array from a String:
``var myArr = Array.from("ABCDEFG");``


array.map()
--------------------------------------
``array.map(function(currentValue, index, arr), thisValue)``

The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: map() does not change the original array.

**Parameter values**

function(currentValue, index, arr)	
* Required. 
* A function to be run for each element in the array.
* Function arguments:
	* _currentValue_	Required. The value of the current element
	* _index_	Optional. The array index of the current element
	* _arr_	Optional. The array object the current element belongs to
* _thisValue_	Optional. A value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

**Return value**

An Array containing the results of calling the provided function for each element in the original array.

**Examples**

Multiply all the values in array with a specific number:
```
var numbers = [65, 44, 12, 4];

function multiplyArrayElement(num) {
  return num * document.getElementById("multiplyWith").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = numbers.map(multiplyArrayElement);
}
```

array.includes()
--------------------------------------
``array.includes(element, start)``

The includes() method determines whether an array contains a specified element.

This method returns true if the array contains the  element, and false if not.

Note: The includes() method is case sensitive.

**Parameter values**

* _element_	Required. The element to search for
* _start_	Optional. Default 0. At which position in the array to start the search

**Examples** 

Check if an array includes "Banana", starting the search at position 3:
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Banana", 3);
```


string.includes()
--------------------------------------
``string.includes(searchvalue, start)``

The includes() method determines whether a string contains the characters of a specified string.

This method returns true if the string contains the characters, and false if not.

Note: The includes() method is case sensitive.

**Parameter values**

* _searchvalue_	Required. The string to search for
* _start_	Optional. Default 0. At which position to start the search

**Return values**

* A Boolean. 
* Returns true if the string contains the value, otherwise it returns false

**Examples**

Check if a string includes "world", starting the search at position 12:
```
var str = "Hello world, welcome to the universe.";
var n = str.includes("world", 12);
```