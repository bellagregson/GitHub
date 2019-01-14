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

Parameter Values
* _object_	Required. The object to convert to an array
* _mapFunction_	Optional. A map function to call on each item of the array
* _thisValue_	Optional. A value to use as this when executing the mapFunction

Example
Create an Array from a String:
``var myArr = Array.from("ABCDEFG");``



Date/Time object
---------------------------------




