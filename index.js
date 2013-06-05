/**
 * element-match
 * selector match plugin for element
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `match`.
 */

module.exports = match;

/**
 * match
 */

function match (element) {
  
  /**
   * Vendor function.
   */
   
  var proto = Element.prototype;
  var vendor = proto.matchesSelector
    || proto.webkitMatchesSelector
    || proto.mozMatchesSelector
    || proto.msMatchesSelector
    || proto.oMatchesSelector;

  /**
   * match
   * match element to `selector`.
   *
   * @param {String} selector
   * @return {Boolean}
   * @api public
   */
  
  element.prototype.match = function (selector) {
    return vendor.call(el, selector);
  };
  
  /**
   * fallback
   */
  
  if (!vendor) {
    element.prototype.match = function (selector) {
      var parent = el.parentNode;
      var nodes = parent.querySelectorAll(selector);
      var len = nodes.length;
      var i;
      
      for (i = 0; i < len; i += 1) {
        if (nodes[i] == el) {
          return true;
        }
      }
      
      return false;
    };
  }

  return element;
}
