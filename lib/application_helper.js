/**
 * Application Helper
 */
class ApplicationHelper {
  /**
   * Get Boot script.
   * return {string} boot script.
   */
  static get bootScript() {
    return `(function(){var $=document;var assets=JSON.parse($.querySelector('meta[name="app:assets"]').getAttribute("content"));var link=$.createElement("link");link.setAttribute("rel","stylesheet");link.setAttribute("href",assets.css);$.head.appendChild(link);var script=$.createElement("script");script.setAttribute("src",assets.js);$.body.appendChild(script)})();`;
  }
}

module.exports = ApplicationHelper;
