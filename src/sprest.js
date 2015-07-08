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