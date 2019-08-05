import attempt from 'attempt-x';
import toObject from 'to-object-x';
import assertIsFunction from 'assert-is-function-x';
import requireObjectCoercible from 'require-object-coercible-x';
import all from 'array-all-x';
import toBoolean from 'to-boolean-x';

const nm = [].map;
const nativeMap = typeof nm === 'function' && nm;

const identity = function identity(item) {
  return item;
};

const test1 = function test1() {
  const res = attempt.call([1, 2], nativeMap, identity);

  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
};

const test2 = function test2() {
  const res = attempt.call(toObject('ab'), nativeMap, identity);

  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 'a' && res.value[1] === 'b';
};

const test3 = function test3() {
  const res = attempt.call(
    (function returnArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    })(1, 2),
    nativeMap,
    identity,
  );

  return res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
};

const test4 = function test4() {
  const res = attempt.call(
    {
      0: 1,
      2: 2,
      length: 3,
    },
    nativeMap,
    identity,
  );

  return res.threw === false && res.value && res.value.length === 3 && !(1 in res.value);
};

const getResultTest5 = function getResultTest5(res, div) {
  return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div;
};

const test5 = function test5() {
  const doc = typeof document !== 'undefined' && document;

  if (doc) {
    const fragment = doc.createDocumentFragment();
    const div = doc.createElement('div');
    fragment.appendChild(div);
    const res = attempt.call(fragment.childNodes, nativeMap, identity);

    return getResultTest5(res, div);
  }

  return true;
};

const test6 = function test6() {
  const isStrict = (function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return toBoolean(this) === false;
  })();

  if (isStrict) {
    let spy = null;

    const testThis = function testThis() {
      /* eslint-disable-next-line babel/no-invalid-this */
      spy = typeof this === 'string';
    };

    const res = attempt.call([1], nativeMap, testThis, 'x');

    return res.threw === false && res.value && res.value.length === 1 && spy === true;
  }

  return true;
};

const test7 = function test7() {
  const spy = {};
  const fn =
    'return nativeMap.call("foo", function (_, __, context) {' +
    'if (castBoolean(context) === false || typeof context !== "object") {' +
    'spy.value = true;}});';

  /* eslint-disable-next-line no-new-func */
  const res = attempt(Function('nativeMap', 'spy', 'castBoolean', fn), nativeMap, spy, toBoolean);

  return res.threw === false && res.value && res.value.length === 3 && spy.value !== true;
};

const isWorking = toBoolean(nativeMap) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

const patchedMap = function map(array, callBack /* , thisArg */) {
  requireObjectCoercible(array);
  const args = [assertIsFunction(callBack)];

  if (arguments.length > 2) {
    /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
    args[1] = arguments[2];
  }

  return nativeMap.apply(array, args);
};

export const implementation = function map(array, callBack /* , thisArg */) {
  const object = toObject(array);
  // If no callback function or if callback is not a callable function
  assertIsFunction(callBack);
  const result = [];
  const iteratee = function iteratee() {
    /* eslint-disable-next-line prefer-rest-params */
    const i = arguments[1];

    /* eslint-disable-next-line prefer-rest-params */
    if (i in arguments[2]) {
      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      result[i] = callBack.call(this, arguments[0], i, object);
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
const $map = isWorking ? patchedMap : implementation;

export default $map;
