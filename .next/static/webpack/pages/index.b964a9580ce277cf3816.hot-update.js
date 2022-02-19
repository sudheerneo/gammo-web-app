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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL05hdmJhci5qcyJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsIkNvbXBvbmVudCIsInByb3BzIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwicHJvdG90eXBlIiwicmVuZGVyIiwiRXJyb3IiLCJqb2luIiwiTmF2YmFyY2xhc3MiLCJzdGF0ZSIsImlzTW9iaWxlIiwibWVudUNsYXNzZXMiLCJ1cmwiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRTdGF0ZSIsImdldFVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzaWduSW4iLCJhbGVydCIsImhlaWdodCIsIndpZHRoIiwibGlzdFN0eWxlIiwicGFkZGluZ1JpZ2h0IiwidGV4dEFsaWduIiwibGVmdCIsInJpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwidmVydGljYWxBbGlnbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJpbWFnZSIsInNpZ25PdXQiLCJwYWRkaW5nTGVmdCIsIk5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsU0FBUztBQUFBOztBQUFBLFlBQUksVUFBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQUEsc0JBQ2RDLG9FQUFVLEVBREk7QUFBQTtBQUFBLFFBQ2xDQyxPQURrQztBQUFBLFFBQ3pCQyxPQUR5QixvQkFHdkM7OztBQUNBLFFBQUlKLFNBQVMsQ0FBQ0ssU0FBVixDQUFvQkMsTUFBeEIsRUFBZ0M7QUFDakMsMEJBQU8scUVBQUMsU0FBRDtBQUFXLGVBQU8sRUFBRUgsT0FBcEI7QUFBNkIsZUFBTyxFQUFFQztBQUF0QyxTQUFtREgsS0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQUE7QUFBQSxnQkEzRFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE47QUE0TEQ7Ozs7RUExTnlCL0IsK0M7O0FBNE4xQixJQUFNeUMsTUFBTSxHQUFHMUMsV0FBVyxDQUFDVSxXQUFELENBQTFCO0tBQU1nQyxNO0FBQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5NjRhOTU4MGNlMjc3Y2YzODE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgc2lnbmluLCBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5cclxuY29uc3Qgd2l0aFNlc3Npb24gPSBDb21wb25lbnQgPT4gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxyXG4gIFxyXG5cdCAgLy8gaWYgdGhlIGNvbXBvbmVudCBoYXMgYSByZW5kZXIgcHJvcGVydHksIHdlIGFyZSBnb29kXHJcblx0ICBpZiAoQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIpIHsgXHJcblx0XHRyZXR1cm4gPENvbXBvbmVudCBzZXNzaW9uPXtzZXNzaW9ufSBsb2FkaW5nPXtsb2FkaW5nfSB7Li4ucHJvcHN9IC8+XHJcblx0ICB9XHJcbiAgXHJcblx0ICAvLyBpZiB0aGUgcGFzc2VkIGNvbXBvbmVudCBpcyBhIGZ1bmN0aW9uIGNvbXBvbmVudCwgdGhlcmUgaXMgbm8gbmVlZCBmb3IgdGhpcyB3cmFwcGVyXHJcblx0ICB0aHJvdyBuZXcgRXJyb3IoW1xyXG5cdCAgIFwiWW91IHBhc3NlZCBhIGZ1bmN0aW9uIGNvbXBvbmVudCwgYHdpdGhTZXNzaW9uYCBpcyBub3QgbmVlZGVkLlwiLFxyXG5cdCAgIFwiWW91IGNhbiBgdXNlU2Vzc2lvbmAgZGlyZWN0bHkgaW4geW91ciBjb21wb25lbnQuXCJcclxuXHQgIF0uam9pbihcIlxcblwiKSlcclxuICB9O1xyXG5cclxuY2xhc3MgTmF2YmFyY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuXHRcdGlzTW9iaWxlOiBmYWxzZSwgXHRcclxuXHRcdG1lbnVDbGFzc2VzIDogJ21lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xOTkgJyxcclxuXHRcdHVybDogJydcclxuXHR9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB3aW5kb3dXaWR0aCA8IDc2OCA/IHRoaXMuc2V0U3RhdGUoe2lzTW9iaWxlIDogdHJ1ZX0pIDogdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGUgOiBmYWxzZX0pIDtcclxuXHJcblx0XHJcblx0Y29uc3QgZ2V0VXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgZ2V0VXJsID09PSAnL2Fib3V0JyA/IHRoaXMuc2V0U3RhdGUoeyB1cmw6ICcvYWJvdXQnfSkgOiAwIDtcclxuICAgIGdldFVybCA9PT0gJy9wcmF5ZXItcmVxdWVzdCcgPyB0aGlzLnNldFN0YXRlKHsgdXJsOiAnL3ByYXllci09cmVxdWVzdCd9KSA6IDAgO1xyXG4gICAgZ2V0VXJsID09PSAnL2NvbnRhY3QnID8gdGhpcy5zZXRTdGF0ZSh7IHVybDogJy9jb250YWN0J30pIDogMCA7XHJcbiAgICBnZXRVcmwgPT09ICcvZG9uYXRlJyA/IHRoaXMuc2V0U3RhdGUoeyB1cmw6ICcvZG9uYXRlJ30pIDogMCA7XHJcblx0Z2V0VXJsID09PSAnLycgPyB0aGlzLnNldFN0YXRlKHsgdXJsOiAnLyd9KSA6IDAgO1xyXG5cclxuXHJcbiB9XHJcblxyXG4gIFxyXG5cclxuICByZW5kZXIoKSB7ICBcclxuXHRjb25zdCB7c2Vzc2lvbiwgbG9hZGluZ30gPSB0aGlzLnByb3BzO1xyXG4gIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gIHsvKiBsb2dpbiBtb2RhbCAqL31cclxuPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJsb2dpbk1vZGFsXCIgdGFiSW5kZXg9XCIxXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG48ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgYmctdHJhbnNwYXJlbnRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtYXJlYVwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBtYi00XCI+QWNjZXNzIHlvdXIgYWNjb3VudDwvaDM+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYWNjb3VudC1mb3JtXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiIzBcIiBvbkNsaWNrPXsgKCkgPT4ge3NpZ25JbignZ29vZ2xlJyl9IH0gIGNsYXNzTmFtZT1cImdvb2dsZS1idG4gbXQtNCBtYi0zXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2dvb2dsZS5wbmdcIiBhbHQ9XCJpbWFnZVwiLz5Mb2dpbiB3aXRoIEdvb2dsZTwvYT5cclxuICAgICAgICAgIHsvKiA8cD5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjMFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3NpZ251cE1vZGFsXCI+U2lnbiB1cCBoZXJlPC9hPjwvcD4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ItZGV2aWRlciBtdC01XCI+PHNwYW4+T1I8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiIzBcIiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoJ0ZCIFNESyBjdXJlbnRseSB1bnZhaWxhYmxlIC4gcGxlYXNlIHRyeSB3aXRoIEdvb2dsZSBMb2dpbicgKX19IGNsYXNzTmFtZT1cImdvb2dsZS1idG4gbXQtNCBtYi0zXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIHN0eWxlPXt7aGVpZ2h0OiBcIjI0cHhcIiwgd2lkdGg6ICc0OHB4J319IGFsdD1cImltYWdlXCIvPkxvZ2luIHdpdGggRmFjZWJvb2s8L2E+XHJcbiAgICAgICAgICB7LyogPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiIzBcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzaWdudXBNb2RhbFwiPlNpZ24gdXAgaGVyZTwvYT48L3A+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICA8L2Rpdj57LyogYWNjb3VudC1hcmVhIGVuZCAqL31cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cIiMwXCI+QWNjZXNzIHlvdXIgYWNjb3VudCB3aXRoIGNsb3VkIGxvZ2lucyBzZWN1cmVseTwvYT48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuey8qIFNpZ24gVXAgbW9kYWwgKi99XHJcbjxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwic2lnbnVwTW9kYWxcIiB0YWJJbmRleD1cIjFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbjxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1hcmVhXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIG1iLTRcIj5MZXQncyBnZXQgc3RhcnRlZDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiIzBcIiBjbGFzc05hbWU9XCJnb29nbGUtYnRuIG10LTQgbWItM1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9nb29nbGUucG5nXCIgYWx0PVwiaW1hZ2VcIi8+U2lnbiBVcCB3aXRoIEdvb2dsZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yLWRldmlkZXIgbXQtNFwiPjxzcGFuPk9SPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTIgbWItNFwiPlNpZ24gdXAgd2l0aCB5b3VyIHdvcmsgZW1haWw8L3A+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYWNjb3VudC1mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPllvdXIgRW1haWwgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJsb2dpbl9lbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjbW4tYnRuXCI+VHJ5IEl0IE5vdzwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88YSBocmVmPVwiIzBcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNsb2dpbk1vZGFsXCI+U2lnbiBJbjwvYT48L3A+XHJcbiAgICAgIDwvZGl2PnsvKiBhY2NvdW50LWFyZWEgZW5kICovfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbnsvKiBoZWFkZXItc2VjdGlvbiBzdGFydCAgKi99XHJcbjxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+IFxyXG48ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYm90dG9tXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQteGwgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICA8TGluayBocmVmPScvJz48YSBjbGFzc05hbWU9XCJzaXRlLWxvZ28gc2l0ZS10aXRsZVwiID48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJzaXRlLWxvZ29cIi8+PHNwYW4gY2xhc3NOYW1lPVwibG9nby1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmxhdGljb24tZmlyZVwiPjwvaT48L3NwYW4+PC9hPjwvTGluaz5cclxuXHJcblxyXG57LyogKi99XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cIiBtbC1hdXRvXCIgc3R5bGU9e3tsaXN0U3R5bGU6ICdub25lJywgcGFkZGluZ1JpZ2h0OiAnMTVweCd9fT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTW9iaWxlICYmXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLnNlc3Npb24gJiYgPD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51X2hhc19jaGlsZHJlblwiID48YSB0aXRsZT0nTG9naW4nICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj48c3BhbiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1taWdyYXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgcm9sZT1cIm1lbnVcIiBjbGFzc05hbWU9XCJzdWItbWVudSBkcm9wZG93bi1tZW51XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgIGxlZnQ6ICdhdXRvJywgcmlnaHQ6ICcwJywgYmFja2dyb3VuZEltYWdlOiAnLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoODlkZWcsICM1ZjE2YTkgMCUsICNjZjE1ZjggMTAwJSknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyAoKSA9PiB7c2lnbkluKCdnb29nbGUnKX0gfSA+PGEgdGl0bGU9XCJMb2dpbiB3aXRoIGdvb2dsZVwiID48c3Bhbj5Mb2dpbiB3aXRoIDwvc3Bhbj4gPGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1nb29nbGVcIiBzdHlsZT17e2NvbG9yOiAnc2t5Ymx1ZSd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsgKCkgPT4ge3NpZ25JbignZ29vZ2xlJyl9IH0gPjxhIHRpdGxlPVwiTG9naW4gd2l0aCBmYWNlYm9va1wiID48c3Bhbj5Mb2dpbiB3aXRoIDwvc3Bhbj4gPGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1mYWNlYm9va1wiIHN0eWxlPXt7Y29sb3I6ICdibHVlJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnNlc3Npb24gJiYgPD5cdFx0XHRcdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgPGxpID48YSB0aXRsZT17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH0gIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPjxpbWcgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1uZXR3b3JrXCIgIHN0eWxlPXt7dmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiwgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBwYWRkaW5nOiAwLCBib3JkZXJSYWRpdXM6IFwiNTAlXCJ9fSBzcmM9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmltYWdlfSBhbHQ9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWV9IC8+IDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgID48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIHJvbGU9XCJtZW51XCIgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLW1lbnVcIiAgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsICBsZWZ0OiAnYXV0bycsIHJpZ2h0OiAnMCcsIHBhZGRpbmc6ICcxMHB4JywgYmFja2dyb3VuZEltYWdlOiAnLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoODlkZWcsICM1ZjE2YTkgMCUsICNjZjE1ZjggMTAwJSknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgPkhlbGxvIDxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtcmVkZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+IDwvaT48YnIgLz48c3Ryb25nPnt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lIHx8IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmVtYWlsfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj48YSB0aXRsZT1cIlNob3cgZGFzaGJvYXJkXCIgPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319ID48L2k+IDxzcGFuPkRhc2hib2FyZDwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvc2V0dGluZ3NcIj48YSB0aXRsZT1cIkRpc3BsYXkgYW5kIG1hbmlwdWxhdGUgc2V0dGluZ3NcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1nZW5lcmljXCIgc3R5bGU9e3tjb2xvcjogJ3doaXRlJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxzcGFuPlNldHRpbmdzPC9zcGFuPjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgdGl0bGU9XCJsb2dvdXQgZnJvbSB5b3VyIGFjY291bnRcIiBvbkNsaWNrPXtzaWduT3V0fT48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLXByaXZhY3lcIiBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPHNwYW4+TG9nb3V0PC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG57LyogICovfVxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnUtdG9nZ2xlXCI+PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtYWluLW1lbnUgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfaGFzX2NoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaW5kZXguaHRtbFwiPkhvbWUgT25lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJpbmRleC10d28uaHRtbFwiPkhvbWUgVHdvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfaGFzX2NoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPkdhbWVzPC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImdhbWVzLmh0bWxcIj5BbGwgR2FtZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImdhbWUtZGV0YWlscy5odG1sXCI+R2FtZSBEZXRhaWxzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfaGFzX2NoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPkJsb2c8L2E+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiYmxvZy1vbmUuaHRtbFwiPkJsb2cgT25lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJibG9nLXR3by5odG1sXCI+QmxvZyBUd288L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImJsb2ctZGV0YWlscy5odG1sXCI+QmxvZyBEZXRhaWxzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfaGFzX2NoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPnBhZ2VzPC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImFib3V0Lmh0bWxcIj5BYm91dCBVczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiY29udGFjdC5odG1sXCI+Y29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtcmlnaHRcIj5cclxuICAgICAgICB7IXRoaXMucHJvcHMuc2Vzc2lvbiAmJiBcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICB7LyogPGEgb25DbGljaz17ICgpID0+IHtzaWduSW4oJ2dvb2dsZScpfSB9ICA+QWNjZXNzIHlvdXIgQWNjb3VudDwvYT4gKi99XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMwXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2xvZ2luTW9kYWxcIj5BY2Nlc3MgWW91ciBBY2NvdW50PC9hPlxyXG4gICAgICAgICAgPC8+fVxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2Vzc2lvbiAmJiA8Plx0XHRcdFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICA8bGkgIGlkPVwibWVudS1pdGVtLTE2NFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gbWVudS1pdGVtLTE2NCBkcm9wZG93blwiPjxhIHRpdGxlPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lIHx8IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmVtYWlsfSAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+PGltZyBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLW5ldHdvcmtcIiAgc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLCB3aWR0aDogNTAsIGhlaWdodDogNTAsIHBhZGRpbmc6IDAsIGJvcmRlclJhZGl1czogXCI1MCVcIn19IHNyYz17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaW1hZ2V9IGFsdD17dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZX0gLz4gPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAgPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgcm9sZT1cIm1lbnVcIiBjbGFzc05hbWU9XCIgZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIiwgcGFkZGluZ0xlZnQ6IDIwfX0+SGVsbG8gPGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1yZWRkaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4gPC9pPjxiciAvPjxzdHJvbmc+e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtaXRlbS0xNDRcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0tMTQ0XCI+PExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj48YSB0aXRsZT1cIlNob3cgZGFzaGJvYXJkXCIgPjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9e3tjb2xvcjogJ2RlZXBwaW5rJ319ID48L2k+PHNwYW4+RGFzaGJvYXJkPC9zcGFuPjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51LWl0ZW0tMTIwXCIgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLTEyMFwiPjxMaW5rIGhyZWY9XCIvc2V0dGluZ3NcIj48YSB0aXRsZT1cIkRpc3BsYXkgYW5kIG1hbmlwdWxhdGUgc2V0dGluZ3NcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1nZW5lcmljXCIgc3R5bGU9e3tjb2xvcjogJ2RlZXBwaW5rJ319ICBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PHNwYW4+U2V0dGluZ3M8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtaXRlbS0xNTVcIiByb2xlPVwiYnV0dG9uXCIgIGNsYXNzTmFtZT1cIiBtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0tMTU1XCI+PGEgdGl0bGU9XCJsb2dvdXQgZnJvbSB5b3VyIGFjY291bnRcIiBvbkNsaWNrPXtzaWduT3V0fT48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLXByaXZhY3lcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj5Mb2dvdXQ8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PnsvKiBoZWFkZXJfX2JvdHRvbSBlbmQgKi99XHJcbjwvaGVhZGVyPlxyXG57LyogaGVhZGVyLXNlY3Rpb24gZW5kICAqL31cclxuXHJcbnsvKiB7IXRoaXMucHJvcHMuc2Vzc2lvbiAmJiBcclxuICAgICA8PlxyXG4gICAgIDxsaSBpZD1cIm1lbnUtaXRlbS0xNjRcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0taGFzLWNoaWxkcmVuIG1lbnUtaXRlbS0xNjQgZHJvcGRvd24gXCIgPjxhIHRpdGxlPSdMb2dpbicgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPjxzcGFuID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLW1pZ3JhdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvYT5cclxuICAgICAgICAgPHVsIHJvbGU9XCJtZW51XCIgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLW1lbnVcIiA+XHJcbiAgICAgICAgICAgICA8bGkgb25DbGljaz17ICgpID0+IHtzaWduSW4oJ2dvb2dsZScpfSB9IGlkPVwibWVudS1pdGVtLTEyMFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xMjBcIj48YSB0aXRsZT1cIkxvZ2luIHdpdGggRmFjZWJvb2tcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1nb29nbGVcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPkxvZ2luIHdpdGggR29vZ2xlPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICA8L3VsPlxyXG4gICAgIDwvbGk+XHJcbiAgIDwvPiAgICAgXHJcbn0gIFxyXG57dGhpcy5wcm9wcy5zZXNzaW9uICYmIDw+XHRcdFx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgIDxsaSAgaWQ9XCJtZW51LWl0ZW0tMTY0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtaXRlbS10eXBlLXBvc3RfdHlwZSBtZW51LWl0ZW0tb2JqZWN0LXBhZ2UgbWVudS1pdGVtLWhhcy1jaGlsZHJlbiBtZW51LWl0ZW0tMTY0IGRyb3Bkb3duXCI+PGEgdGl0bGU9e3RoaXMucHJvcHMuc2Vzc2lvbi51c2VyLm5hbWUgfHwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuZW1haWx9ICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj48aW1nIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tbmV0d29ya1wiICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsIHdpZHRoOiA1MCwgaGVpZ2h0OiA1MCwgcGFkZGluZzogMCwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifX0gc3JjPXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5pbWFnZX0gYWx0PXt0aGlzLnByb3BzLnNlc3Npb24udXNlci5uYW1lfSAvPiA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiICA+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCByb2xlPVwibWVudVwiIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCBwYWRkaW5nTGVmdDogMjB9fT5IZWxsbyA8aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLXJlZGRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiA8L2k+PGJyIC8+PHN0cm9uZz57dGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5lbWFpbH08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1pdGVtLTE0NFwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xNDRcIj48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhIHRpdGxlPVwiU2hvdyBkYXNoYm9hcmRcIiA+PGkgY2xhc3NOYW1lPVwiX21pIF9iZWZvcmUgZGFzaGljb25zIGRhc2hpY29ucy1hcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gPjwvaT48c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtaXRlbS0xMjBcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW0gbWVudS1pdGVtLXR5cGUtcG9zdF90eXBlIG1lbnUtaXRlbS1vYmplY3QtcGFnZSBtZW51LWl0ZW0tMTIwXCI+PExpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPjxhIHRpdGxlPVwiRGlzcGxheSBhbmQgbWFuaXB1bGF0ZSBzZXR0aW5nc1wiID48aSBjbGFzc05hbWU9XCJfbWkgX2JlZm9yZSBkYXNoaWNvbnMgZGFzaGljb25zLWFkbWluLWdlbmVyaWNcIiBzdHlsZT17e2NvbG9yOiAnZGVlcHBpbmsnfX0gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48c3Bhbj5TZXR0aW5nczwvc3Bhbj48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwibWVudS1pdGVtLTE1NVwiIHJvbGU9XCJidXR0b25cIiAgY2xhc3NOYW1lPVwiIG1lbnUtaXRlbSBtZW51LWl0ZW0tdHlwZS1wb3N0X3R5cGUgbWVudS1pdGVtLW9iamVjdC1wYWdlIG1lbnUtaXRlbS0xNTVcIj48YSB0aXRsZT1cImxvZ291dCBmcm9tIHlvdXIgYWNjb3VudFwiIG9uQ2xpY2s9e3NpZ25PdXR9PjxpIGNsYXNzTmFtZT1cIl9taSBfYmVmb3JlIGRhc2hpY29ucyBkYXNoaWNvbnMtcHJpdmFjeVwiIHN0eWxlPXt7Y29sb3I6ICdkZWVwcGluayd9fSAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxzcGFuPkxvZ291dDwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcblxyXG5cclxuKi99XHJcblxyXG5cclxuXHJcblx0XHRcdFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFxyXG4gICAgKVxyXG59fVxyXG5cclxuY29uc3QgTmF2YmFyID0gd2l0aFNlc3Npb24oTmF2YmFyY2xhc3MpXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9