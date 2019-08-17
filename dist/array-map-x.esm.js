import attempt from 'attempt-x';
import toObject from 'to-object-x';
import assertIsFunction from 'assert-is-function-x';
import requireObjectCoercible from 'require-object-coercible-x';
import all from 'array-all-x';
import toBoolean from 'to-boolean-x';
import methodize from 'simple-methodize-x';
import call from 'simple-call-x';
var nm = [].map;
var nativeMap = typeof nm === 'function' && methodize(nm);

var identity = function identity(item) {
  return item;
};

var test1 = function test1() {
  var res = attempt(function attemptee() {
    return nativeMap([1, 2], identity);
  });
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
};

var test2 = function test2() {
  var res = attempt(function attemptee() {
    return nativeMap(toObject('ab'), identity);
  });
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 'a' && res.value[1] === 'b';
};

var test3 = function test3() {
  var res = attempt(function attemptee() {
    var args = function returnArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2);

    return nativeMap(args, identity);
  });
  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
};

var test4 = function test4() {
  var res = attempt(function attemptee() {
    return nativeMap({
      0: 1,
      2: 2,
      length: 3
    }, identity);
  });
  return res.threw === false && res.value && res.value.length === 3 && !(1 in res.value);
};

var getResultTest5 = function getResultTest5(res, div) {
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div;
};

var doc = typeof document !== 'undefined' && document;

var test5 = function test5() {
  if (doc) {
    var fragment = doc.createDocumentFragment();
    var div = doc.createElement('div');
    fragment.appendChild(div);
    var res = attempt(function attemptee() {
      return nativeMap(fragment.childNodes, identity);
    });
    return getResultTest5(res, div);
  }

  return true;
};

var isStrict = function returnIsStrict() {
  /* eslint-disable-next-line babel/no-invalid-this */
  return toBoolean(this) === false;
}();

var test6 = function test6() {
  if (isStrict) {
    var spy = null;

    var testThis = function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    var res = attempt(function attemptee() {
      return nativeMap([1], testThis, 'x');
    });
    return res.threw === false && res.value && res.value.length === 1 && spy === true;
  }

  return true;
};

var test7 = function test7() {
  var spy = {};
  var fn = 'return nativeMap("foo", function (_, __, context) {' + 'if (castBoolean(context) === false || typeof context !== "object") {' + 'spy.value = true;}});';
  var res = attempt(function attemptee() {
    /* eslint-disable-next-line no-new-func */
    return Function('nativeMap', 'spy', 'castBoolean', fn)(nativeMap, spy, toBoolean);
  });
  return res.threw === false && res.value && res.value.length === 3 && spy.value !== true;
};

var isWorking = toBoolean(nativeMap) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

var patchedMap = function map(array, callBack
/* , thisArg */
) {
  /* eslint-disable-next-line prefer-rest-params */
  return nativeMap(requireObjectCoercible(array), assertIsFunction(callBack), arguments[2]);
};

export var implementation = function map(array, callBack
/* , thisArg */
) {
  var object = toObject(array); // If no callback function or if callback is not a callable function

  assertIsFunction(callBack);
  var result = [];

  var iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    var i = arguments[1];
    /* eslint-disable-next-line prefer-rest-params */

    if (i in arguments[2]) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      result[i] = call(callBack, this, [arguments[0], i, object]);
    }
  };
  /* eslint-disable-next-line prefer-rest-params */


  all(object, iteratee, arguments[2]);
  return result;
};
/**
 * This method creates a new array with the results of calling a provided
 * function on every element in the calling array.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function that produces an element of the Array.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with each element being the result of the
 * callback function.
 */

var $map = isWorking ? patchedMap : implementation;
export default $map;

//# sourceMappingURL=array-map-x.esm.js.map