# Whack A Mole

event.Trusted
-------------------------------------
``event.isTrusted``

The isTrusted event property returns a Boolean value indicating whether the event is trusted or not.

In Chrome, Firefox and Opera, the event is trusted if it is invoked by the user, and not trusted if it is invoked by a script. 

In IE, all events are trusted except those that are created with the createEvent() method.

**Return Value**

A Boolean, indicating whether the event is trusted or not
Possible values:

* true - The event is trusted
* false - The event is not trusted

**Example**

Find out if a specific event is trusted:
```
function myFunction(event) {
  if ("isTrusted" in event) {
    if (event.isTrusted) {
      alert ("The " + event.type + " event is trusted.");
    } else {
      alert ("The " + event.type + " event is not trusted.");
    }
  } else {
    alert ("The isTrusted property is not supported by your browser");
  }
}
```


Math.random()
------------------------------------------
``Math.random()``

The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

**Example**

Return a random number between 1 and 10:

``Math.floor((Math.random() * 10) + 1);``

Return a random number between 1 and 100:

``Math.floor((Math.random() * 100) + 1);``
