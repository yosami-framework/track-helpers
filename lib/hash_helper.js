/**
 * HashHelper
 */
class HashHelper {
  /**
   * Generate hash. (fast)
   * @note FNV-1a(32bit)
   *
   * @param {string} src Input value.
   * @return {string} Hex value. (non-cryptographic)
   */
  static fast(src) {
    const ascii = encodeURIComponent(src);

    let hash = 2166136261;
    for (let i = ascii.length - 1; i >= 0; --i) {
      hash ^= ascii.charCodeAt(i);
      hash += (hash << 1) + (hash << 4) +
              (hash << 7) + (hash << 8) + (hash << 24);
    }

    return (hash >>> 0).toString(16);
  }
}

module.exports = HashHelper;
