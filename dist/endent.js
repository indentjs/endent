'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dedent = require('dedent');

var _dedent2 = _interopRequireDefault(_dedent);

var _objectorarray = require('objectorarray');

var _objectorarray2 = _interopRequireDefault(_objectorarray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = endent;


var ENDENT_ID = 'twhZNwxI1aFG3r4';

function endent(strings) {
  var raw = typeof strings === 'string' ? [strings] : strings.raw;

  var result = '';

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < raw.length; i++) {
    result += raw[i];

    if (i < values.length) {
      if (values[i] && values[i][ENDENT_ID]) {
        var rawlines = result.split('\n');
        var l = rawlines[rawlines.length - 1].search(/\S/);

        var endentation = ' '.repeat(l);
        var valueLines = values[i][ENDENT_ID].split('\n');
        valueLines.forEach(function (l, index) {
          if (index > 0) {
            result += '\n' + endentation + l;
          } else {
            result += l;
          }
        });
      } else {
        if (typeof values[i] === 'string' && values[i].includes('\n')) {
          var endentations = result.match(/(?:^|\n)( *)$/);
          if (endentations && typeof values[i] === 'string') {
            var endentation = endentations[1];
            result += values[i].split('\n').map(function (str, i) {
              return i === 0 ? str : '' + endentation + str;
            }).join('\n');
          } else {
            result += values[i];
          }
        } else {
          result += values[i];
        }
      }
    }
  }

  return (0, _dedent2.default)(result);
}

endent.pretty = function (data) {
  return (0, _objectorarray2.default)(data) ? _defineProperty({}, ENDENT_ID, JSON.stringify(data, null, 2)) : data;
};
