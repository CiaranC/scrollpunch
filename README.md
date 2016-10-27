# ScrollPunch
## A tiny jQuery plugin that will add a class of '.animate' to a chosen elements(s) as you scroll past it.
This simple plugin will add/remove a class to any specified element as you scroll past it. Handy if you require this kind of functionality but don't wan't to use a bigger waypoint style plugin tio achieve it.

###Installation
Include scrollpunch.js in your document (Requires jQuery).
```js
<script src='scrollpunch.js'></script>
```

###Usage
Call scrollpunch(trigger,reset,offset) in your main JS file.
e.g.
```js
scrollpunch('.myElementToAnimate','.myResetPoint','200');
```
####trigger = determines element that should be animated when reached 
####reset = determines an element that resets the animation 
####offset = offsets trigger by a pixel value

###License
Copyright (c) 2016 Ciaran Canavan. Licensed under the [MIT license](https://opensource.org/licenses/MIT).