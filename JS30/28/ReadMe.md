# Video Speed Controller

video.playbackRate
------------------------------------------
Return the playbackRate property:
``audio|video.playbackRate``

Set the playbackRate property:
``audio|video.playbackRate=playbackspeed``

The HTMLMediaElement.playbackRate property sets the rate at which the media is being played back. This is used to implement user controls for fast forward, slow motion, and so forth. 

The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.

If playbackRate is negative, the media is played backwards.

The audio is muted when the media plays backwards or if the fast forward or slow motion is outside a useful range (for example, Gecko mutes the sound outside the range 0.25 to 5.0).

The pitch of the audio is corrected by default and is the same for every speed. Some browsers implement the non-standard preservespitch property to control this.

**Property values**

playbackspeed	
* Indicates the current playback speed of the audio/video.
* Example values:
	* 1.0 is normal speed
	* 0.5 is half speed (slower)
	* 2.0 is double speed (faster)
	* -1.0 is backwards, normal speed
	* -0.5 is backwards, half speed