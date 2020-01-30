import $map, {implementation} from '../src/array-map-x';

const itHasDoc = typeof document !== 'undefined' && document ? it : xit;

// IE 6 - 8 have a bug where this returns false.

const canDistinguish = 0 in [void 0];
const undefinedIfNoSparseBug = canDistinguish
  ? void 0
  : {
      valueOf() {
        return 0;
      },
    };

const createArrayLike = function(arr) {
  const o = {};
  arr.forEach(function(e, i) {
    o[i] = e;
  });

  o.length = arr.length;

  return o;
};

[implementation, $map].forEach((map, testNum) => {
  describe(`map ${testNum}`, function() {
    let testSubject;
    let testObject;
    let callBack;

    beforeEach(function() {
      testSubject = [2, 3, undefinedIfNoSparseBug, true, 'hej', null, false, 0];

      delete testSubject[1];

      let i = -1;
      callBack = function() {
        i += 1;

        return i;
      };
    });

    it('is a function', function() {
      expect.assertions(1);
      expect(typeof map).toBe('function');
    });

    it('should throw when array is null or undefined', function() {
      expect.assertions(3);
      expect(function() {
        map();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        map(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        map(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should return an empty array when given an empty array', function() {
      expect.assertions(1);
      expect(
        map([], function() {
          return true;
        }),
      ).toStrictEqual([]);
    });

    describe('array object', function() {
      it('should call mapper with the right parameters', function() {
        expect.assertions(1);
        const mapper = jest.fn();
        const array = [1];
        map(array, mapper);
        expect(mapper).toHaveBeenCalledWith(1, 0, array);
      });

      it('should set the context correctly', function() {
        expect.assertions(1);
        const context = [];
        map(
          testSubject,
          function(o, i) {
            /* eslint-disable-next-line babel/no-invalid-this */
            this[i] = o;
          },
          context,
        );

        expect(context).toStrictEqual(testSubject);
      });

      it('should set the right context when given none', function() {
        expect.assertions(1);

        let context = void 0;
        map([1], function() {
          /* eslint-disable-next-line babel/no-invalid-this */
          context = this;
        });

        expect(context).toBe(
          function() {
            /* eslint-disable-next-line babel/no-invalid-this */
            return this;
          }.call(),
        );
      });

      it('should not change the array it is called on', function() {
        expect.assertions(1);
        const copy = testSubject.slice();
        map(testSubject, callBack);
        expect(testSubject).toStrictEqual(copy);
      });

      it('should only run for the number of objects in the array when it started', function() {
        expect.assertions(2);
        const arr = [1, 2, 3];

        let i = 0;
        map(arr, function(o) {
          arr.push(o + 3);
          i += 1;

          return o;
        });

        expect(arr).toStrictEqual([1, 2, 3, 4, 5, 6]);

        expect(i).toBe(3);
      });

      it('should properly translate the values as according to the callBack', function() {
        expect.assertions(1);
        const result = map(testSubject, callBack);
        const expected = [0, 0, 1, 2, 3, 4, 5, 6];

        delete expected[1];
        expect(result).toStrictEqual(expected);
      });

      it('should skip non-existing values', function() {
        expect.assertions(1);
        const array = [1, 2, 3, 4];

        let i = 0;
        delete array[2];
        map(array, function() {
          i += 1;
        });

        expect(i).toBe(3);
      });
    });

    describe('array-like', function() {
      beforeEach(function() {
        testObject = createArrayLike(testSubject);
      });

      it('should call mapper with the right parameters', function() {
        expect.assertions(1);
        const mapper = jest.fn();
        const array = createArrayLike([1]);
        map(array, mapper);
        expect(mapper).toHaveBeenCalledWith(1, 0, array);
      });

      it('should set the context correctly', function() {
        expect.assertions(1);
        const context = {};
        map(
          testObject,
          function(o, i) {
            /* eslint-disable-next-line babel/no-invalid-this */
            this[i] = o;

            /* eslint-disable-next-line babel/no-invalid-this */
            this.length = i + 1;

            /* eslint-disable-next-line babel/no-invalid-this */
            return this.length;
          },
          context,
        );

        expect(context).toStrictEqual(testObject);
      });

      it('should set the right context when given none', function() {
        expect.assertions(1);

        let context = void 0;
        map(createArrayLike([1]), function() {
          /* eslint-disable-next-line babel/no-invalid-this */
          context = this;

          return context;
        });

        expect(context).toBe(
          function() {
            /* eslint-disable-next-line babel/no-invalid-this */
            return this;
          }.call(),
        );
      });

      it('should not change the array it is called on', function() {
        expect.assertions(1);
        const copy = createArrayLike(testSubject);
        map(testObject, callBack);
        expect(testObject).toStrictEqual(copy);
      });

      it('should only run for the number of objects in the array when it started', function() {
        expect.assertions(2);
        const arr = createArrayLike([1, 2, 3]);

        let i = 0;
        map(arr, function(o) {
          Array.prototype.push.call(arr, o + 3);
          i += 1;

          return o;
        });

        expect(Array.prototype.slice.call(arr)).toStrictEqual([1, 2, 3, 4, 5, 6]);

        expect(i).toBe(3);
      });

      it('should properly translate the values as according to the callBack', function() {
        expect.assertions(1);
        const result = map(testObject, callBack);
        const expected = [0, 0, 1, 2, 3, 4, 5, 6];

        delete expected[1];
        expect(result).toStrictEqual(expected);
      });

      it('should skip non-existing values', function() {
        expect.assertions(1);
        const array = createArrayLike([1, 2, 3, 4]);

        let i = 0;
        delete array[2];
        map(array, function() {
          i += 1;
        });

        expect(i).toBe(3);
      });
    });

    it('should have a boxed object as list argument of callBack', function() {
      expect.assertions(2);

      let actual = void 0;
      map('foo', function(item, index, list) {
        actual = list;
      });

      expect(typeof actual).toBe('object');
      expect(Object.prototype.toString.call(actual)).toBe('[object String]');
    });

    it('should work with arguments', function() {
      expect.assertions(1);
      const argObj = (function() {
        return arguments;
      })('1');

      const callback = jest.fn();
      map(argObj, callback);
      expect(callback).toHaveBeenCalledWith('1', 0, argObj);
    });

    it('should work with strings', function() {
      expect.assertions(1);
      const callback = jest.fn();
      const string = '1';
      map(string, callback);
      expect(callback).toHaveBeenCalledWith('1', 0, Object(string));
    });

    itHasDoc('should work wih DOM elements', function() {
      expect.assertions(1);
      const fragment = document.createDocumentFragment();
      const div = document.createElement('div');
      fragment.appendChild(div);
      const callback = jest.fn();
      map(fragment.childNodes, callback);
      expect(callback).toHaveBeenCalledWith(div, 0, fragment.childNodes);
    });
  });
});
