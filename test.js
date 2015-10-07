var acos = require('./ACOS');
var assert = require('assert');
var error = require('formula-errors');

describe('n', function() {
  it('should convert value to number', function() {
    assert( acos(1) === 0 );
    assert( acos(NaN) === error.value );
    assert( acos('invalid') === error.value );
  });
})
