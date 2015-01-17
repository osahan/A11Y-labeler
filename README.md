ARIA-Labeler
============
IN PROGRESS...

A Lightweight jQuery Plugin that assigns right role and ARIA label on DOM elements

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `ARIA-Labeler.min.js` just before `</body>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="ARIA-Labeler.min.js"></script>
```

## How to Use

**Syntax Example**  
```javascript

    $("body").aria();

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
<a href="http://www.example.com" role="link">anchor with pre-defined role</a>

<a href="http://www.example.com" role="link">anchor with href</a>

<a href="#" role="button">anchor with hash as href</a>

<a>anchor without href</a>
```
