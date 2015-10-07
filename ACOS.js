(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-isnumber'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-isnumber'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.isnumber);
    global.ACOS = mod.exports;
  }
})(this, function (exports, module, _formulaIsnumber) {
  'use strict';

  module.exports = ACOS;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isnumber = _interopRequireDefault(_formulaIsnumber);

  function ACOS(number) {

    return Math.acos(number);
  }
});
