require('./spec_helper');
const t           = require('track-spec');
const ClassHelper = require('../lib/class_helper');

t.describe('ClassHelper', () => {
  let klassA = null;
  let klassB = null;
  let klassC = null;
  let klassD = null;
  let klassE = null;
  let klassX = null;

  t.beforeEach(() => {
    klassA = class {};
    klassB = class extends klassA {};
    klassC = class extends klassB {};
    klassD = class extends klassC {};
    klassE = class extends klassD {};
    klassX = class {};
  });

  t.describe('.getAncestors', () => {
    const subject = (() => ClassHelper.getAncestors(klass, ancestor));
    let klass    = null;
    let ancestor = null;

    t.beforeEach(() => {
      klass = klassE;
    });

    t.it('Return ancestors', () => {
      const classes = subject();
      t.expect(classes[0]).equals(klassE);
      t.expect(classes[1]).equals(klassD);
      t.expect(classes[2]).equals(klassC);
      t.expect(classes[3]).equals(klassB);
      t.expect(classes[4]).equals(klassA);
    });

    t.context('When set ancestor', () => {
      t.beforeEach(() => {
        ancestor = klassB;
      });

      t.it('Return only descendant of ancestor', () => {
        t.expect(subject()).deepEquals([klassE, klassD, klassC]);
      });

      t.context('When klass has descendant', () => {
        t.beforeEach(() => {
          klass = klassD;
        });

        t.it('Return ancestors', () => {
          t.expect(subject()).deepEquals([klassD, klassC]);
        });
      });

      t.context('When descendants are not descendant of ancestor', () => {
        t.beforeEach(() => {
          ancestor = klassX;
        });

        t.it('Return empty array', () => {
          t.expect(subject()).deepEquals([]);
        });
      });

      t.context('When klass equals ancestor', () => {
        t.beforeEach(() => {
          ancestor = klass;
        });

        t.it('Return empty array', () => {
          t.expect(subject()).deepEquals([]);
        });
      });
    });
  });
});
