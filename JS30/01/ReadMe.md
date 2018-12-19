# JavaScript Drum Kit

window.addEventListener
--------------------------
element.addEventListener(event, function[, options]);
element.addEventListener(event, function, useCapture);
* The addEventListener() method attaches an event handler to the specified element.
* It won't overwrite existing event handlers.
* You can add many event handlers to one element, including event handlers of the same type (e.g. two "click" events)
* You can add event listeners to any DOM object not only HTML elements. i.e the window object.
* The addEventListener() method makes it easier to control how the event reacts to bubbling.
* You can easily remove an event listener by using the removeEventListener() method.

Parameters
* event: 	Required. A String that specifies the name of the event. Note: Do not use the "on" prefix. For example, use "click" instead of "onclick".
* function: Required. Specifies the function to run when the event occurs. When the event occurs, an event object is passed to the function as the first parameter. The type of the event object depends on the specified event. For example, the "click" event belongs to the MouseEvent object.
* useCapture: Optional. A Boolean value that specifies whether the event should be executed in the capturing (true - outside to in) or in the bubbling (false - inside to out) phase. 


document.querySelector
--------------------------
document.querySelector(".example");
* The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. 
* If no matches are found, null is returned.
* To return all the matches, use the querySelectorAll() method instead.


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