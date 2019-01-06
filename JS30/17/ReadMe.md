# Sort Without Articles

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