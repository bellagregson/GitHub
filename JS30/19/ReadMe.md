# Webcam Fun

## DOM

document.createElement()
--------------------------------------
``document.createElement(nodename)`` 

The createElement() method creates an Element Node with the specified name.

Tip: Use the createTextNode() method to create a text node.

Tip: After the element is created, use the element.appendChild() or element.insertBefore() method to insert it to the document.

**Parameter values**

nodename  
* String 
* Required. 
* The name of the element you want to create

**Example**

Create a <p> element with some text, and append it to the document:
```
var para = document.createElement("P");  // Create a <p> element
var t = document.createTextNode("Hi Mom");   // Create a text node
para.appendChild(t);      // Append the text to <p>
document.body.appendChild(para);   // Append <p> to <body>
```

element.insertBefore()
--------------------------------------
``node.insertBefore(newnode, existingnode)``

The insertBefore() method inserts a node as a child, right before an existing child, which you specify.

Tip: If you want to create a new list item, with text, remember to create the text as a Text node which you append to the <li> element, then insert <li> to the list.

You can also use the insertBefore method to insert/move an existing element 

**Parameter values**

newnode 
* Node object 
* Required. 
* The node object you want to insert

existingnode  
* Node object 
* Required. 
* The child node you want to insert the new node before. 
* If set to null, the insertBefore method will insert the newnode at the end

**Example**

Move a <li> element from one list to another:
```
var node = document.getElementById("myList2").lastChild;
var list = document.getElementById("myList1");
list.insertBefore(node, list.childNodes[0]);
```

element.setAttribute()
-----------------------------------
``element.setAttribute(attributename, attributevalue)``

The setAttribute() method adds the specified attribute to an element, and gives it the specified value.

If the specified attribute already exists, only the value is set/changed.

Note: Although it is possible to add the style attribute with a value to an element with this method, it is recommended that you use properties of the Style object instead for inline styling, because this will not overwrite other CSS properties that may be specified in the style attribute:

Bad example:
``element.setAttribute("style", "background-color: red;");``

Tip: Use the _removeAttribute()_ method to remove an attribute from an element.

Tip: See also the _setAttributeNode()_ method.

**Parameter values**

attributename 
* String  
* Required. 
* The name of the attribute you want to add

attributevalue  
* String  
* Required. 
* The value of the attribute you want to add

** Example**

Add the class attribute with the value of "democlass" to a <h1> element:
``document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");``

Change an input field to an input button:
``document.getElementsByTagName("INPUT")[0].setAttribute("type", "button");``


<a> tag
--------------------------------------

The <a> tag defines a hyperlink, which is used to link from one page to another.

The most important attribute of the <a> element is the href attribute, which indicates the link's destination.

Tip: The following attributes: **download, hreflang, media, rel, target, and type** cannot be present if the href attribute is not present.


**Attributes**

These are just a few of the many attributes

download  
* value = filename  
* Specifies that the target will be downloaded when a user clicks on the hyperlink

href  
* value = URL 
* Specifies the URL of the page the link goes to

hreflang  
* value = language_code 
* Specifies the language of the linked document

media 
* value = media_query 
* Specifies what media/device the linked document is optimized for

type  
* value = media_type  
* Specifies the media type of the linked document




## Video

Navigator.mediaDevices
--------------------------------------
``var mediaDevices = navigator.mediaDevices;``
The Navigator.mediaDevices read-only property returns a MediaDevices object, which provides access to connected media input devices like cameras and microphones, as well as screen sharing.



mediaDevices interface
---------------------------------------
The MediaDevices interface provides access to connected media input devices like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data.

**Properties**
Inherits properties from its parent interface, EventTarget.

MediaDevices.ondevicechange event handler
``MediaDevices.ondevicechange``
The event handler for the devicechange event. This event is delivered to the MediaDevices object when a media input or output device is attached to or removed from the user's computer

**Methods**
Inherits methods from its parent interface, EventTarget

enumerateDevices()
* Obtains an array of information about the media input and output devices available on the system.

getSupportedConstraints()
* Returns an object conforming to MediaTrackSupportedConstraints indicating which constrainable properties are supported on the MediaStreamTrack interface. 
* See Capabilities and constraints in Media Capture and Streams API (Media Stream) to learn more about constraints and how to use them.

