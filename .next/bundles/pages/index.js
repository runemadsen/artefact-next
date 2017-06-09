
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(538);

var _link2 = _interopRequireDefault(_link);

var _header = __webpack_require__(546);

var _header2 = _interopRequireDefault(_header);

var _container = __webpack_require__(545);

var _container2 = _interopRequireDefault(_container);

var _menu = __webpack_require__(542);

var _menu2 = _interopRequireDefault(_menu);

var _signup = __webpack_require__(547);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/runemadsen/Projects/artefact-next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/runemadsen/Projects/artefact-next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(544);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(538);

var _link2 = _interopRequireDefault(_link);

var _container = __webpack_require__(545);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/runemadsen/Projects/artefact-next/components/menu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/runemadsen/Projects/artefact-next/components/menu.js"); } } })();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(539);


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(544);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/runemadsen/Projects/artefact-next/components/container.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", { className: "container", "data-jsx": 167483158,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 167483158,
    css: ".container[data-jsx=\"167483158\"]{margin:0 auto;max-width:1100px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcnVuZW1hZHNlbi9Qcm9qZWN0cy9hcnRlZmFjdC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOltdfQ== */\n/*@ sourceURL=components/container.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/runemadsen/Projects/artefact-next/components/container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/runemadsen/Projects/artefact-next/components/container.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/runemadsen/Projects/artefact-next/components/header.js';

exports.default = function () {
  return _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, '\n        * {\n          box-sizing: border-box;\n        }\n\n        body {\n          margin: 0;\n          padding: 0;\n          -webkit-font-smoothing: antialiased;\n          color: $fontBlack;\n          font-family: Helvetica, Arial, sans-serif;\n          font-size: 100%;\n        }\n      ')));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/runemadsen/Projects/artefact-next/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/runemadsen/Projects/artefact-next/components/header.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(84);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/runemadsen/Projects/artefact-next/components/signup.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/runemadsen/Projects/artefact-next/components/signup.js"); } } })();

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzA0NDA4OWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51LmpzPzA0NDA4OWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWluZXIuanM/MDQ0MDg5ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz8wNDQwODlmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lnbnVwLmpzPzA0NDA4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnXG5pbXBvcnQgU2lnblVwIGZyb20gJy4uL2NvbXBvbmVudHMvc2lnbnVwJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZGVyIC8+XG4gICAgPE1lbnUgLz5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPHA+SUYgQU5PTllNT1VTPC9wPlxuICAgICAgPGgyPlNpZ24gdXA8L2gyPlxuICAgICAgPFNpZ25VcCAvPlxuXG4gICAgICA8aDI+U2lnbiBpbjwvaDI+XG5cbiAgICAgIFNJR05JTiBGT1JNIEhFUkVcblxuICAgIDwvQ29udGFpbmVyPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8bmF2PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgaWQ9XCJsb2dvXCI+QXJ0ZWZhY3Q8L2E+PC9MaW5rPlxuICAgICAgT05MWSBTSE9XIElGIFVTRVIgSVMgTE9HR0VEIElOID5cbiAgICAgIDxMaW5rIGhyZWY9XCIvd29ya3NcIj48YT5Xb3JrczwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3Blb3BsZVwiPjxhPlBlb3BsZTwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3VzZXJzL2xvZ291dFwiPjxhPlNpZ24gb3V0PC9hPjwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclwiPjxhPlByb2ZpbGU8L2E+PC9MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheUxpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICB9XG4gICAgICBuYXYgYSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIG5hdiAjbG9nbyB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjU1ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZW51LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgeyBjaGlsZHJlbiB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPEhlYWQ+XG4gICAgICA8c3R5bGU+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIGNvbG9yOiAkZm9udEJsYWNrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSGVhZD5cbiAgPC9oZWFkZXI+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgU2lnblVwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIEdyYWIgZGlyZWN0bHkgZnJvbSBpbnB1dCBmaWVsZHMgdmlhIElEJ3MuXG4gICAgLy8gUmVwbGFjZSB3aXRoIE1hcnRpbidzIGNvbXBvbmVudHMgd2hlbiByZWFkeVxuICAgIGxldCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduVXBVc2VybmFtZScpLnZhbHVlXG4gICAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25VcFBhc3N3b3JkJykudmFsdWVcbiAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnblVwRW1haWwnKS52YWx1ZVxuXG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdCh1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U2lnbiBVcDwvaDI+XG4gICAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXsgKGUpID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpIH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzaWduVXBVc2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiUGljayBhIHVzZXJuYW1lXCIgLz48YnIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJzaWduVXBFbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBhZGRyZXNzXCIgLz48YnIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJzaWduVXBQYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIGEgcGFzc3dvcmRcIiAvPjxiciAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXAgZm9yIEFydGVmYWN0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cblNpZ25VcC5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaWdudXAuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUF6QkE7QUFDQTtBQTRCQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        