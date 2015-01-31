A11Y-labeler
============
IN PROGRESS...

A Lightweight jQuery Plugin that assigns ARIA roles and label on DOM elements

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `A11Y-labeler.min.js` just before `</body>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="dist/js/A11Y-labeler.min.js"></script>
```

## How to Use

**Syntax Example**  
```javascript

    $("body").a11y();

```
**Before**
```html
<a href="http://www.example.com" role="link">anchor with pre-defined role</a>

<a href="http://www.example.com">anchor with href</a>

<a href="#">anchor with hash as href</a>

<a>anchor without href</a>
```
**After**
```html
<a href="http://www.example.com" role="link">anchor with pre-defined role</a> // will not overwrite predefined roles

<a href="http://www.example.com" role="link">anchor with href</a>

<a href="#" role="button">anchor with hash as href</a>

<a>anchor without href</a>
```
