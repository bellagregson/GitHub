The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.

canvas
-----------------------
``var canvas = document.getElementById('canvas');``

* the <canvas> element has only two attributes, width and height. These are both optional and can also be set using DOM properties. When no width and height attributes are specified, the canvas will initially be 300 pixels wide and 150 pixels high.
* Browsers that don't support <canvas> will ignore the container and render the fallback content inside it. 
* The id attribute isn't specific to the <canvas> element but is one of the global HTML attributes which can be applied to any HTML element (like class for instance). 
* It is always a good idea to supply an id because this makes it much easier to identify it in a script.
* The <canvas> element can be styled just like any normal image (margin, border, background…). These rules, however, don't affect the actual drawing on the canvas

context (2d or 3d)
-----------------------
``var ctx = canvas.getContext('2d');``

* The <canvas> element creates a fixed-size drawing surface that exposes one or more rendering contexts, which are used to create and manipulate the content shown. 
* The canvas is initially blank. To display something, a script first needs to access the rendering context and draw on it. 
* The <canvas> element has a method called getContext(), used to obtain the rendering context and its drawing functions. 
* _getContext()_ takes one parameter, the type of context. For 2D graphics, such as those covered by this tutorial, you specify "2d" to get a CanvasRenderingContext2D.

strokeStyle
-----------------------
``var gradient = ctx.createLinearGradient(0, 0, 170, 0);``
``ctx.strokeStyle = gradient;``
* The CanvasRenderingContext2D.strokeStyle property of the Canvas 2D API specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes. 
* The default is #000 (black).

* _color_ : A DOMString parsed as CSS <color> value.
* _gradient_ : A CanvasGradient object (a linear or radial gradient).
* _pattern_ : A CanvasPattern object (a repeating image).

lineJoin
-----------------------
``ctx.lineJoin = "round";``
* The CanvasRenderingContext2D.lineJoin property of the Canvas 2D API determines the shape used to join two line segments where they meet.
* This property has no effect wherever two connected segments have the same direction, because no joining area will be added in this case. 
* There are three possible values for this property: "round", "bevel", and "miter". The default is "miter".

* _round"_ : Creates a rounded corner. The radius for these rounded corners is equal to the line width.
* _bevel_ : Creates a beveled corner
* _miter_ : Default. Creates a sharp corner. This setting is affected by the miterLimit property.

lineCap
-----------------------
``ctx.lineCap = "butt" || "round" || "square";``
* The CanvasRenderingContext2D.lineCap property of the Canvas 2D API determines the shape used to draw the end points of lines

* _butt_ : Default. A flat edge is added to each end of the line	
* _round_ : A rounded end cap is added to each end of the line	
* _square_ : A square end cap is added to each end of the line

addEventListener
-----------------------
``element.addEventListener(event, function, useCapture)``
* The addEventListener() method attaches an event handler to the specified element.
* Tip: Use the removeEventListener() method to remove an event handler that has been attached with the addEventListener() method.
* Tip: Use the document.addEventListener() method to attach an event handler to the document.

* _event_ : Required. A String that specifies the name of the event. Note: Do not use the "on" prefix. For example, use "click" instead of "onclick"
* _function_ : Required. Specifies the function to run when the event occurs. 
* _useCapture_ : Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. 

window.innerWidth, window.innerHeight
-----------------------
* The innerWidth property returns the width of a window's content area.
* The innerHeight property returns the height of a window's content area.
* These properties are read-only.
* Tip: Use the outerWidth and outerHeight properties to get the width/height of the browser window.

* _Return Value_ : A Number, representing the width and/or the inner height of the browser window's content area, in pixels

beginPath()
-----------------------
* The beginPath() method begins a path, or resets the current path.
* Tip: Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.
* Tip: Use the stroke() method to actually draw the path on the canvas.


moveTo()
-----------------------
```context.moveTo(x,y);```
* The moveTo() method moves the path to the specified point in the canvas, without creating a line.
* _x_ : The x-coordinate of where to move the path to	
* _y_ :	The y-coordinate of where to move the path to


lineTo()
-----------------------
```context.lineTo(x,y);```
* The lineTo() method adds a new point and creates a line TO that point FROM the last specified point in the canvas (this method does not draw the line).
* _x_ : The x-coordinate of where to create the line to	
* _y_ :	The y-coordinate of where to create the line to


stroke()
-----------------------
```context.stroke();```
* The stroke() method actually draws the path you have defined with all those moveTo() and lineTo() methods. 
* The default color is black.

offsetX, offsetY
-----------------------
````event.offsetX```
* The offsetX property returns the x-coordinate of the mouse pointer, relative to the target element.
* The offsetY property returns the y-coordinate of the mouse pointer, relative to the target element.