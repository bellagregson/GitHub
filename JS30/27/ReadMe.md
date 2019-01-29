# Click and Drag

pageX MouseEvent Property
---------------------------------
``event.pageX``

The pageX property returns the horizontal coordinate (according to the document) of the mouse pointer when a mouse event was triggered.

The document is the **web page**.

Note: This property is read-only.

Note: This property is non-standard, but works in most major browsers.

**Example**

Output the coordinates of the mouse pointer while the mouse pointer moves over an element:
```
var x = event.pageX;
var y = event.pageY; 
var coor = "X coords: " + x + ", Y coords: " + y;
document.getElementById("demo").innerHTML = coor;
```


clientX MouseEvent Property
---------------------------------
``event.clientX``

The clientX property returns the horizontal coordinate (according to the client area) of the mouse pointer when a mouse event was triggered.

The client area is the **current window**.

Note: This property is read-only.

**Example**

Output the coordinates of the mouse pointer while the mouse pointer moves over an element:
```
var x = event.clientX;
var y = event.clientY; 
var coor = "X coords: " + x + ", Y coords: " + y;
document.getElementById("demo").innerHTML = coor;
```


offSetLeft Element Property
---------------------------------
``object.offsetLeft``

The offsetLeft property returns the left position (in pixels) relative to the left side the offsetParent element.

The returned value includes:

* the left position, and margin of the element
* the left padding, scrollbar and border of the offsetParent element

Note: The offsetParent element is the nearest ancestor that has a position other than static.

**Example**

Get the position of a _div_ element:
```
var testDiv = document.getElementById("test");
var demoDiv = document.getElementById("demo");
demoDiv.innerHTML = "offsetLeft: " + testDiv.offsetLeft + "<br>offsetTop: " + testDiv.offsetTop;
```


scrollLeft
---------------------------------

Return the scrollLeft property:
``element.scrollLeft``

Set the scrollLeft property:
``element.scrollLeft = pixels``

The scrollLeft property sets or returns the number of pixels an element's content is scrolled horizontally.

Tip: Use the scrollTop property to set or return the number of pixels an element's content is scrolled vertically.

Tip: To add scrollbars to an element, use the CSS overflow property.

**Property Values**

pixels	
* Specifies the number of pixels the element's content is scrolled horizontally.

Special notes:
* If the number is a negative value, the number is set to "0"
* If the element cannot be scrolled, the number is set to "0"
* If the number is greater than the maximum allowed scroll amount, the number is set to the maximum number


preventDefault() Event Method
---------------------------------
``event.preventDefault()``

The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

* Clicking on a "Submit" button, prevent it from submitting a form
* Clicking on a link, prevent the link from following the URL

Note: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.

Note: The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.

**Example**

Prevent the default action of a checkbox:
```
document.getElementById("myCheckbox").addEventListener("click", function(event){
  event.preventDefault()
});
```

console.log({object})
---------------------------------
```
console.log({startX, x})
```
outputs
```
{startX: 193, x: 550, walk: 1071}
{startX: 193, x: 633, walk: 1320}
```