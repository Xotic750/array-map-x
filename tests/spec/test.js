'use strict';

var map;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  map = require('../../index.js');
} else {
  map = returnExports;
}

var documentElement = typeof document !== 'undefined' && document.documentElement;
var itHasDocumentElement = documentElement ? it : xit;

// IE 6 - 8 have a bug where this returns false.
var canDistinguish = 0 in [void 0];
var undefinedIfNoSparseBug = canDistinguish ? void 0 : {
  valueOf: function () {
    return 0;
  }
};

var createArrayLike = function (arr) {
  var o = {};
  arr.forEach(function (e, i) {
    o[i] = e;
  });

  o.length = arr.length;
  return o;
};

describe('map', function () {
  var testSubject;
  var testObject;
  var callBack;

  beforeEach(function () {
    testSubject = [
      2,
      3,
      undefinedIfNoSparseBug,
      true,
      'hej',
      null,
      false,
      0
    ];

    delete testSubject[1];

    var i = -1;
    callBack = function () {
      i += 1;
      return i;
    };

  });

  it('is a function', function () {
    expect(typeof map).toBe('function');
  });

  it('should throw when array is null or undefined', function () {
    expect(function () {
      map();
    }).toThrow();

    expect(function () {
      map(void 0);
    }).toThrow();

    expect(function () {
      map(null);
    }).toThrow();
  });

  it('should return an empty array when given an empty array', function () {
    expect(map([], function () {
      return true;
    })).toEqual([]);
  });

  describe('Array object', function () {
    it('should call mapper with the right parameters', function () {
      var mapper = jasmine.createSpy('mapper');
      var array = [1];
      map(array, mapper);
      expect(mapper).toHaveBeenCalledWith(1, 0, array);
    });

    it('should set the context correctly', function () {
      var context = [];
      map(testSubject, function (o, i) {
        // eslint-disable-next-line no-invalid-this
        this[i] = o;
      }, context);

      expect(context).toEqual(testSubject);
    });

    it('should set the right context when given none', function () {
      var context;
      map([1], function () {
        // eslint-disable-next-line no-invalid-this
        context = this;
      });

      expect(context).toBe(function () {
        // eslint-disable-next-line no-invalid-this
        return this;
      }.call());
    });

    it('should not change the array it is called on', function () {
      var copy = testSubject.slice();
      map(testSubject, callBack);
      expect(testSubject).toEqual(copy);
    });

    it('should only run for the number of objects in the array when it started', function () {
      var arr = [
        1,
        2,
        3
      ];

      var i = 0;
      map(arr, function (o) {
        arr.push(o + 3);
        i += 1;
        return o;
      });

      expect(arr).toEqual([
        1,
        2,
        3,
        4,
        5,
        6
      ]);

      expect(i).toBe(3);
    });

    it('should properly translate the values as according to the callBack', function () {
      var result = map(testSubject, callBack);
      var expected = [
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ];

      delete expected[1];
      expect(result).toEqual(expected);
    });

    it('should skip non-existing values', function () {
      var array = [
        1,
        2,
        3,
        4
      ];

      var i = 0;
      delete array[2];
      map(array, function () {
        i += 1;
      });

      expect(i).toBe(3);
    });
  });

  describe('Array-like', function () {
    beforeEach(function () {
      testObject = createArrayLike(testSubject);
    });

    it('should call mapper with the right parameters', function () {
      var mapper = jasmine.createSpy('mapper');
      var array = createArrayLike([1]);
      map(array, mapper);
      expect(mapper).toHaveBeenCalledWith(1, 0, array);
    });

    it('should set the context correctly', function () {
      var context = {};
      map(testObject, function (o, i) {
        // eslint-disable-next-line no-invalid-this
        this[i] = o;
        // eslint-disable-next-line no-invalid-this
        this.length = i + 1;
      }, context);

      expect(context).toEqual(testObject);
    });

    it('should set the right context when given none', function () {
      var context;
      map(createArrayLike([1]), function () {
        // eslint-disable-next-line no-invalid-this
        context = this;
      });

      expect(context).toBe(function () {
        // eslint-disable-next-line no-invalid-this
        return this;
      }.call());
    });

    it('should not change the array it is called on', function () {
      var copy = createArrayLike(testSubject);
      map(testObject, callBack);
      expect(testObject).toEqual(copy);
    });

    it('should only run for the number of objects in the array when it started', function () {
      var arr = createArrayLike([
        1,
        2,
        3
      ]);

      var i = 0;
      map(arr, function (o) {
        Array.prototype.push.call(arr, o + 3);
        i += 1;
        return o;
      });

      expect(Array.prototype.slice.call(arr)).toEqual([
        1,
        2,
        3,
        4,
        5,
        6
      ]);

      expect(i).toBe(3);
    });

    it('should properly translate the values as according to the callBack', function () {
      var result = map(testObject, callBack);
      var expected = [
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ];

      delete expected[1];
      expect(result).toEqual(expected);
    });

    it('should skip non-existing values', function () {
      var array = createArrayLike([
        1,
        2,
        3,
        4
      ]);

      var i = 0;
      delete array[2];
      map(array, function () {
        i += 1;
      });

      expect(i).toBe(3);
    });
  });

  it('should have a boxed object as list argument of callBack', function () {
    var actual;
    map('foo', function (item, index, list) {
      actual = list;
    });

    expect(typeof actual).toBe('object');
    expect(Object.prototype.toString.call(actual)).toBe('[object String]');
  });

  it('should work with arguments', function () {
    var argObj = (function () {
      return arguments;
    }('1'));

    var callback = jasmine.createSpy('callback');
    map(argObj, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, argObj);
  });

  it('should work with strings', function () {
    var callback = jasmine.createSpy('callback');
    var string = '1';
    map(string, callback);
    expect(callback).toHaveBeenCalledWith('1', 0, string);
  });

  itHasDocumentElement('should work wih DOM elements', function () {
    var fragment = document.createDocumentFragment();
    var div = document.createElement('div');
    fragment.appendChild(div);
    var callback = jasmine.createSpy('callback');
    map(fragment.childNodes, callback);
    expect(callback).toHaveBeenCalledWith(div, 0, fragment.childNodes);
  });
});
