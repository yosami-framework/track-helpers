require('./spec_helper');
const t                 = require('track-spec');
const ApplicationHelper = require('../lib/application_helper');

t.describe('ApplicationHelper', () => {
  t.describe('.bootScript', () => {
    const subject = (() => ApplicationHelper.bootScript);

    t.it('Return boot script', () => {
      t.expect(subject().indexOf('meta[name="app:assets"]') != -1).equals(true);
    });
  });
});
