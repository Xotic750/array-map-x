<a href="https://travis-ci.org/Xotic750/array-map-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/array-map-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/array-map-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/array-map-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/array-map-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/array-map-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/array-map-x" title="npm version">
<img src="https://badge.fury.io/js/array-map-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_array-map-x"></a>

## array-map-x
Creates an array with the results of calling a function on every element.

**Version**: 2.1.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_array-map-x--module.exports"></a>

### `module.exports` ⇒ <code>array</code> ⏏
This method creates a new array with the results of calling a provided
function on every element in the calling array.

**Kind**: Exported member  
**Returns**: <code>array</code> - A new array with each element being the result of the
callback function.  
**Throws**:

- <code>TypeError</code> If array is null or undefined.
- <code>TypeError</code> If callBack is not a function.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | The array to iterate over. |
| callBack | <code>function</code> | Function that produces an element of the Array. |
| [thisArg] | <code>\*</code> | Value to use as this when executing callback. |

**Example**  
```js
var map = require('array-map-x');

var numbers = [1, 4, 9];
var roots = map(numbers, Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```
