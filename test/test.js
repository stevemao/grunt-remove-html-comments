'use strict';
var fs = require('fs');
var join = require('path').join;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.removeHtmlComments = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  overwrite: function(test) {
    var actual = fs.readFileSync(join(__dirname, '../tmp/overwrite.html'), 'utf8');
    var expected = fs.readFileSync(join(__dirname, 'expected.html'), 'utf8');

    test.strictEqual(actual, expected);

    test.done();
  },
  target: function(test) {
    var actual = fs.readFileSync(join(__dirname, '../tmp/actual.html'), 'utf8');
    var expected = fs.readFileSync(join(__dirname, 'expected.html'), 'utf8');

    test.strictEqual(actual, expected);

    test.done();
  }
};
