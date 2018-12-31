!i Logical NOT operator
-------------------------------------
``inBetween = !inBetween;``
* Called Logical NOT Operator. 
* It is used to reverse the logical state of its operand. 
* The operator accepts a single argument and does the following:
	* Converts the operand to boolean type: true/false.
	* Returns an inverse value.
* If a condition is true, then Logical NOT operator will make it false or vice versa
```
n1 = !true               // !t returns false
n2 = !false              // !f returns true
n3 = !'Cat'              // !t returns false
```

&& Logical AND operator
-------------------------------------
``result = a && b;``
* The AND operator is represented with two ampersands &&:
* In classical programming AND returns true if both operands are truthy and false otherwise
``alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false``
* Given multiple AND’ed values, AND returns the first falsy value or the last value if none were found
``result = value1 && value2 && value3;``


Logical OR operator
-------------------------------------
* The “OR” operator is represented with two vertical line symbols:
``result = a || b;``
* There are four possible logical combinations:
```
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```
* As we can see, the result is always true except for the case when both operands are false.
* If an operand is not boolean, then it’s converted to boolean for the evaluation.
* For instance, a number 1 is treated as true, a number 0 – as false
* Given multiple OR’ed values:
``result = value1 || value2 || value3``
* a chain of OR "||" returns the first truthy value or the last one if no such value is found.


e.shiftKey
-------------------------------------
``var shiftKeyPressed = instanceOfKeyboardEvent.shiftKey
var shiftKeyPressed = instanceOfMouseEvent.shiftKey``
* The KeyboardEvent.shiftKey read-only property is a Boolean that indicates if the shift key was pressed (true) or not (false) when the event occurred.
* The MouseEvent.shiftKey read-only property is a Boolean that indicates whether the shift key was pressed or not when a given mouse event occurs.
```
function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "SHIFT key pressed: " + e.shiftKey + "\n"
    + "ALT key pressed: " + e.altKey + "\n"
  );
}
```


input.checked property
-------------------------------------
``<input type="checkbox" name="vehicle" value="Car" checked> I have a car``
* The checked attribute is a boolean attribute.
* When present, it specifies that an <input> element should be pre-selected (checked) when the page loads.
* The checked attribute can be used with <input type="checkbox"> and <input type="radio">.
* The checked attribute can also be set after the page load, with a JavaScript.