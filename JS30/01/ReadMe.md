// This project uses the following

window.addEventListener
--------------------------
* 

document.querySelector
--------------------------
* 

classList
--------------------------
add( String [, String [, ...]] )
* Adds the specified class values. If these classes already exist in the element's class attribute they are ignored.
* shadesEl.classList.add('make', 'me', 'look', 'rad');

remove( String [, String [, ...]] )
* Removes the specified class values.
* shadesEl.classList.remove('cool', 'make', 'me');

item( Number )
* Returns the class value by index in the collection.
* console.log(shadesEl.classList.item(3));  // make

toggle( String [, force] )
* When only one argument is present: Togglts then remove it and return false, if not, then add it and return true.
* When a second argument is present: If the second argument evaluates to true, add the specified class value, and if it evaluates to false, remove it
*   shadesEl.classList.toggle('cool');

contains( String )
* Checks if the specified class value exists in the element's class attribute.
* console.log(shadesEl.classList.contains('look')); // true

replace( oldClass, newClass )
* Replaces an existing class with a new class.
* console.log(shadesEl.classList.replace('hello', 'goodbye'));


transitionend
-----------------------
The transitionend event is fired when a CSS transition has completed. 

In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated.

let element = document.getElementById("slidingMenu");
element.addEventListener("transitionend", function(event) {
  element.innerHTML = "Done!";
}, false);