/**
 * @file Creates an array with the results of calling a function on every element.
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module array-map-x
 */

'use strict';

var toObject = require('to-object-x');
var assertIsFunction = require('assert-is-function-x');
var some = require('array-some-x');
var toLength = require('to-length-x');

var $map = function map(array, callBack /* , thisArg */) {
  var object = toObject(array);
  // If no callback function or if callback is not a callable function
  assertIsFunction(callBack);
  var result = [];
  result.length = toLength(toObject.length);
  var wrapped = function _wrapped(item, idx, obj) {
    // eslint-disable-next-line no-invalid-this
    result[idx] = callBack.call(this, item, idx, obj);
  };

  var args = [object, wrapped];
  if (arguments.length > 2) {
    args[2] = arguments[2];
  }

  some.apply(void 0, args);
  return result;
};

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
