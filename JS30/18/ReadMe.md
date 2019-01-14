# Adding Up Times with Reduce

Math.reduce()
---------------------------------
``array.reduce(function(total, currentValue, currentIndex, arr), initialValue)``

* The reduce() method reduces the array to a single value.
* The reduce() method executes a provided function for each value of the array (from left-to-right).
* The return value of the function is stored in an accumulator (result/total).
* Note: reduce() does not execute the function for array elements without values.

**Parameter Values**

* _function(total,currentValue, index,arr)_
	* Required. A function to be run for each element in the array. Function arguments:
	* _total_	Required. The initialValue, or the previously returned value of the function
	* _currentValue_	Required. The value of the current element
	* _currentIndex_	Optional. The array index of the current element
	* _arr_	Optional. The array object the current element belongs to
* _initialValue_	Optional. A value to be passed to the function as the initial value

**Example**

Round all the numbers in an array, and display the sum:
```
<button onclick="myFunction()">Try it</button>

<p>Sum of numbers in array: <span id="demo"></span></p>

<script>
var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}

function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);
}
</script>
```



Array.from()
-------------------------------
``Array.from(object, mapFunction, thisValue)``

* The Array.from() method returns an Array object from any object with a **length property** or an **iterable object**.

**Parameter Values**

* _object_	Required. The object to convert to an array
* _mapFunction_	Optional. A map function to call on each item of the array
* _thisValue_	Optional. A value to use as this when executing the mapFunction

**Example**

Create an Array from a String
``var myArr = Array.from("ABCDEFG");``



Using data attributes
---------------------------------

* Any attribute on any element whose attribute name starts with **data-** is a data attribute. 
* Say you have an article and you want to store some extra information that doesn’t have any visual representation. 
* Just use data attributes for that.

```
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

**JavaScript access**

* You could use **getAttribute()** with their full HTML name to read them
* The standard defines a simpler way: a DOMStringMap you can read out via a **dataset** property.

To get a data attribute through the dataset object:
* Get the property by the part of the attribute name after data
* Dashes are converted to camelCase

```
var article = document.getElementById('electriccars');
 
article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```



Array.map()
---------------------------------
``array.map(function(currentValue, index, arr), thisValue)``

* The map() method creates a new array with the results of calling a function for every array element.
* The map() method calls the provided function once for each element in an array, in order.
* Note: map() does not execute the function for array elements without values.
* Note: map() does not change the original array.

**Parameter Values**

* _function(currentValue, index, arr)_	Required. A function to be run for each element in the array.
* Function arguments:
	* _currentValue_	Required. The value of the current element
	* _index_	Optional. The array index of the current element
	* _arr_	Optional. The array object the current element belongs to
* _thisValue_	Optional. A value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

**Example** 

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



String.split()
---------------------------------
``string.split(separator, limit)``

* The split() method is used to split a string into an array of substrings, and returns the new array.
* Tip: If an empty string ("") is used as the separator, the string is split between each character.
* Note: The split() method does not change the original string.

** Parameter Values**

* _separator_	Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)
* _limit_	Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array

**Example**

Split a string into an array of substrings:
``` 
var str = "How are you doing today?";
 var res = str.split(" ");
 document.getElementById("demo").innerHTML = res;
 // How,are,you,doing,today?
 ```

 Use the limit parameter:
```
var str = "How are you doing today?";
var res = str.split(" ", 3);
// How,are,you
```



The Unary + Operator
---------------------------------

The unary **+** operator can be used to convert a variable to a number:

Example
```
var y = "5";      // y is a string
var x = + y;      // x is a number
```

If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

Example
```
var y = "John";   // y is a string
var x = + y;      // x is a number (NaN)
```



parseFloat()
---------------------------------
``parseFloat(string)``

* The parseFloat() function parses a string and returns a floating point number.
* This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.
* Note: Only the first number in the string is returned!
* Note: Leading and trailing spaces are allowed.
* Note: If the first character cannot be converted to a number, parseFloat() returns NaN.

**Parameter Values**

* _string_	Required. The string to be parsed

**Example**

Parse different strings:
```
var a = parseFloat("10") + "<br>";
var b = parseFloat("10.00") + "<br>";
var c = parseFloat("10.33") + "<br>";
var d = parseFloat("34 45 66") + "<br>";
var e = parseFloat(" 60 ") + "<br>";
var f = parseFloat("40 years") + "<br>";
var g = parseFloat("He was 40") + "<br>";

var n = a + b + c + d + e + f + g;

// results
10
10
10.33
34
60
40
NaN
```



Math.floor()
---------------------------------
``Math.floor(x)``

* The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
* If the passed argument is an integer, the value will not be rounded.

**Parameter Values**

* _x_	Required. The number you want to round

**Example**

Round a number downward to its nearest integer:
```
Math.floor(1.6);
// 1
```


Modulus / Remainder
---------------------------------
``x = y % 2``

* The modulus operator (%) returns the division remainder.
* In arithmetic, the division of two integers produces a quotient and a remainder.
* In mathematics, the result of a modulo operation is the remainder of an arithmetic division.

Example
```
var x = 5;
var y = 2;
var z = x % y;
```
