# Slide in on Scroll

window properties
------------------------------------------------
* _innerHeight_	Returns the height of the window's content area (viewport) including scrollbars
* _innerWidth_	Returns the width of a window's content area (viewport) including scrollbars
* _pageXOffset_	Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
* _pageYOffset_	Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
* _screenLeft_	Returns the horizontal coordinate of the window relative to the screen
* _screenTop_ Returns the vertical coordinate of the window relative to the screen
* _screenX_	Returns the horizontal coordinate of the window relative to the screen
* _screenY_	Returns the vertical coordinate of the window relative to the screen
* _scrollX_	An alias of pageXOffset
* _scrollY_	An alias of pageYOffset
* _self_	Returns the current window


window events
------------------------------------------------
* _scrollBy()_	Scrolls the document by the specified number of pixels
* _sscrollTo()_	Scrolls the document to the specified coordinates


onscroll events
------------------------------------------------
``object.addEventListener("scroll", myScript);``
``object.onscroll = function(){myScript};``

The onscroll event occurs when an element's scrollbar is being scrolled.

Tip: use the CSS overflow style property to create a scrollbar for an element.

Slide in an element when the user has scrolled down 350 pixels from the top of the page (add the slideUp class):

```
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("myImg").className = "slideUp";
  }
}
```


offsetTop
------------------------------------------------
``object.offsetTop``

The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.

The returned value includes:

* the top position, and margin of the element
* the top padding, scrollbar and border of the offsetParent element

Note: The offsetParent element is the nearest ancestor that has a position other than static.

Tip: To return the left position of an element, use the offsetLeft property.

Get the position of a _<div>_ element:

```
var testDiv = document.getElementById("test");
var demoDiv = document.getElementById("demo");
demoDiv.innerHTML = "offsetLeft: " + testDiv.offsetLeft + "<br>offsetTop: " + testDiv.offsetTop;
```


classList property
------------------------------------------------
``element.classList``

The classList property returns the class name(s) of an element, as a DOMTokenList object.

This property is useful to add, remove and toggle CSS classes on an element.

The classList property is read-only, however, you can modify it by using the add() and remove() methods.

*Cross-browser solution: The classList property is not supported in IE9 and earlier. However, you can use the className property or regular expressions for a cross-browser solution (see "More Examples" on the bottom of this page).*

Methods

add(class1, class2, ...)	
* Adds one or more class names to an element.
* If the specified class already exist, the class will not be added

contains(class)	
* Returns a Boolean value, indicating whether an element has the specified class name.
* Possible values:
	* true - the element contains the specified class name
	* false - the element does not contain the specified class name

item(index)	
* Returns the class name with a specified index number from an element. Index starts at 0.
* Returns null if the index is out of range

remove(class1, class2, ...)	
* Removes one or more class names from an element.
* Note: Removing a class that does not exist, does NOT throw an error

toggle(class, true|false)	
* Toggles between a class name for an element.
* The first parameter removes the specified class from an element, and returns false. 
* If the class does not exist, it is added to the element, and the return value is true.
* The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed.

``document.getElementById("myDIV").classList.add("mystyle");``



debounce
------------------------------------------------
A debounce function limits the rate at which a function can fire

A quick example:  
* you have a resize listener on the window which does some element dimension calculations and (possibly)  repositions a few elements.  
* That isn't a heavy task in itself but being repeatedly fired after numerous resizes will really slow your site down.  
* Why not limit the rate at which the function can fire?

Here's the basic JavaScript debounce function 

```
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
```

You'll pass the debounce function the function to execute and the fire rate limit in milliseconds.  Here's an example usage:

```
var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
}, 250);
window.addEventListener('resize', myEfficientFn);
```

The function above will only fire once every quarter of a second instead of as quickly as it's triggered; an incredible performance boost in some cases.