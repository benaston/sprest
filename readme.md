# sprest

Spread and rest functions.

File size: **307 bytes**.<br/>
Supported platforms: **server and browser**.<br/>
Supported language versions: **ES3 and above**.

If you use this library in your software please tweet me @benastontweet.

## Installation

```npm install sprest```

## Example

```javascript
var rest = require('sprest').rest;
var spread = require('sprest').spread;

var o = {};

o.foo = function foo(a, b){
	console.log(rest(foo, arguments));
};

o.foo('a', 'b', 'c'); // 'c'

spread(o.foo, ['a', 'b', 'c']); // 'c'

```

## License & Copyright

This software is released under the MIT License. It is Copyright 2015, Ben Aston. I may be contacted at ben@bj.ma.

## How to Contribute

Pull requests including bug fixes, new features and improved test coverage are welcomed. Please do your best, where possible, to follow the style of code found in the existing codebase.