getDisplayMedia()
* Prompts the user to select a display or portion of a display (such as a window) to capture as a MediaStream for sharing or recording purposes.  
* Returns a promise that resolves to a MediaStream.

getUserMedia()
* With the user's permission through a prompt, turns on a camera and/or a microphone on the system and provides a MediaStream containing a video track and/or an audio track with the input.



MediaDevices.getUserMedia() Method
-------------------------------------------------

The MediaDevices getUserMedia() method prompts the user for permission to use a media input which produces a MediaStream with tracks containing the requested types of media. 

* That stream can include, for example:
	* a video track (produced by either a hardware or virtual video source such as a camera, video recording device, screen sharing service, and so forth)
	* an audio track (similarly, produced by a physical or virtual audio source like a microphone, A/D converter, or the like)
	* and possibly other track types
* It returns a Promise that resolves to a MediaStream object. 
* If the user denies permission, or matching media is not available, then the promise is rejected with _PermissionDeniedError_ or _NotFoundError_ respectively.

Note: It's possible for the returned promise to neither resolve nor reject, as the user is not required to make a choice at all and may simply ignore the request.

Generally, you will access the MediaDevices singleton object using _navigator.mediaDevices_, like this:
```
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* use the stream */
})
.catch(function(err) {
  /* handle the error */
});
SyntaxSection
var promise = navigator.mediaDevices.getUserMedia(constraints);
```

**Parameters**

constraints
* A _MediaStreamConstraints_ object specifying the types of media to request, along with any requirements for each type.
* The constraints parameter is a _MediaStreamConstraints_ object with two members: *video and audio*, describing the media types requested. 
* Either or both must be specified. If the browser cannot find all media tracks with the specified types that meet the constraints given, then the returned promise is rejected with NotFoundError.
* The following requests both audio and video without any specific requirements:
```
{ audio: true, video: true }
```

* If true is specified for a media type, the resulting stream is required to have that type of track in it. If one cannot be included for any reason, the call to getUserMedia() will result in an error.

While information about a user's cameras and microphones are inaccessible for privacy reasons, an application can request the camera and microphone capabilities it needs and wants, using additional constraints. The following expresses a preference for 1280x720 camera resolution:
```
{
  audio: true,
  video: { width: 1280, height: 720 }
}
```
The browser will try to honor this, but may return other resolutions if an exact match is not available, or the user overrides it.

To require a capability, use the keywords min, max, or exact (a.k.a. min == max). The following demands a minimum resolution of 1280x720:
```
{
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 }
  }
}
```
If no camera exists with this resolution or higher, then the returned promise will be rejected with _OverconstrainedError_, and the user will not be prompted.

On mobile devices, the following will prefer the front camera (if one is available) over the rear one:
```
{ audio: true, video: { facingMode: "user" } }
```

To require the rear camera, use:
```
{ audio: true, video: { facingMode: { exact: "environment" } } }

```

**Return value**

A Promise whose fulfillment handler receives a MediaStream object when the requested media has successfully been obtained.

**Exceptions**

Rejections of the returned promise are made by passing a DOMException error object to the promise's failure handler. Possible errors are:

_AbortError_
Although the user and operating system both granted access to the hardware device, and no hardware issues occurred that would cause a NotReadableError, some problem occurred which prevented the device from being used.

_NotAllowedError_
The user has specified that the current browsing instance is not permitted access to the device; or the user has denied access for the current session; or the user has denied all access to user media devices globally.
Older versions of the specification used SecurityError for this instead; SecurityError has taken on a new meaning.

_NotFoundError_
No media tracks of the type specified were found that satisfy the given constraints.

_NotReadableError_
Although the user granted permission to use the matching devices, a hardware error occurred at the operating system, browser, or Web page level which prevented access to the device.

_OverconstrainedError_
The specified constraints resulted in no candidate devices which met the criteria requested. The error is an object of type OverconstrainedError, and has a constraint property whose string value is the name of a constraint which was impossible to meet, and a message property containing a human-readable string explaining the problem.
Because this error can occur even when the user has not yet granted permission to use the underlying device, it can potentially be used as a fingerprinting surface.

_SecurityError_
User media support is disabled on the Document on which getUserMedia() was called. The mechanism by which user media support is enabled and disabled is left up to the individual user agent.

