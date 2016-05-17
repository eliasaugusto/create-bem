'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('lodash/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * _toString()
 * @param {String} className
 * @return {String}
 */
var _toString = function _toString(className) {
  return function () {
    return String(className);
  };
};

/**
 * _el()
 * @param {String} block
 * @param {String} element
 * @return {Object}
 */
var _el = (0, _curry2.default)(function (block, element) {
  var className = block + '__' + element;

  return {
    md: _md(className, className),
    toString: _toString(className)
  };
});

/**
 * _md()
 * @param {String} previous
 * @param {String} current
 * @param {String} modifier
 * @param {Boolean} [toggle]
 * @return {Object}
 */
var _md = (0, _curry2.default)(function (previous, current, modifier) {
  var toggle = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

  var className = !toggle ? previous : previous + ' ' + current + '--' + modifier;

  return {
    md: _md(className, current),
    toString: _toString(className)
  };
});

/**
 * createBEM()
 * @param {String} block
 * @return {Object}
 */
function createBEM(block) {
  return {
    el: _el(block),
    md: _md(block, block),
    toString: _toString(block)
  };
}

exports.default = createBEM;