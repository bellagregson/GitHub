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
gtm.start
gtm.js = page view trigger

 

use anonymouse functions with a 'return' statemet
google_tag_manager global object
resolving a variable is an 'expensive' operation - it uses eval method
in datalayer variable, array indices are accessed with dot notation

can access properties and methods from GTM variables

utilize queryselector, queryselectorAll

queryselectorAll returns a nodeLIst not an array

learn how to use CSS selectors

Simo Ahava - Matches CSS Selector operator article

respect the RACE condition;
 'window loaded' trigger type doesn't fire until all dependencies have loaded


