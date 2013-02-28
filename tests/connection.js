'use strict';

var Thoonk = require('../thoonk').Thoonk;
var config = JSON.parse(require('fs').readFileSync('./testconfig.json'));
var assert = require('assert');

if (! config.enabled) {
  process.stderr.write('testconfig.json: test disabled' + "\n");
  process.exit();
}

describe('Thoonk', function () {
  describe('.createClient(host, port, db)', function () {
    var thoonk = new Thoonk(config.host, config.port, config.db);

    it('should define #host, #port, #db', function () {
      assert.notEqual(thoonk.host, undefined);
      assert.notEqual(thoonk.port, undefined);
      assert.notEqual(thoonk.db, undefined);
    });
  });
  describe('.open(host, port, db)', function () {
    var thoonk = new Thoonk();

    it('should not define #host, #port, #db', function () {
      assert.equal(thoonk.host, undefined);
      assert.equal(thoonk.port, undefined);
      assert.equal(thoonk.db, undefined);
    });
  });
});
