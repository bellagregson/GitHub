# Sticky Nav


element.offsetTop
---------------------------------------
``object.offsetTop``

The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.

The returned value includes:
* the top position, and margin of the element
* the top padding, scrollbar and border of the offsetParent element

Note: The offsetParent element is the nearest ancestor that has a position other than static.



window.scrollY
---------------------------------------
``var y = window.scrollY``

The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically. 

This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. 

You can get the number of pixels the document is scrolled horizontally from the scrollX property.

In more technical terms, scrollY returns the Y coordinate of the top edge of the current viewport. If there is no viewport, the returned value is 0



classList.add(), classList.remove()
---------------------------------------

The classList property returns the class name(s) of an element, as a DOMTokenList object.

This property is useful to add, remove and toggle CSS classes on an element.

The classList property is read-only, however, you can modify it by using the add() and remove() methods.

**Properties**

length	
* Returns the number of classes in the list.
* This property is read-only

**Methods**

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
* The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed. For example:
	* Remove a class: element.classList.toggle("classToRemove", false); 
	* Add a class: element.classList.toggle("classToAdd", true);
* Note: The second parameter is not supported in Internet Explorer or Opera 12 and earlier.


onscroll Event
---------------------------------------

The onscroll event occurs when an element's scrollbar is being scrolled.

Tip: use the CSS overflow style property to create a scrollbar for an element.

In HTML:
```<element onscroll="myScript">```

In JavaScript:
```object.onscroll = function(){myScript};```

In JavaScript, using the addEventListener() method:
```object.addEventListener("scroll", myScript);```

**Example**

Execute a JavaScript when a _div_ element is being scrolled:

```<div onscroll="myFunction()">```