'use strict';

var _alter = require('../lib/alter.js');

var _alter2 = _interopRequireDefault(_alter);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _chainable = require('../lib/classes/chainable');

var _chainable2 = _interopRequireDefault(_chainable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = new _chainable2.default('movingaverage', {
  args: [{
    name: 'inputSeries',
    types: ['seriesList']
  }, {
    name: 'window',
    types: ['number'],
    help: 'Number of points to average over'
  }, {
    name: 'position',
    types: ['string', 'null'],
    help: 'Position of the averaged points relative to the result time.  Options are left, right, and center (default).'
  }],
  aliases: ['mvavg'],
  help: 'Calculate the moving average over a given window. Nice for smoothing noisey series',
  fn: function movingaverageFn(args) {
    return (0, _alter2.default)(args, function (eachSeries, _window, _position) {

      _position = _position || 'center';
      const validPositions = ['left', 'right', 'center'];
      if (!_lodash2.default.contains(validPositions, _position)) throw new Error('Valid positions are: ' + validPositions.join(', '));

      const pairs = eachSeries.data;
      const pairsLen = pairs.length;
      eachSeries.label = eachSeries.label + ' mvavg=' + _window;

      function toPoint(point, pairSlice) {
        const average = _lodash2.default.chain(pairSlice).map(1).reduce(function (memo, num) {
          return memo + num;
        }).value() / _window;

        return [point[0], average];
      }

      if (_position === 'center') {
        const windowLeft = Math.floor(_window / 2);
        const windowRight = _window - windowLeft;
        eachSeries.data = _lodash2.default.map(pairs, function (point, i) {
          if (i < windowLeft || i >= pairsLen - windowRight) return [point[0], null];
          return toPoint(point, pairs.slice(i - windowLeft, i + windowRight));
        });
      } else if (_position === 'left') {
        eachSeries.data = _lodash2.default.map(pairs, function (point, i) {
          if (i < _window) return [point[0], null];
          return toPoint(point, pairs.slice(i - _window, i));
        });
      } else if (_position === 'right') {
        eachSeries.data = _lodash2.default.map(pairs, function (point, i) {
          if (i >= pairsLen - _window) return [point[0], null];
          return toPoint(point, pairs.slice(i, i + _window));
        });
      }

      return eachSeries;
    });
  }
});
