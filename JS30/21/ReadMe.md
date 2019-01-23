# Geolocation

Navigator.geolocation
-------------------------------------------------
``geo = navigator.geolocation``

The Navigator.geolocation read-only property returns a Geolocation object that gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.

Note: For security reasons, when a web page tries to access location information, the user is notified and asked to grant permission. Be aware that each browser has its own policies and methods for requesting this permission.

This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.


Geolocation
-------------------------------------------------

The Geolocation interface represents an object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.

An object with this interface is obtained using the navigator.geolocation property implemented by the Navigator object.

Note: For security reasons, when a web page tries to access location information, the user is notified and asked to grant permission. Be aware that each browser has its own policies and methods for requesting this permission.

This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

**Properties**

The Geolocation interface neither implements, nor inherits any property.

**Methods**

The Geolocation interface doesn't inherit any method.

_Geolocation.getCurrentPosition()_
Determines the device's current location and gives back a Position object with the data.

_Geolocation.watchPosition()_
Returns a long value representing the newly established callback function to be invoked whenever the device location changes.

_Geolocation.clearWatch()_
Removes the particular handler previously installed using watchPosition().


navigator.geolocation.getCurrentPosition()
-------------------------------------------------
``navigator.geolocation.getCurrentPosition(success[, error[, [options]])``

The Geolocation.getCurrentPosition() method is used to get the current position of the device.

**Parameters**

_success_
* A callback function that takes a Position object as its sole input parameter.

_error_
* An optional callback function that takes a PositionError object as its sole input parameter.

_options_
* An optional PositionOptions object.
* Options includes:
	* maximumAge: integer (milliseconds]) | infinity - maximum cached position age.
	* timeout: integer (milliseconds]) - amount of time before the error callback is invoked, if 0 it will never invoke.
	* enableHighAccuracy: false | true

**Examples**
```
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```


navigator.geolocation.watchPosition()
-------------------------------------------------
``id = navigator.geolocation.watchPosition(success[, error[, options]])``

The Geolocation method watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function.

This method returns a watch ID value that then can be used to unregister the handler by passing it to the Geolocation.clearWatch() method

**Parameters**

_success_
* A callback function that takes a Position object as an input parameter.

_error_
* An optional callback function that takes a PositionError object as an input parameter.

_options_
* An optional PositionOptions object that provides configuration options for the location watch.

**Example**
```
var id, target, options;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  latitude : 0,
  longitude: 0
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
```


Position.coords
-------------------------------------------------
``coord = position.coords``

The Position.coords read-only property, a Coordinates object, represents a geographic attitude

It contains the: 
* location (longitude and latitude on the Earth)
* altitude
* speed of the object concerned
* accuracy information about these values
...regrouped inside the returned value. 


Coordinates.heading
-------------------------------------------------
``heading = coordinates.heading``

The Coordinates.heading read-only property is a double representing the direction in which the device is traveling. 

This value, specified in degrees, indicates how far off from heading due north the device is. 

Zero degrees represents true true north, and the direction is determined clockwise (which means that east is 90 degrees and west is 270 degrees). 

If Coordinates.speed is 0, heading is NaN. If the device is not able to provide heading information, this value is null.


Coordinates.speed
-------------------------------------------------
``speed = coordinates.speed``

The Coordinates.speed read-only property is a double representing the velocity of the device in meters per second. 

This value is null if the implementation is not able to measure it.


innerText Property
-------------------------------------------------
Return the text content of a node:
``node.innerText``

Set the text content of a node:
``node.innerText = text``

The innerText property sets or returns the text content of the specified node, and all its descendants.

If you set the innerText property, any child nodes are removed and replaced by a single Text node containing the specified string.

Note: This property is similar to the textContent property, however there are some differences:

_textContent_ returns the text content of all elements, while innerText returns the content of all elements, except for _script_ and _style_ elements.

_innerText_ will not return the text of elements that are hidden with CSS (textContent will). 

Tip: To set or return the HTML content of an element, use the _innerHTML_ property.

**Property values**

text	
* Type: String
* Specifies the text content of the specified node

**Example**

Get the inner text of an element:
``var x = document.getElementById("myBtn").innerText;``

innerHTML Property
-------------------------------------------------
Return the innerHTML property:
``HTMLElementObject.innerHTML``

Set the innerHTML property:
``HTMLElementObject.innerHTML = text``

The innerHTML property sets or returns the HTML content (inner HTML) of an element.

**Property values**

text
* Specifies the HTML content of an element

**Examples**

Get the HTML content of a <p> element with id="myP":
```
var x = document.getElementById("myP").innerHTML;
```

Change the HTML content, URL, and target of a link:
```
document.getElementById("myAnchor").innerHTML = "W3Schools";
document.getElementById("myAnchor").href = "https://www.w3schools.com";
document.getElementById("myAnchor").target = "_blank";
```

textContent Property
-------------------------------------------------
Return the text content of a node:
``node.textContent``

Set the text content of a node:
``node.textContent = text``

The textContent property sets or returns the text content of the specified node, and all its descendants.

If you set the textContent property, any child nodes are removed and replaced by a single Text node containing the specified string.

Note: This property is similar to the innerText property, however there are some differences:

* _textContent_ returns the text content of all elements, while innerText returns the content of all elements, except for _script_ and _style_ elements.
* _innerText_ will not return the text of elements that are hidden with CSS (textContent will). 

Tip: Sometimes this property can be used instead of the nodeValue property, but remember that this property returns the text of all child nodes as well.

Tip: To set or return the HTML content of an element, use the innerHTML property.

**Property values**

text
* String
* Specifies the text content of the specified node

**Example**
Get all the textual content of an <ul> element with id="myList":
```
var x = document.getElementById("myList").textContent;
The value of x will be:

//Coffee Tea
```


Differences between innerText, innerHTML and textContent
-----------------------------------------------------

* _textContent_ returns the text content of all elements, while innerText returns the content of all elements, except for _script_ and _style_ elements.

* _innerText_ will not return the text of elements that are hidden with CSS (textContent will). 

* _innerHTML_ To set or return the HTML content of an element, use the innerHTML property.

**Example**

This example demonstrates some of the differences between innerText, innerHTML and textContent:
```
<p id="demo">   This element has extra spacing     and contains <span>a span element</span>.</p>

<script>
function getInnerText() {
  alert(document.getElementById("demo").innerText)
}

function getHTML() {
  alert(document.getElementById("demo").innerHTML)
}

function getTextContent() {
  alert(document.getElementById("demo").textContent)
}
</script>
```

Get the content of the <p> element above with the specified properties:

innerText returns: 
"This element has extra spacing and contains a span element."
_The innerText property returns just the text, without spacing and inner element tags._

innerHTML returns: 
"   This element has extra spacing     and contains <span>a span element</span>."
_The innerHTML property returns the text, including all spacing and inner element tags._

textContent returns: 
"   This element has extra spacing    and contains a span element."
_The textContent property returns the text with spacing, but without inner element tags._


Style transform CSS Property
------------------------------------------------
Return the transform property:
``object.style.transform``

Set the transform property:
``object.style.transform = "none|transform-functions|initial|inherit"``

The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.

**Property values**

rotate(angle)
* Defines a 2D rotation, the angle is specified in the parameter

**Example**

Rotate a div element:
```
document.getElementById("myDIV").style.transform = "rotate(7deg)";
```