
# Countdown Timer

setInterval
--------------------------------
``setInterval(function, milliseconds, param1, param2, ...)``

The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

Tip: 1000 ms = 1 second.

Tip: To execute a function only once, after a specified number of milliseconds, use the setTimeout() method.

**Parameter values**

function	
* Required. 
* The function that will be executed

milliseconds
* Required. 
* The intervals (in milliseconds) on how often to execute the code. If the value is less than 10, the value 10 is used

param1, param2, ...	
* Optional. 
* Additional parameters to pass to the function (Not supported in IE9 and earlier)

**Examples**

You can also refer to a "named" function; Alert "Hello" every 3 seconds (3000 milliseconds):
```
var myVar;

function myFunction() {
  myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}
```


clearInterval
--------------------------------
``clearInterval(var)``

The clearInterval() method clears a timer set with the setInterval() method.

The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

Note: To be able to use the clearInterval() method, you must use a variable when creating the interval method:

``myVar = setInterval("javascript function", milliseconds);``

Then you will be able to stop the execution by calling the clearInterval() method.

``clearInterval(myVar)``

**Parameter values**

var	
* Required. 
* The name of the timer returned by the setInterval() method

**Example**

Toggle between two background colors once every 300 milliseconds, until it is stopped by clearInterval():
```
var myVar = setInterval(setColor, 300);

function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
  clearInterval(myVar);
}
```


Date.now()
--------------------------------
``Date.now()``

The Date.now() method returns the number of milliseconds since January 1, 1970 00:00:00 UTC.

**Example**

Calculate the number of years since 1970/01/01:
```
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var t = Date.now();

var y = Math.round(t / years);
```


Math.round(x)
--------------------------------
``Math.round(x)``

The round() method rounds a number to the nearest integer.

Note: 2.49 will be rounded down (2), and 2.5 will be rounded up (3).

**Example**

```
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
```


Math.floor(x)
--------------------------------
``Math.floor(x)``

The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.

If the passed argument is an integer, the value will not be rounded.

**Example**

Use the floor() method on different numbers:
```
var a = Math.floor(0.60);
var b = Math.floor(0.40);
var c = Math.floor(5);
var d = Math.floor(5.1);
var e = Math.floor(-5.1);
var f = Math.floor(-5.9);
```


Modulus % Operator
--------------------------------

The modulus operator (%) returns the division remainder.

**Example**
```
var x = 5;
var y = 2;
var z = x % y;
```

timestamp Event Property
--------------------------------
``event.timeStamp``

The timeStamp event property returns the number of milliseconds since midnight of January 1, 1970, when the event occured.

It can be used as a time stamp of when the event was triggered.

Not all systems provide this information, therefore, timeStamp may be not available for all systems/events.

**Example**

Get the number of milliseconds since midnight of January 1, 1970:

``var n = event.timeStamp;``