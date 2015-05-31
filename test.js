'use strict';
var test = require('ava');
var stdout = require('test-console').stdout;
var claim = require('claim');
var logArray = require('./');

test('no options', function (t) {
	var output = stdout.inspectSync(function() {
	    logArray.log([1,2,3,4]);
	});

	claim.same(output, ['1\n2\n3\n4\n']);
	t.end();
});

test('order', function (t) {
	var output = stdout.inspectSync(function() {
	    logArray.log([1,2,3,4], {order: 'desc'});
	});

	claim.same(output, ['4\n3\n2\n1\n']);
	t.end();
});

test('sort', function (t) {
	var output = stdout.inspectSync(function() {
		var fn = function (a, b) {
			return b - a;
		};

	    logArray.log([1,2,3,4], {sort: fn});
	});


	claim.same(output, ['4\n3\n2\n1\n']);
	t.end();
});

test('sort & order', function (t) {
	var output = stdout.inspectSync(function() {
		var fn = function (a, b) {
			return b - a;
		};

	    logArray.log([1,2,3,4], {order: 'desc', sort: fn});
	});


	claim.same(output, ['1\n2\n3\n4\n']);
	t.end();
});

test('throws', function (t) {
	claim.throws(function () {
		logArray.log('123');
	});

	t.end();
});
