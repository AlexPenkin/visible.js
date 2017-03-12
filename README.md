# visible.js
Lightweight javascript module for detecting presence of DOM element on screen

# Usage 
```javascript
var checker = new Checker('.lazy');

checker.addActionOnVisible(function (elem) {
    elem.innerHTML = 'visible';  
    elem.style.background = "white";
    elem.style.fontSize = '25px'
});

checker.addActionOnInVisible(function (elem) {
    elem.innerHTML = 'inVisible';  
    elem.style.background = "gray"; 
});
```
[Example on CodePen](http://codepen.io/modestDev/pen/evWKwY) 
:octocat: :octocat: :octocat:
