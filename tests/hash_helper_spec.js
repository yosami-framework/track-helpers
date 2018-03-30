require('./spec_helper');
const t          = require('track-spec');
const HashHelper = require('../lib/hash_helper');

t.describe('HashHelper', () => {
  t.describe('#fast', () => {
    const subject = (() => HashHelper.fast('ABCDEFGエヴァけもフレ'));

    t.it('Return hash', () => {
      t.expect(subject()).equals('6cac1917');
    });
  });
});
