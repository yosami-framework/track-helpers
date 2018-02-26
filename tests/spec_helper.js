global.window = require('mithril/test-utils/browserMock')();
global.document = window.document;

global.requestAnimationFrame = function(func) {
  setTimeout(func, 1);
};
