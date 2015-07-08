'use strict';

var rest = self.sprest.rest;
var spread = self.sprest.spread;

describe('rest', function() {

	it('should return the non-specified arguments', function() {
		//arrange
		function foo(a, b) {
			return rest(foo, arguments);
		}

		var result;

		//act
		result = foo('a', 'b', 'c', 'd')

		//assert
		expect(result.length).toBe(2);
		expect(result[0]).toBe('c');
		expect(result[1]).toBe('d');
	});
	
});

describe('spread', function() {

	it('should spread the array across the function arguments', function() {
		//arrange
		function foo(a, b) {
			return [a, b];
		}
		var result;

		//act
		result = spread(foo, ['a', 'b']);

		//assert
		expect(result.length).toBe(2);
		expect(result[0]).toBe('a');
		expect(result[1]).toBe('b');
	});

});