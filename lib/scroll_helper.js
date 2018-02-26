/**
 * ScrollHelper
 */
class ScrollHelper {
  /**
   * Get scroll position.
   * @param {Element} element Element. (default: document.body)
   * @return {object} X and Y position. `ex) {x: 100, y: 200}`
   */
  static getPos(element = document.body) {
    if (process.browser) {
      return {x: element.scrollLeft, y: element.scrollTop};
    } else {
      return {x: 0, y: 0};
    }
  }

  /**
   * Scroll.
   * @param {object}  position X and Y position. `ex) {x: 100, y: 200}`
   * @param {integer} ms       Scroll time. (default: 0)
   * @param {Element} element  Element. (default: document.body)
   * @return {Promise} resolves once the animation has finished.
   */
  static scroll(position, ms = 0, element = document.body) {
    if (!process.browser) {
      return Promise.resolve();
    }

    if (ms == 0) {
      element.scrollLeft = position.x || 0;
      element.scrollTop = position.y || 0;
      return Promise.resolve();
    }

    const startedAt = Date.now();
    const p1        = this.getPos(element);
    const p2        = {x: (position.x || 0), y: (position.y || 0)};
    const deltaPos  = {x: (p2.x - p1.x), y: (p2.y - p1.y)};

    return new Promise(function(resolve) {
      const animate = function() {
        const delta = (Date.now() - startedAt) / ms;
        if (delta >= 1) {
          element.scrollLeft = p2.x;
          element.scrollTop = p2.y;
          resolve();
        } else {
          const progress = 1 - Math.cos(delta * Math.PI / 2);
          element.scrollLeft = p1.x + (deltaPos.x * progress);
          element.scrollTop = p1.y + (deltaPos.y * progress);
          global.requestAnimationFrame(animate);
        }
      };
      animate();
    });
  }

  /**
   * Scroll to Element.
   * @param {Element} element  Element.
   * @param {integer} ms       Scroll time. (default: 0)
   * @param {object}  offset   X and Y offset.
   * @return {Promise} resolves once the animation has finished.
   */
  static scrollTo(element, ms = 0, offset={x: 0, y: 0}) {
    if (process.browser) {
      const elemRect = element.getBoundingClientRect();
      const scrPos   = this.getPos();

      return this.scroll({
        x: Math.max(0, scrPos.x + elemRect.top + (offset.x || 0)),
        y: Math.max(0, scrPos.y + elemRect.left + (offset.y || 0)),
      }, ms);
    } else {
      return Promise.resolve();
    }
  }
}

module.exports = ScrollHelper;
