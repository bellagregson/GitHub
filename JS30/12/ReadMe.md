# Key Sequence Detection

arrays
---------------------------------------
``var array_name = [item1, item2, ...];``

* An array can hold many values under a single name
* You access an array element by referring to the index number.
* You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
``myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;``

Properties
* The length property returns the number of elements
* The sort() method sorts arrays
``
var x = cars.length; 
var y = cars.sort(); 
``

Methods
* The safest way to loop through an array, is using a "for" loop
* You can also use the Array.forEach() function
* The easiest way to add a new element to an array is using the push method
``fruits.push("Lemon");``


The Difference Between Arrays and Objects
* In JavaScript, arrays use numbered indexes.  
* In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects.
* JavaScript does not support associative arrays.
* You should use objects when you want the element names to be strings (text).
* You should use arrays when you want the element names to be numbers.


array.splice
---------------------------------------
``array.splice(index, howmany, item1, ....., itemX)``
* The splice() method adds/removes items to/from an array, and returns the removed item(s).
* This method changes the original array.

Parameter Values
* _index_	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
* _howmany_	Optional. The number of items to be removed. If set to 0, no items will be removed
* _item1, ..., itemX_	Optional. The new item(s) to be added to the array

At position 2, add the new items, and remove 1 item:

``
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
// output: Banana,Orange,Lemon,Kiwi,Mango
``


array.join
---------------------------------------
``array.join(separator)``
* The join() method joins the elements of an array into a string, and returns the string.
* The elements will be separated by a specified separator. 
* The default separator is a comma (,).

``
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
``


array.includes
---------------------------------------
``array.includes(element, start) ``
* The includes() method determines whether an array contains a specified element.
* This method returns true if the array contains the  element, and false if not.
* The includes() method is case sensitive.

Parameter Values
* _element_	Required. The element to search for
* _start_	Optional. Default 0. At which position in the array to start the search

``
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");
// output: true
``