;(function(root) {

	'use strict';

	var namespace = {};

	;(function(namespace) {

	'use strict';

	function rest(fn, args) {
		return Array.prototype.slice.call(args, fn.length);
	}

	function spread(fn, arr, target) {
		return fn.apply((target || this), arr);
	}

	namespace.rest = rest;
	namespace.spread = spread;

}(namespace));

	if ((typeof exports === 'object') && module) {
		module.exports = namespace; // CommonJS
	} else if ((typeof define === 'function') && define.amd) {
		define(function() {
			return namespace;
		}); // AMD
	} else {
		root.sprest = namespace; // Browser
	}

}(this));