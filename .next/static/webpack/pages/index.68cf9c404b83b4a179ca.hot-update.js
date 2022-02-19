webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/src/Navbar.js":
/*!*****************************!*\
  !*** ./pages/src/Navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_10__);










var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\gammo-react-web-app\\pages\\src\\Navbar.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var withSession = function withSession(Component) {
  var _s = $RefreshSig$();

  return _s(function (props) {
    _s();

    var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_10__["useSession"])(),
        _useSession2 = Object(C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useSession, 2),
        session = _useSession2[0],
        loading = _useSession2[1]; // if the component has a render property, we are good


    if (Component.prototype.render) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({
        session: session,
        loading: loading
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 10
      }, _this);
    } // if the passed component is a function component, there is no need for this wrapper


    throw new Error(["You passed a function component, `withSession` is not needed.", "You can `useSession` directly in your component."].join("\n"));
  }, "btnbnkOsPYI0mLfZro/2DT47AuA=", false, function () {
    return [next_auth_client__WEBPACK_IMPORTED_MODULE_10__["useSession"]];
  });
};

var Navbarclass = /*#__PURE__*/function (_Component) {
  Object(C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbarclass, _Component);

  var _super = _createSuper(Navbarclass);

  function Navbarclass() {
    var _this2;

    Object(C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navbarclass);

    _this2 = _super.call(this);
    _this2.state = {
      isMobile: false,
      menuClasses: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-199 ',
      url: ''
    };
    return _this2;
  }

  Object(C_Users_Administrator_Desktop_gammo_react_web_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbarclass, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var windowWidth = window.innerWidth;
      windowWidth < 768 ? this.setState({
        isMobile: true
      }) : this.setState({
        isMobile: false
      });
      var getUrl = window.location.pathname;
      getUrl === '/about' ? this.setState({
        url: '/about'
      }) : 0;
      getUrl === '/prayer-request' ? this.setState({
        url: '/prayer-=request'
      }) : 0;
      getUrl === '/contact' ? this.setState({
        url: '/contact'
      }) : 0;
      getUrl === '/donate' ? this.setState({
        url: '/donate'
      }) : 0;
      getUrl === '/' ? this.setState({
        url: '/'
      }) : 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          session = _this$props.session,
          loading = _this$props.loading;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal fade",
          id: "loginModal",
          tabIndex: "1",
          role: "dialog",
          "aria-hidden": "true",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "modal-content bg-transparent",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "modal-body",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "account-area",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "title mb-4",
                    children: "Access your account"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                    className: "account-form",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "text-center mt-4",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        className: "google-btn mt-4 mb-3",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "assets/images/google.png",
                          alt: "image"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 62,
                          columnNumber: 57
                        }, this), "Login with Google"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 11
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "or-devider mt-5",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "OR"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 42
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "text-center mt-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      onClick: function onClick() {
                        alert('FB SDK curently unvailable . please try with Google Login');
                      },
                      className: "google-btn mt-4 mb-3",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "assets/images/facebook.png",
                        style: {
                          height: "24px",
                          width: '48px'
                        },
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 143
                      }, this), "Login with Facebook"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        children: "Access your account with cloud login securely"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 16
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 13
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 3
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 1
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal fade",
          id: "signupModal",
          tabIndex: "1",
          role: "dialog",
          "aria-hidden": "true",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "modal-content bg-transparent",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "modal-body",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "account-area",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "title mb-4",
                    children: "Let's get started"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "text-center mt-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      className: "google-btn mt-4 mb-3",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "assets/images/google.png",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 57
                      }, this), "Sign Up with Google"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "or-devider mt-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "OR"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 42
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-center mt-2 mb-4",
                    children: "Sign up with your work email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                    className: "account-form",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        children: "Your Email "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        type: "email",
                        name: "login_email",
                        placeholder: "Enter Your Email",
                        className: "form-control"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        type: "submit",
                        className: "cmn-btn",
                        children: "Try It Now"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 13
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-center mt-3",
                    children: ["Already have an account?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      "data-dismiss": "modal",
                      "data-toggle": "modal",
                      "data-target": "#loginModal",
                      children: "Sign In"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 65
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 3
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 1
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
          className: "header",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header__bottom",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
                className: "navbar navbar-expand-xl align-items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "site-logo site-title",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "assets/images/logo.png",
                      alt: "site-logo"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 57
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "logo-icon",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "flaticon-fire"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 136
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 108
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 20
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 5
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: " ml-auto",
                  style: {
                    listStyle: 'none',
                    paddingRight: '15px'
                  },
                  children: this.state.isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                    children: [!this.props.session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "menu_has_children",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          title: "Login",
                          "data-toggle": "dropdown",
                          className: "",
                          "aria-haspopup": "true",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "_mi _before dashicons dashicons-migrate",
                              "aria-hidden": "true"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 124,
                              columnNumber: 134
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 124,
                            columnNumber: 127
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                          columnNumber: 52
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          role: "menu",
                          className: "sub-menu dropdown-menu",
                          style: {
                            textAlign: 'center',
                            left: 'auto',
                            right: '0',
                            backgroundImage: '-webkit-linear-gradient(89deg, #5f16a9 0%, #cf15f8 100%)'
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            onClick: function onClick() {
                              Object(next_auth_client__WEBPACK_IMPORTED_MODULE_10__["signIn"])('google');
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              title: "Login with google",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "Login with "
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 126,
                                columnNumber: 93
                              }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "_mi _before dashicons dashicons-google",
                                style: {
                                  color: 'skyblue'
                                },
                                "aria-hidden": "true"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 126,
                                columnNumber: 118
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 126,
                              columnNumber: 63
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 126,
                            columnNumber: 21
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            onClick: function onClick() {
                              Object(next_auth_client__WEBPACK_IMPORTED_MODULE_10__["signIn"])('google');
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              title: "Login with facebook",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "Login with "
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 127,
                                columnNumber: 95
                              }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "_mi _before dashicons dashicons-facebook",
                                style: {
                                  color: 'blue'
                                },
                                "aria-hidden": "true"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 127,
                                columnNumber: 120
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 127,
                              columnNumber: 63
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 127,
                            columnNumber: 21
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 125,
                          columnNumber: 17
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 17
                      }, this)
                    }, void 0, false), this.props.session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          title: this.props.session.user.name || this.props.session.user.email,
                          "data-toggle": "dropdown",
                          className: "dropdown-toggle",
                          "aria-haspopup": "true",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "_mi _before dashicons dashicons-admin-network",
                            style: {
                              verticalAlign: "middle",
                              width: 50,
                              height: 50,
                              padding: 0,
                              borderRadius: "50%"
                            },
                            src: this.props.session.user.image,
                            alt: this.props.session.user.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 132,
                            columnNumber: 164
                          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "caret"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 132,
                            columnNumber: 392
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 132,
                          columnNumber: 18
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          role: "menu",
                          className: " dropdown-menu",
                          style: {
                            textAlign: 'left',
                            left: 'auto',
                            right: '0',
                            padding: '10px',
                            backgroundImage: '-webkit-linear-gradient(89deg, #5f16a9 0%, #cf15f8 100%)'
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: ["Hello ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "_mi _before dashicons dashicons-reddit",
                              "aria-hidden": "true",
                              children: " "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 134,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 134,
                              columnNumber: 109
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                              children: this.props.session.user.name || this.props.session.user.email
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 134,
                              columnNumber: 115
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 134,
                            columnNumber: 21
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                              href: "/dashboard",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                title: "Show dashboard",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "_mi _before dashicons dashicons-art",
                                  "aria-hidden": "true",
                                  style: {
                                    color: 'white'
                                  }
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 135,
                                  columnNumber: 76
                                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  children: "Dashboard"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 135,
                                  columnNumber: 177
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 135,
                                columnNumber: 49
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 135,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 135,
                            columnNumber: 21
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                              href: "/settings",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                title: "Display and manipulate settings",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "_mi _before dashicons dashicons-admin-generic",
                                  style: {
                                    color: 'white'
                                  },
                                  "aria-hidden": "true"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 136,
                                  columnNumber: 92
                                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  children: "Settings"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 136,
                                  columnNumber: 203
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 136,
                                columnNumber: 48
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 136,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                            columnNumber: 21
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              title: "logout from your account",
                              onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_10__["signOut"],
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "_mi _before dashicons dashicons-privacy",
                                style: {
                                  color: 'white'
                                },
                                "aria-hidden": "true"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 137,
                                columnNumber: 79
                              }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "Logout"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 137,
                                columnNumber: 184
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 137,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 137,
                            columnNumber: 21
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 133,
                          columnNumber: 17
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 132,
                        columnNumber: 13
                      }, this)
                    }, void 0, false)]
                  }, void 0, true)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 1
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "navbar-toggler",
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarSupportedContent",
                  "aria-controls": "navbarSupportedContent",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "menu-toggle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "collapse navbar-collapse",
                  id: "navbarSupportedContent",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "navbar-nav main-menu ml-auto",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "menu_has_children",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        children: "Home"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "sub-menu",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "index.html",
                            children: "Home One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 155,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 155,
                          columnNumber: 15
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "index-two.html",
                            children: "Home Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 156,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 156,
                          columnNumber: 15
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "menu_has_children",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        children: "Games"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "sub-menu",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "games.html",
                            children: "All Games"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 162,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 162,
                          columnNumber: 15
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "game-details.html",
                            children: "Game Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 163,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 163,
                          columnNumber: 15
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "menu_has_children",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        children: "Blog"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "sub-menu",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "blog-one.html",
                            children: "Blog One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 169,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 15
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "blog-two.html",
                            children: "Blog Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 170,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 170,
                          columnNumber: 15
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "blog-details.html",
                            children: "Blog Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 171,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 15
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 168,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "menu_has_children",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        children: "pages"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "sub-menu",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "about.html",
                            children: "About Us"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 177,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 177,
                          columnNumber: 15
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "contact.html",
                        children: "contact"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 15
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "nav-right",
                    children: [!this.props.session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        "data-toggle": "modal",
                        "data-target": "#loginModal",
                        children: "Access Your Account"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 11
                      }, this)
                    }, void 0, false), this.props.session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        id: "menu-item-164",
                        className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-164 dropdown",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          title: this.props.session.user.name || this.props.session.user.email,
                          "data-toggle": "dropdown",
                          className: "dropdown-toggle",
                          "aria-haspopup": "true",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "_mi _before dashicons dashicons-admin-network",
                            style: {
                              verticalAlign: "middle",
                              width: 50,
                              height: 50,
                              padding: 0,
                              borderRadius: "50%"
                            },
                            src: this.props.session.user.image,
                            alt: this.props.session.user.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 190,
                            columnNumber: 298
                          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "caret"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 190,
                            columnNumber: 526
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 152
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          role: "menu",
                          className: " dropdown-menu",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            style: {
                              color: "black",
                              paddingLeft: 20
                            },
                            children: ["Hello ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                              className: "_mi _before dashicons dashicons-reddit",
                              "aria-hidden": "true",
                              children: " "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 192,
                              columnNumber: 72
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 192,
                              columnNumber: 150
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                              children: this.props.session.user.name || this.props.session.user.email
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 192,
                              columnNumber: 156
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 192,
                            columnNumber: 21
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            id: "menu-item-144",
                            className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-144",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                              href: "/dashboard",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                title: "Show dashboard",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "_mi _before dashicons dashicons-art",
                                  "aria-hidden": "true",
                                  style: {
                                    color: 'deeppink'
                                  }
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 193,
                                  columnNumber: 178
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  children: "Dashboard"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 193,
                                  columnNumber: 281
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 193,
                                columnNumber: 151
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 193,
                              columnNumber: 127
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 193,
                            columnNumber: 21
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            id: "menu-item-120",
                            className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-120",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                              href: "/settings",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                title: "Display and manipulate settings",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "_mi _before dashicons dashicons-admin-generic",
                                  style: {
                                    color: 'deeppink'
                                  },
                                  "aria-hidden": "true"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 194,
                                  columnNumber: 194
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  children: "Settings"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 194,
                                  columnNumber: 307
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 194,
                                columnNumber: 150
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 194,
                              columnNumber: 127
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 194,
                            columnNumber: 21
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            id: "menu-item-155",
                            role: "button",
                            className: " menu-item menu-item-type-post_type menu-item-object-page menu-item-155",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              title: "logout from your account",
                              onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_10__["signOut"],
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "_mi _before dashicons dashicons-privacy",
                                style: {
                                  color: 'deeppink'
                                },
                                "aria-hidden": "true"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 195,
                                columnNumber: 197
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "Logout"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 195,
                                columnNumber: 304
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 195,
                              columnNumber: 143
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 195,
                            columnNumber: 21
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 191,
                          columnNumber: 17
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 13
                      }, this)
                    }, void 0, false)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 7
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 3
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 1
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 1
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this);
    }
  }]);

  return Navbarclass;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Navbar = withSession(Navbarclass);
