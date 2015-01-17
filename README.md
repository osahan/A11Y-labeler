ARIA-Labeler
============
IN PROGRESS...

A Lightweight jQuery Plugin that assigns right role and ARIA label on DOM elements

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `ARIA-Labeler.js` just before `</body>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="ARIA-Labeler.min.js"></script>
```

## How to Use

**Syntax Example**  
```javascript

    $("body").aria();

```
###Before
```html
<a href="http://www.example.com" role="link">a element with pre-defined role</a>

<a href="http://www.example.com">a element with a href</a>

<a href="#">a element with hash as a href</a>

<a>a element without href</a>
```
###After
```html
<a href="http://www.example.com" role="link">a element with pre-defined role</a>

<a href="http://www.example.com" role="link">a element with a href</a>

<a href="#" role="button">a element with hash as a href</a>

<a>a element without href</a>
```
