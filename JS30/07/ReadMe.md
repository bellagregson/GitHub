// This project uses the following

Array.prototype.some() 
---------------------------
```array.some(function(currentValue, index, arr), thisValue)```
```[2, 5, 8, 1, 4].some(x => x > 10);  // false```
* The some() method checks if any of the elements in an array pass a test (provided as a function).
* The some() method executes the function once for each element present in the array:
* If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values). Otherwise it returns false
* some() does not execute the function for array elements without values.
* some() does not change the original array.



Array.prototype.every()
---------------------------
```array.every(function(currentValue, index, arr), thisValue)```
```[12, 54, 18, 130, 44].every(x => x >= 10); // true```
* The every() method checks if all elements in an array pass a test (provided as a function).
* The every() method executes the function once for each element present in the array
* If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
* If no false occur, every() returns true
* every() does not execute the function for array elements without values.
* every() does not change the original array


Array.prototype.find()
---------------------------
```array.find(function(currentValue, index, arr),thisValue)```
```const result = inventory.find( fruit => fruit.name === 'cherries' );```
* The find() method returns the value of the first element in an array that pass a test (provided as a function).
* The find() method executes the function once for each element present in the array:
* If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
* Otherwise it returns undefined
* _currentValue_ Required. The value of the current element
* _index_ Optional. The array index of the current element
* _arr_	Optional. The array object the current element belongs to
* find() does not execute the function for empty arrays.
* find() does not change the original array.


Array.prototype.findIndex()
---------------------------
```array.findIndex(function(currentValue, index, arr), thisValue)```
```const index = fruits.findIndex(fruit => fruit === "blueberries");```
* The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
* The findIndex() method executes the function once for each element present in the array:
* If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
* Otherwise it returns -1
* findIndex() does not execute the function for array elements without values.
* findIndex() does not change the original array.