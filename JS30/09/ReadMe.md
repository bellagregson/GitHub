# Dev Tools Domination

To identify where JS is used to manipulate a page element
-------------------------------------------------
1. Right-click > Inspect element 
2. Select Break on.. > Attribute modifications
3. Interact with element in order to trigger JavaScript function
4. A debug window should appear and stop at the breakpoint in the JS being triggered


console styling
------------------------------------------------
``console.log("%cThis will be formatted with large, blue text", "color: blue; font-size: x-large");``
* The CSS format specifier allows you to customize the display in the console
* Start the string with the specifier and give the style you wish to apply as the second parameter.


console.warn()
-------------------------------------------------
``console.warn('Warning! Too few nodes (%d)', a.childNodes.length);
}``
* The console.warn() method displays a yellow warning icon with the message text


console.error()
-------------------------------------------------
``console.error("Error: %s (%i)", "Server is  not responding",500);``
* The console.error() method displays a red icon along with red message text


console.info
-------------------------------------------------
* Identical to console.log().


console.assert
-------------------------------------------------
``console.assert(list.childNodes.length <= 500, "Node count is > 500");``
* The _console.assert()_ method conditionally displays an error string (its second parameter) only if its first parameter evaluates to false.


console.clear()
-------------------------------------------------
* Clears the console
* If the Preserve log checkbox is enabled, console.clear() is disabled


console.log()
-------------------------------------------------
``console.log(document.body)``
- prints the element in an HTML-like tree
- gives special treatment to DOM elements


console.dir() 
-------------------------------------------------
``console.dir(document.body)``
* prints the element in a JSON-like tree
* view all properties & methods that live on element


console.group, console.groupEnd(), console.groupCollapsed
-------------------------------------------------
```
console.group("Authentication phase");
// or console.groupCollapsed()
console.log("Authenticating user '%s'", user);
// authentication code here...
if (!authenticated) {
    console.log("User '%s' not authenticated.", user)
}
console.groupEnd();
```

* _console.group('name')_ command takes a single string parameter to set the name of the group.
* After calling it in your JavaScript, the console will begin to group all subsequent output together.
* To end the grouping you only need to call _console.groupEnd()_ when you're done.
* Log groups may also nest within each other. This is useful to see a large group in smaller pieces at a time
* When using groups heavily, it can be very useful to not see everything as it happens. For these times you can automatically collapse groups by calling _console.groupCollapsed()_ instead of _console.group()_


console.count()
-------------------------------------------------
``console.count(label);``
* Logs the number of times that this particular call to count() has been called
* This function takes an optional argument label
* If label is supplied, this function logs the number of times count() has been called with that particular label
* If label is omitted, the function logs the number of times count() has been called at this particular line


console.time(), console.timeEnd()
------------------------------------------------
```
console.time('total');
var arr = new Array(10000);
for (var i = 0; i < arr.length; i++) {
  arr[i] = new Object();
}
console.timeEnd('total');
// total: 3.696044921875ms
```

* Starts a new timer. 
* Call console.timeEnd() to stop the timer and print the elapsed time to the Console.
* Pass an optional label to change the output text that precedes the elapsed time. 
* Call console.timeEnd() with the same label to stop the timer.


console.table(array)
-------------------------------------------------
```
let data = [
  { name: "Yusuf", age: 26 },
  { age: 34, name: "Chen" }
];
console.table(data);
```
* Logs an array of objects as a table.


console.log() string substitution
-------------------------------------------------
``console.log("%s has %d points", "Sam", 100);``
* The first parameter passed to any of the logging methods may contain one or more format specifiers
* A format specifier consists of a % symbol followed by a letter that indicates the formatting that applies to the value
* The parameters following the string apply to the placeholders in order

* _%s_	Formats the value as a string
* _%i_ or _%d_	Formats the value as an integer
* _%f_	Formats the value as a floating point value
* _%o_	Formats the value as an expandable DOM element. As seen in the Elements panel
* _%O_	Formats the value as an expandable JavaScript object
* _%c_	Applies CSS style rules to the output string as specified by the second parameter