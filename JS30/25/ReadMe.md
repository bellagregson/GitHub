#  Event Capture, Propagation

 target.addEventListener() Method
 ---------------------------------

 The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. 

 Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

addEventListener() works by adding a function or an object that implements EventListener to the list of event listeners for the specified event type on the EventTarget on which it's called.

**Syntax**
```
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only
```

**Parameters**

type
* A case-sensitive string representing the event type to listen for.

listener
* The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs. 
* This must be an object implementing the EventListener interface, or a JavaScript function. 

options 
* An options object that specifies characteristics about the event listener. The available options are:
* _capture:_ A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
* _once:_ A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
* _passive:_ A Boolean which, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. See Improving scrolling performance with passive listeners to learn more.
 * _mozSystemGroup:_ A Boolean indicating that the listener should be added to the system group. Available only in code running in XBL or in the chrome of the Firefox browser.


useCapture Optional
* A Boolean indicating whether events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. 
* Specifies whether the event should be executed in the capturing or in the bubbling phase. Possible values:
	* true - The event handler is executed in the capturing phase
	* false - Default. The event handler is executed in the bubbling phase
* Events that are bubbling upward through the tree will not trigger a listener designated to use capture. 
* Event bubbling and capturing are two ways of propagating events which occur in an element that is nested within another element, when both elements have registered a handle for that event. 
* The event propagation mode determines the order in which elements receive the event. See DOM Level 3 Events and JavaScript Event order for a detailed explanation. 
* If not specified, useCapture defaults to false.


 stopPropagation()
 -----------------------------------
 ``event.stopPropagation()``

The stopPropagation() method prevents propagation of the same event from being called.

Propagation means bubbling up to parent elements or capturing down to child elements.

**Example**

Prevent any propagation of the same event:
```
function func1(event) {
  alert("DIV 1");
  event.stopPropagation();
}
```