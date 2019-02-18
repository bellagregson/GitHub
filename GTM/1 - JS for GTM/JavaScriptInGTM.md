# Javascript for Google Tag Manager

## JavaScript in GTM

### Asynchronous javascript 

#### Synchronous code
In synchronous programs, if you have two lines of code (L1 followed by L2), then L2 cannot begin running until L1 has finished executing.

Trying to avoid asynchronous code and replacing it with synchronous code is almost always a bad idea in JavaScript because JavaScript only has a single thread (except when using Web Workers). That means the webpage will be unresponsive while the script is running. 

The issue is even worse when using server-side JavaScript: the server will not be able to respond to any requests while waiting for synchronous functions to complete, which means that every user making a request to the server will have to wait to get a response.

#### Asynchronous code
In asynchronous programs, you can have two lines of code (L1 followed by L2), where L1 schedules some task to be run in the future, but L2 runs before that task completes.

Asynchronous code needs to be structured in a different way than synchronous code, and the most basic way to do that is with callback functions.

Note that asynchronous does not mean the same thing as concurrent or multi-threaded. JavaScript can have asynchronous code, but it is generally single-threaded. 

Sometimes you have a series of tasks where each step depends on the results of the previous step. This is a very straightforward thing to deal with in synchronous code

When you try to do this in asynchronous code, it's easy to run into callback hell, a common problem where you have callback functions deeply nested inside of each other. 


#### Callback functions
In JavaScript, we can create a callback function that we pass in to an asynchronous function, which will be called once the task is completed.

### Tools for dealing with asynchronous code

Async libraries
If you are using lots of asynchronous functions, it can be worthwhile to use an asynchronous function library, instead of having to create your own utility functions. Async.js is a popular library that has many useful tools for dealing with asynchronous code.

Promises
Promises are a popular way of getting rid of callback hell. Originally it was a type of construct introduced by JavaScript libraries like Q and when.js, but these types of libraries became popular enough that promises are now provided natively in ECMAScript 6.

The idea is that instead of using functions that accept input and a callback, we make a function that returns a promise object, that is, an object representing a value that is intended to exist in the future.

Once we have a function that returns a promise, we can use the .then method on it to specify what should happen once resolve or reject is called.
```
function getData(options) {
  return new Promise(function(resolve, reject) {                    //create a new promise
    $.get("example.php", options, function(response) {
      resolve(JSON.parse(response));                                //in case everything goes as planned
    }, function() {
      reject(new Error("AJAX request failed!"));                    //in case something goes wrong
    });
  });
}

// usage
getData({name: "John"}).then(function(data) {
  console.log(data)
}, function(err) {
  console.log("Error! " + err);
});
```

## GTM Container

The container snippet, Simo Ahava
https://www.simoahava.com/analytics/container-snippet-gtm-secrets-revealed/

gtm.start and gtm.js

```
w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
});
```
* Within the curly brackets is an object literal. Object literals are JavaScript objects, which contain any number of key-value (or property-value or variable-value) pairs, often in JSON (JavaScript Object Notation). 
* With a dataLayer.push(), you’re pushing an object with properties to the end of the dataLayer queue. These properties can then be accessed in GTM.
* This first push, contains an object with the following properties:
	* Key 1: ‘gtm.start’ - Value 1: New Date.getTime()
	* Key 2: event - Value 2: ‘gtm.js’
* The gtm.start property receives the current time (in milliseconds since Jan 1, 1970) as its value. Brian Kuhn of Google explained that this is used for calculating gtm.js load time and the cache hit rate of the request, so don’t worry about it

 
## Anonymous functions

Anonymous functions are functions that are dynamically declared at runtime. They’re called anonymous functions because they aren’t given a name in the same way as normal functions.

Anonymous functions are declared using the function operator instead of the function declaration. You can use the function operator to create a new function wherever it’s valid to put an expression. For example you could declare a new function as a parameter to a function call or to assign a property of another object.

If the function keyword appears first in the statement and is followed by a function name, the function is being created by a **function declaration**:
```
function flyToTheMoon()
{
  alert("Zoom! Zoom! Zoom!");
}
flyToTheMoon();
```

If the function keyword appears anywhere else, it is probably being used as a **function operator**. Here’s the same example created as an anonymous function.
```
var flyToTheMoon = function() {
  alert("Zoom! Zoom! Zoom!");
}
flyToTheMoon();
```

When the function operator is called, it creates a new function object and returns it. 

The function operator is a lot more flexible than a function declaration because it can be used wherever it is valid to use an expression.

You can use the function operator to declare a function when you are creating an object:

```
var jabbaTheHut = {
 laugh : function() { alert("ho ho ho ho"); }
}
jabbaTheHut.laugh();
```

When you are creating a list:
```
var toDoToday = [
 function() { alert("Aren't you a little short for a storm trooper?") },
 function() { alert("Boring conversation anyway") },
];
for(var x=0; x<toDoToday.length; x++) {
 toDoToday[x]();
}
```


### Google_tag_manager global object

When GTM loads, a global object is created named google_tag_manager, that has a key that is the current GTM Id value.
```
google_tag_manager["GTM-XXXX"]
```
With it we can get a dataLayer value using dataLayer.get(‘value’)
```
google_tag_manager["GTM-XXXX"].dataLayer.get('event')
```
This will return the current value for the ‘event’ key, at the time we execute it. As all sites have a different GTM Id string, we could use it this way to it works on any site, as the Id will be grabbed dynamically:
```
google_tag_manager[(Object.keys(google_tag_manager)[1])].dataLayer.get('event')
```


### Using console.table for a fancy view of your objects
Most common use of the “console” command is to print values into your console tab, but we can do some other nice things, like easily printing a full object in a table using the “console.table” command.

For example for printing the whole dataLayer into a fancy table like this:

console.table(dataLayer);


### Race conditions
	
A race condition is where the timing of one event is critically tied to other events which need to happen before it in sequence. 

Javascript as a language is single threaded. Essentially JS is just an API working with text,arrays, dates but does not include I/O (networking and storage) typically implemented by host environment.(mostly browsers). So this is where async nature arises from the network requests and storing data. Hence race conditions can arise from doing async operations on which finishes first.

https://quickleft.com/blog/defusing-race-conditions-when-using-promises/




## Other notes:

in datalayer variable, array indices are accessed with dot notation

can access properties and methods from GTM variables

utilize queryselector, queryselectorAll

queryselectorAll returns a nodeLIst not an array

learn how to use CSS selectors

Simo Ahava - Matches CSS Selector operator article

respect the RACE condition;


 'window loaded' trigger type doesn't fire until all dependencies have loaded


