/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2017",
  "date": "2019-07-15T11:02:50.010Z",
  "describe": "",
  "description": "Creates an array with the results of calling a function on every element.",
  "file": "array-map-x.js",
  "hash": "c071eeffd7acdde0f154",
  "license": "MIT",
  "version": "3.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["arrayMapX"] = factory();
	else
		root["arrayMapX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(14)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file List of ECMAScript white space characters.
 * @version 3.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module white-space-x
 */



/**
 * A record of a white space character.
 *
 * @typedef {Object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @private
 * @type Array.<CharRecord>
 */
var list = [
  {
    code: 0x0009,
    description: 'Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0009'
  },
  {
    code: 0x000a,
    description: 'Line Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000a'
  },
  {
    code: 0x000b,
    description: 'Vertical Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000b'
  },
  {
    code: 0x000c,
    description: 'Form Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000c'
  },
  {
    code: 0x000d,
    description: 'Carriage Return',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000d'
  },
  {
    code: 0x0020,
    description: 'Space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0020'
  },
  /*
  {
    code: 0x0085,
    description: 'Next line',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u0085'
  }
  */
  {
    code: 0x00a0,
    description: 'No-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u00a0'
  },
  {
    code: 0x1680,
    description: 'Ogham space mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u1680'
  },
  {
    code: 0x180e,
    description: 'Mongolian vowel separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: false,
    es2018: false,
    string: '\u180e'
  },
  {
    code: 0x2000,
    description: 'En quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2000'
  },
  {
    code: 0x2001,
    description: 'Em quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2001'
  },
  {
    code: 0x2002,
    description: 'En space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2002'
  },
  {
    code: 0x2003,
    description: 'Em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2003'
  },
  {
    code: 0x2004,
    description: 'Three-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2004'
  },
  {
    code: 0x2005,
    description: 'Four-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2005'
  },
  {
    code: 0x2006,
    description: 'Six-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2006'
  },
  {
    code: 0x2007,
    description: 'Figure space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2007'
  },
  {
    code: 0x2008,
    description: 'Punctuation space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2008'
  },
  {
    code: 0x2009,
    description: 'Thin space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2009'
  },
  {
    code: 0x200a,
    description: 'Hair space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u200a'
  },
  /*
  {
    code: 0x200b,
    description: 'Zero width space',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u200b'
  },
  */
  {
    code: 0x2028,
    description: 'Line separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2028'
  },
  {
    code: 0x2029,
    description: 'Paragraph separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2029'
  },
  {
    code: 0x202f,
    description: 'Narrow no-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u202f'
  },
  {
    code: 0x205f,
    description: 'Medium mathematical space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u205f'
  },
  {
    code: 0x3000,
    description: 'Ideographic space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u3000'
  },
  {
    code: 0xfeff,
    description: 'Byte Order Mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\ufeff'
  }
];

var stringES2016 = '';
var stringES2018 = '';
var length = list.length;
for (var i = 0; i < length; i += 1) {
  if (list[i].es2016) {
    stringES2016 += list[i].string;
  }

  if (list[i].es2018) {
    stringES2018 += list[i].string;
  }
}

module.exports = {
  /**
   * An array of the whitespace char codes, string, descriptions and language
   * presence in the specifications.
   *
   * @type Array.<CharRecord>
   * @example
   * var whiteSpace = require('white-space-x');
   * whiteSpaces.list.foreach(function (item) {
   *   console.log(lib.description, item.code, item.string);
   * });
   */
  list: list,
  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   */
  string: stringES2018,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   */
  string5: stringES2016,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   */
  string2015: stringES2016,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   * @example
   * var whiteSpace = require('white-space-x');
   * var characters = [
   *   '\u0009',
   *   '\u000a',
   *   '\u000b',
   *   '\u000c',
   *   '\u000d',
   *   '\u0020',
   *   '\u00a0',
   *   '\u1680',
   *   '\u180e',
   *   '\u2000',
   *   '\u2001',
   *   '\u2002',
   *   '\u2003',
   *   '\u2004',
   *   '\u2005',
   *   '\u2006',
   *   '\u2007',
   *   '\u2008',
   *   '\u2009',
   *   '\u200a',
   *   '\u2028',
   *   '\u2029',
   *   '\u202f',
   *   '\u205f',
   *   '\u3000',
   *   '\ufeff'
   * ];
   * var ws = characters.join('');
   * var re1 = new RegExp('^[' + whiteSpace.string2016 + ']+$)');
   * re1.test(ws); // true
   */
  string2016: stringES2016,

  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   */
  string2017: stringES2018,

  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   * @example
   * var whiteSpace = require('white-space-x');
   * var characters = [
   *   '\u0009',
   *   '\u000a',
   *   '\u000b',
   *   '\u000c',
   *   '\u000d',
   *   '\u0020',
   *   '\u00a0',
   *   '\u1680',
   *   '\u2000',
   *   '\u2001',
   *   '\u2002',
   *   '\u2003',
   *   '\u2004',
   *   '\u2005',
   *   '\u2006',
   *   '\u2007',
   *   '\u2008',
   *   '\u2009',
   *   '\u200a',
   *   '\u2028',
   *   '\u2029',
   *   '\u202f',
   *   '\u205f',
   *   '\u3000',
   *   '\ufeff'
   * ];
   * var ws = characters.join('');
   * var re1 = new RegExp('^[' + whiteSpace.string2018 + ']+$)');
   * re1.test(ws); // true
   */
  string2018: stringES2018
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/



/**
* FUNCTION: isUndefined( value )
*	Validates if a value is undefined.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is undefined
*/
function isUndefined( value ) {
	return value === void 0;
} // end FUNCTION isUndefined()


// EXPORTS //

module.exports = isUndefined;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Requires an argument is corecible then converts using ToString.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module require-coercible-to-string-x
 */



var requireObjectCoercible = __webpack_require__(25);
var toStr = __webpack_require__(10);

/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} value - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 * @example
 * var requireCoercibleToString = require('require-coercible-to-string-x');
 *
 * requireCoercibleToString(); // TypeError
 * requireCoercibleToString(null); // TypeError
 * requireCoercibleToString(Symbol('')); // TypeError
 * requireCoercibleToString(Object.create(null)); // TypeError
 * requireCoercibleToString(1); // '1'
 * requireCoercibleToString(true); // 'true'
 */
module.exports = function requireCoercibleToString(value) {
  return toStr(requireObjectCoercible(value));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Converts argument to a value of type Boolean.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-boolean-x
 */



/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} value - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 * @example
 * var toBoolean = require('to-boolean-x');
 *
 * toBoolean(null); // false
 * toBoolean(''); // false
 * toBoolean(1); // true
 * toBoolean('0'); // true
 */
module.exports = function toBoolean(value) {
  return !!value;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if ES6 Symbol is supported.
 * @version 1.4.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-symbol-support-x
 */



/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToString.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tostring|7.1.12 ToString ( argument )}
 * @version 1.4.5
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-x
 */



var castString = __webpack_require__(27).String;
var isSymbol = __webpack_require__(0);

/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} value - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 * @example
 * var $toString = require('to-string-x');
 *
 * $toString(); // 'undefined'
 * $toString(null); // 'null'
 * $toString('abc'); // 'abc'
 * $toString(true); // 'true'
 * $toString(Symbol('foo')); // TypeError
 * $toString(Symbol.iterator); // TypeError
 * $toString(Object(Symbol.iterator)); // TypeError
 * $toString(Object.create(null)); // TypeError
 */
