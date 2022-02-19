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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                        onClick: function onClick() {
                          Object(next_auth_client__WEBPACK_IMPORTED_MODULE_10__["signIn"])('google');
                        },
                        className: "google-btn mt-4 mb-3",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "assets/images/google.png",
                          alt: "image"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 62,
                          columnNumber: 95
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
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#0",
                  children: "Access your account with cloud logins securely"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 16
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
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
                  className: " ml-auto nav-right",
                  style: {
                    listStyle: 'none',
                    paddingRight: '15px'
                  },
                  children: this.state.isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                    children: [!this.props.session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "menu_has_children",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          style: {
                            backgroundColor: 'transparent'
                          },
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
                              columnNumber: 175
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 124,
                            columnNumber: 168
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
                              style: {
                                backgroundColor: 'transparent'
                              },
                              title: "Login with google",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "Login with "
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 126,
                                columnNumber: 134
                              }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "_mi _before dashicons dashicons-google",
                                style: {
                                  color: 'skyblue'
                                },
                                "aria-hidden": "true"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 126,
                                columnNumber: 159
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
                              style: {
                                backgroundColor: 'transparent'
                              },
                              title: "Login with facebook",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "Login with "
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 127,
                                columnNumber: 136
                              }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "_mi _before dashicons dashicons-facebook",
                                style: {
                                  color: 'blue'
                                },
                                "aria-hidden": "true"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 127,
                                columnNumber: 161
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
                          style: {
                            backgroundColor: 'transparent'
                          },
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
                            columnNumber: 205
                          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "caret"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 132,
                            columnNumber: 433
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
                                style: {
                                  backgroundColor: 'transparent'
                                },
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
                                  columnNumber: 117
                                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  children: "Dashboard"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 135,
                                  columnNumber: 218
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
                                style: {
                                  backgroundColor: 'transparent'
                                },
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
                                  columnNumber: 133
                                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  children: "Settings"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 136,
                                  columnNumber: 244
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
                              style: {
                                backgroundColor: 'transparent'
                              },
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
                                columnNumber: 120
                              }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "Logout"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 137,
                                columnNumber: 225
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
                    lineNumber: 146,
                    columnNumber: 7
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
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
                        lineNumber: 151,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "sub-menu",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "index.html",
                            children: "Home One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 153,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 153,
                          columnNumber: 15
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "index-two.html",
                            children: "Home Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 154,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 154,
                          columnNumber: 15
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "menu_has_children",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        children: "Games"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "sub-menu",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "games.html",
                            children: "All Games"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 160,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 15
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "game-details.html",
                            children: "Game Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 161,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 161,
                          columnNumber: 15
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "menu_has_children",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        children: "Blog"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 165,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "sub-menu",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "blog-one.html",
                            children: "Blog One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 167,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 167,
                          columnNumber: 15
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "blog-two.html",
                            children: "Blog Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 168,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 15
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "blog-details.html",
                            children: "Blog Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 169,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 15
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "menu_has_children",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#0",
                        children: "pages"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 173,
                        columnNumber: 13
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "sub-menu",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "about.html",
                            children: "About Us"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 175,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 175,
                          columnNumber: 15
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "contact.html",
                        children: "contact"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 178,
                        columnNumber: 15
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "nav-right",
                    children: !this.state.isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: [!this.props.session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#0",
                          "data-toggle": "modal",
                          "data-target": "#loginModal",
                          children: "Access Your Account"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 185,
                          columnNumber: 11
                        }, this)
                      }, void 0, false), this.props.session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " ml-auto",
                          style: {
                            listStyle: 'none',
                            paddingRight: '15px'
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              style: {
                                backgroundColor: 'transparent'
                              },
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
                                lineNumber: 189,
                                columnNumber: 205
                              }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                className: "caret"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 189,
                                columnNumber: 433
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 189,
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
                                style: {
                                  color: 'white'
                                },
                                children: ["Hello ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "_mi _before dashicons dashicons-reddit",
                                  "aria-hidden": "true",
                                  children: " "
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 191,
                                  columnNumber: 55
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 191,
                                  columnNumber: 133
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                                  children: this.props.session.user.name || this.props.session.user.email
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 191,
                                  columnNumber: 139
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 191,
                                columnNumber: 21
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                  href: "/dashboard",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    style: {
                                      backgroundColor: 'transparent'
                                    },
                                    title: "Show dashboard",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                      className: "_mi _before dashicons dashicons-art",
                                      "aria-hidden": "true",
                                      style: {
                                        color: 'white'
                                      }
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 192,
                                      columnNumber: 117
                                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                      children: "Dashboard"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 192,
                                      columnNumber: 218
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 192,
                                    columnNumber: 49
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 192,
                                  columnNumber: 25
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 192,
                                columnNumber: 21
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                  href: "/settings",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    style: {
                                      backgroundColor: 'transparent'
                                    },
                                    title: "Display and manipulate settings",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                      className: "_mi _before dashicons dashicons-admin-generic",
                                      style: {
                                        color: 'white'
                                      },
                                      "aria-hidden": "true"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 193,
                                      columnNumber: 133
                                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                      children: "Settings"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 193,
                                      columnNumber: 244
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 193,
                                    columnNumber: 48
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 193,
                                  columnNumber: 25
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 193,
                                columnNumber: 21
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                  style: {
                                    backgroundColor: 'transparent'
                                  },
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
                                    lineNumber: 194,
                                    columnNumber: 120
                                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                    children: "Logout"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 194,
                                    columnNumber: 225
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 194,
                                  columnNumber: 25
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 194,
                                columnNumber: 21
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 190,
                              columnNumber: 17
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 189,
                            columnNumber: 13
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 188,
                          columnNumber: 13
                        }, this)
                      }, void 0, false)]
                    }, void 0, true)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL05hdmJhci5qcyJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsIkNvbXBvbmVudCIsInByb3BzIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwicHJvdG90eXBlIiwicmVuZGVyIiwiRXJyb3IiLCJqb2luIiwiTmF2YmFyY2xhc3MiLCJzdGF0ZSIsImlzTW9iaWxlIiwibWVudUNsYXNzZXMiLCJ1cmwiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRTdGF0ZSIsImdldFVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzaWduSW4iLCJhbGVydCIsImhlaWdodCIsIndpZHRoIiwibGlzdFN0eWxlIiwicGFkZGluZ1JpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwibGVmdCIsInJpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwidmVydGljYWxBbGlnbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJpbWFnZSIsInNpZ25PdXQiLCJOYXZiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLFNBQVM7QUFBQTs7QUFBQSxZQUFJLFVBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBLHNCQUNkQyxvRUFBVSxFQURJO0FBQUE7QUFBQSxRQUNsQ0MsT0FEa0M7QUFBQSxRQUN6QkMsT0FEeUIsb0JBR3ZDOzs7QUFDQSxRQUFJSixTQUFTLENBQUNLLFNBQVYsQ0FBb0JDLE1BQXhCLEVBQWdDO0FBQ2pDLDBCQUFPLHFFQUFDLFNBQUQ7QUFBVyxlQUFPLEVBQUVILE9BQXBCO0FBQTZCLGVBQU8sRUFBRUM7QUFBdEMsU0FBbURILEtBQW5EO0FBQUE7QUFBQTtBQUFB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QUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FISixlQUlJO0FBQUEsdURBQUk7QUFBRyx1Q0FBSyxFQUFFO0FBQUNMLG1EQUFlLEVBQUU7QUFBbEIsbUNBQVY7QUFBNEMsdUNBQUssRUFBQywwQkFBbEQ7QUFBNkUseUNBQU8sRUFBRWEseURBQXRGO0FBQUEsMERBQStGO0FBQUcsNkNBQVMsRUFBQyx5Q0FBYjtBQUF1RCx5Q0FBSyxFQUFFO0FBQUNSLDJDQUFLLEVBQUU7QUFBUixxQ0FBOUQ7QUFBaUYsbURBQVk7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FBL0Ysb0JBQXdNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUF4TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHFCLHVDQU5DO0FBQUE7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0RRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUROO0FBNExEOzs7O0VBMU55QmhDLCtDOztBQTROMUIsSUFBTXlDLE1BQU0sR0FBRzFDLFdBQVcsQ0FBQ1UsV0FBRCxDQUExQjtLQUFNZ0MsTTtBQUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjM0NDAzZDY5ZWIzN2RkMDdlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHNpZ25pbiwgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuXHJcbmNvbnN0IHdpdGhTZXNzaW9uID0gQ29tcG9uZW50ID0+IHByb3BzID0+IHtcclxuXHRjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKClcclxuICBcclxuXHQgIC8vIGlmIHRoZSBjb21wb25lbnQgaGFzIGEgcmVuZGVyIHByb3BlcnR5LCB3ZSBhcmUgZ29vZFxyXG5cdCAgaWYgKENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKSB7IFxyXG5cdFx0cmV0dXJuIDxDb21wb25lbnQgc2Vzc2lvbj17c2Vzc2lvbn0gbG9hZGluZz17bG9hZGluZ30gey4uLnByb3BzfSAvPlxyXG5cdCAgfVxyXG4gIFxyXG5cdCAgLy8gaWYgdGhlIHBhc3NlZCBjb21wb25lbnQgaXMgYSBmdW5jdGlvbiBjb21wb25lbnQsIHRoZXJlIGlzIG5vIG5lZWQgZm9yIHRoaXMgd3JhcHBlclxyXG5cdCAgdGhyb3cgbmV3IEVycm9yKFtcclxuXHQgICBcIllvdSBwYXNzZWQgYSBmdW5jdGlvbiBjb21wb25lbnQsIGB3aXRoU2Vzc2lvbmAgaXMgbm90IG5lZWRlZC5cIixcclxuXHQgICBcIllvdSBjYW4gYHVzZVNlc3Npb25gIGRpcmVjdGx5IGluIHlvdXIgY29tcG9uZW50LlwiXHJcblx0ICBdLmpvaW4oXCJcXG5cIikpXHJcbiAgfTtcclxuXHJcbmNsYXNzIE5hdmJhcmNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcblx0XHRpc01vYmlsZTogZmFsc2UsIFx0XHJcblx0XHRtZW51Q2xhc3NlcyA6ICdtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0tMTk5ICcsXHJcblx0XHR1cmw6ICcnXHJcblx0fVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgd2luZG93V2lkdGggPCA3NjggPyB0aGlzLnNldFN0YXRlKHtpc01vYmlsZSA6IHRydWV9KSA6IHRoaXMuc2V0U3RhdGUoe2lzTW9iaWxlIDogZmFsc2V9KSA7XHJcblxyXG5cdFxyXG5cdGNvbnN0IGdldFVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGdldFVybCA9PT0gJy9hYm91dCcgPyB0aGlzLnNldFN0YXRlKHsgdXJsOiAnL2Fib3V0J30pIDogMCA7XHJcbiAgICBnZXRVcmwgPT09ICcvcHJheWVyLXJlcXVlc3QnID8gdGhpcy5zZXRTdGF0ZSh7IHVybDogJy9wcmF5ZXItPXJlcXVlc3QnfSkgOiAwIDtcclxuICAgIGdldFVybCA9PT0gJy9jb250YWN0JyA/IHRoaXMuc2V0U3RhdGUoeyB1cmw6ICcvY29udGFjdCd9KSA6IDAgO1xyXG4gICAgZ2V0VXJsID09PSAnL2RvbmF0ZScgPyB0aGlzLnNldFN0YXRlKHsgdXJsOiAnL2RvbmF0ZSd9KSA6IDAgO1xyXG5cdGdldFVybCA9PT0gJy8nID8gdGhpcy5zZXRTdGF0ZSh7IHVybDogJy8nfSkgOiAwIDtcclxuXHJcblxyXG4gfVxyXG5cclxuICBcclxuXHJcbiAgcmVuZGVyKCkgeyAgXHJcblx0Y29uc3Qge3Nlc3Npb24sIGxvYWRpbmd9ID0gdGhpcy5wcm9wcztcclxuICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICB7LyogbG9naW4gbW9kYWwgKi99XHJcbjxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwibG9naW5Nb2RhbFwiIHRhYkluZGV4PVwiMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IGJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWFyZWFcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgbWItNFwiPkFjY2VzcyB5b3VyIGFjY291bnQ8L2gzPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFjY291bnQtZm9ybVwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMwXCIgb25DbGljaz17ICgpID0+IHtzaWduSW4oJ2dvb2dsZScpfSB9ICBjbGFzc05hbWU9XCJnb29nbGUtYnRuIG10LTQgbWItM1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9nb29nbGUucG5nXCIgYWx0PVwiaW1hZ2VcIi8+TG9naW4gd2l0aCBHb29nbGU8L2E+XHJcbiAgICAgICAgICB7LyogPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiIzBcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzaWdudXBNb2RhbFwiPlNpZ24gdXAgaGVyZTwvYT48L3A+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yLWRldmlkZXIgbXQtNVwiPjxzcGFuPk9SPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMwXCIgb25DbGljaz17KCkgPT4ge2FsZXJ0KCdGQiBTREsgY3VyZW50bHkgdW52YWlsYWJsZSAuIHBsZWFzZSB0cnkgd2l0aCBHb29nbGUgTG9naW4nICl9fSBjbGFzc05hbWU9XCJnb29nbGUtYnRuIG10LTQgbWItM1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5wbmdcIiBzdHlsZT17e2hlaWdodDogXCIyNHB4XCIsIHdpZHRoOiAnNDhweCd9fSBhbHQ9XCJpbWFnZVwiLz5Mb2dpbiB3aXRoIEZhY2Vib29rPC9hPlxyXG4gICAgICAgICAgey8qIDxwPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIiMwXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2lnbnVwTW9kYWxcIj5TaWduIHVwIGhlcmU8L2E+PC9wPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgPC9kaXY+ey8qIGFjY291bnQtYXJlYSBlbmQgKi99XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIjMFwiPkFjY2VzcyB5b3VyIGFjY291bnQgd2l0aCBjbG91ZCBsb2dpbnMgc2VjdXJlbHk8L2E+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbnsvKiBTaWduIFVwIG1vZGFsICovfVxyXG48ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cInNpZ251cE1vZGFsXCIgdGFiSW5kZXg9XCIxXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG48ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgYmctdHJhbnNwYXJlbnRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtYXJlYVwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBtYi00XCI+TGV0J3MgZ2V0IHN0YXJ0ZWQ8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMwXCIgY2xhc3NOYW1lPVwiZ29vZ2xlLWJ0biBtdC00IG1iLTNcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZ29vZ2xlLnBuZ1wiIGFsdD1cImltYWdlXCIvPlNpZ24gVXAgd2l0aCBHb29nbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvci1kZXZpZGVyIG10LTRcIj48c3Bhbj5PUjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yIG1iLTRcIj5TaWduIHVwIHdpdGggeW91ciB3b3JrIGVtYWlsPC9wPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFjY291bnQtZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Zb3VyIEVtYWlsIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwibG9naW5fZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY21uLWJ0blwiPlRyeSBJdCBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0zXCI+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/PGEgaHJlZj1cIiMwXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbG9naW5Nb2RhbFwiPlNpZ24gSW48L2E+PC9wPlxyXG4gICAgICA8L2Rpdj57LyogYWNjb3VudC1hcmVhIGVuZCAqL31cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG57LyogaGVhZGVyLXNlY3Rpb24gc3RhcnQgICovfVxyXG48aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPiBcclxuPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2JvdHRvbVwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXhsIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPExpbmsgaHJlZj0nLyc+PGEgY2xhc3NOYW1lPVwic2l0ZS1sb2dvIHNpdGUtdGl0bGVcIiA+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwic2l0ZS1sb2dvXCIvPjxzcGFuIGNsYXNzTmFtZT1cImxvZ28taWNvblwiPjxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWZpcmVcIj48L2k+PC9zcGFuPjwvYT48L0xpbms+XHJcblxyXG5cclxuey8qICovfVxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCIgbWwtYXV0byBuYXYtcmlnaHRcIiBzdHlsZT17e2xpc3RTdHlsZTogJ25vbmUnLCBwYWRkaW5nUmlnaHQ6ICcxNXB4J319PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb2JpbGUgJiZcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuc2Vzc2lvbiAmJiA8PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfaGFzX2NoaWxkcmVuXCIgPjxhIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX0gdGl0bGU9J0xvZ2luJyAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cIlwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+PHNwYW4gPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtbWlncmF0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIHJvbGU9XCJtZW51XCIgY2xhc3NOYW1lPVwic3ViLW1lbnUgZHJvcGRvd24tbWVudVwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsICBsZWZ0OiAnYXV0bycsIHJpZ2h0OiAnMCcsIGJhY2tncm91bmRJbWFnZTogJy13ZWJraXQtbGluZWFyLWdyYWRpZW50KDg5ZGVnLCAjNWYxNmE5IDAlLCAjY2YxNWY4IDEwMCUpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4ge3NpZ25JbignZ29vZ2xlJyl9IH0gPjxhIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX0gdGl0bGU9XCJMb2dpbiB3aXRoIGdvb2dsZVwiID48c3Bhbj5Mb2dpbiB3aXRoIDwvc3Bhbj4gPGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1nb29nbGVcIiBzdHlsZT17e2NvbG9yOiAnc2t5Ymx1ZSd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4ge3NpZ25JbignZ29vZ2xlJyl9IH0gPjxhIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX0gdGl0bGU9XCJMb2dpbiB3aXRoIGZhY2Vib29rXCIgPjxzcGFuPkxvZ2luIHdpdGggPC9zcGFuPiA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWZhY2Vib29rXCIgc3R5bGU9e3tjb2xvcjogJ2JsdWUnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2Vzc2lvbiAmJiA8Plx0XHRcdFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICA8bGkgPjxhIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX0gdGl0bGU9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9ICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj48aW1nIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tbmV0d29ya1wiICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsIHdpZHRoOiA1MCwgaGVpZ2h0OiA1MCwgcGFkZGluZzogMCwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifX0gc3JjPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5pbWFnZX0gYWx0PXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lfSAvPiA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiICA+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibWVudVwiIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1tZW51XCIgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCAgbGVmdDogJ2F1dG8nLCByaWdodDogJzAnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRJbWFnZTogJy13ZWJraXQtbGluZWFyLWdyYWRpZW50KDg5ZGVnLCAjNWYxNmE5IDAlLCAjY2YxNWY4IDEwMCUpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwID5IZWxsbyA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLXJlZGRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiA8L2k+PGJyIC8+PHN0cm9uZz57dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGEgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fSB0aXRsZT1cIlNob3cgZGFzaGJvYXJkXCIgPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319ID48L2k+IDxzcGFuPkRhc2hib2FyZDwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvc2V0dGluZ3NcIj48YSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319IHRpdGxlPVwiRGlzcGxheSBhbmQgbWFuaXB1bGF0ZSBzZXR0aW5nc1wiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLWdlbmVyaWNcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPHNwYW4+U2V0dGluZ3M8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319IHRpdGxlPVwibG9nb3V0IGZyb20geW91ciBhY2NvdW50XCIgb25DbGljaz17c2lnbk91dH0+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1wcml2YWN5XCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPkxvZ291dDwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPn08Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuey8qICAqL31cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51LXRvZ2dsZVwiPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWFpbi1tZW51IG1sLWF1dG9cIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImluZGV4Lmh0bWxcIj5Ib21lIE9uZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaW5kZXgtdHdvLmh0bWxcIj5Ib21lIFR3bzwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5HYW1lczwvYT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJnYW1lcy5odG1sXCI+QWxsIEdhbWVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJnYW1lLWRldGFpbHMuaHRtbFwiPkdhbWUgRGV0YWlsczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5CbG9nPC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImJsb2ctb25lLmh0bWxcIj5CbG9nIE9uZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiYmxvZy10d28uaHRtbFwiPkJsb2cgVHdvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJibG9nLWRldGFpbHMuaHRtbFwiPkJsb2cgRGV0YWlsczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5wYWdlczwvYT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJhYm91dC5odG1sXCI+QWJvdXQgVXM8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImNvbnRhY3QuaHRtbFwiPmNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXJpZ2h0XCI+XHJcbiAgICAgICAgeyF0aGlzLnN0YXRlLmlzTW9iaWxlICYmICA8PlxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5zZXNzaW9uICYmIDw+XHJcbiAgICAgICAgICB7LyogPGEgb25DbGljaz17ICgpID0+IHtzaWduSW4oJ2dvb2dsZScpfSB9ICA+QWNjZXNzIHlvdXIgQWNjb3VudDwvYT4gKi99XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMwXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2xvZ2luTW9kYWxcIj5BY2Nlc3MgWW91ciBBY2NvdW50PC9hPlxyXG4gICAgICAgICAgPC8+fVxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2Vzc2lvbiAmJiA8Plx0XHRcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWwtYXV0b1wiIHN0eWxlPXt7bGlzdFN0eWxlOiAnbm9uZScsIHBhZGRpbmdSaWdodDogJzE1cHgnfX0+XHRcdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgPGxpID48YSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319IHRpdGxlPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lIHx8IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmVtYWlsfSAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+PGltZyBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLW5ldHdvcmtcIiAgc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLCB3aWR0aDogNTAsIGhlaWdodDogNTAsIHBhZGRpbmc6IDAsIGJvcmRlclJhZGl1czogXCI1MCVcIn19IHNyYz17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaW1hZ2V9IGFsdD17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZX0gLz4gPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAgPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgcm9sZT1cIm1lbnVcIiBjbGFzc05hbWU9XCIgZHJvcGRvd24tbWVudVwiICBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgIGxlZnQ6ICdhdXRvJywgcmlnaHQ6ICcwJywgcGFkZGluZzogJzEwcHgnLCBiYWNrZ3JvdW5kSW1hZ2U6ICctd2Via2l0LWxpbmVhci1ncmFkaWVudCg4OWRlZywgIzVmMTZhOSAwJSwgI2NmMTVmOCAxMDAlKSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0+SGVsbG8gPGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1yZWRkaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4gPC9pPjxiciAvPjxzdHJvbmc+e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX0gdGl0bGU9XCJTaG93IGRhc2hib2FyZFwiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fSA+PC9pPiA8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3NldHRpbmdzXCI+PGEgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fSB0aXRsZT1cIkRpc3BsYXkgYW5kIG1hbmlwdWxhdGUgc2V0dGluZ3NcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1nZW5lcmljXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPlNldHRpbmdzPC9zcGFuPjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fSB0aXRsZT1cImxvZ291dCBmcm9tIHlvdXIgYWNjb3VudFwiIG9uQ2xpY2s9e3NpZ25PdXR9PjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtcHJpdmFjeVwiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8c3Bhbj5Mb2dvdXQ8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+fTwvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+ey8qIGhlYWRlcl9fYm90dG9tIGVuZCAqL31cclxuPC9oZWFkZXI+XHJcbnsvKiBoZWFkZXItc2VjdGlvbiBlbmQgICovfVxyXG5cclxuey8qIHshdGhpcy5wcm9wcy5zZXNzaW9uICYmIFxyXG4gICAgIDw+XHJcbiAgICAgPGxpIGlkPVwibWVudS1pdGVtLTE2NFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gbWVudS1pdGVtLTE2NCBkcm9wZG93biBcIiA+PGEgdGl0bGU9J0xvZ2luJyAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+PHNwYW4gPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtbWlncmF0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+PC9hPlxyXG4gICAgICAgICA8dWwgcm9sZT1cIm1lbnVcIiBjbGFzc05hbWU9XCIgZHJvcGRvd24tbWVudVwiID5cclxuICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4ge3NpZ25JbignZ29vZ2xlJyl9IH0gaWQ9XCJtZW51LWl0ZW0tMTIwXCIgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLTEyMFwiPjxhIHRpdGxlPVwiTG9naW4gd2l0aCBGYWNlYm9va1wiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWdvb2dsZVwiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+TG9naW4gd2l0aCBHb29nbGU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgIDwvdWw+XHJcbiAgICAgPC9saT5cclxuICAgPC8+ICAgICBcclxufSAgXHJcbnt0aGlzLnByb3BzLnNlc3Npb24gJiYgPD5cdFx0XHRcdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgPGxpICBpZD1cIm1lbnUtaXRlbS0xNjRcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0taGFzLWNoaWxkcmVuIG1lbnUtaXRlbS0xNjQgZHJvcGRvd25cIj48YSB0aXRsZT17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH0gIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPjxpbWcgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1uZXR3b3JrXCIgIHN0eWxlPXt7dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiwgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBwYWRkaW5nOiAwLCBib3JkZXJSYWRpdXM6IFwiNTAlXCJ9fSBzcmM9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmltYWdlfSBhbHQ9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWV9IC8+IDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgID48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIHJvbGU9XCJtZW51XCIgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIHBhZGRpbmdMZWZ0OiAyMH19PkhlbGxvIDxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtcmVkZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+IDwvaT48YnIgLz48c3Ryb25nPnt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lIHx8IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmVtYWlsfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWl0ZW0tMTQ0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLTE0NFwiPjxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGEgdGl0bGU9XCJTaG93IGRhc2hib2FyZFwiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSA+PC9pPjxzcGFuPkRhc2hib2FyZDwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1pdGVtLTEyMFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xMjBcIj48TGluayBocmVmPVwiL3NldHRpbmdzXCI+PGEgdGl0bGU9XCJEaXNwbGF5IGFuZCBtYW5pcHVsYXRlIHNldHRpbmdzXCIgPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tZ2VuZXJpY1wiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPlNldHRpbmdzPC9zcGFuPjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWl0ZW0tMTU1XCIgcm9sZT1cImJ1dHRvblwiICBjbGFzc05hbWU9XCIgbWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLTE1NVwiPjxhIHRpdGxlPVwibG9nb3V0IGZyb20geW91ciBhY2NvdW50XCIgb25DbGljaz17c2lnbk91dH0+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1wcml2YWN5XCIgc3R5bGU9e3tjb2xvcjogJ2RlZXBwaW5rJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+TG9nb3V0PC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuXHJcblxyXG4qL31cclxuXHJcblxyXG5cclxuXHRcdFx0XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHJcbiAgICApXHJcbn19XHJcblxyXG5jb25zdCBOYXZiYXIgPSB3aXRoU2Vzc2lvbihOYXZiYXJjbGFzcylcclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=