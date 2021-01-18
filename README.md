# CSStack

## Overview

<p> 
  Have you ever felt that positioning and styling mess a lot with your work organization?<br>
  If you use CSS without the assistance of any framework, for example, 
  your file starts getting too big, and if you use a framework like Bootstrap(which is amazing), 
  half of your HTML is destined for classes.
</p>
<p> 
  CSStack is a small-scale CSS Grid framework built in SASS focused on the construction of the page structure.
  It is simple and easy-to-use, aiming to keep the CSS only for styling(fonts, colors...) and 
  polluting it with less lines.
</p>
<p>
  It has a responsive columns feature mixed with 'a box inside a box' concept which helps 
  getting those nasty elements in the place you want.
</p>
  
### Working with the main containers

Considering Below:
```
  <div class='stack'>
    <div class='queue between'>
      <div class='element'></div>
      <div class='element'></div>
      <div class='element'></div>
    </div>
    <div class='queue'></div>
    <div class='queue'></div>
    <div class='queue'></div>
  </div>
```
Which compiles to: <br>
<img src='./stack-concept.svg'>
<br>
- The 'container' element has the class 'stack', which stacks all elements inside itself.
- The 'box' elements have the class 'queue' each one, making that horizontal stacking.
  - Note that it also has the 'between' class, arranging the elements inside accordingly.
- And the 'elements' are commom elements.

### Working with the grid system

Working with the grid system is very based on bootstrap: It has columns from 1 to 12 and you can define it's responsiveness.

So creating something like this:<br>
```
  <div class='board'>
    <div col-4>
    <div col-4>
    <div col-4>
  </div>
```
Compiles to:<br>
<img src='./col-4.svg'> <br>

And if creates something like this:<br>
```
  <div class='board'>
    <div col-4>
    <div col-4>
    <div col-8>
  </div>
```
<br>
Compiles to:<br>
<img src='./col-4-8.svg'>

