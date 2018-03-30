const deepEqual = require('fast-deep-equal');
const deepMerge = require('deepmerge');

/**
 * ObjectHelper
 */
class ObjectHelper { }

Object.defineProperty(ObjectHelper, 'deepEqual', {value: deepEqual});

// @note for webpack issue#6584, hmm...
Object.defineProperty(ObjectHelper, 'deepMerge', {value: deepMerge.default || deepMerge});

module.exports = ObjectHelper;
