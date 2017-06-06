
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

var _menu = __webpack_require__(542);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/runemadsen/Projects/artefact-next/pages/index.js?entry';


var Index = function Index() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Hello Next.js'));
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
    'data-jsx': 2042167145,
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
  }, _react2.default.createElement('a', { id: 'logo', 'data-jsx': 2042167145,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Artefact')), 'ONLY SHOW IF USER IS LOGGED IN >', _react2.default.createElement(_link2.default, { href: '/works', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2042167145,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Works')), _react2.default.createElement(_link2.default, { href: '/people', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2042167145,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'People')), _react2.default.createElement(_link2.default, { href: '/users/logout', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2042167145,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Sign out')), _react2.default.createElement(_link2.default, { href: '/user', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2042167145,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Profile'))), _react2.default.createElement(_style2.default, {
    styleId: 2042167145,
    css: 'nav[data-jsx="2042167145"]{border-bottom:1px solid $grayLight;height:75px}nav[data-jsx="2042167145"] a[data-jsx="2042167145"]{margin-right:1em;display:inline-block;-webkit-text-decoration:none;text-decoration:none}nav[data-jsx="2042167145"] #logo[data-jsx="2042167145"]{color:#333;margin-top:0.55em;font-size:2em;font-weight:bold}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzL21lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3J1bmVtYWRzZW4vUHJvamVjdHMvYXJ0ZWZhY3QtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbXX0= */\n/*@ sourceURL=components/menu.js */'
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

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2FiYTBhODkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51LmpzP2FiYTBhODkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWluZXIuanM/YWJhMGE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxNZW51IC8+XG4gICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPG5hdj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxhIGlkPVwibG9nb1wiPkFydGVmYWN0PC9hPjwvTGluaz5cbiAgICAgIE9OTFkgU0hPVyBJRiBVU0VSIElTIExPR0dFRCBJTiA+XG4gICAgICA8TGluayBocmVmPVwiL3dvcmtzXCI+PGE+V29ya3M8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9wZW9wbGVcIj48YT5QZW9wbGU8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi91c2Vycy9sb2dvdXRcIj48YT5TaWduIG91dDwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3VzZXJcIj48YT5Qcm9maWxlPC9hPjwvTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBuYXYge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXlMaWdodDtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgfVxuICAgICAgLyouY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfSovXG4gICAgICBuYXYgYSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIG5hdiAjbG9nbyB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjU1ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZW51LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgeyBjaGlsZHJlbiB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb250YWluZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        