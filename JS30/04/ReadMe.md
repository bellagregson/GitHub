# Array Cardio Day 1

Array.prototype.filter()
-----------------------------------
``array.filter(function(currentValue, index, arr), thisValue)``

* The filter() method creates an array filled with all array elements that pass a test (provided as a function).
* Note: filter() does not execute the function for array elements without values.
* Note: filter() does not change the original array.

* _currentValue_ Required. The value of the current element
* _index_ Optional. The array index of the current element
* _arr_ Optional. The array object the current element belongs to

``var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
// expected output: Array ["exuberant", "destruction", "present"]``


Array.prototype.map()
-----------------------------------
``array.map(function(currentValue, index, arr), thisValue)``

* The map() method creates a new array with the results of calling a function for every array element.
* The map() method calls the provided function once for each element in an array, in order.
* Note: map() does not execute the function for array elements without values.
* Note: map() does not change the original array.

* _currentValue_ Required. The value of the current element
* _index_ Optional. The array index of the current element
* _arr_ Optional. The array object the current element belongs to

``var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
// expected output: Array [2, 8, 18, 32]``


Array.prototype.sort()
-----------------------------------
``array.sort(compareFunction)``

* The sort() method sorts the items of an array.
* The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
* By default, the sort() method sorts the values as strings in alphabetical and ascending order.
* Note: This method changes the original array.

* _compareFunction_	Optional. A function that defines an alternative sort order. 
* The function should return a negative, zero, or positive value, depending on the arguments, like:
``function(a, b){return a-b}``
* When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

``var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5] ``


Array.prototype.reduce()
-----------------------------------
``array.reduce(function(total, currentValue, currentIndex, arr), initialValue)``

* The reduce() method reduces the array to a single value.
* The reduce() method executes a provided function for each value of the array (from left-to-right).
* The return value of the function is stored in an accumulator (result/total).
* Note: reduce() does not execute the function for array elements without values.

* _function()_ Required. A function to be run for each element in the array. Function arguments:
	* _total_	Required. The initialValue, or the previously returned value of the function
	* _currentValue_	Required. The value of the current element
	* _currentIndex_	Optional. The array index of the current element
	* _arr_ Optional. The array object the current element belongs to
* _initialValue_ Optional. A value to be passed to the function as the initial value

``const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10 ``


arrow function
-----------------------------------
``(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }``

* Arrow functions allows a short syntax for writing function expressions.
* You don't need the function keyword, the return keyword, and the curly brackets.
* Arrow functions do not have their own _this_. They are not well suited for defining object methods.
* Arrow functions are not hoisted. They must be defined before they are used.
* Using const is safer than using var, because a function expression is always constant value.
* You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them

``// ES5
var x = function(x, y) {
  return x * y;
}
// ES6
const x = (x, y) => x * y; 
const x = (x, y) => { return x * y }; // with return statement``


ternary operator
-----------------------------------
``variablename = (condition) ? value1:value2 ``

* The conditional (ternary) operator is the only JavaScript operator that takes three operands. 
* This operator is frequently used as a shortcut for the if statement.
* If condition can be converted to true (it is truthy), the operator returns the value of *value1*; otherwise (when condition is falsy) it returns the value of *value2*.
* (In either case, the other alternative expression is left unevaluated.)
* Besides false, possible falsy expressions are: null, NaN, 0, the empty string (""), and undefined. If condition is any of these, the result of the conditional expression will be *value2*

``var voteable = (age < 18) ? "Too young":"Old enough";``