_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL05hdmJhci5qcyJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsIkNvbXBvbmVudCIsInByb3BzIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwicHJvdG90eXBlIiwicmVuZGVyIiwiRXJyb3IiLCJqb2luIiwiTmF2YmFyY2xhc3MiLCJzdGF0ZSIsImlzTW9iaWxlIiwibWVudUNsYXNzZXMiLCJ1cmwiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRTdGF0ZSIsImdldFVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJhbGVydCIsImhlaWdodCIsIndpZHRoIiwibGlzdFN0eWxlIiwicGFkZGluZ1JpZ2h0IiwidGV4dEFsaWduIiwibGVmdCIsInJpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwic2lnbkluIiwiY29sb3IiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwidmVydGljYWxBbGlnbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJpbWFnZSIsInNpZ25PdXQiLCJwYWRkaW5nTGVmdCIsIk5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsU0FBUztBQUFBOztBQUFBLFlBQUksVUFBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQUEsc0JBQ2RDLG9FQUFVLEVBREk7QUFBQTtBQUFBLFFBQ2xDQyxPQURrQztBQUFBLFFBQ3pCQyxPQUR5QixvQkFHdkM7OztBQUNBLFFBQUlKLFNBQVMsQ0FBQ0ssU0FBVixDQUFvQkMsTUFBeEIsRUFBZ0M7QUFDakMsMEJBQU8scUVBQUMsU0FBRDtBQUFXLGVBQU8sRUFBRUgsT0FBcEI7QUFBNkIsZUFBTyxFQUFFQztBQUF0QyxTQUFtREgsS0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFB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TjFCLElBQU15QyxNQUFNLEdBQUcxQyxXQUFXLENBQUNVLFdBQUQsQ0FBMUI7S0FBTWdDLE07QUFDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjhjZjljNDA0YjgzYjRhMTc5Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBzaWduaW4sIHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcblxyXG5jb25zdCB3aXRoU2Vzc2lvbiA9IENvbXBvbmVudCA9PiBwcm9wcyA9PiB7XHJcblx0Y29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpXHJcbiAgXHJcblx0ICAvLyBpZiB0aGUgY29tcG9uZW50IGhhcyBhIHJlbmRlciBwcm9wZXJ0eSwgd2UgYXJlIGdvb2RcclxuXHQgIGlmIChDb21wb25lbnQucHJvdG90eXBlLnJlbmRlcikgeyBcclxuXHRcdHJldHVybiA8Q29tcG9uZW50IHNlc3Npb249e3Nlc3Npb259IGxvYWRpbmc9e2xvYWRpbmd9IHsuLi5wcm9wc30gLz5cclxuXHQgIH1cclxuICBcclxuXHQgIC8vIGlmIHRoZSBwYXNzZWQgY29tcG9uZW50IGlzIGEgZnVuY3Rpb24gY29tcG9uZW50LCB0aGVyZSBpcyBubyBuZWVkIGZvciB0aGlzIHdyYXBwZXJcclxuXHQgIHRocm93IG5ldyBFcnJvcihbXHJcblx0ICAgXCJZb3UgcGFzc2VkIGEgZnVuY3Rpb24gY29tcG9uZW50LCBgd2l0aFNlc3Npb25gIGlzIG5vdCBuZWVkZWQuXCIsXHJcblx0ICAgXCJZb3UgY2FuIGB1c2VTZXNzaW9uYCBkaXJlY3RseSBpbiB5b3VyIGNvbXBvbmVudC5cIlxyXG5cdCAgXS5qb2luKFwiXFxuXCIpKVxyXG4gIH07XHJcblxyXG5jbGFzcyBOYXZiYXJjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG5cdFx0aXNNb2JpbGU6IGZhbHNlLCBcdFxyXG5cdFx0bWVudUNsYXNzZXMgOiAnbWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLTE5OSAnLFxyXG5cdFx0dXJsOiAnJ1xyXG5cdH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHdpbmRvd1dpZHRoIDwgNzY4ID8gdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGUgOiB0cnVlfSkgOiB0aGlzLnNldFN0YXRlKHtpc01vYmlsZSA6IGZhbHNlfSkgO1xyXG5cclxuXHRcclxuXHRjb25zdCBnZXRVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBnZXRVcmwgPT09ICcvYWJvdXQnID8gdGhpcy5zZXRTdGF0ZSh7IHVybDogJy9hYm91dCd9KSA6IDAgO1xyXG4gICAgZ2V0VXJsID09PSAnL3ByYXllci1yZXF1ZXN0JyA/IHRoaXMuc2V0U3RhdGUoeyB1cmw6ICcvcHJheWVyLT1yZXF1ZXN0J30pIDogMCA7XHJcbiAgICBnZXRVcmwgPT09ICcvY29udGFjdCcgPyB0aGlzLnNldFN0YXRlKHsgdXJsOiAnL2NvbnRhY3QnfSkgOiAwIDtcclxuICAgIGdldFVybCA9PT0gJy9kb25hdGUnID8gdGhpcy5zZXRTdGF0ZSh7IHVybDogJy9kb25hdGUnfSkgOiAwIDtcclxuXHRnZXRVcmwgPT09ICcvJyA/IHRoaXMuc2V0U3RhdGUoeyB1cmw6ICcvJ30pIDogMCA7XHJcblxyXG5cclxuIH1cclxuXHJcbiAgXHJcblxyXG4gIHJlbmRlcigpIHsgIFxyXG5cdGNvbnN0IHtzZXNzaW9uLCBsb2FkaW5nfSA9IHRoaXMucHJvcHM7XHJcbiAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgey8qIGxvZ2luIG1vZGFsICovfVxyXG48ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImxvZ2luTW9kYWxcIiB0YWJJbmRleD1cIjFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbjxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1hcmVhXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIG1iLTRcIj5BY2Nlc3MgeW91ciBhY2NvdW50PC9oMz5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhY2NvdW50LWZvcm1cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjMFwiIGNsYXNzTmFtZT1cImdvb2dsZS1idG4gbXQtNCBtYi0zXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2dvb2dsZS5wbmdcIiBhbHQ9XCJpbWFnZVwiLz5Mb2dpbiB3aXRoIEdvb2dsZTwvYT5cclxuICAgICAgICAgIHsvKiA8cD5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjMFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NpZ251cE1vZGFsXCI+U2lnbiB1cCBoZXJlPC9hPjwvcD4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ItZGV2aWRlciBtdC01XCI+PHNwYW4+T1I8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiIzBcIiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ0ZCIFNESyBjdXJlbnRseSB1bnZhaWxhYmxlIC4gcGxlYXNlIHRyeSB3aXRoIEdvb2dsZSBMb2dpbicgKX19IGNsYXNzTmFtZT1cImdvb2dsZS1idG4gbXQtNCBtYi0zXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIHN0eWxlPXt7aGVpZ2h0OiBcIjI0cHhcIiwgd2lkdGg6ICc0OHB4J319IGFsdD1cImltYWdlXCIvPkxvZ2luIHdpdGggRmFjZWJvb2s8L2E+XHJcbiAgICAgICAgICB7LyogPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiIzBcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzaWdudXBNb2RhbFwiPlNpZ24gdXAgaGVyZTwvYT48L3A+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiIzBcIj5BY2Nlc3MgeW91ciBhY2NvdW50IHdpdGggY2xvdWQgbG9naW4gc2VjdXJlbHk8L2E+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICA8L2Rpdj57LyogYWNjb3VudC1hcmVhIGVuZCAqL31cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG57LyogU2lnbiBVcCBtb2RhbCAqL31cclxuPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJzaWdudXBNb2RhbFwiIHRhYkluZGV4PVwiMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IGJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWFyZWFcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgbWItNFwiPkxldCdzIGdldCBzdGFydGVkPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjMFwiIGNsYXNzTmFtZT1cImdvb2dsZS1idG4gbXQtNCBtYi0zXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2dvb2dsZS5wbmdcIiBhbHQ9XCJpbWFnZVwiLz5TaWduIFVwIHdpdGggR29vZ2xlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ItZGV2aWRlciBtdC00XCI+PHNwYW4+T1I8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMiBtYi00XCI+U2lnbiB1cCB3aXRoIHlvdXIgd29yayBlbWFpbDwvcD5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhY2NvdW50LWZvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+WW91ciBFbWFpbCA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImxvZ2luX2VtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImNtbi1idG5cIj5UcnkgSXQgTm93PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtM1wiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PzxhIGhyZWY9XCIjMFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2xvZ2luTW9kYWxcIj5TaWduIEluPC9hPjwvcD5cclxuICAgICAgPC9kaXY+ey8qIGFjY291bnQtYXJlYSBlbmQgKi99XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuey8qIGhlYWRlci1zZWN0aW9uIHN0YXJ0ICAqL31cclxuPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj4gXHJcbjxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19ib3R0b21cIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC14bCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgIDxMaW5rIGhyZWY9Jy8nPjxhIGNsYXNzTmFtZT1cInNpdGUtbG9nbyBzaXRlLXRpdGxlXCIgPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cInNpdGUtbG9nb1wiLz48c3BhbiBjbGFzc05hbWU9XCJsb2dvLWljb25cIj48aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1maXJlXCI+PC9pPjwvc3Bhbj48L2E+PC9MaW5rPlxyXG5cclxuXHJcbnsvKiAqL31cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiIG1sLWF1dG9cIiBzdHlsZT17e2xpc3RTdHlsZTogJ25vbmUnLCBwYWRkaW5nUmlnaHQ6ICcxNXB4J319PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb2JpbGUgJiZcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuc2Vzc2lvbiAmJiA8PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfaGFzX2NoaWxkcmVuXCIgPjxhIHRpdGxlPSdMb2dpbicgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPjxzcGFuID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLW1pZ3JhdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibWVudVwiIGNsYXNzTmFtZT1cInN1Yi1tZW51IGRyb3Bkb3duLW1lbnVcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCAgbGVmdDogJ2F1dG8nLCByaWdodDogJzAnLCBiYWNrZ3JvdW5kSW1hZ2U6ICctd2Via2l0LWxpbmVhci1ncmFkaWVudCg4OWRlZywgIzVmMTZhOSAwJSwgI2NmMTVmOCAxMDAlKSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17ICgpID0+IHtzaWduSW4oJ2dvb2dsZScpfSB9ID48YSB0aXRsZT1cIkxvZ2luIHdpdGggZ29vZ2xlXCIgPjxzcGFuPkxvZ2luIHdpdGggPC9zcGFuPiA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWdvb2dsZVwiIHN0eWxlPXt7Y29sb3I6ICdza3libHVlJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyAoKSA9PiB7c2lnbkluKCdnb29nbGUnKX0gfSA+PGEgdGl0bGU9XCJMb2dpbiB3aXRoIGZhY2Vib29rXCIgPjxzcGFuPkxvZ2luIHdpdGggPC9zcGFuPiA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWZhY2Vib29rXCIgc3R5bGU9e3tjb2xvcjogJ2JsdWUnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2Vzc2lvbiAmJiA8Plx0XHRcdFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICA8bGkgPjxhIHRpdGxlPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lIHx8IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmVtYWlsfSAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+PGltZyBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLW5ldHdvcmtcIiAgc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLCB3aWR0aDogNTAsIGhlaWdodDogNTAsIHBhZGRpbmc6IDAsIGJvcmRlclJhZGl1czogXCI1MCVcIn19IHNyYz17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaW1hZ2V9IGFsdD17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZX0gLz4gPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAgPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgcm9sZT1cIm1lbnVcIiBjbGFzc05hbWU9XCIgZHJvcGRvd24tbWVudVwiICBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgIGxlZnQ6ICdhdXRvJywgcmlnaHQ6ICcwJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kSW1hZ2U6ICctd2Via2l0LWxpbmVhci1ncmFkaWVudCg4OWRlZywgIzVmMTZhOSAwJSwgI2NmMTVmOCAxMDAlKSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCA+SGVsbG8gPGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1yZWRkaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4gPC9pPjxiciAvPjxzdHJvbmc+e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhIHRpdGxlPVwiU2hvdyBkYXNoYm9hcmRcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gPjwvaT4gPHNwYW4+RGFzaGJvYXJkPC9zcGFuPjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPjxhIHRpdGxlPVwiRGlzcGxheSBhbmQgbWFuaXB1bGF0ZSBzZXR0aW5nc1wiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLWdlbmVyaWNcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPHNwYW4+U2V0dGluZ3M8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSB0aXRsZT1cImxvZ291dCBmcm9tIHlvdXIgYWNjb3VudFwiIG9uQ2xpY2s9e3NpZ25PdXR9PjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtcHJpdmFjeVwiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8c3Bhbj5Mb2dvdXQ8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbnsvKiAgKi99XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudS10b2dnbGVcIj48L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1haW4tbWVudSBtbC1hdXRvXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9oYXNfY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJpbmRleC5odG1sXCI+SG9tZSBPbmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImluZGV4LXR3by5odG1sXCI+SG9tZSBUd288L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9oYXNfY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+R2FtZXM8L2E+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiZ2FtZXMuaHRtbFwiPkFsbCBHYW1lczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiZ2FtZS1kZXRhaWxzLmh0bWxcIj5HYW1lIERldGFpbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9oYXNfY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+QmxvZzwvYT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJibG9nLW9uZS5odG1sXCI+QmxvZyBPbmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImJsb2ctdHdvLmh0bWxcIj5CbG9nIFR3bzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiYmxvZy1kZXRhaWxzLmh0bWxcIj5CbG9nIERldGFpbHM8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9oYXNfY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+cGFnZXM8L2E+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiYWJvdXQuaHRtbFwiPkFib3V0IFVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJjb250YWN0Lmh0bWxcIj5jb250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1yaWdodFwiPlxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5zZXNzaW9uICYmIFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgIHsvKiA8YSBvbkNsaWNrPXsgKCkgPT4ge3NpZ25JbignZ29vZ2xlJyl9IH0gID5BY2Nlc3MgeW91ciBBY2NvdW50PC9hPiAqL31cclxuXHJcbiAgICAgICAgICA8YSBocmVmPVwiIzBcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbG9naW5Nb2RhbFwiPkFjY2VzcyBZb3VyIEFjY291bnQ8L2E+XHJcbiAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zZXNzaW9uICYmIDw+XHRcdFx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgIDxsaSAgaWQ9XCJtZW51LWl0ZW0tMTY0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLWhhcy1jaGlsZHJlbiBtZW51LWl0ZW0tMTY0IGRyb3Bkb3duXCI+PGEgdGl0bGU9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9ICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj48aW1nIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tbmV0d29ya1wiICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsIHdpZHRoOiA1MCwgaGVpZ2h0OiA1MCwgcGFkZGluZzogMCwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifX0gc3JjPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5pbWFnZX0gYWx0PXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lfSAvPiA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiICA+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibWVudVwiIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBwYWRkaW5nTGVmdDogMjB9fT5IZWxsbyA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLXJlZGRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiA8L2k+PGJyIC8+PHN0cm9uZz57dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1pdGVtLTE0NFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xNDRcIj48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhIHRpdGxlPVwiU2hvdyBkYXNoYm9hcmRcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gPjwvaT48c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtaXRlbS0xMjBcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0tMTIwXCI+PExpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPjxhIHRpdGxlPVwiRGlzcGxheSBhbmQgbWFuaXB1bGF0ZSBzZXR0aW5nc1wiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLWdlbmVyaWNcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj5TZXR0aW5nczwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1pdGVtLTE1NVwiIHJvbGU9XCJidXR0b25cIiAgY2xhc3NOYW1lPVwiIG1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xNTVcIj48YSB0aXRsZT1cImxvZ291dCBmcm9tIHlvdXIgYWNjb3VudFwiIG9uQ2xpY2s9e3NpZ25PdXR9PjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtcHJpdmFjeVwiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPkxvZ291dDwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+ey8qIGhlYWRlcl9fYm90dG9tIGVuZCAqL31cclxuPC9oZWFkZXI+XHJcbnsvKiBoZWFkZXItc2VjdGlvbiBlbmQgICovfVxyXG5cclxuey8qIHshdGhpcy5wcm9wcy5zZXNzaW9uICYmIFxyXG4gICAgIDw+XHJcbiAgICAgPGxpIGlkPVwibWVudS1pdGVtLTE2NFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gbWVudS1pdGVtLTE2NCBkcm9wZG93biBcIiA+PGEgdGl0bGU9J0xvZ2luJyAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+PHNwYW4gPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtbWlncmF0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+PC9hPlxyXG4gICAgICAgICA8dWwgcm9sZT1cIm1lbnVcIiBjbGFzc05hbWU9XCIgZHJvcGRvd24tbWVudVwiID5cclxuICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4ge3NpZ25JbignZ29vZ2xlJyl9IH0gaWQ9XCJtZW51LWl0ZW0tMTIwXCIgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLTEyMFwiPjxhIHRpdGxlPVwiTG9naW4gd2l0aCBGYWNlYm9va1wiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWdvb2dsZVwiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+TG9naW4gd2l0aCBHb29nbGU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgIDwvdWw+XHJcbiAgICAgPC9saT5cclxuICAgPC8+ICAgICBcclxufSAgXHJcbnt0aGlzLnByb3BzLnNlc3Npb24gJiYgPD5cdFx0XHRcdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgPGxpICBpZD1cIm1lbnUtaXRlbS0xNjRcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0taGFzLWNoaWxkcmVuIG1lbnUtaXRlbS0xNjQgZHJvcGRvd25cIj48YSB0aXRsZT17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH0gIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPjxpbWcgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1uZXR3b3JrXCIgIHN0eWxlPXt7dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiwgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBwYWRkaW5nOiAwLCBib3JkZXJSYWRpdXM6IFwiNTAlXCJ9fSBzcmM9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmltYWdlfSBhbHQ9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWV9IC8+IDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgID48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIHJvbGU9XCJtZW51XCIgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIHBhZGRpbmdMZWZ0OiAyMH19PkhlbGxvIDxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtcmVkZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+IDwvaT48YnIgLz48c3Ryb25nPnt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lIHx8IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmVtYWlsfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWl0ZW0tMTQ0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLTE0NFwiPjxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGEgdGl0bGU9XCJTaG93IGRhc2hib2FyZFwiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSA+PC9pPjxzcGFuPkRhc2hib2FyZDwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1pdGVtLTEyMFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xMjBcIj48TGluayBocmVmPVwiL3NldHRpbmdzXCI+PGEgdGl0bGU9XCJEaXNwbGF5IGFuZCBtYW5pcHVsYXRlIHNldHRpbmdzXCIgPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tZ2VuZXJpY1wiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPlNldHRpbmdzPC9zcGFuPjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWl0ZW0tMTU1XCIgcm9sZT1cImJ1dHRvblwiICBjbGFzc05hbWU9XCIgbWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLTE1NVwiPjxhIHRpdGxlPVwibG9nb3V0IGZyb20geW91ciBhY2NvdW50XCIgb25DbGljaz17c2lnbk91dH0+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1wcml2YWN5XCIgc3R5bGU9e3tjb2xvcjogJ2RlZXBwaW5rJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+TG9nb3V0PC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuXHJcblxyXG4qL31cclxuXHJcblxyXG5cclxuXHRcdFx0XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHJcbiAgICApXHJcbn19XHJcblxyXG5jb25zdCBOYXZiYXIgPSB3aXRoU2Vzc2lvbihOYXZiYXJjbGFzcylcclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=