_TypeError_
The list of constraints specified is empty, or has all constraints set to false.

**Examples**

Width and heightSection
This example gives a preference for camera resolution, and assigns the resulting MediaStream object to a video element.
```
// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 1280, height: 720 } }; 

n(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
   = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
```


HTMLMediaElement.srcObject
----------------------------------------------

``var sourceObject = HTMLMediaElement.srcObject;``

``HTMLMediaElement.srcObject = sourceObject;``

The srcObject property of the HTMLMediaElement interface sets or returns the object which serves as the source of the media associated with the HTMLMediaElement. The object can be a MediaStream, a MediaSource, a Blob, or a File (which inherits from Blob).

Note: As of November 2017, browsers only support MediaStream. For MediaSource, Blob and File, you have to create a URL with URL.createObjectURL() and assign it to HTMLMediaElement.src. See below for an example.

Older versions of the Media Source specification required using createObjectURL() to create an object URL then setting src to that URL. Now you can just set srcObject to the MediaStream directly.

**Parameter values**

A MediaStream, MediaSource, Blob, or File object (though see the compatibility table for what is actually supported).

**Examples** 

In this example, a media source is assigned to a newly-created <video> element.
```
const mediaSource = new MediaSource();
const video = document.createElement('video');
video.srcObject = mediaSource;
```


video.src property
----------------------------------------------
Return the src property:
``videoObject.src``

Set the src property:
``videoObject.src = URL``

The src property sets or returns the value of the src attribute of a video.

The src attribute specifies the location (URL) of the video file.


**Property Values**

URL 
* Specifies the URL of the video file.
* An absolute URL - points to another web site (like src="http://www.example.com/movie.ogg")
* A relative URL - points to a file within a web site (like src="movie.ogg")




URL.createObjectURL()
----------------------------------------------
``objectURL = URL.createObjectURL(object);``

The URL.createObjectURL() method creates a DOMString containing a URL representing the object given in the parameter. 

The URL lifetime is tied to the document in the window on which it was created. 

The new object URL represents the specified File object or Blob object.

To release an object URL, call _revokeObjectURL()_

Note: This feature is available in Web Workers.
Note: This feature is not available in Service Workers due to its potential to create memory leaks.

** Parameter Values**

object
* A File, Blob or MediaSource object to create an object URL for.
* Return value: A DOMString containing an object URL that can be used to reference the contents of the specified source object.


** Examples **

Using object URLs to display images:
```
const img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
```      



video.canplay Event
------------------------------------------

In HTML:
``<audio|video oncanplay="myScript">``

In JavaScript:
``audio|video.oncanplay=function(){myScript};``

In JavaScript, using the addEventListener() method:
``audio|video.addEventListener("canplay", myScript);``

The canplay event occurs when the browser can start playing the specified audio/video (when it has buffered enough to begin).

During the loading process of an audio/video, the following events occur, in this order:

* loadstart
* durationchange
* loadedmetadata
* loadeddata
* progress
* canplay
* canplaythrough

**Example**

Alert that the audio is ready to start playing:
```
var aud = document.getElementById("myAudio");
aud.oncanplay = function() {
    alert("Can start playing audio");
};
```


## Screen capture

