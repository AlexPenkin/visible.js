# visible.js
Lightweight javascript module fordetecting presence of DOM element on screen

# Usage :octocat:
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
:octocat::octocat::octocat:
