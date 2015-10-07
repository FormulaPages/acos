var acos = require('./ACOS');
var assert = require('assert');
var error = require('formula-errors');

describe('acos', function() {
  it('should calculate the inverse cosine', function() {
    assert( acos(1) === 0 );
    assert( acos(NaN) === error.value );
    assert( acos('invalid') === error.value );
  });
})
