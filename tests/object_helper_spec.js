require('./spec_helper');
const t            = require('track-spec');
const ObjectHelper = require('../lib/object_helper');

t.describe('ObjectHelper', () => {
  t.describe('.deepEqual', () => {
    const subject = (() => ObjectHelper.deepEqual(a, b));
    let a = null;
    let b = null;

    t.context('When object is equal', () => {
      t.beforeEach(() => {
        a = {'v1': 'Hey!', 'v2': {a: 'A', b: [1, 2, 3]}};
        b = {'v1': 'Hey!', 'v2': {a: 'A', b: [1, 2, 3]}};
      });

      t.it('Return truthy', () => {
        t.expect(!!subject()).equals(true);
      });
    });

    t.context('When object is not equal', () => {
      t.beforeEach(() => {
        a = {'v1': 'Hey!', 'v2': {a: 'A', b: [1, 2, 3]}};
        b = {'v1': 'Hey!', 'v2': {a: 'A', b: [1, 2, 3, 4]}};
      });

      t.it('Return falsey', () => {
        t.expect(!!subject()).equals(false);
      });
    });
  });

  t.describe('.deepMerge', () => {
    const subject = (() => ObjectHelper.deepMerge(a, b));
    let a = null;
    let b = null;

    t.beforeEach(() => {
      a = {'v1': 'Hey!', 'v2': {a: 'A'}};
      b = {'v2': {b: [1, 2, 3]}};
    });

    t.it('Return truthy', () => {
      t.expect(subject()).deepEquals({'v1': 'Hey!', 'v2': {a: 'A', b: [1, 2, 3]}});
    });
  });
});
