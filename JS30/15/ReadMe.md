# LocalStorage

localStorage
------------------------------------------
``window.localStorage``

The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

The localStorage object stores data with no expiration date. 

The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

The localStorage property is read-only.

The _sessionStorage_ property  stores data for one session (data is lost when the browser tab is closed).

*Methods*

* SAVING data to localStorage:
``localStorage.setItem("key", "value");``

* READING data from localStorage:
``var lastname = localStorage.getItem("key");``

* REMOVING data from localStorage:
``localStorage.removeItem("key");``

* CLEAR ALL data from localStorage:
```localStorage.clear();```


*Examples*

Create a localStorage name/value pair with name="lastname" and value="Smith", then retrieve the value of "lastname" and insert it into the element with id="result":
```
// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
```

The following example counts the number of times a user has clicked a button:

```
if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "You have clicked the button " +
localStorage.clickcount + " time(s).";
```

*Note:*

When the browser goes into private browsing mode, a new, temporary database is created to store local storage data; this database is emptied and thrown away when private browsing mode is turned off.

localStorage's persistence makes it useful for a variety of things, including page view counters as demonstrated in

https://mdn.github.io/dom-examples/web-storage/



event delegation
------------------------------------------

Event delegation allows you to avoid adding event listeners to specific nodes;  instead, the event listener is added to one parent.  

That event listener analyzes bubbled events to find a match on child elements. 

*How does it work?*
Let's say that we have a parent UL element with several child elements:

```
<ul id="parent-list">
	<li id="post-1">Item 1</li>
	<li id="post-2">Item 2</li>
	<li id="post-3">Item 3</li>
</ul>
```

* Let's also say that something needs to happen when each child element is clicked.  
* You could add a separate event listener to each individual LI element, but what if LI elements are frequently added and removed from the list?  
* Adding and removing event listeners would be a nightmare, especially if addition and removal code is in different places within your app.  
* *The better solution is to add an event listener to the parent UL element.*  
* But if you add the event listener to the parent, how will you know which element was clicked?
* Simple:  *when the event bubbles up to the UL element, you check the event object's target property to gain a reference to the actual clicked node.*

Here's a very basic JavaScript snippet which illustrates event delegation:

```
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});
```

*Why Use Event Delegation?*
* Without event delegation you would have to rebind the click event listener to each new input loaded to the page. Coding this is complicated and burdensome. 
* For one, it would drastically increase the amount of event listeners on your page, and more event listeners would increase the total memory foo decreases performance… and poor performance is a bad thing. tprint of your page. 
* Having a larger memory footprint decreases performance… and poor performance is a bad thing. 
* Second, there can be memory leak issues associated with binding and unbinding event listeners and removing elements from the dom. 

```
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});
```

* Start by adding a click event listener to the parent element.  
* When the event listener is triggered, check the event element to ensure it's the type of element to react to.  
* If it is an LI element, boom:  we have what we need!  
* If it's not an element that we want, the event can be ignored.

*What happens to the event listener when the element is added to the DOM (webpage) after the initial page load?*

The whole idea behind event delegation is that instead of listening for a change on the inputs directly, *we should look for an HTML element that is going to be on the page when the page initially loads*.

```
<ul class=”characters”>
</ul>
<script>
  function toggleDone (event) {
    console.log(event.target)
  } 
  const characterList = document.querySelector('.characters')
  characterList.addEventListener('click', toggleDone)
</script>
```

It is best to think of event delegation as responsible parents and negligent children. The parents are basically gods, and the children have to listen to whatever the parents say. The beauty is if we add more children (more inputs), the parents stay the same — they were there from the beginning or, in other words, on page load.

``Console.log(event.currentTarget)``

The event.currentTarget identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event listener has been attached. In our case the event listener was attached to the unordered list, characters, so that is what we see in our console.

``Console.log(event.target)``

The event.target is a reference to the object that dispatched the event. Or in other words, it identifies the HTML element on which the event occurred.

Because we now know that the EVENT.TARGET identifies the HTML elements on which the event occurred, and we also know what element we want to listen for (the input element), solving this in JavaScript is relatively easy.

```
//Event Delegation
function toggleDone (event) {
  if (!event.target.matches(‘input’)) return
  console.log(event.target)
  //We now have the correct input - we can manipulate the node here
}
```

https://davidwalsh.name/event-delegate

https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983



event bubbling
------------------------------------------

Whenever a user makes a click it ripples up all the way up to the top of the DOM and triggers clicks events on all the parent elements of the element you clicked. You don’t always see these clicks, because you aren’t always listening (with an event listener) for a click on these elements, but this bubbling up does happen.

This is called event bubbling or event propagation.

Because of its bubbling nature, event propagation basically means that anytime you click one of our inputs on the DOM, you are effectively clicking the entire document body.

Because of event bubbling you can place an event listener on a single parent HTML element that lives above a HTML child, and that event listener will get executed whenever an event occurs on any of its child nodes — even if these node children are added to the page after the initial load!



e.preventDefault()
------------------------------------------

``event.preventDefault()``

The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

* Clicking on a "Submit" button, prevent it from submitting a form
* Clicking on a link, prevent the link from following the URL

Note: Not all events are cancelable. Use the *cancelable* property to find out if an event is cancelable.

Note: The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.

*Example*

Prevent a link from opening the URL:
```
document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
});
```


form.reset()
------------------------------------------
``formObject.reset()``

* The reset() method resets the values of all elements in a form (same as clicking the Reset button).
* Tip: Use the submit() method to submit the form.

``document.getElementById("myForm").reset();``


array.map()
------------------------------------------
``array.map(function(currentValue, index, arr), thisValue)``

The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: map() does not change the original array.

*Parameter values*

function(currentValue, index, arr)	
* Required. 
* A function to be run for each element in the array.
* currentValue:	Required. The value of the current element
* index	Optional. The array index of the current element
* arr	Optional. The array object the current element belongs to

thisValue	
* Optional. 
* A value to be passed to the function to be used as its "this" value.
* If this parameter is empty, the value "undefined" will be passed as its "this" value

Get the full name for each person in the array:

```
var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

function getFullName(item, index) {
  var fullname = [item.firstname,item.lastname].join(" ");
  return fullname;
}

function myFunction() {
  document.getElementById("demo").innerHTML = persons.map(getFullName);
}
```



element.matches()
------------------------------------------
``var result = element.matches(selectorString);``
The matches() method of the Element interface returns true if the element would be selected by the specified selector string; otherwise, it returns false.

*Parameter Values*
* _selectorString_ is a string representing the selector to test.

*Example*
This will log "The Philippine eagle is endangered!" to the console, since the element has indeed a class attribute with value endangered.

```
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>

<script type="text/javascript">
  var birds = document.getElementsByTagName('li');

  for (var i = 0; i < birds.length; i++) {
    if (birds[i].matches('.endangered')) {
      console.log('The ' + birds[i].textContent + ' is endangered!');
    }
  }
</script>
```


data attributes
------------------------------------------
``<element data-*="somevalue">``
The data-* attributes is used to store custom data private to the page or application.

The data-* attributes gives us the ability to embed custom data attributes on all HTML elements.

The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

The data-* attributes consist of two parts:

The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-"

The attribute value can be any string

Note: Custom attributes prefixed with "data-" will be completely ignored by the user agent.

```
<ul>
  <li data-animal-type="bird">Owl</li>
  <li data-animal-type="fish">Salmon</li> 
  <li data-animal-type="spider">Tarantula</li> 
</ul>
```
