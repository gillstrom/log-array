'use strict';

function travail(arr, opts) {
	opts = opts || {};

	if (!Array.isArray(arr)) {
		throw new Error('Expected an array');
	}

	if (opts.sort && typeof opts.sort === 'function') {
		arr = arr.sort(opts.sort);
	}

	if (opts.order && opts.order === 'desc') {
		arr = arr.reverse();
	}

	return arr;
}

exports.log = function (arr, opts) {
	console.log(travail(arr, opts).join('\n'));
};

exports.error = function (arr, opts) {
	console.error(travail(arr, opts).join('\n'));
};

exports.info = function (arr, opts) {
	console.info(travail(arr, opts).join('\n'));
};

exports.warn = function (arr, opts) {
	console.warn(travail(arr, opts).join('\n'));
};
