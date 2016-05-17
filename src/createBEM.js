import curry from 'lodash/curry';

/**
 * _toString()
 * @param {String} className
 * @return {String}
 */
const _toString = (className) => () => String(className);

/**
 * _el()
 * @param {String} block
 * @param {String} element
 * @return {Object}
 */
const _el = curry((block, element) => {
  let className = `${block}__${element}`;

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
const _md = curry((previous, current, modifier, toggle = true) => {
  let className = !toggle ? previous : `${previous} ${current}--${modifier}`;

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

export default createBEM;
