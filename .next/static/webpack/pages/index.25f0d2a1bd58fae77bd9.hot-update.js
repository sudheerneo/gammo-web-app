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
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: " ml-auto",
                        style: {
                          listStyle: 'none',
                          paddingRight: '15px'
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            style: {
                              opacity: 0
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
                              lineNumber: 191,
                              columnNumber: 185
                            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "caret"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 191,
                              columnNumber: 413
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 191,
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
                                lineNumber: 193,
                                columnNumber: 31
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 193,
                                columnNumber: 109
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                                children: this.props.session.user.name || this.props.session.user.email
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 193,
                                columnNumber: 115
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 193,
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
                                    lineNumber: 194,
                                    columnNumber: 76
                                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                    children: "Dashboard"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 194,
                                    columnNumber: 177
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 194,
                                  columnNumber: 49
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 194,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 194,
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
                                    lineNumber: 195,
                                    columnNumber: 92
                                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                    children: "Settings"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 195,
                                    columnNumber: 203
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 195,
                                  columnNumber: 48
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 195,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 195,
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
                                  lineNumber: 196,
                                  columnNumber: 79
                                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  children: "Logout"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 196,
                                  columnNumber: 184
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 196,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 196,
                              columnNumber: 21
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 192,
                            columnNumber: 17
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 191,
                          columnNumber: 13
                        }, this)
                      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL05hdmJhci5qcyJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsIkNvbXBvbmVudCIsInByb3BzIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwicHJvdG90eXBlIiwicmVuZGVyIiwiRXJyb3IiLCJqb2luIiwiTmF2YmFyY2xhc3MiLCJzdGF0ZSIsImlzTW9iaWxlIiwibWVudUNsYXNzZXMiLCJ1cmwiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRTdGF0ZSIsImdldFVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzaWduSW4iLCJhbGVydCIsImhlaWdodCIsIndpZHRoIiwibGlzdFN0eWxlIiwicGFkZGluZ1JpZ2h0IiwidGV4dEFsaWduIiwibGVmdCIsInJpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwidmVydGljYWxBbGlnbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJpbWFnZSIsInNpZ25PdXQiLCJvcGFjaXR5IiwiTmF2YmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxTQUFTO0FBQUE7O0FBQUEsWUFBSSxVQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxzQkFDZEMsb0VBQVUsRUFESTtBQUFBO0FBQUEsUUFDbENDLE9BRGtDO0FBQUEsUUFDekJDLE9BRHlCLG9CQUd2Qzs7O0FBQ0EsUUFBSUosU0FBUyxDQUFDSyxTQUFWLENBQW9CQyxNQUF4QixFQUFnQztBQUNqQywwQkFBTyxxRUFBQyxTQUFEO0FBQVcsZUFBTyxFQUFFSCxPQUFwQjtBQUE2QixlQUFPLEVBQUVDO0FBQXRDLFNBQW1ESCxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0RRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUROO0FBOExEOzs7O0VBNU55Qi9CLCtDOztBQThOMUIsSUFBTXlDLE1BQU0sR0FBRzFDLFdBQVcsQ0FBQ1UsV0FBRCxDQUExQjtLQUFNZ0MsTTtBQUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNWYwZDJhMWJkNThmYWU3N2JkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHNpZ25pbiwgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuXHJcbmNvbnN0IHdpdGhTZXNzaW9uID0gQ29tcG9uZW50ID0+IHByb3BzID0+IHtcclxuXHRjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKClcclxuICBcclxuXHQgIC8vIGlmIHRoZSBjb21wb25lbnQgaGFzIGEgcmVuZGVyIHByb3BlcnR5LCB3ZSBhcmUgZ29vZFxyXG5cdCAgaWYgKENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKSB7IFxyXG5cdFx0cmV0dXJuIDxDb21wb25lbnQgc2Vzc2lvbj17c2Vzc2lvbn0gbG9hZGluZz17bG9hZGluZ30gey4uLnByb3BzfSAvPlxyXG5cdCAgfVxyXG4gIFxyXG5cdCAgLy8gaWYgdGhlIHBhc3NlZCBjb21wb25lbnQgaXMgYSBmdW5jdGlvbiBjb21wb25lbnQsIHRoZXJlIGlzIG5vIG5lZWQgZm9yIHRoaXMgd3JhcHBlclxyXG5cdCAgdGhyb3cgbmV3IEVycm9yKFtcclxuXHQgICBcIllvdSBwYXNzZWQgYSBmdW5jdGlvbiBjb21wb25lbnQsIGB3aXRoU2Vzc2lvbmAgaXMgbm90IG5lZWRlZC5cIixcclxuXHQgICBcIllvdSBjYW4gYHVzZVNlc3Npb25gIGRpcmVjdGx5IGluIHlvdXIgY29tcG9uZW50LlwiXHJcblx0ICBdLmpvaW4oXCJcXG5cIikpXHJcbiAgfTtcclxuXHJcbmNsYXNzIE5hdmJhcmNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcblx0XHRpc01vYmlsZTogZmFsc2UsIFx0XHJcblx0XHRtZW51Q2xhc3NlcyA6ICdtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0tMTk5ICcsXHJcblx0XHR1cmw6ICcnXHJcblx0fVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgd2luZG93V2lkdGggPCA3NjggPyB0aGlzLnNldFN0YXRlKHtpc01vYmlsZSA6IHRydWV9KSA6IHRoaXMuc2V0U3RhdGUoe2lzTW9iaWxlIDogZmFsc2V9KSA7XHJcblxyXG5cdFxyXG5cdGNvbnN0IGdldFVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGdldFVybCA9PT0gJy9hYm91dCcgPyB0aGlzLnNldFN0YXRlKHsgdXJsOiAnL2Fib3V0J30pIDogMCA7XHJcbiAgICBnZXRVcmwgPT09ICcvcHJheWVyLXJlcXVlc3QnID8gdGhpcy5zZXRTdGF0ZSh7IHVybDogJy9wcmF5ZXItPXJlcXVlc3QnfSkgOiAwIDtcclxuICAgIGdldFVybCA9PT0gJy9jb250YWN0JyA/IHRoaXMuc2V0U3RhdGUoeyB1cmw6ICcvY29udGFjdCd9KSA6IDAgO1xyXG4gICAgZ2V0VXJsID09PSAnL2RvbmF0ZScgPyB0aGlzLnNldFN0YXRlKHsgdXJsOiAnL2RvbmF0ZSd9KSA6IDAgO1xyXG5cdGdldFVybCA9PT0gJy8nID8gdGhpcy5zZXRTdGF0ZSh7IHVybDogJy8nfSkgOiAwIDtcclxuXHJcblxyXG4gfVxyXG5cclxuICBcclxuXHJcbiAgcmVuZGVyKCkgeyAgXHJcblx0Y29uc3Qge3Nlc3Npb24sIGxvYWRpbmd9ID0gdGhpcy5wcm9wcztcclxuICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICB7LyogbG9naW4gbW9kYWwgKi99XHJcbjxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwibG9naW5Nb2RhbFwiIHRhYkluZGV4PVwiMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IGJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWFyZWFcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgbWItNFwiPkFjY2VzcyB5b3VyIGFjY291bnQ8L2gzPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFjY291bnQtZm9ybVwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMwXCIgb25DbGljaz17ICgpID0+IHtzaWduSW4oJ2dvb2dsZScpfSB9ICBjbGFzc05hbWU9XCJnb29nbGUtYnRuIG10LTQgbWItM1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9nb29nbGUucG5nXCIgYWx0PVwiaW1hZ2VcIi8+TG9naW4gd2l0aCBHb29nbGU8L2E+XHJcbiAgICAgICAgICB7LyogPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiIzBcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzaWdudXBNb2RhbFwiPlNpZ24gdXAgaGVyZTwvYT48L3A+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yLWRldmlkZXIgbXQtNVwiPjxzcGFuPk9SPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMwXCIgb25DbGljaz17KCkgPT4ge2FsZXJ0KCdGQiBTREsgY3VyZW50bHkgdW52YWlsYWJsZSAuIHBsZWFzZSB0cnkgd2l0aCBHb29nbGUgTG9naW4nICl9fSBjbGFzc05hbWU9XCJnb29nbGUtYnRuIG10LTQgbWItM1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5wbmdcIiBzdHlsZT17e2hlaWdodDogXCIyNHB4XCIsIHdpZHRoOiAnNDhweCd9fSBhbHQ9XCJpbWFnZVwiLz5Mb2dpbiB3aXRoIEZhY2Vib29rPC9hPlxyXG4gICAgICAgICAgey8qIDxwPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIiMwXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjc2lnbnVwTW9kYWxcIj5TaWduIHVwIGhlcmU8L2E+PC9wPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgPC9kaXY+ey8qIGFjY291bnQtYXJlYSBlbmQgKi99XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIjMFwiPkFjY2VzcyB5b3VyIGFjY291bnQgd2l0aCBjbG91ZCBsb2dpbnMgc2VjdXJlbHk8L2E+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbnsvKiBTaWduIFVwIG1vZGFsICovfVxyXG48ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cInNpZ251cE1vZGFsXCIgdGFiSW5kZXg9XCIxXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG48ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgYmctdHJhbnNwYXJlbnRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtYXJlYVwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBtYi00XCI+TGV0J3MgZ2V0IHN0YXJ0ZWQ8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMwXCIgY2xhc3NOYW1lPVwiZ29vZ2xlLWJ0biBtdC00IG1iLTNcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZ29vZ2xlLnBuZ1wiIGFsdD1cImltYWdlXCIvPlNpZ24gVXAgd2l0aCBHb29nbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvci1kZXZpZGVyIG10LTRcIj48c3Bhbj5PUjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yIG1iLTRcIj5TaWduIHVwIHdpdGggeW91ciB3b3JrIGVtYWlsPC9wPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFjY291bnQtZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Zb3VyIEVtYWlsIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwibG9naW5fZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY21uLWJ0blwiPlRyeSBJdCBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0zXCI+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/PGEgaHJlZj1cIiMwXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbG9naW5Nb2RhbFwiPlNpZ24gSW48L2E+PC9wPlxyXG4gICAgICA8L2Rpdj57LyogYWNjb3VudC1hcmVhIGVuZCAqL31cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG57LyogaGVhZGVyLXNlY3Rpb24gc3RhcnQgICovfVxyXG48aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPiBcclxuPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2JvdHRvbVwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXhsIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPExpbmsgaHJlZj0nLyc+PGEgY2xhc3NOYW1lPVwic2l0ZS1sb2dvIHNpdGUtdGl0bGVcIiA+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwic2l0ZS1sb2dvXCIvPjxzcGFuIGNsYXNzTmFtZT1cImxvZ28taWNvblwiPjxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWZpcmVcIj48L2k+PC9zcGFuPjwvYT48L0xpbms+XHJcblxyXG5cclxuey8qICovfVxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCIgbWwtYXV0b1wiIHN0eWxlPXt7bGlzdFN0eWxlOiAnbm9uZScsIHBhZGRpbmdSaWdodDogJzE1cHgnfX0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc01vYmlsZSAmJlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5zZXNzaW9uICYmIDw+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9oYXNfY2hpbGRyZW5cIiA+PGEgdGl0bGU9J0xvZ2luJyAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cIlwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+PHNwYW4gPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtbWlncmF0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIHJvbGU9XCJtZW51XCIgY2xhc3NOYW1lPVwic3ViLW1lbnUgZHJvcGRvd24tbWVudVwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsICBsZWZ0OiAnYXV0bycsIHJpZ2h0OiAnMCcsIGJhY2tncm91bmRJbWFnZTogJy13ZWJraXQtbGluZWFyLWdyYWRpZW50KDg5ZGVnLCAjNWYxNmE5IDAlLCAjY2YxNWY4IDEwMCUpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4ge3NpZ25JbignZ29vZ2xlJyl9IH0gPjxhIHRpdGxlPVwiTG9naW4gd2l0aCBnb29nbGVcIiA+PHNwYW4+TG9naW4gd2l0aCA8L3NwYW4+IDxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtZ29vZ2xlXCIgc3R5bGU9e3tjb2xvcjogJ3NreWJsdWUnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17ICgpID0+IHtzaWduSW4oJ2dvb2dsZScpfSB9ID48YSB0aXRsZT1cIkxvZ2luIHdpdGggZmFjZWJvb2tcIiA+PHNwYW4+TG9naW4gd2l0aCA8L3NwYW4+IDxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtZmFjZWJvb2tcIiBzdHlsZT17e2NvbG9yOiAnYmx1ZSd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zZXNzaW9uICYmIDw+XHRcdFx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgIDxsaSA+PGEgdGl0bGU9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9ICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj48aW1nIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tbmV0d29ya1wiICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsIHdpZHRoOiA1MCwgaGVpZ2h0OiA1MCwgcGFkZGluZzogMCwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifX0gc3JjPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5pbWFnZX0gYWx0PXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lfSAvPiA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiICA+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibWVudVwiIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1tZW51XCIgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCAgbGVmdDogJ2F1dG8nLCByaWdodDogJzAnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRJbWFnZTogJy13ZWJraXQtbGluZWFyLWdyYWRpZW50KDg5ZGVnLCAjNWYxNmE5IDAlLCAjY2YxNWY4IDEwMCUpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwID5IZWxsbyA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLXJlZGRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiA8L2k+PGJyIC8+PHN0cm9uZz57dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGEgdGl0bGU9XCJTaG93IGRhc2hib2FyZFwiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fSA+PC9pPiA8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3NldHRpbmdzXCI+PGEgdGl0bGU9XCJEaXNwbGF5IGFuZCBtYW5pcHVsYXRlIHNldHRpbmdzXCIgPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tZ2VuZXJpY1wiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8c3Bhbj5TZXR0aW5nczwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHRpdGxlPVwibG9nb3V0IGZyb20geW91ciBhY2NvdW50XCIgb25DbGljaz17c2lnbk91dH0+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1wcml2YWN5XCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPkxvZ291dDwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuey8qICAqL31cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51LXRvZ2dsZVwiPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWFpbi1tZW51IG1sLWF1dG9cIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImluZGV4Lmh0bWxcIj5Ib21lIE9uZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaW5kZXgtdHdvLmh0bWxcIj5Ib21lIFR3bzwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5HYW1lczwvYT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJnYW1lcy5odG1sXCI+QWxsIEdhbWVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJnYW1lLWRldGFpbHMuaHRtbFwiPkdhbWUgRGV0YWlsczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5CbG9nPC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImJsb2ctb25lLmh0bWxcIj5CbG9nIE9uZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiYmxvZy10d28uaHRtbFwiPkJsb2cgVHdvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJibG9nLWRldGFpbHMuaHRtbFwiPkJsb2cgRGV0YWlsczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5wYWdlczwvYT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJhYm91dC5odG1sXCI+QWJvdXQgVXM8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImNvbnRhY3QuaHRtbFwiPmNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXJpZ2h0XCI+XHJcbiAgICAgICAgeyF0aGlzLnByb3BzLnNlc3Npb24gJiYgXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgey8qIDxhIG9uQ2xpY2s9eyAoKSA9PiB7c2lnbkluKCdnb29nbGUnKX0gfSAgPkFjY2VzcyB5b3VyIEFjY291bnQ8L2E+ICovfVxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjMFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNsb2dpbk1vZGFsXCI+QWNjZXNzIFlvdXIgQWNjb3VudDwvYT5cclxuICAgICAgICAgIDwvPn1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNlc3Npb24gJiYgPD5cdFx0XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1sLWF1dG9cIiBzdHlsZT17e2xpc3RTdHlsZTogJ25vbmUnLCBwYWRkaW5nUmlnaHQ6ICcxNXB4J319Plx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgIDxsaSA+PGEgc3R5bGU9e3tvcGFjaXR5OiAwfX0gdGl0bGU9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9ICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj48aW1nIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tbmV0d29ya1wiICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsIHdpZHRoOiA1MCwgaGVpZ2h0OiA1MCwgcGFkZGluZzogMCwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifX0gc3JjPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5pbWFnZX0gYWx0PXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lfSAvPiA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiICA+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibWVudVwiIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1tZW51XCIgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCAgbGVmdDogJ2F1dG8nLCByaWdodDogJzAnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRJbWFnZTogJy13ZWJraXQtbGluZWFyLWdyYWRpZW50KDg5ZGVnLCAjNWYxNmE5IDAlLCAjY2YxNWY4IDEwMCUpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwID5IZWxsbyA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLXJlZGRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiA8L2k+PGJyIC8+PHN0cm9uZz57dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGEgdGl0bGU9XCJTaG93IGRhc2hib2FyZFwiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fSA+PC9pPiA8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3NldHRpbmdzXCI+PGEgdGl0bGU9XCJEaXNwbGF5IGFuZCBtYW5pcHVsYXRlIHNldHRpbmdzXCIgPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tZ2VuZXJpY1wiIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZSd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8c3Bhbj5TZXR0aW5nczwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIHRpdGxlPVwibG9nb3V0IGZyb20geW91ciBhY2NvdW50XCIgb25DbGljaz17c2lnbk91dH0+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1wcml2YWN5XCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPkxvZ291dDwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PnsvKiBoZWFkZXJfX2JvdHRvbSBlbmQgKi99XHJcbjwvaGVhZGVyPlxyXG57LyogaGVhZGVyLXNlY3Rpb24gZW5kICAqL31cclxuXHJcbnsvKiB7IXRoaXMucHJvcHMuc2Vzc2lvbiAmJiBcclxuICAgICA8PlxyXG4gICAgIDxsaSBpZD1cIm1lbnUtaXRlbS0xNjRcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0taGFzLWNoaWxkcmVuIG1lbnUtaXRlbS0xNjQgZHJvcGRvd24gXCIgPjxhIHRpdGxlPSdMb2dpbicgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPjxzcGFuID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLW1pZ3JhdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvYT5cclxuICAgICAgICAgPHVsIHJvbGU9XCJtZW51XCIgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLW1lbnVcIiA+XHJcbiAgICAgICAgICAgICA8bGkgb25DbGljaz17ICgpID0+IHtzaWduSW4oJ2dvb2dsZScpfSB9IGlkPVwibWVudS1pdGVtLTEyMFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xMjBcIj48YSB0aXRsZT1cIkxvZ2luIHdpdGggRmFjZWJvb2tcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1nb29nbGVcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPkxvZ2luIHdpdGggR29vZ2xlPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICA8L3VsPlxyXG4gICAgIDwvbGk+XHJcbiAgIDwvPiAgICAgXHJcbn0gIFxyXG57dGhpcy5wcm9wcy5zZXNzaW9uICYmIDw+XHRcdFx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgIDxsaSAgaWQ9XCJtZW51LWl0ZW0tMTY0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLWhhcy1jaGlsZHJlbiBtZW51LWl0ZW0tMTY0IGRyb3Bkb3duXCI+PGEgdGl0bGU9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9ICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj48aW1nIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tbmV0d29ya1wiICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsIHdpZHRoOiA1MCwgaGVpZ2h0OiA1MCwgcGFkZGluZzogMCwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifX0gc3JjPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5pbWFnZX0gYWx0PXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lfSAvPiA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiICA+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibWVudVwiIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBwYWRkaW5nTGVmdDogMjB9fT5IZWxsbyA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLXJlZGRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiA8L2k+PGJyIC8+PHN0cm9uZz57dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1pdGVtLTE0NFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xNDRcIj48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhIHRpdGxlPVwiU2hvdyBkYXNoYm9hcmRcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gPjwvaT48c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtaXRlbS0xMjBcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0tMTIwXCI+PExpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPjxhIHRpdGxlPVwiRGlzcGxheSBhbmQgbWFuaXB1bGF0ZSBzZXR0aW5nc1wiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLWdlbmVyaWNcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj5TZXR0aW5nczwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1pdGVtLTE1NVwiIHJvbGU9XCJidXR0b25cIiAgY2xhc3NOYW1lPVwiIG1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xNTVcIj48YSB0aXRsZT1cImxvZ291dCBmcm9tIHlvdXIgYWNjb3VudFwiIG9uQ2xpY2s9e3NpZ25PdXR9PjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtcHJpdmFjeVwiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPkxvZ291dDwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcblxyXG5cclxuKi99XHJcblxyXG5cclxuXHJcblx0XHRcdFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFxyXG4gICAgKVxyXG59fVxyXG5cclxuY29uc3QgTmF2YmFyID0gd2l0aFNlc3Npb24oTmF2YmFyY2xhc3MpXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9