# Flexbox Panel Gallery

HTMLCollection vs nodeList
------------------------------------
``var x = document.getElementsByTagName("p");``

The getElementsByTagName() method returns an HTMLCollection object.

An HTMLCollection object is an array-like list (collection) of HTML elements.

The length property defines the number of elements in an HTMLCollection.

The length property is useful when you want to loop through the elements in a collection:

``var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
  myCollection[i].style.backgroundColor = "red";
}``

An HTMLCollection is NOT an array!

An HTMLCollection may look like an array, but it is not.

You can loop through the list and refer to the elements with a number (just like an array).

However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.


nodeList
------------------------------------
``var myNodeList = document.querySelectorAll("p");``

A NodeList object is a list (collection) of nodes extracted from a document.

A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

All browsers return a NodeList object for the property _childNodes_. 

Most browsers return a NodeList object for the method _querySelectorAll()_.

The length property defines the number of nodes in a node list:

``var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = myNodelist.length;``

A node list is not an array! A node list may look like an array, but it is not.

You can loop through the node list and refer to its nodes like an array.However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.

Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from().

However, some older browsers have not implemented NodeList.forEach() nor Array.from(). This can be circumvented by using Array.prototype.forEach() 


HTMLCollection vs nodeList
------------------------------------
``var myNodeList = document.querySelectorAll("p");``

An HTMLCollection (previous chapter) is a collection of HTML elements.

A NodeList is a collection of document nodes.

A NodeList and an HTML collection is very much the same thing.

Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects.

Both have a length property defining the number of items in the list (collection).

Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

Only the NodeList object can contain attribute nodes and text nodes.


classList
------------------------------------
``document.getElementById("myDIV").classList.add("mystyle");``

The classList property returns the class name(s) of an element, as a DOMTokenList object.

This property is useful to add, remove and toggle CSS classes on an element.

The classList property is read-only, however, you can modify it by using the add() and remove() methods.

Properties 
* _length_	Returns the number of classes in the list.

Methods
* _add(class1, class2, ...)_	Adds one or more class names to an element. If the specified class already exist, the class will not be added contains(class)	
* _contains(class)_ Returns a Boolean value, indicating whether an element has the specified class name.
	* true - the element contains the specified class name
	* false - the element does not contain the specified class name
* _item(index)_	Returns the class name with a specified index number from an element. Index starts at 0.
	* Returns null if the index is out of range
* _remove(class1, class2, ...)_	Removes one or more class names from an element. Note: Removing a class that does not exist, does NOT throw an error
* _toggle(class, true|false)_	Toggles between a class name for an element.
	* The first parameter removes the specified class from an element, and returns false. 
	* If the class does not exist, it is added to the element, and the return value is true.
	* The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed. 


e.propertyName
------------------------------------
``event.propertyName``

The propertyName property returns the name of the CSS property associated with the transition, when a transitionevent occurs.

This property is read-only.

``document.getElementById("myDIV").addEventListener("transitionend", myFunction);
function myFunction(event) {
  this.innerHTML = "Property name is: " + event.propertyName;
}``


e.propertyName.includes()
------------------------------------
``array.includes(element, start)``

The includes() method determines whether an array contains a specified element.

This method returns true if the array contains the  element, and false if not.

Note: The includes() method is case sensitive.

Parameter Values
* _element_	Required. The element to search for
* _start_	Optional. Default 0. At which position in the array to start the search

``var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Banana", 3);``