/**
 * ClassHelper
 */
class ClassHelper {
  /**
   * Get all ancestors.
   * @param {class} klass    Class.
   * @param {class} ancestor Ancestor class. Set if returns only descendants.
   * @return {array<class>} Ancestors.
   */
  static getAncestors(klass, ancestor) {
    const classes = [];
    let current   = klass;

    while (current) {
      classes.push(current);
      current = Object.getPrototypeOf(current);
    }

    if (ancestor) {
      return classes.slice(0, Math.max(0, classes.indexOf(ancestor)));
    } else {
      return classes;
    }
  }
}

module.exports = ClassHelper;
