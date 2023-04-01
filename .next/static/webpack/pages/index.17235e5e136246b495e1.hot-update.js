webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/src/FooterWidget.js":
/*!***********************************!*\
  !*** ./pages/src/FooterWidget.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterWidget; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_MyDrive_DeskFolder_Development_gammo_webapp_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_MyDrive_DeskFolder_Development_gammo_webapp_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_MyDrive_DeskFolder_Development_gammo_webapp_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_MyDrive_DeskFolder_Development_gammo_webapp_main_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\MyDrive\\DeskFolder\\Development\\gammo-webapp-main\\pages\\src\\FooterWidget.js",
    _s = $RefreshSig$();




function FooterWidget() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      ismobile = _useState[0],
      setMobile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      cliwidth = _useState2[0],
      setcliwidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      cliheight = _useState3[0],
      setcliheight = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("none"),
      rotationWarn = _useState4[0],
      setrotationWarn = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(C_MyDrive_DeskFolder_Development_gammo_webapp_main_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_MyDrive_DeskFolder_Development_gammo_webapp_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var screenWidth, screenHeight;
    return C_MyDrive_DeskFolder_Development_gammo_webapp_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.innerWidth;

          case 2:
            screenWidth = _context.sent;
            window.addEventListener("resize", function () {
              setcliheight(window.innerHeight);
              setcliwidth(window.innerWidth);
            });
            screenHeight = window.innerHeight;
            cliheight < 400 ? setrotationWarn("block") : null;
            cliheight > cliwidth ? setrotationWarn("none") : null;
            // detect mobile
            screenWidth < 768 ? setMobile(true) : setMobile(false);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        backgroundColor: "red",
        zIndex: "999",
        height: "100vh",
        width: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: "100%",
        position: "fixed",
        display: "none"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-dialog  modal-dialog-centered modal-dialog-scrollable modal-xl ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "account-area",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              className: "account-form",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "submit",
                  className: "cmn-btn",
                  children: "Rotaion Warning"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-group mt-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    children: "Currently we don't support horizontal mode, pls rotate your device to vertical mode. Thank you"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    textAlign: "center"
                  },
                  children: [" ", "Screen Resolution : " + cliheight + " x " + cliwidth, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    textAlign: "center"
                  },
                  children: [" ", "Screen Status : " + rotationWarn, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "footer-section bg_img ",
      "data-background": "assets/images/footer.png",
      style: {
        backgroundImage: 'url("assets/images/footer.png")'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "subscribe-area",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "obj",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "assets/images/subscribe.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "subscribe-content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: "title",
                  id: "test",
                  children: "Free Game Pass Invites"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 37
                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#0",
                  "data-toggle": "modal",
                  "data-target": "#rotaionWarning",
                  children: "Limited time reward program"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Receive a free game pass with every verified invitation for new logins and GP purchases, and get a chance to win Rs. 2,000 per match. There's no limit to the number of game passes you can earn, but the pass will only be credited to your account if the requested participation is successful"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                  className: "subscribe-form",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "email",
                    name: "subscribe_email",
                    id: "subscribe_email",
                    placeholder: "Phone number or  Email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "submit",
                    children: "invite Now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), ismobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row footer-top mb-none-50",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mb-50",
              style: {
                paddingLeft: "20px "
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "footer-widget__title",
                  children: "ABOUT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "short-links",
                  style: {
                    opacity: "0.9"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "About Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Contact Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Customer Reviews"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Privacy Policy"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mb-50",
              style: {
                paddingLeft: "30px "
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "footer-widget__title",
                  children: "MY ACCOUNT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "short-links",
                  style: {
                    opacity: "0.9"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Manage My Account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Account Varification"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Withdwaw process"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Safety & Security"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mb-50",
              style: {
                paddingLeft: "20px "
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "footer-widget__title",
                  children: "HELP CENTER"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "short-links",
                  style: {
                    opacity: "0.9"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Help centre"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "FAQ"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Quick Start Guide"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Tutorials"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mb-50",
              style: {
                paddingLeft: "30px "
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "footer-widget__title",
                  children: "LEGAL INFO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "short-links",
                  style: {
                    opacity: "0.9"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Security"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Terms of Service"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 256,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Become Affiliate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 261,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Complaints Policy"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 29
          }, this)
        }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row footer-top mb-none-50",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-3 col-sm-6 mb-50",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "footer-widget__title",
                  children: "ABOUT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "short-links",
                  style: {
                    opacity: "0.9"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "About Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Contact Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 293,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Customer Reviews"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Privacy Policy"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-3 col-sm-6 mb-50",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "footer-widget__title",
                  children: "MY ACCOUNT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "short-links",
                  style: {
                    opacity: "0.9"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Manage Your Account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 318,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Account Varification"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 323,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Withdwaw process"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 328,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Safety & Security"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 333,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-3 col-sm-6 mb-50",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "footer-widget__title",
                  children: "HELP CENTER"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "short-links",
                  style: {
                    opacity: "0.9"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Help centre"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 351,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "FAQ"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 354,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Quick Start Guide"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Tutorials"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 362,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 361,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-3 col-sm-6 mb-50",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-widget",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "footer-widget__title",
                  children: "LEGAL INFO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "short-links",
                  style: {
                    opacity: "0.9"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Security"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 378,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 377,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Terms of Service"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 381,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 380,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Become Affiliate"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 386,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 385,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#0",
                      children: "Complaints Policy"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 391,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 29
          }, this)
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

_s(FooterWidget, "gCsF9QydqAt0/BHgE/9MOp6GTUU=");

_c = FooterWidget;

var _c;

$RefreshReg$(_c, "FooterWidget");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3JjL0Zvb3RlcldpZGdldC5qcyJdLCJuYW1lcyI6WyJGb290ZXJXaWRnZXQiLCJ1c2VTdGF0ZSIsImlzbW9iaWxlIiwic2V0TW9iaWxlIiwiY2xpd2lkdGgiLCJzZXRjbGl3aWR0aCIsImNsaWhlaWdodCIsInNldGNsaWhlaWdodCIsInJvdGF0aW9uV2FybiIsInNldHJvdGF0aW9uV2FybiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzY3JlZW5XaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhlaWdodCIsInNjcmVlbkhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImhlaWdodCIsIndpZHRoIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwibWluSGVpZ2h0IiwicG9zaXRpb24iLCJkaXNwbGF5IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZEltYWdlIiwicGFkZGluZ0xlZnQiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLEtBQUQsQ0FESDtBQUFBLE1BQzVCQyxRQUQ0QjtBQUFBLE1BQ2xCQyxTQURrQjs7QUFBQSxtQkFFSEYsc0RBQVEsQ0FBQyxJQUFELENBRkw7QUFBQSxNQUU1QkcsUUFGNEI7QUFBQSxNQUVsQkMsV0FGa0I7O0FBQUEsbUJBR0RKLHNEQUFRLENBQUMsSUFBRCxDQUhQO0FBQUEsTUFHNUJLLFNBSDRCO0FBQUEsTUFHakJDLFlBSGlCOztBQUFBLG1CQUlLTixzREFBUSxDQUFDLE1BQUQsQ0FKYjtBQUFBLE1BSTVCTyxZQUo0QjtBQUFBLE1BSWRDLGVBSmM7O0FBTW5DQyx5REFBUyxrV0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVvQkMsTUFB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QUE7QUFBQSwwQkFQSixlQVlJO0FBQUEsMkNBQ0k7QUFBRywwQkFBSSxFQUFDLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVpKLGVBaUJJO0FBQUEsMkNBQ0k7QUFBRywwQkFBSSxFQUFDLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF4Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkoseUJBMUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3WEg7O0dBblp1Qi9CLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTcyMzVlNWUxMzYyNDZiNDk1ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcldpZGdldCgpIHtcclxuICAgIGNvbnN0IFtpc21vYmlsZSwgc2V0TW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGl3aWR0aCwgc2V0Y2xpd2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbY2xpaGVpZ2h0LCBzZXRjbGloZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcm90YXRpb25XYXJuLCBzZXRyb3RhdGlvbldhcm5dID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gZGV0ZWN0IHJvdGF0aW9uXHJcbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSBhd2FpdCB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRjbGloZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgc2V0Y2xpd2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGloZWlnaHQgPCA0MDAgPyBzZXRyb3RhdGlvbldhcm4oXCJibG9ja1wiKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xpaGVpZ2h0ID4gY2xpd2lkdGggPyBzZXRyb3RhdGlvbldhcm4oXCJub25lXCIpIDogbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRldGVjdCBtb2JpbGVcclxuICAgICAgICBzY3JlZW5XaWR0aCA8IDc2OCA/IHNldE1vYmlsZSh0cnVlKSA6IHNldE1vYmlsZShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogaGlkZWVuIHpvcmluaXpvbnRhbCBtb2RlIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1hcmdpbjogMCwgdG9wOiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwLCBoZWlnaHQ6ICcxMDB2aCcsIGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogMTAwMDAwIH19ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IFwiOTk5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyAgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIG1vZGFsLXhsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYWNjb3VudC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjbW4tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3RhaW9uIFdhcm5pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRseSB3ZSBkb24ndCBzdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbCBtb2RlLCBwbHMgcm90YXRlIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2UgdG8gdmVydGljYWwgbW9kZS4gVGhhbmsgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiU2NyZWVuIFJlc29sdXRpb24gOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpaGVpZ2h0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB4IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGl3aWR0aH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiU2NyZWVuIFN0YXR1cyA6IFwiICsgcm90YXRpb25XYXJufXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGFjY291bnQtYXJlYSBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogZm9vdGVyIHNlY3Rpb24gc3RhcnQgICovfVxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLXNlY3Rpb24gYmdfaW1nIFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJhY2tncm91bmQ9XCJhc3NldHMvaW1hZ2VzL2Zvb3Rlci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXNzZXRzL2ltYWdlcy9mb290ZXIucG5nXCIpJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZS1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYmpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9zdWJzY3JpYmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiIGlkPVwidGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJlZSBHYW1lIFBhc3MgSW52aXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3JvdGFpb25XYXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGltaXRlZCB0aW1lIHJld2FyZCBwcm9ncmFtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNlaXZlIGEgZnJlZSBnYW1lIHBhc3Mgd2l0aCBldmVyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZpZWQgaW52aXRhdGlvbiBmb3IgbmV3IGxvZ2lucyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdQIHB1cmNoYXNlcywgYW5kIGdldCBhIGNoYW5jZSB0byB3aW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJzLiAyLDAwMCBwZXIgbWF0Y2guIFRoZXJlJ3Mgbm8gbGltaXQgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBudW1iZXIgb2YgZ2FtZSBwYXNzZXMgeW91IGNhbiBlYXJuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0IHRoZSBwYXNzIHdpbGwgb25seSBiZSBjcmVkaXRlZCB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBhY2NvdW50IGlmIHRoZSByZXF1ZXN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb24gaXMgc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3Vic2NyaWJlLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YnNjcmliZV9lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJzY3JpYmVfZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgbnVtYmVyIG9yICBFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52aXRlIE5vd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNtb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9iaWxlIHZpZXcgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb290ZXItdG9wIG1iLW5vbmUtNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMjBweCBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBQk9VVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3J0LWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBcIjAuOVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lciBSZXZpZXdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+UHJpdmFjeSBQb2xpY3k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZm9vdGVyLXdpZGdldCBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIzMHB4IFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ZIEFDQ09VTlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogXCIwLjlcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2UgTXkgQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudCBWYXJpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGhkd2F3IHByb2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhZmV0eSAmIFNlY3VyaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBmb290ZXItd2lkZ2V0IGVuZCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMjBweCBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIRUxQIENFTlRFUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3J0LWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBcIjAuOVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5IZWxwIGNlbnRyZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+RkFRPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1aWNrIFN0YXJ0IEd1aWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+VHV0b3JpYWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGZvb3Rlci13aWRnZXQgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIzMHB4IFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExFR0FMIElORk9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogXCIwLjlcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+U2VjdXJpdHk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybXMgb2YgU2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVjb21lIEFmZmlsaWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxhaW50cyBQb2xpY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGZvb3Rlci13aWRnZXQgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9iaWxlIHZpZXcgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGRlc2t0b3AgdmlldyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvb3Rlci10b3AgbWItbm9uZS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgbWItNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBQk9VVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3J0LWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBcIjAuOVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lciBSZXZpZXdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+UHJpdmFjeSBQb2xpY3k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZm9vdGVyLXdpZGdldCBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNiBtYi01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ZIEFDQ09VTlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogXCIwLjlcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2UgWW91ciBBY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50IFZhcmlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2l0aGR3YXcgcHJvY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FmZXR5ICYgU2VjdXJpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGZvb3Rlci13aWRnZXQgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgbWItNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIRUxQIENFTlRFUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3J0LWxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBcIjAuOVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5IZWxwIGNlbnRyZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+RkFRPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1aWNrIFN0YXJ0IEd1aWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+VHV0b3JpYWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGZvb3Rlci13aWRnZXQgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgbWItNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMRUdBTCBJTkZPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcnQtbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IFwiMC45XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPlNlY3VyaXR5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1zIG9mIFNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlY29tZSBBZmZpbGlhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsYWludHMgUG9saWN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBmb290ZXItd2lkZ2V0IGVuZCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGRlc2t0b3AgdmlldyBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=