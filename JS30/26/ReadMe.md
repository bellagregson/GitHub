# Stripe Follow Along Nav


Javascript object
---------------------------

You define (and create) a JavaScript object with an object literal:
```
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

**Properties**

The name:values pairs in JavaScript objects are called properties.

You can access object properties in two ways:

``objectName.propertyName``
``objectName["propertyName"]``

**Methods**

Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.
```
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
You access an object method with the following syntax:
``objectName.methodName()``

**this Keyword**

In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.



CSS setProperty() Method
----------------------------
``object.setProperty(propertyname, value, priority)``

The setProperty() method sets a new or modifies an existing CSS property in a CSS declaration block.

**Property values**

propertyname	
* Required. 
* A String representing the name of the property to set

value	
* Optional. 
* A String representing the new value

priority	
* Optional. 
* A String representing if the property's priority should be set to important or not.
* Legal  values: "important", undefined, ""

Example
Set a new CSS property with "important" priotrity:
```
var declaration = document.styleSheets[0].cssRules[0].style;
var setprop = declaration.setProperty("background-color", "yellow", "important");
```


CSS translate() Function
----------------------------

The translate() CSS function repositions an element in the horizontal and/or vertical directions. Its result is a _transform-function_ data type.

This transformation is characterized by a two-dimensional vector. Its coordinates define how much the element moves in each direction.

**Syntax**

The translate() function is specified as either one or two values.
``translate(tx)``
``translate(tx, ty)``

tx
* Is a _length_ representing the abscissa (x-coordinate) of the translating vector.

ty
* Is a _length_ representing the ordinate of the translating vector (or y-coordinate). 
* If unspecified, its default value is 0. 
* For example, translate(2) is equivalent to translate(2, 0).

**Example**
```
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```


if statement then &&
----------------------------
```
setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
```

Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value.

However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.