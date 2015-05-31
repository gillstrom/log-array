# log-array [![Build Status](https://travis-ci.org/gillstrom/log-array.svg?branch=master)](https://travis-ci.org/gillstrom/log-array)

> Log an array, with an option to sort and order it


## Install

```
$ npm install --save log-array
```


## Usage

```js
var logArray = require('log-array');
var arr = [
	1,
	2,
	3,
	4
];

logArray.log(arr);
/*
	1
	2
	3
	4
 */

logArray.log(arr, {order: 'desc'});
/*
	4
	3
	2
	1
 */

var fn = function (a, b) {
	return b - a;
}

logArray.log(arr, {sort: fn});
/*
	4
	3
	2
	1
 */
```


## API

### .log(array, [options])
### .error(array, [options])
### .warn(array, [options])
### .info(array, [options])

Log an array.

#### array

*Required*

Type: `array`

#### options

Type: `object`

Options to pass.

##### order

Type: `string`

Order the array with `'asc'` or `'desc'`.

##### sort

Type: `function`

Pass a function describing how to sort the array.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
