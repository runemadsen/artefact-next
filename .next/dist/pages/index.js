'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _container = require('../components/container');

var _container2 = _interopRequireDefault(_container);

var _menu = require('../components/menu');

var _menu2 = _interopRequireDefault(_menu);

var _signup = require('../components/signup');

var _signup2 = _interopRequireDefault(_signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/runemadsen/Projects/artefact-next/pages/index.js?entry';


var Index = function Index() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_container2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'IF ANONYMOUS'), _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Sign up'), _react2.default.createElement(_signup2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Sign in'), 'SIGNIN FORM HERE'));
};

exports.default = Index;