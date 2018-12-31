# Object and Arrays - Reference VS Copy

JavaScript Objects are Mutable
---------------------------------------------
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

``var x = person;  // This will not create a copy of person.``

The object x is not a copy of person. It is person. Both x and person are the same object.

Any changes to x will also change person, because x and person are the same object.

Example
```
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
var x = person;
x.age = 10; // This will change both x.age and person.age
```

 array.slice() method
---------------------------------------------
``array.slice(start, end)``

The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array will not be changed.

*Parameter values*

start	
* Optional. 
* An integer that specifies where to start the selection (The first element has an index of 0). 
* Use negative numbers to select from the end of an array. 
* If omitted, it acts like "0"

end	
* Optional. 
* An integer that specifies where to end the selection. 
* If omitted, all elements from the start position and to the end of the array will be selected. 
* Use negative numbers to select from the end of an array


array.concat() method
---------------------------------------------
``array1.concat(array2, array3, ..., arrayX)``

The concat() method is used to join two or more arrays.

This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

```
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
```


ES6 spread syntax
---------------------------------------------

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

*Combine Arrays*
There have always been a variety of ways to combine arrays, but the spread operator gives use a new method for combining arrays:

```
arr1.push(...arr2) // Adds arr2 items to end of array
arr1.unshift(...arr2) //Adds arr2 items to beginning of array
```

If you'd like to combine two arrays and place elements at any point within the array, you can do as follows:

```
var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five'];
// ["one", "two", "three", "four", "five"]
```

Shorter syntax than other methods while adding positional control!

*Copying Arrays*
Getting a copy of an array is a frequent tasks, something  we've used Array.prototype.slice to do in the past, but we can now use the spread operator to get a copy of an array:

```
var arr = [1,2,3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4)
```

Remember: objects within the array are still by reference, so not everything gets "copied", per se.

*Convert arguments or NodeList to Array*

Much like copying arrays, we've used Array.Prototype.slice to convert NodeList and arguments objects and to true arrays, but now we can use the spread operator to complete that task:

``[...document.querySelectorAll('div')]``



array.from()
---------------------------------------------

``Array.from(object, mapFunction, thisValue)``

The Array.from() method returns an Array object from any object with a length property or an iterable object.

Create an Array from a String:
``var myArr = Array.from("ABCDEFG");``

Parameter Variables
* _object_	Required. The object to convert to an array
* _mapFunction_	Optional. A map function to call on each item of the array
* _thisValue_	Optional. A value to use as this when executing the mapFunction


object.assign()
---------------------------------------------
``Object.assign(target, ...sources)``

The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 

It will return the target object.

Parameter values
* _target_ The target object.
* _sources_ The source object(s).

Properties in the target object will be overwritten by properties in the sources if they have the same key.  

Later sources' properties will similarly overwrite earlier ones.  

The Object.assign() method only copies enumerable and own properties from a source object to a target object. 

It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties versus just copying or defining new properties. 

This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters. For copying property definitions, including their enumerability, into prototypes Object.getOwnPropertyDescriptor() and Object.defineProperty() should be used instead.

Both String and Symbol properties are copied.

In case of an error, for example if a property is non-writable, a TypeError will be raised, and the target object can be changed if any properties are added before error is raised.

Note that Object.assign() does not throw on null or undefined source values.

```
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };
var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```



JSON.parse()
---------------------------------------------
``JSON.parse(string, function)``

The JSON.parse() method parses a string and returns a JavaScript object.

The string has to be written in JSON format.

The JSON.parse() method can optionally transform the result with a function.

*Parameter values*

string	
* Required. 
* A string written in JSON format

reviver function	
* Optional. 
* A function used to transform the result. The function is called for each item. Any nested objects are transformed before the parent.
* If the function returns a valid value, the item value is replaced with the transformed value
* If the function returns null or undefined, the item is deleted

Parse a string (written in JSON format) and return a JavaScript object:

``var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');``


JSON.parse()
---------------------------------------------
``JSON.stringify(obj, replacer, space)``

The JSON.stringify() method converts JavaScript objects into strings.

When sending data to a web server the data has to be a string.

*Parameter values* 

obj	
* Required. 
* The value to convert to a string

replacer	
* Optional. 
* Either a function or an array used to transform the result. 
* The replacer is called for each item.

space	
* Optional. 
* Either a String or a Number.
* A string to be used as white space (max 10 characters),
or a Number, from 0 to 10, to indicate how many space characters to use as white space.

