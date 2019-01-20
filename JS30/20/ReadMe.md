# Speech Detection

#Speech Recognition

SpeechRecognition
--------------------------------------
interimResults
--------------------------------------
speech recognition.start()
--------------------------------------
element.results
- transcript'
- confidence
- isFinal



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

addEventListener 'result'
--------------------------------------
addEventListener  'end'
--------------------------------------
array.from
--------------------------------------
array.map
--------------------------------------
element.includes
--------------------------------------