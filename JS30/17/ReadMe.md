# Sort Without Articles

Array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp

array.sort()
--------------------------------------------
``array.sort(compareFunction)``

The sort() method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the sort() method sorts the values as strings in alphabetical and ascending order.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce an incorrect result when sorting numbers.

You can fix this by providing a "compare function" (See "Parameter Values" below).

Note: This method changes the original array.


**Parameter Values**

compareFunction	
* Optional. 
* A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:

``function(a, b){return a-b}``

When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

When comparing 40 and 100, the sort() method calls the compare function(40,100).

The function calculates 40-100, and returns -60 (a negative value).

The sort function will sort 40 as a value lower than 100.


**Example**

Sort numbers in an array in ascending order:
```
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
```

Get the highest value in an array:
```
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});    // Sort the numbers in the array in descending order
// The first item in the array (points[0]) is now the highest value
```

Sort an array alphabetically, and then reverse the order of the sorted items (descending):
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
```


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


string.startsWith()
--------------------------------------------
``string.startsWith(searchvalue, start)``

The startsWith() method determines whether a string begins with the characters of a specified string.

This method returns true if the string begins with the characters, and false if not.

Note: The startsWith() method is case sensitive.

***Parameter Values***

searchvalue	
* Required. 
* The string to search for

start	
* Optional. 
* Default 0. 
*  which position to start the search

***Example***
Check if a string starts with "Hello":
```
var str = "Hello world, welcome to the universe.";
var n = str.startsWith("Hello");
```


string.substr()
--------------------------------------------
``string.substr(start, length)``

The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

Tip: To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).

Note: The substr() method does not change the original string.

***Parameter Values***

start	
* Required.
* The position where to start the extraction. First character is at index 0.
* If start is positive and greater than, or equal, to the length of the string, substr() returns an empty string.
* If start is negative, substr() uses it as a character index from the end of the string. 
* If start is negative or larger than the length of the string, start is set to 0

length	
* Optional. 
* The number of characters to extract. 
* If omitted, it extracts the rest of the string

***Example***

Extract parts of a string:
```
var str = "Hello world!";
var res = str.substr(1, 4);
```


array.some()
--------------------------------------------
``array.some(function(currentValue, index, arr), thisValue)``

The some() method checks if any of the elements in an array pass a test (provided as a function).

The some() method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)

Otherwise it returns false

Note: some() does not execute the function for array elements without values.

Note: some() does not change the original array.

***Parameter Values***

function(currentValue, index, arr)	
* Required. A function to be run for each element in the array.
* Function arguments:
	* _currentValue_ Required. The value of the current element
	* _index_ Optional. The array index of the current element
	* _arr_	Optional. The array object the current element belongs to

thisValue	
* Optional. 
* A value to be passed to the function to be used as its "this" value.
* If this parameter is empty, the value "undefined" will be passed as its "this" value

***Example***

Check if any values in the ages array are 18 or over:
```
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}
```


array.findIndex()
--------------------------------------------
``array.findIndex(function(currentValue, index, arr), thisValue) ``

The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).

The findIndex() method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)

Otherwise it returns -1

Note: findIndex() does not execute the function for array elements without values.

Note: findIndex() does not change the original array.

***Parameter Values***

function(currentValue, index, arr)	
* Required. A function to be run for each element in the array.
* Function arguments:
	* _currentValue_ Required. The value of the current element
	* _index_ Optional. The array index of the current element
	* _arr_	Optional. The array object the current element belongs to

thisValue	
* Optional. 
* A value to be passed to the function to be used as its "this" value.
* If this parameter is empty, the value "undefined" will be passed as its "this" value


**Example**

Get the index of the first element in the array that has a value of 18 or more:
```
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
}
```


array.includes()
--------------------------------------------
``array.includes(element, start)``

The includes() method determines whether an array contains a specified element.

This method returns true if the array contains the  element, and false if not.

Note: The includes() method is case sensitive.

**Parameter Values**

* _element_	Required. The element to search for
* _start_	Optional. Default 0. At which position in the array to start the search

***Example***

Check if an array includes "Mango":
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");
```


