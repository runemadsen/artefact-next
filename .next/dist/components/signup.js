'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/runemadsen/Projects/artefact-next/components/signup.js';


var SignUp = function (_Component) {
  (0, _inherits3.default)(SignUp, _Component);

  function SignUp() {
    (0, _classCallCheck3.default)(this, SignUp);

    return (0, _possibleConstructorReturn3.default)(this, (SignUp.__proto__ || (0, _getPrototypeOf2.default)(SignUp)).apply(this, arguments));
  }

  (0, _createClass3.default)(SignUp, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault
      // Grab directly from input fields via ID's.
      // Replace with Martin's components when ready
      ();var username = document.getElementById('signUpUsername').value;
      var password = document.getElementById('signUpPassword').value;
      var email = document.getElementById('signUpEmail').value;

      this.props.onSubmit(username, password, email);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Sign Up'), _react2.default.createElement('form', { autoComplete: 'off', onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('input', { type: 'text', id: 'signUpUsername', name: 'username', placeholder: 'Pick a username', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('input', { type: 'email', id: 'signUpEmail', name: 'email', placeholder: 'Your email address', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('input', { type: 'password', id: 'signUpPassword', name: 'password', placeholder: 'Create a password', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('button', { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Sign up for Artefact')));
    }
  }]);

  return SignUp;
}(_react.Component);

SignUp.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired
};

exports.default = SignUp;