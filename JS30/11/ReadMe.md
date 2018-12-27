# Custom HTML5 Video Player

play/pause
-----------------------------------
``audio|video.pause()``
* The pause() method halts (pauses) the currently playing audio or video.
* When a click event is detected on the play/pause button, the handler first of all checks if the video is currently paused or has ended (via the Media API's paused and ended attributes); 
* if so, it uses the play() method to playback the video. 
* Otherwise the video must be playing, so it is paused using the pause() method.
``playpause.addEventListener('click', function(e) {
   if (video.paused || video.ended) video.play();
   else video.pause();
});``


volume
-----------------------------------
Return the volume property:
``audio|video.volume``

Set the volume property:
``audio|video.volume=number``
* The volume property sets or returns the current volume of the audio/video.

Property Values
* _number_ Specifies the current volume of the audio/video. Must be a number between 0.0 and 1.0
* Example values:
	* 1.0 is highest volume (100%. This is default)
	* 0.5 is half volume (50%)
	* 0.0 is silent (same as mute)
* Set video volume to 20%:
``var vid = document.getElementById("myVideo");
vid.volume = 0.2;``


currentTime 
-----------------------------------
Return the currentTime property:
``audio|video.currentTime``

Set the currentTime property:
``audio|video.currentTime="seconds"``

* The currentTime property sets or returns the current position (in seconds) of the audio/video playback.
* When setting this property, the playback will jump to the specified position.

Property Values
* _seconds_	Indicates the position for the playback of the audio/video, in seconds

``var vid = document.getElementById("myVideo");
vid.currentTime = 5;``


defaultPlaybackRate
-----------------------------------
Return the defaultPlaybackRate property:
``audio|video.defaultPlaybackRate``

Set the defaultPlaybackRate property:
``audio|video.defaultPlaybackRate=playbackspeed``

* The defaultPlaybackRate property sets or returns the default playback speed of the audio/video.
* Setting this property will only change the default playback speed, not the current.
*  To change the *current playback*, use the *playbackRate* property

Property Values
* _playbackspeed_ Indicates the default playback speed of the audio/video.
* Example values:
		* 1.0 is normal speed
		* 0.5 is half speed (slower)
		* 2.0 is double speed (faster)
		* -1.0 is backwards, normal speed
		* -0.5 is backwards, half speed

``var vid = document.getElementById("myVideo");
vid.defaultPlaybackRate = 0.5;``


playbackRate 
-----------------------------------
Return the playbackRate property:
``audio|video.playbackRate``

Set the playbackRate property:
``audio|video.playbackRate=playbackspeed``

* The playbackRate property sets or returns the current playback speed of the audio/video.

Property Values
* _playbackspeed_ Indicates the default playback speed of the audio/video.
* Example values:
		* 1.0 is normal speed
		* 0.5 is half speed (slower)
		* 2.0 is double speed (faster)
		* -1.0 is backwards, normal speed
		* -0.5 is backwards, half speed
``var vid = document.getElementById("myVideo");
vid.playbackRate = 0.5;``


seekable 
-----------------------------------
``audio|video.seekable``

* The seekable property returns a TimeRanges object.
* The TimeRanges object represents ranges of the audio/video that are available for seeking for user.
* A seekable range is a time-range of audio/video where the user can seek (move playback position) to.
* For non-streaming videos it is often possible to seek anywhere in the video even before it has been buffered.
* This property is read-only.

Return Value
* _TimeRanges Object_ Represents the seekable parts of the audio/video.
* TimeRanges Object Properties:
		* length - get the number of seekable ranges in the audio/video
		* start(index) - get the start position of a seekable range
		* end(index) - get the end position of a seekable range
		* Note: The first seekable range is index 0

``var vid = document.getElementById("myVideo");
alert("Start: " + vid.seekable.start(0) + " End: " + vid.seekable.end(0));``


seeking
-----------------------------------
``audio|video.seeking``

* The seeking property returns whether the user is currently seeking in the audio/video.
* Seeking is when you move/skip to a new position in the audio/video.
* This property is read-only.
* Returns true if the user is currently seeking, otherwise it returns false

``var vid = document.getElementById("myVideo");
document.getElementById("mySpan").innerHTML = "Seeking: " + vid.seeking;``


error 
-----------------------------------
``audio|video.error.code``

* The error property returns a MediaError object.
* The MediaError object has a code property containing the error state of the audio/video.

Return Value
* _Number_	The code property of the MediaError Object returns a number representing the error state of the audio/video:
		* 1 = MEDIA_ERR_ABORTED - fetching process aborted by user
		* 2 = MEDIA_ERR_NETWORK - error occurred when downloading
		* 3 = MEDIA_ERR_DECODE - error occurred when decoding
		* 4 = MEDIA_ERR_SRC_NOT_SUPPORTED - audio/video not supported

``var vid = document.getElementById("myVideo");
alert(vid.error.code);``


https://www.w3schools.com/tags/ref_av_dom.asp