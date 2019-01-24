#Follow Along Link Highlighter

DOM.getBoundingClientRect()
--------------------------------------------
``element.getBoundingClientRect()``

The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

This method returns a DOMRect object with eight properties: 
* left
* top
* right
* bottom
* x
* y
* width
* height

Note: The amount of scrolling that has been done of the viewport area is taken into account when computing the bounding rectangle. 

This means that the rectangle's edges (top, left, bottom, and right) change their values every time the scrolling position changes.

**Example**

Return the size of an element and its position relative to the viewport:

``var rect = obj.getBoundingClientRect();``



window.scrollY
--------------------------------------------
``var y = window.scrollY``

The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically. 

This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. 

You can get the number of pixels the document is scrolled horizontally from the scrollX property.

In more technical terms, scrollY returns the Y coordinate of the top edge of the current viewport. If there is no viewport, the returned value is 0.

If you need an integer value, you can use Math.round() to round it off.

**Notes**

The pageYOffset property is an alias for the scrollY property:

``window.pageYOffset == window.scrollY; // always true``

For cross-browser compatibility, use window.pageYOffset instead of window.scrollY. 

**Example**

Make sure and go down to the second page 
```
if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}
window.scrollByPages(1);
```

window.scrollX
--------------------------------------------
``var x = window.scrollX;``

The read-only scrollX property of the Window interface returns the number of pixels that the document is currently scrolled horizontally. 

This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. 

You can get the number of pixels the document is scrolled vertically from the scrollY property.

**Notes**

The pageXOffset property is an alias for the scrollX property:

``window.pageXOffset == window.scrollX; // always true``

For cross-browser compatibility, use window.pageXOffset instead of window.scrollX. 

**Example**

This example checks the current horizontal scroll position of the document. If it's greater than 400 pixels, the window is scrolled back to the beginning.
```
if (window.scrollX > 400) {
  window.scroll(0,0);
}
```

