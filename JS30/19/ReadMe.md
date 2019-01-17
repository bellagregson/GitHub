# Webcam Fun

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

AbortError
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


video.srcObject
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




video.play()
----------------------------------------------


## Screen capture