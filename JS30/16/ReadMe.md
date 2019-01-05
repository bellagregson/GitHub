#Mouse Shadow




ES6 Destructuring
---------------------------------------

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

It allows you to extract individual items from arrays or objects and place them into variables using a shorthand syntax.

Without destructuring assignment, you might access the first three items in an array like this:

```
var first = someArray[0];
var second = someArray[1];
var third = someArray[2];
```

With destructuring assignment, the equivalent code becomes more concise and readable:

``var [first, second, third] = someArray;``

**Examples**

Basic variable assignment
```
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

Assignment separate from declaration
A variable can be assigned its value via destructuring separate from the variable's declaration.
```
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

Ignoring some returned values
You can ignore return values that you're not interested in:
```
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
```

Assigning the rest of an array to a variableSection
When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:
```
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```


element.offsetWidth, element.offsetHeight
---------------------------------------
``element.offsetWidth``
``element.offsetHeight``

The offsetWidth and offsetHeight properties return the viewable width of an element in pixels, including padding, border and scrollbar, **but not the margin**.

The reason why the "viewable" word is specified, is because if the element's content is wider than the actual width of the element, this property will only return the width that is visible 

Note: To understand this property, you must understand the CSS Box Model.

Tip: Use the clientHeight and clientWidth properties to return the viewable height and width of an element, only including the padding.

Tip: To add scrollbars to an element, use the CSS overflow property.

This property is read-only.

**Example**

This example demonstrates the difference between clientHeight/clientWidth and offsetHeight/offsetWidth:
```
var elmnt = document.getElementById("myDIV");
var txt = "";
txt += "Height with padding: " + elmnt.clientHeight + "px<br>";
txt += "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
txt += "Width with padding: " + elmnt.clientWidth + "px<br>";
txt += "Width with padding and border: " + elmnt.offsetWidth + "px";
```


Math.round()
---------------------------------------
`` Math.round(x)``
The round() method rounds a number to the nearest integer.

Note: 2.49 will be rounded down (2), and 2.5 will be rounded up (3).

***Example***
Round different numbers to the nearest integer:
```
var a = Math.round(2.60);
var b = Math.round(2.50);
var c = Math.round(2.49);
```


style.textShadow
---------------------------------------
```
// Return the textShadow property
object.style.textShadow
```
```
// Set the textShadow property
object.style.textShadow = "none|h-shadow v-shadow blur color|initial|inherit"
```
The textShadow property attaches or returns one or more shadow effects to text. 

The property is a comma-separated list of shadows, each specified by 2 or 3 length values and an optional color. Omitted lengths are 0.

***Property Values***
* _none_	No shadow is drawn. This is default
* _h-shadow_	Required. The position of the horizontal shadow. Negative values are allowed
* _v-shadow_	Required. The position of the vertical shadow. Negative values are allowed
* _blur_	Optional. The blur distance
* _color_	Optional. The color of the shadow. Look at CSS Color Values for a complete list of possible color values
* _initial_	Sets this property to its default value. Read about initial
* _inherit_	Inherits this property from its parent element. Read about inherit

***Example***

Add shadow to a text:
```
document.getElementById("myP").style.textShadow = "5px 5px 1px #ff0000, 10px 10px 1px #0000ff";
```