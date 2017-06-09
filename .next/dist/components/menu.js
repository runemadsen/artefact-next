'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/runemadsen/Projects/artefact-next/components/menu.js';

exports.default = function () {
  return _react2.default.createElement('nav', {
    'data-jsx': 2983597894,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_container2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { id: 'logo', 'data-jsx': 2983597894,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Artefact')), 'ONLY SHOW IF USER IS LOGGED IN >', _react2.default.createElement(_link2.default, { href: '/works', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2983597894,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Works')), _react2.default.createElement(_link2.default, { href: '/people', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2983597894,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'People')), _react2.default.createElement(_link2.default, { href: '/users/logout', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2983597894,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Sign out')), _react2.default.createElement(_link2.default, { href: '/user', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2983597894,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Profile'))), _react2.default.createElement(_style2.default, {
    styleId: 2983597894,
    css: 'nav[data-jsx="2983597894"]{border-bottom:1px solid $grayLight;height:75px}nav[data-jsx="2983597894"] a[data-jsx="2983597894"]{margin-right:1em;display:inline-block;-webkit-text-decoration:none;text-decoration:none}nav[data-jsx="2983597894"] #logo[data-jsx="2983597894"]{color:#333;margin-top:0.55em;font-size:2em;font-weight:bold}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzL21lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3J1bmVtYWRzZW4vUHJvamVjdHMvYXJ0ZWZhY3QtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbXX0= */\n/*@ sourceURL=components/menu.js */'
  }));
};