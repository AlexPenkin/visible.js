# visible.js
Lightweight javascript module fordetecting presence of DOM element on screen

# Usage
```javascript
  var ch = new Checker('.lazy');

ch.addActionOnVisible(function (elem) {
    elem.innerHTML = 'visible';  
    elem.style.background = "white";
    elem.style.fontSize = '25px'
});

ch.addActionOnInVisible(function (elem) {
    elem.innerHTML = 'inVisible';  
    elem.style.background = "gray"; 
});
```
