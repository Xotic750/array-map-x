/**
 * @file Creates an array with the results of calling a function on every element.
 * @version 2.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module array-map-x
 */

'use strict';

var attempt = require('attempt-x');
var nativeMap = typeof Array.prototype.map === 'function' && Array.prototype.map;

var isWorking;
if (nativeMap) {
  var spy = 0;
  var res = attempt.call([1, 2], nativeMap, function (item) {
    return item;
  });

  isWorking = res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;

  if (isWorking) {
    spy = '';
    res = attempt.call(Object('ab'), nativeMap, function (item) {
      return item;
    });

    isWorking = res.threw === false && res.value && res.value.length === 2 && res.value[0] === 'a' && res.value[1] === 'b';
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call((function () {
      return arguments;
    }(1, 2)), nativeMap, function (item) {
      return item;
    });

    isWorking = res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call({
      0: 1,
      2: 2,
      length: 3
    }, nativeMap, function (item) {
      return item;
    });

    isWorking = res.threw === false && res.value && res.value.length === 3 && (1 in res.value) === false;
  }

  if (isWorking) {
    var doc = typeof document !== 'undefined' && document;
    if (doc) {
      spy = null;
      var fragment = doc.createDocumentFragment();
      var div = doc.createElement('div');
      fragment.appendChild(div);
      res = attempt.call(fragment.childNodes, nativeMap, function (item) {
        return item;
      });

      isWorking = res.threw === false && res.value && res.value.length === 1 && res.value[0] === div;
    }
  }

  if (isWorking) {
    var isStrict = (function () {
      // eslint-disable-next-line no-invalid-this
      return Boolean(this) === false;
    }());

    if (isStrict) {
      spy = null;
      res = attempt.call([1], nativeMap, function () {
        // eslint-disable-next-line no-invalid-this
        spy = typeof this === 'string';
      }, 'x');

      isWorking = res.threw === false && res.value && res.value.length === 1 && spy === true;
    }
  }

  if (isWorking) {
    spy = {};
    var fn = [
      'return nativeMap.call("foo", function (_, __, context) {',
      'if (Boolean(context) === false || typeof context !== "object") {',
      'spy.value = true;}});'
    ].join('');

    // eslint-disable-next-line no-new-func
    res = attempt(Function('nativeMap', 'spy', fn), nativeMap, spy);

    isWorking = res.threw === false && res.value && res.value.length === 3 && spy.value !== true;
  }
}

var $map;
if (nativeMap) {
  $map = function map(array, callBack /* , thisArg */) {
    var args = [callBack];
    if (arguments.length > 2) {
      args[1] = arguments[2];
    }

    return nativeMap.apply(array, args);
  };
} else {
  var splitIfBoxedBug = require('split-if-boxed-bug-x');
  var toLength = require('to-length-x');
  var isUndefined = require('validate.io-undefined');
  var toObject = require('to-object-x');
  var assertIsFunction = require('assert-is-function-x');

  $map = function map(array, callBack /* , thisArg */) {
    var object = toObject(array);
    // If no callback function or if callback is not a callable function
    assertIsFunction(callBack);
    var iterable = splitIfBoxedBug(object);
    var length = toLength(iterable.length);
    var thisArg;
    if (arguments.length > 2) {
      thisArg = arguments[2];
    }

    var noThis = isUndefined(thisArg);
    var result = [];
    result.length = length;
    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];
        result[i] = noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object);
      }
    }

    return result;
  };
}

/**
 * This method creates a new array with the results of calling a provided
 * function on every element in the calling array.
 *
 * @param {array} array - The array to iterate over.
 * @param {Function} callBack - Function that produces an element of the Array.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {array} A new array with each element being the result of the
 * callback function.
 * @example
 * var map = require('array-map-x');
 *
 * var numbers = [1, 4, 9];
 * var roots = map(numbers, Math.sqrt);
 * // roots is now [1, 2, 3]
 * // numbers is still [1, 4, 9]
 */
module.exports = $map;
