require('./spec_helper');
const t            = require('track-spec');
const ScrollHelper = require('../lib/scroll_helper');

t.describe('ScrollHelper', () => {
  t.beforeEach(() => {
    process.browser = true;
    document.body.scrollLeft = 777;
    document.body.scrollTop = 888;
  });

  t.afterEach(() => {
    process.browser = false;
  });

  t.describe('#getPos()', () => {
    const subject = (() => ScrollHelper.getPos(element));
    let element = null;

    t.context('When does not use browser', () => {
      t.beforeEach(() => {
        process.browser = false;
      });

      t.it('Return 0', () => {
        t.expect(subject()).deepEquals({x: 0, y: 0});
      });
    });

    t.context('When does not pass element', () => {
      t.beforeEach(() => {
        element = undefined;
      });

      t.it('Return window scroll position.', () => {
        t.expect(subject()).deepEquals({x: 777, y: 888});
      });
    });

    t.context('When pass element', () => {
      t.beforeEach(() => {
        element = {
          scrollLeft: 111,
          scrollTop:  222,
        };
      });

      t.it('Return element scroll position', () => {
        t.expect(subject()).deepEquals({x: 111, y: 222});
      });
    });
  });

  t.describe('#scroll()', () => {
    const subject = (() => ScrollHelper.scroll(position, ms, element));
    let position = null;
    let element  = null;
    let ms       = null;

    t.beforeEach(() => {
      position = {x: 333, y: 444};
      element = {
        scrollLeft: 111,
        scrollTop:  222,
      };
      ms = 100;
    });

    t.it('Scroll', () => {
      return subject().then(() => {
        t.expect(element).deepEquals({
          scrollLeft: 333,
          scrollTop:  444,
        });
      });
    });

    t.context('When does not use browser', () => {
      t.beforeEach(() => {
        process.browser = false;
      });

      t.it('Not scroll', () => {
        return subject().then(() => {
          t.expect(element).deepEquals({
            scrollLeft: 111,
            scrollTop:  222,
          });
        });
      });
    });

    t.context('When ms is 0', () => {
      t.beforeEach(() => {
        ms = 0;
      });

      t.it('Scroll', () => {
        return subject().then(() => {
          t.expect(element).deepEquals({
            scrollLeft: 333,
            scrollTop:  444,
          });
        });
      });
    });

    t.context('When element is undefined', () => {
      t.beforeEach(() => {
        element = undefined;
      });

      t.it('Scroll window', () => {
        return subject().then(() => {
          t.expect(document.body.scrollLeft).equals(333);
          t.expect(document.body.scrollTop).equals(444);
        });
      });
    });
  });

  t.describe('#scrollTo()', () => {
    const subject = (() => ScrollHelper.scrollTo(element));
    let element  = null;

    t.beforeEach(() => {
      element = {
        getBoundingClientRect: t.spy(() => {
          return {top: -222, left: 111};
        }),
      };
    });

    t.it('Scroll window', () => {
      return subject().then(() => {
        t.expect(document.body.scrollLeft).equals(555);
        t.expect(document.body.scrollTop).equals(999);
      });
    });
  });
});
