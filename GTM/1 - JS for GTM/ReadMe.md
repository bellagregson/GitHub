# Javascript for Google Tag Manager

## Javascript Basics

### scope
- The current context of execution. 
- The context in which values and expressions are "visible," or can be referenced. 
- If a variable or other expression is not "in the current scope," then it is unavailable for use. 
- Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

### scope & closure
- A function serves as a closure in JavaScript, and thus creates a scope,
- For example, a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. 
- For instance, the following is invalid:

```
function exampleFunction() {
	// x can only be used in exampleFunction
    var x = "declared inside function";
    console.log("Inside function");
    console.log(x);
}
console.log(x);  // Causes error
```

- However, the following code is valid due to the variable being declared outside the function, making it global:

```
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);
```

### Ways to create scope

Ways to create scope in JavaScript are through: try-catch blocks, functions, the let keyword with curly braces among others

### lexical scoping
 - Lexical scoping describes how a parser resolves variable names when functions are nested. 
 - The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. 
 - JavaScript's Lexical Scope is determined during the compile phase. It sets the scope of a variable so that it may only be called/referenced from within the block of code in which it is defined.
 - When code wants to access a variable – it is first searched for in the inner Lexical Environment, then in the outer one, then the more outer one and so on until the end of the chain.
 - Run this code and notice that the alert() statement within the displayName() function successfully displays the value of the name variable, which is declared in its parent function.

```
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();
```

### closure
- A closure is a way to access and manipulate external variables from within a function.
-  A closure is the combination of a function and the lexical environment within which that function was declared. 
- This environment consists of any local variables that were in-scope at the time the closure was created. 

```
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
``` 
https://javascript.info/closure

## JavaScript in GTM

asynchronous javascript download
gtm.start
gtm.js = page view trigger

Simo Ahava - the container snippet article

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


## Useful tricks and methods

hitCallback takes a function as its value

you can create utility functions

create  a 'set cookie' utility function

convert an array of objects into an array of strings for Facebook

first and 3rd party cookies

transvering up the DOM via parent elements

## Best practices

Always wrap custom html scripts in a self executing function in order to protect the global namespace

Always prefix global variables with 'window'