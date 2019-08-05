import attempt from 'attempt-x';
import splitIfBoxedBug from 'split-if-boxed-bug-x';
import toLength from 'to-length-x';
import toObject from 'to-object-x';
import assertIsFunction from 'assert-is-function-x';
import requireObjectCoercible from 'require-object-coercible-x';

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
  const res = attempt.call({}.constructor('ab'), nativeMap, identity);

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

const test5 = function test5() {
  const doc = typeof document !== 'undefined' && document;

  if (doc) {
    const fragment = doc.createDocumentFragment();
    const div = doc.createElement('div');
    fragment.appendChild(div);
    const res = attempt.call(fragment.childNodes, nativeMap, identity);

    return res.threw === false && res.value && res.value.length === 1 && res.value[0] === div;
  }

  return true;
};

const test6 = function test6() {
  const isStrict = (function returnIsStrict() {
    /* eslint-disable-next-line babel/no-invalid-this */
    return true.constructor(this) === false;
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
  const res = attempt(Function('nativeMap', 'spy', 'castBoolean', fn), nativeMap, spy, true.constructor);

  return res.threw === false && res.value && res.value.length === 3 && spy.value !== true;
};

const isWorking = true.constructor(nativeMap) && test1() && test2() && test3() && test4() && test5() && test6() && test7();

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
  const iterable = splitIfBoxedBug(object);
  const length = toLength(iterable.length);
  /* eslint-disable-next-line prefer-rest-params,no-void */
  const thisArg = arguments.length > 2 ? arguments[2] : void 0;
  const noThis = typeof thisArg === 'undefined';
  const result = [];
  result.length = length;
  for (let i = 0; i < length; i += 1) {
    if (i in iterable) {
      const item = iterable[i];
      result[i] = noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object);
    }
  }

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