ctx.drawImage()
------------------------------------------
```
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

The CanvasRenderingContext2D.drawImage() method of the Canvas 2D API provides different ways to draw an image onto the canvas.


**Parameters**

image
An element to draw into the context. The specification permits any canvas image source (CanvasImageSource), specifically, a CSSImageValue, an HTMLImageElement, an SVGImageElement, an HTMLVideoElement, an HTMLCanvasElement, an ImageBitmap, or an OffscreenCanvas.

sx Optional
The x-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.

sy Optional
The y-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.

sWidth Optional
The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and 
sy to the bottom-right corner of the image is used.

sHeight Optional
The height of the sub-rectangle of the source image to draw into the destination context.

dx
The x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.

dy
The y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.

dWidth Optional
The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.

dHeight Optional
The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.


**Exceptions thrown**

INDEX_SIZE_ERR
If the canvas or source rectangle width or height is zero.

INVALID_STATE_ERR
The image has no image data.

TYPE_MISMATCH_ERR
The specified source element isn't supported.

NS_ERROR_NOT_AVAILABLE
The image is not loaded yet. Use .complete === true and .onload to determine when it is ready.

**Example**

```
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');

ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
```



HTMLCanvasElement.toDataURL()
------------------------------------------
``canvas.toDataURL(type, encoderOptions);``

The HTMLCanvasElement.toDataURL() method returns a data URI containing a representation of the image in the format specified by the type parameter (defaults to PNG). The returned image is in a resolution of 96 dpi.

If the height or width of the canvas is 0, the string "data:," is returned.

If the requested type is not image/png, but the returned value starts with data:image/png, then the requested type is not supported.

Chrome also supports the image/webp type

**Parameter Values**

type 
* Optional
* A DOMString indicating the image format. The default format type is image/png.

encoderOptions 
* Optional
* A Number between 0 and 1 indicating the image quality to use for image formats that use lossy compression such as image/jpeg and image/webp.
* If this argument is anything else, the default value for image quality is used. The default value is 0.92. Other arguments are ignored

**Return value**

* A DOMString containing the requested data URI.

**Exceptions**

SecurityError
* The canvas's bitmap is not origin clean; at least some of its contents have or may have been loaded from a site other than the one from which the document itself was loaded.



CanvasRenderingContext2D.getImageData()
------------------------------------------

The CanvasRenderingContext2D method getImageData() returns an ImageData object representing the underlying pixel data for a specified portion of the canvas.

This method is not affected by the canvas's transformation matrix. If the specified rectangle extends outside the bounds of the canvas, the pixels outside the canvas are transparent black in the returned ImageData object.

Note: Image data can be painted onto a canvas using the _putImageData()_ method.

**Parameter values**

sx
* The x-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.

sy
* The y-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.

sw
* The width of the rectangle from which the ImageData will be extracted. Positive values are to the right, and negative to the left.

sh
* The height of the rectangle from which the ImageData will be extracted. Positive values are down, and negative are up.


**Return value**

An ImageData object containing the image data for the rectangle of the canvas specified. 

The coordinates of the rectangle's top-left corner are (sx, sy), while the coordinates of the bottom corner are (sx + sw, sy + sh).

**Exceptions**

IndexSizeError
* Thrown if either sw or sh are zero.

SecurityError
* The canvas contains or may contain pixels which were loaded from an origin other than the one from which the document itself was loaded. 
* To avoid SecurityError being thrown in this situation, configure CORS to allow the source image to be use in this way.

**Example** 

The object retrieved by getImageData() has a width of 200 and a height of 100, for a total of 20,000 pixels. Of those pixels, most are either transparent or taken from off the canvas; only 5,000 of them are opaque black (the color of the drawn rectangle).
```
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.rect(10, 10, 100, 100);
ctx.fill();

let imageData = ctx.getImageData(60, 60, 200, 100);
ctx.putImageData(imageData, 150, 10)
```


CanvasRenderingContext2D.putImageData()
------------------------------------------
```
void ctx.putImageData(imageData, dx, dy);
void ctx.putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
```
The CanvasRenderingContext2D.putImageData() method of the Canvas 2D API paints data from the given ImageData object onto the canvas. If a dirty rectangle is provided, only the pixels from that rectangle are painted. This method is not affected by the canvas transformation matrix.

Note: Image data can be retrieved from a canvas using the getImageData() method.

You can find more information about putImageData() and general manipulation of canvas contents in the article Pixel manipulation with canvas.

**Parameters values**

imageData: 
* An ImageData object containing the array of pixel values.

dx
* Horizontal position (x coordinate) at which to place the image data in the destination canvas.

dy
* Vertical position (y coordinate) at which to place the image data in the destination canvas.

dirtyX 
* Optional
* Horizontal position (x coordinate) of the top-left corner from which the 
image data will be extracted. Defaults to 0.

dirtyY 
* Optional
* Vertical position (y coordinate) of the top-left corner from which the image data will be extracted. Defaults to 0.

dirtyWidth 
* Optional
Width of the   to be painted. Defaults to the width of the image data.

dirtyHeight 
*  Optional
* Height of the rectangle to be painted. Defaults to the height of the image data.

**Errors thrown**

NotSupportedError
* Thrown if any of the arguments is infinite.

InvalidStateError
* Thrown if the ImageData object's data has been detached.