module.exports = function ToString(value) {
  if (isSymbol(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return castString(value);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file If isFunction(callbackfn) is false, throw a TypeError exception.
 * @version 2.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module assert-is-function-x
 */



var isFunction = __webpack_require__(17);
var safeToString = __webpack_require__(33);
var isPrimitive = __webpack_require__(9);

/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 * @example
 * var assertIsFunction = require('assert-is-function-x');
 * var primitive = true;
 * var mySymbol = Symbol('mySymbol');
 * var symObj = Object(mySymbol);
 * var object = {};
 * function fn () {}
 *
 * assertIsFunction(primitive);
 *    // TypeError 'true is not a function'.
 * assertIsFunction(object);
 *    // TypeError '#<Object> is not a function'.
 * assertIsFunction(mySymbol);
 *    // TypeError 'Symbol(mySymbol) is not a function'.
 * assertIsFunction(symObj);
 *    // TypeError '#<Object> is not a function'.
 * assertIsFunction(fn);
 *    // Returns fn.
 */
module.exports = function assertIsFunction(callback) {
  if (isFunction(callback) === false) {
    var msg = isPrimitive(callback) ? safeToString(callback) : '#<Object>';
    throw new TypeError(msg + ' is not a function');
  }

  return callback;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(16);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Determine whether a given value is a function object.
 * @version 3.3.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-function-x
 */



var attempt = __webpack_require__(18);
var fToString = Function.prototype.toString;
var toBoolean = __webpack_require__(6);
var isFalsey = __webpack_require__(19);
var toStringTag = __webpack_require__(20);
var hasToStringTag = __webpack_require__(21);
var isPrimitive = __webpack_require__(9);
var normalise = __webpack_require__(22).normalizeSpace;
var deComment = __webpack_require__(32);
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;

var hasNativeClass = attempt(function () {
  // eslint-disable-next-line no-new-func
  return Function('"use strict"; return class My {};')();
}).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalise(deComment(fToString.call(value), ' ')));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt(testClassstring, value);

  return result.threw === false && result.value;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */
var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt.call(value, fToString).threw === false;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 * @example
 * var isFunction = require('is-function-x');
 *
 * isFunction(); // false
 * isFunction(Number.MIN_VALUE); // false
 * isFunction('abc'); // false
 * isFunction(true); // false
 * isFunction({ name: 'abc' }); // false
 * isFunction(function () {}); // true
 * isFunction(new Function ()); // true
 * isFunction(function* test1() {}); // true
 * isFunction(function test2(a, b) {}); // true
 * isFunction(async function test3() {}); // true
 * isFunction(class Test {}); // false
 * isFunction(class Test {}, true); // true
 * isFunction((x, y) => {return this;}); // true
 */
module.exports = function isFunction(value) {
  if (isPrimitive(value)) {
    return false;
  }

  if (hasToStringTag) {
    return tryFuncToString(value, toBoolean(arguments[1]));
  }

  if (hasNativeClass && isFalsey(arguments[1]) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Invokes function, returning an object of the results.
 * @version 1.1.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module attempt-x
 */



var getArgs = function _getArgs(args) {
  var length = args.length >>> 0;
  var array = [];
  var argLength = length - 1;
  if (argLength < 1) {
    return array;
  }

  array.length = argLength;
  for (var index = 1; index < length; index += 1) {
    array[index - 1] = args[index];
  }

  return array;
};

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} fn - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {Object} Returns an object of the result.
 * @example
 * var attempt = require('attempt-x');
 *
 * function thrower() {
 *   throw new Error('Threw');
 * }
 *
 * attempt(thrower, 1, 2);
 * // {
 * //   threw: true,
 * //   value: // Error('Threw') object
 * // }
 *
 * function sumArgs(a, b) {
 *   return a + b;
 * }
 *
 * attempt(sumArgs, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 3
 * // }
 *
 * var thisArg = [];
 * function pusher(a, b) {
 *   return this.push(a, b);
 * }
 *
 * attempt.call(thisArg, pusher, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 2
 * // }
 * // thisArg => [1, 2];
 */
module.exports = function attempt(fn) {
  try {
    return {
      threw: false,
      value: fn.apply(this, getArgs(arguments))
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Test if a given value is falsey.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-falsey-x
 */



var toBoolean = __webpack_require__(6);

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 * @example
 * var isFalsey = require('is-falsey-x');
 *
 * isFalsey(); // true
 * isFalsey(0); // true
 * isFalsey(''); // true
 * isFalsey(false); // true
 * isFalsey(null); // true
 *
 * isFalsey(true); // false
 * isFalsey([]); // false
 * isFalsey(1); // false
 * isFalsey(function () {}); // false
 */
module.exports = function isFalsey(value) {
  return toBoolean(value) === false;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Get an object's ES6 @@toStringTag.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring|19.1.3.6 Object.prototype.toString ( )}
 * @version 1.4.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-tag-x
 */



var isNull = __webpack_require__(7);
var isUndefined = __webpack_require__(4);
var toStr = {}.toString;

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 * @example
 * var toStringTag = require('to-string-tag-x');
 *
 * var o = new Object();
 * toStringTag(o); // returns '[object Object]'
 */
module.exports = function toStringTag(value) {
  if (isNull(value)) {
    return '[object Null]';
  }

  if (isUndefined(value)) {
    return '[object Undefined]';
  }

  return toStr.call(value);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if ES6 @@toStringTag is supported.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag|26.3.1 @@toStringTag}
 * @version 1.4.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-to-string-tag-x
 */



/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = __webpack_require__(8) && typeof Symbol.toStringTag === 'symbol';


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module normalize-space-x
 */



var libTrim = __webpack_require__(23);
var trim2016 = libTrim.trim2016;
var trim2018 = libTrim.trim2018;
var Rx = __webpack_require__(31).RegExp;
var libWhiteSpace = __webpack_require__(2);
var reNormalize2016 = new Rx('[' + libWhiteSpace.string2016 + ']+', 'g');
var reNormalize2018 = new Rx('[' + libWhiteSpace.string2018 + ']+', 'g');
var replace = ''.replace;

var $normalizeSpace2016 = function normalizeSpace2016(string) {
  return replace.call(trim2016(string), reNormalize2016, ' ');
};

var $normalizeSpace2018 = function normalizeSpace2018(string) {
  return replace.call(trim2018(string), reNormalize2018, ' ');
};

module.exports = {
  /**
   * Reference to normalizeSpace2018.
   */
  normalizeSpace: $normalizeSpace2018,

  /**
   * This method strips leading and trailing white-space from a string,
   * replaces sequences of whitespace characters by a single space,
   * and returns the resulting string. (ES2016)
   *
   * @param {string} string - The string to be normalized.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The normalized string.
   * @example
   * var normalizeSpace = require('normalize-space-x');
   *
   * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
   */
  normalizeSpace2016: $normalizeSpace2016,

  /**
   * This method strips leading and trailing white-space from a string,
   * replaces sequences of whitespace characters by a single space,
   * and returns the resulting string. (ES2018)
   *
   * @param {string} string - The string to be normalized.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The normalized string.
   * @example
   * var normalizeSpace = require('normalize-space-x');
   *
   * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
   */
  normalizeSpace2018: $normalizeSpace2018
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the left and right end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-x
 */



var libTrimLeft = __webpack_require__(24);
var trimLeft2016 = libTrimLeft.trimLeft2016;
var trimLeft2018 = libTrimLeft.trimLeft2018;
var libTrimRight = __webpack_require__(29);
var trimRight2016 = libTrimRight.trimRight2016;
var trimRight2018 = libTrimRight.trimRight2016;

var $trim2016 = function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
};

var $trim2018 = function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
};

module.exports = {
  /**
   * A reference to trim2018.
   */
  trim: $trim2018,

  /**
   * This method removes whitespace from the left and right end of a string.
   * (ES2016)
   * @param {string} string - The string to trim the whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The trimmed string.
   * @example
   * var trim = require('trim-x');
   *
   * trim(' \t\na \t\n') === 'a'; // true
   */
  trim2016: $trim2016,

  /**
   * This method removes whitespace from the left and right end of a string.
   * (ES2018)
   *
   * @param {string} string - The string to trim the whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The trimmed string.
   * @example
   * var trim = require('trim-x');
   *
   * trim(' \t\na \t\n') === 'a'; // true
   */
  trim2018: $trim2018
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the left end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-left-x
 */



var requireCoercibleToString = __webpack_require__(5);
var Rx = __webpack_require__(28).RegExp;
var reLeft2016 = new Rx('^[' + __webpack_require__(2).string2016 + ']+');
var reLeft2018 = new Rx('^[' + __webpack_require__(2).string2018 + ']+');
var replace = ''.replace;

var $trimLeft2016 = function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, '');
};

var $trimLeft2018 = function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft2018, '');
};

module.exports = {
  /**
   * A reference to leftTrim2018.
   */
  trimLeft: $trimLeft2018,

  /**
   * This method removes whitespace from the left end of a string. (ES2016)
   *
   * @param {string} string - The string to trim the left end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The left trimmed string.
   * @example
   * var trimLeft = require('trim-left-x').trimLeft2016;
   *
   * trimLeft(' \t\na \t\n') === 'a \t\n'; // true
   */
  trimLeft2016: $trimLeft2016,

  /**
   * This method removes whitespace from the left end of a string. (ES2018)
   *
   * @param {string} string - The string to trim the left end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The left trimmed string.
   * @example
   * var trimLeft = require('trim-left-x').trimLeft2018;
   *
   * trimLeft(' \t\na \t\n') === 'a \t\n'; // true
   */
  trimLeft2018: $trimLeft2018
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for RequireObjectCoercible.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-requireobjectcoercible|7.2.1 RequireObjectCoercible ( argument )}
 * @version 1.4.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module require-object-coercible-x
 */



var isNil = __webpack_require__(26);

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} value - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 * @example
 * var RequireObjectCoercible = require('require-object-coercible-x');
 *
 * RequireObjectCoercible(); // TypeError
 * RequireObjectCoercible(null); // TypeError
 * RequireObjectCoercible('abc'); // 'abc'
 * RequireObjectCoercible(true); // true
 * RequireObjectCoercible(Symbol('foo')); // Symbol('foo')
 */
module.exports = function RequireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError('Cannot call method on ' + value);
  }

  return value;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Checks if `value` is `null` or `undefined`.
 * @version 1.4.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-nil-x
 */



var isUndefined = __webpack_require__(4);
var isNull = __webpack_require__(7);

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 * var isNil = require('is-nil-x');
 *
 * isNil(null); // => true
 * isNil(void 0); // => true
 * isNil(NaN); // => false
 */
module.exports = function isNil(value) {
  return isNull(value) || isUndefined(value);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Constructors cached from literals.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module cached-constructors-x
 */



/**
 * Constructors cached from literals.
 *
 * @type Object
 * @example
 * var constructors = require('cached-constructors-x');
 */
module.exports = {
  Array: [].constructor,
  Boolean: true.constructor,
  Function: function () {}.constructor,
  Number: (0).constructor,
  Object: {}.constructor,
  RegExp: (/(?:)/).constructor,
  String: ''.constructor
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Constructors cached from literals.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module cached-constructors-x
 */



/**
 * Constructors cached from literals.
 *
 * @type Object
 * @example
 * var constructors = require('cached-constructors-x');
 */
module.exports = {
  Array: [].constructor,
  Boolean: true.constructor,
  Function: function () {}.constructor,
  Number: (0).constructor,
  Object: {}.constructor,
  RegExp: (/(?:)/).constructor,
  String: ''.constructor
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the right end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-right-x
 */



var requireCoercibleToString = __webpack_require__(5);
var Rx = __webpack_require__(30).RegExp;
var reRight2016 = new Rx('[' + __webpack_require__(2).string2016 + ']+$');
var reRight2018 = new Rx('[' + __webpack_require__(2).string2018 + ']+$');
var replace = ''.replace;

var $trimRight2016 = function trimRight2016(string) {
  return replace.call(requireCoercibleToString(string), reRight2016, '');
};

var $trimRight2018 = function trimRight2018(string) {
  return replace.call(requireCoercibleToString(string), reRight2018, '');
};

module.exports = {
  /**
   * A reference to trimRight2018.
   */
  trimRight: $trimRight2018,

  /**
   * This method removes whitespace from the right end of a string. (ES2016)
   *
   * @param {string} string - The string to trim the right end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The right trimmed string.
   * @example
   * var trimRight = require('trim-right-x');
   *
   * trimRight(' \t\na \t\n') === ' \t\na'; // true
   */
  trimRight2016: $trimRight2016,

  /**
   * This method removes whitespace from the right end of a string. (ES2018)
   *
   * @param {string} string - The string to trim the right end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The right trimmed string.
   * @example
   * var trimRight = require('trim-right-x');
   *
   * trimRight(' \t\na \t\n') === ' \t\na'; // true
   */
  trimRight2018: $trimRight2018
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Constructors cached from literals.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module cached-constructors-x
 */



/**
 * Constructors cached from literals.
 *
 * @type Object
 * @example
 * var constructors = require('cached-constructors-x');
 */
module.exports = {
  Array: [].constructor,
  Boolean: true.constructor,
  Function: function () {}.constructor,
  Number: (0).constructor,
  Object: {}.constructor,
  RegExp: (/(?:)/).constructor,
  String: ''.constructor
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Constructors cached from literals.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module cached-constructors-x
 */



/**
 * Constructors cached from literals.
 *
 * @type Object
 * @example
 * var constructors = require('cached-constructors-x');
 */
module.exports = {
  Array: [].constructor,
  Boolean: true.constructor,
  Function: function () {}.constructor,
  Number: (0).constructor,
  Object: {}.constructor,
  RegExp: (/(?:)/).constructor,
  String: ''.constructor
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Replace the comments in a string.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module replace-comments-x
 */



var toStr = __webpack_require__(10);
var requireCoercibleToString = __webpack_require__(5);
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var replace = ''.replace;

/**
 * This method replaces comments in a string.
 *
 * @param {string} string - The string to be stripped.
 * @param {string} [replacement] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 * @example
 * var replaceComments = require('replace-comments-x');
 *
 * replaceComments(test;/* test * /, ''), // 'test;'
 * replaceComments(test; // test, ''), // 'test;'
 */
module.exports = function replaceComments(string) {
  return replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? toStr(arguments[1]) : '');
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6 abstract ToString with Symbol conversion support.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tostring|7.1.12 ToString ( argument )}
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-symbols-supported-x
 */



var castString = __webpack_require__(34).String;
var pToString = __webpack_require__(8) && Symbol.prototype.toString;
var isSymbol = typeof pToString === 'function' && __webpack_require__(0);

/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} value - The value to convert to a string.
 * @returns {string} The converted value.
 * @example
 * var toStringSymbolsSupported = require('to-string-symbols-supported-x');
 *
 * toStringSymbolsSupported(); // 'undefined'
 * toStringSymbolsSupported(null); // 'null'
 * toStringSymbolsSupported('abc'); // 'abc'
 * toStringSymbolsSupported(true); // 'true'
 * toStringSymbolsSupported(Symbol('foo')); // 'Symbol('foo')'
 * toStringSymbolsSupported(Object(Symbol('foo'))); // 'Symbol('foo')'
 * toStringSymbolsSupported(Object.create(null)); // TypeError
 */
module.exports = function toStringSymbolsSupported(value) {
  return isSymbol && isSymbol(value) ? pToString.call(value) : castString(value);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Constructors cached from literals.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module cached-constructors-x
 */



/**
 * Constructors cached from literals.
 *
 * @type Object
 * @example
 * var constructors = require('cached-constructors-x');
 */
module.exports = {
  Array: [].constructor,
  Boolean: true.constructor,
  Function: function () {}.constructor,
  Number: (0).constructor,
  Object: {}.constructor,
  RegExp: (/(?:)/).constructor,
  String: ''.constructor
};


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_esm_string = 'a';
var boxedString = {}.constructor(has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === has_boxed_string_x_esm_string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(11);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var EMPTY_STRING = '';
var strSplit = EMPTY_STRING.split;
var isStringFn = has_boxed_string_x_esm === false && typeof strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, EMPTY_STRING) : value;
}


// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(0);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = attempt(function () {
  _newArrowCheck(this, _this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_esm = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/to-primitive-x/node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(1);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(12);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function isFalsey(value) {
  return !toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_esm = (has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/to-string-x/dist/to-string-x.esm.js

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function requireCoercibleToString(value) {
  return ToString(requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var white_space_x_esm_length = list.length;

for (var white_space_x_esm_i = 0; white_space_x_esm_i < white_space_x_esm_length; white_space_x_esm_i += 1) {
  if (list[white_space_x_esm_i].es2016) {
    stringES2016 += list[white_space_x_esm_i].string;
  }

  if (list[white_space_x_esm_i].es2018) {
    stringES2018 += list[white_space_x_esm_i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ var white_space_x_esm = (string2018);
var string2016 = stringES2016;


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_esm_EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft2016 = new RegExpCtr("^[".concat(string2016, "]+"));
var reLeft = new RegExpCtr("^[".concat(white_space_x_esm, "]+"));
var replace = trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft, trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_esm_RegExpCtr = /none/.constructor;
var reRight2016 = new trim_right_x_esm_RegExpCtr("[".concat(string2016, "]+$"));
var reRight2018 = new trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+$"));
var trim_right_x_esm_replace = trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2016(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2016, trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2018(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2018, trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var SPACE = ' ';
var normalize_space_x_esm_RegExpCtr = /none/.constructor;
var reNormalize2016 = new normalize_space_x_esm_RegExpCtr("[".concat(string2016, "]+"), 'g');
var reNormalize2018 = new normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+"), 'g');
var normalize_space_x_esm_replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalizeSpace2016(string) {
  return normalize_space_x_esm_replace.call(trim2016(string), reNormalize2016, SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalizeSpace2018(string) {
  return normalize_space_x_esm_replace.call(trim2018(string), reNormalize2018, SPACE);
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_esm_EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_replace = replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replaceComments(string, replacement) {
  return replace_comments_x_esm_replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? ToString(replacement) : replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_esm_this = undefined;

function is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_function_x_esm_SPACE = ' ';
var fToString = Function.prototype.toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = attempt(function () {
  is_function_x_esm_newArrowCheck(this, is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalizeSpace2018(replaceComments(fToString.call(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt(testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt.call(value, fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm) {
    return tryFuncToString(value, toBoolean(allowClass));
  }

  if (hasNativeClass && isFalsey(allowClass) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
/** @type {StringConstructor} */

var StringCtr = STRING.constructor;
/** @type {NumberConstructor} */

var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x_esm && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (isFunction(method)) {
      result = method.call(ordinary);

      if (is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_esm) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function toPrimitive(input, preferredType) {
  if (is_primitive_default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/to-number-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/to-number-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/to-number-x/node_modules/to-string-x/dist/to-string-x.esm.js

var to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var to_string_x_esm_castString = to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_string_x_esm_ERROR_MESSAGE);
  }

  return to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/to-number-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return to_string_x_esm_ToString(require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/to-number-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2018 = '';
var dist_white_space_x_esm_length = white_space_x_esm_list.length;

for (var dist_white_space_x_esm_i = 0; dist_white_space_x_esm_i < dist_white_space_x_esm_length; dist_white_space_x_esm_i += 1) {
  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2016) {
    white_space_x_esm_stringES2016 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }

  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2018) {
    white_space_x_esm_stringES2018 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }
}

var white_space_x_esm_string2018 = white_space_x_esm_stringES2018;
/* harmony default export */ var dist_white_space_x_esm = (white_space_x_esm_string2018);
var white_space_x_esm_string2016 = white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/to-number-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var dist_trim_left_x_esm_EMPTY_STRING = '';
var trim_left_x_esm_RegExpCtr = /none/.constructor;
var trim_left_x_esm_reLeft2016 = new trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_esm_string2016, "]+"));
var trim_left_x_esm_reLeft = new trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm, "]+"));
var trim_left_x_esm_replace = dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2016(string) {
  return trim_left_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_esm_reLeft2016, dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2018(string) {
  return trim_left_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_esm_reLeft, dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/to-number-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var dist_trim_right_x_esm_EMPTY_STRING = '';
var dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var trim_right_x_esm_reRight2016 = new dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+$"));
var trim_right_x_esm_reRight2018 = new dist_trim_right_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+$"));
var dist_trim_right_x_esm_replace = dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2016(string) {
  return dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_esm_reRight2016, dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2018(string) {
  return dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_esm_reRight2018, dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/to-number-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2016(string) {
  return trim_left_x_esm_trimLeft2016(trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2018(string) {
  return trim_left_x_esm_trimLeft2018(trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/parse-int-x/node_modules/to-string-x/dist/to-string-x.esm.js

var dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var dist_to_string_x_esm_castString = dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/parse-int-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function dist_is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/parse-int-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (dist_is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/parse-int-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return dist_to_string_x_esm_ToString(dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/parse-int-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var dist_white_space_x_esm_stringES2018 = '';
var white_space_x_dist_white_space_x_esm_length = dist_white_space_x_esm_list.length;

for (var white_space_x_dist_white_space_x_esm_i = 0; white_space_x_dist_white_space_x_esm_i < white_space_x_dist_white_space_x_esm_length; white_space_x_dist_white_space_x_esm_i += 1) {
  if (dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].es2016) {
    dist_white_space_x_esm_stringES2016 += dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].string;
  }

  if (dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].es2018) {
    dist_white_space_x_esm_stringES2018 += dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].string;
  }
}

var dist_white_space_x_esm_string2018 = dist_white_space_x_esm_stringES2018;
/* harmony default export */ var white_space_x_dist_white_space_x_esm = (dist_white_space_x_esm_string2018);
var dist_white_space_x_esm_string2016 = dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/parse-int-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var dist_trim_left_x_esm_reLeft2016 = new dist_trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm_string2016, "]+"));
var dist_trim_left_x_esm_reLeft = new dist_trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_dist_white_space_x_esm, "]+"));
var dist_trim_left_x_esm_replace = trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function dist_trim_left_x_esm_trimLeft2016(string) {
  return dist_trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_left_x_esm_reLeft2016, trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function dist_trim_left_x_esm_trimLeft2018(string) {
  return dist_trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_left_x_esm_reLeft, trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/parse-int-x/dist/parse-int-x.esm.js



var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var _ref = '',
    charAt = _ref.charAt;
var hexRegex = /^[-+]?0[xX]/;
var parse_int_x_esm_test = hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2016(string, radix) {
  var str = dist_trim_left_x_esm_trimLeft2016(dist_to_string_x_esm_ToString(string));
  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2018(string, radix) {
  var str = dist_trim_left_x_esm_trimLeft2018(dist_to_string_x_esm_ToString(string));

  if (charAt.call(str, 0) === "\u180E") {
    return nan_x_esm;
  }

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var to_number_x_esm_castNumber = testCharsCount.constructor;
var pStrSlice = to_number_x_esm_ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_test = binaryRegex.test;

var isBinary = function _isBinary(value) {
  return to_number_x_esm_test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function _isOctal(value) {
  return to_number_x_esm_test.call(octalRegex, value);
};

var nonWSregex2016 = new RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var hasNonWS2016 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2016, value);
};

var nonWSregex2018 = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS2018 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return to_number_x_esm_test.call(invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function toNumber2016(argument) {
  var value = toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function toNumber2018(argument) {
  var value = toPrimitive(argument, to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm_isNaN(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2016(x) {
  var n = toNumber2016(x);

  if (n === 0 || is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2018(x) {
  var n = toNumber2018(x);

  if (n === 0 || is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2016(value) {
  var number = toNumber2016(value);

  if (is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return sign2016(number) * floor(abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2018(value) {
  var number = toNumber2018(value);

  if (is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return sign2018(number) * floor(abs(number));
}


// EXTERNAL MODULE: ./node_modules/max-safe-integer/index.js
var max_safe_integer = __webpack_require__(3);
var max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(max_safe_integer);

// CONCATENATED MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2016(value) {
  var len = toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > max_safe_integer_default.a) {
    return max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2018(value) {
  var len = toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > max_safe_integer_default.a) {
    return max_safe_integer_default.a;
  }

  return len;
}


// EXTERNAL MODULE: ./node_modules/validate.io-undefined/lib/index.js
var lib = __webpack_require__(4);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/to-object-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function is_nil_x_dist_is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/to-object-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (is_nil_x_dist_is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function toObject(value) {
  return castObject(require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// EXTERNAL MODULE: ./node_modules/assert-is-function-x/index.js
var assert_is_function_x = __webpack_require__(13);
var assert_is_function_x_default = /*#__PURE__*/__webpack_require__.n(assert_is_function_x);

// CONCATENATED MODULE: ./dist/array-map-x.esm.js
var array_map_x_esm_this = undefined;

function array_map_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }







/** @type {ArrayConstructor} */

var ArrayCtr = [].constructor;
/** @type {ObjectConstructor} */

var array_map_x_esm_castObject = {}.constructor;
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var nativeMap = typeof ArrayCtr.prototype.map === 'function' && ArrayCtr.prototype.map;
var isWorking;

if (nativeMap) {
  var spy = 0;
  var res = attempt.call([1, 2], nativeMap, function (item) {
    array_map_x_esm_newArrowCheck(this, array_map_x_esm_this);

    return item;
  }.bind(undefined));
  isWorking = res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;

  if (isWorking) {
    spy = '';
    res = attempt.call(array_map_x_esm_castObject('ab'), nativeMap, function (item) {
      array_map_x_esm_newArrowCheck(this, array_map_x_esm_this);

      return item;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 2 && res.value[0] === 'a' && res.value[1] === 'b';
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call(function returnArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2), nativeMap, function (item) {
      array_map_x_esm_newArrowCheck(this, array_map_x_esm_this);

      return item;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 2 && res.value[0] === 1 && res.value[1] === 2;
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call({
      0: 1,
      2: 2,
      length: 3
    }, nativeMap, function (item) {
      array_map_x_esm_newArrowCheck(this, array_map_x_esm_this);

      return item;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 3 && 1 in res.value === false;
  }

  if (isWorking) {
    var doc = typeof document !== 'undefined' && document;

    if (doc) {
      spy = null;
      var fragment = doc.createDocumentFragment();
      var div = doc.createElement('div');
      fragment.appendChild(div);
      res = attempt.call(fragment.childNodes, nativeMap, function (item) {
        array_map_x_esm_newArrowCheck(this, array_map_x_esm_this);

        return item;
      }.bind(undefined));
      isWorking = res.threw === false && res.value && res.value.length === 1 && res.value[0] === div;
    }
  }

  if (isWorking) {
    var isStrict = function returnIsStrict() {
      /* eslint-disable-next-line babel/no-invalid-this */
      return castBoolean(this) === false;
    }();

    if (isStrict) {
      spy = null;
      res = attempt.call([1], nativeMap, function () {
        array_map_x_esm_newArrowCheck(this, array_map_x_esm_this);

        /* eslint-disable-next-line babel/no-invalid-this */
        spy = typeof this === 'string';
      }.bind(undefined), 'x');
      isWorking = res.threw === false && res.value && res.value.length === 1 && spy === true;
    }
  }

  if (isWorking) {
    spy = {};
    var fn = ['return nativeMap.call("foo", function (_, __, context) {', 'if (BooleanCtr(context) === false || typeof context !== "object") {', 'spy.value = true;}});'].join('');
    /* eslint-disable-next-line no-new-func */

    res = attempt(Function('nativeMap', 'spy', 'BooleanCtr', fn), nativeMap, spy);
    isWorking = res.threw === false && res.value && res.value.length === 3 && spy.value !== true;
  }
}
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


var $map;

if (nativeMap) {
  $map = function map(array, callBack
  /* , thisArg */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeMap.apply(array, args);
  };
} else {
  $map = function map(array, callBack
  /* , thisArg */
  ) {
    var object = toObject(array); // If no callback function or if callback is not a callable function

    assert_is_function_x_default()(callBack);
    var iterable = splitIfBoxedBug(object);
    var length = toLength2018(iterable.length);
    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var noThis = lib_default()(thisArg);
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

var arrayMap = $map;
/* harmony default export */ var array_map_x_esm = __webpack_exports__["default"] = (arrayMap);



/***/ })
/******/ ]);
});
//# sourceMappingURL=array-map-x.js.map