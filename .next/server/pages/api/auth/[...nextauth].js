module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/firebase-adapter */ "@next-auth/firebase-adapter");
/* harmony import */ var _next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__);
var _firebase$apps$;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId
};
const firestore = ((_firebase$apps$ = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.apps[0]) !== null && _firebase$apps$ !== void 0 ? _firebase$apps$ : firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(firebaseConfig)).firestore(); //refresh auth token

async function refreshAccessToken(token) {
  try {
    var _refreshedTokens$refr;

    const url = "https://oauth2.googleapis.com/token?" + new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: token.refreshToken
    });
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    });
    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return _objectSpread(_objectSpread({}, token), {}, {
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: (_refreshedTokens$refr = refreshedTokens.refresh_token) !== null && _refreshedTokens$refr !== void 0 ? _refreshedTokens$refr : token.refreshToken // Fall back to old refresh token

    });
  } catch (error) {
    console.log(error);
    return _objectSpread(_objectSpread({}, token), {}, {
      error: "RefreshAccessTokenError"
    });
  }
} //end refresh token code


/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
  }) // Providers.Email({
  //   server: {
  //     host: process.env.EMAIL_SERVER_HOST,
  //     port: process.env.EMAIL_SERVER_PORT,
  //     auth: {
  //       user: process.env.EMAIL_SERVER_USER,
  //       pass: process.env.EMAIL_SERVER_PASSWORD
  //     }
  //   },
  //   from: process.env.EMAIL_FROM
  // }),
  ],
  adapter: Object(_next_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__["FirebaseAdapter"])(firestore),
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  //database: process.env.DATABASE_URL,
  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours

  },
  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {// A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {// signIn: '/signin',  // Displays signin buttons
    //  signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },
    // async session(session, user) { return session },
    // async jwt(token, user, account, profile, isNewUser) { return token }
    //old code start
    // jwt: async (token, user, account, profile, isNewUser) => {
    //   user && (token.user = user);
    //   return token; // ...here
    // },
    // session: async (session, user, sessionToken) => {
    //   session.user = user.user;
    //   return session;
    //old code end
    //new start
    async jwt({
      token,
      user,
      account
    }) {
      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_in * 1000,
          refreshToken: account.refresh_token,
          user
        };
      } // Return previous token if the access token has not expired yet


      if (Date.now() < token.accessTokenExpires) {
        return token;
      } // Access token has expired, try to update it


      return refreshAccessToken(token);
    },

    async session({
      session,
      token
    }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session; //new code ends
    }

  },
  // Events are useful for loggingyarn dev
  // https://next-auth.js.org/configuration/events
  //this is the place where we can start custom api handling  with events like createUserr() , updateUser(), getUser
  events: {},
  // You can set the theme to 'light', 'dark' or use 'auto' to default to the
  // whatever prefers-color-scheme is set to in the browser. Default is 'auto'
  theme: "dark",
  // Enable debug messages in the console if you are having problems
  debug: true
}));

/***/ }),

/***/ "@next-auth/firebase-adapter":
/*!**********************************************!*\
  !*** external "@next-auth/firebase-adapter" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@next-auth/firebase-adapter");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmV4dC1hdXRoL2ZpcmViYXNlLWFkYXB0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiRklSRUJBU0VfYXBpS2V5IiwiYXV0aERvbWFpbiIsIkZJUkVCQVNFX2F1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJGSVJFQkFTRV9wcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwiRklSRUJBU0Vfc3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiRklSRUJBU0VfbWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX2FwcElkIiwibWVhc3VyZW1lbnRJZCIsIkZJUkVCQVNFX21lYXN1cmVtZW50SWQiLCJmaXJlc3RvcmUiLCJmaXJlYmFzZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwidG9rZW4iLCJ1cmwiLCJVUkxTZWFyY2hQYXJhbXMiLCJjbGllbnRfaWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50X3NlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiZ3JhbnRfdHlwZSIsInJlZnJlc2hfdG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIm1ldGhvZCIsInJlZnJlc2hlZFRva2VucyIsImpzb24iLCJvayIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiYWNjZXNzVG9rZW5FeHBpcmVzIiwiRGF0ZSIsIm5vdyIsImV4cGlyZXNfaW4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJOZXh0QXV0aCIsInByb3ZpZGVycyIsIlByb3ZpZGVycyIsIkdvb2dsZSIsImNsaWVudElkIiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImFkYXB0ZXIiLCJGaXJlYmFzZUFkYXB0ZXIiLCJzZWNyZXQiLCJTRUNSRVQiLCJzZXNzaW9uIiwiand0IiwicGFnZXMiLCJjYWxsYmFja3MiLCJ1c2VyIiwiYWNjb3VudCIsImV2ZW50cyIsInRoZW1lIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FB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T0FBUCxDQUxnQyxDQU1oQztBQUNEOztBQTVDUSxHQTdFVztBQTRIdEI7QUFDQTtBQUNBO0FBQ0FNLFFBQU0sRUFBRSxFQS9IYztBQWlJdEI7QUFDQTtBQUNBQyxPQUFLLEVBQUUsTUFuSWU7QUFxSXRCO0FBQ0FDLE9BQUssRUFBRTtBQXRJZSxDQUFELENBQXZCLEU7Ozs7Ozs7Ozs7O0FDOURBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanNcIik7XG4iLCJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgRmlyZWJhc2VBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvZmlyZWJhc2UtYWRhcHRlclwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9hcGlLZXksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX2F1dGhEb21haW4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfcHJvamVjdElkLFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9zdG9yYWdlQnVja2V0LFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfbWVzc2FnaW5nU2VuZGVySWQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9hcHBJZCxcbiAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfbWVhc3VyZW1lbnRJZFxufTtcblxuY29uc3QgZmlyZXN0b3JlID0gKFxuICBmaXJlYmFzZS5hcHBzWzBdID8/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXG4pLmZpcmVzdG9yZSgpO1xuXG4vL3JlZnJlc2ggYXV0aCB0b2tlblxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEFjY2Vzc1Rva2VuKHRva2VuKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4/XCIgK1xuICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgIGdyYW50X3R5cGU6IFwicmVmcmVzaF90b2tlblwiLFxuICAgICAgICByZWZyZXNoX3Rva2VuOiB0b2tlbi5yZWZyZXNoVG9rZW5cbiAgICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlZnJlc2hlZFRva2VucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IHJlZnJlc2hlZFRva2VucztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udG9rZW4sXG4gICAgICBhY2Nlc3NUb2tlbjogcmVmcmVzaGVkVG9rZW5zLmFjY2Vzc190b2tlbixcbiAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlczogRGF0ZS5ub3coKSArIHJlZnJlc2hlZFRva2Vucy5leHBpcmVzX2luICogMTAwMCxcbiAgICAgIHJlZnJlc2hUb2tlbjogcmVmcmVzaGVkVG9rZW5zLnJlZnJlc2hfdG9rZW4gPz8gdG9rZW4ucmVmcmVzaFRva2VuIC8vIEZhbGwgYmFjayB0byBvbGQgcmVmcmVzaCB0b2tlblxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRva2VuLFxuICAgICAgZXJyb3I6IFwiUmVmcmVzaEFjY2Vzc1Rva2VuRXJyb3JcIlxuICAgIH07XG4gIH1cbn1cbi8vZW5kIHJlZnJlc2ggdG9rZW4gY29kZVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5Hb29nbGUoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVFxuICAgIH0pXG5cbiAgICAvLyBQcm92aWRlcnMuRW1haWwoe1xuICAgIC8vICAgc2VydmVyOiB7XG4gICAgLy8gICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxuICAgIC8vICAgICBwb3J0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUE9SVCxcbiAgICAvLyAgICAgYXV0aDoge1xuICAgIC8vICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxuICAgIC8vICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QQVNTV09SRFxuICAgIC8vICAgICB9XG4gICAgLy8gICB9LFxuICAgIC8vICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTVxuICAgIC8vIH0pLFxuICBdLFxuXG4gIGFkYXB0ZXI6IEZpcmViYXNlQWRhcHRlcihmaXJlc3RvcmUpLFxuICAvLyBEYXRhYmFzZSBvcHRpb25hbC4gTXlTUUwsIE1hcmlhIERCLCBQb3N0Z3JlcyBhbmQgTW9uZ29EQiBhcmUgc3VwcG9ydGVkLlxuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9kYXRhYmFzZXNcbiAgLy9cbiAgLy8gTm90ZXM6XG4gIC8vICogWW91IG11c3QgaW5zdGFsbCBhbiBhcHByb3ByaWF0ZSBub2RlX21vZHVsZSBmb3IgeW91ciBkYXRhYmFzZVxuICAvLyAqIFRoZSBFbWFpbCBwcm92aWRlciByZXF1aXJlcyBhIGRhdGFiYXNlIChPQXV0aCBwcm92aWRlcnMgZG8gbm90KVxuICAvL2RhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG5cbiAgLy8gVGhlIHNlY3JldCBzaG91bGQgYmUgc2V0IHRvIGEgcmVhc29uYWJseSBsb25nIHJhbmRvbSBzdHJpbmcuXG4gIC8vIEl0IGlzIHVzZWQgdG8gc2lnbiBjb29raWVzIGFuZCB0byBzaWduIGFuZCBlbmNyeXB0IEpTT04gV2ViIFRva2VucywgdW5sZXNzXG4gIC8vIGEgc2VwYXJhdGUgc2VjcmV0IGlzIGRlZmluZWQgZXhwbGljaXRseSBmb3IgZW5jcnlwdGluZyB0aGUgSldULlxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcblxuICBzZXNzaW9uOiB7XG4gICAgLy8gVXNlIEpTT04gV2ViIFRva2VucyBmb3Igc2Vzc2lvbiBpbnN0ZWFkIG9mIGRhdGFiYXNlIHNlc3Npb25zLlxuICAgIC8vIFRoaXMgb3B0aW9uIGNhbiBiZSB1c2VkIHdpdGggb3Igd2l0aG91dCBhIGRhdGFiYXNlIGZvciB1c2Vycy9hY2NvdW50cy5cbiAgICAvLyBOb3RlOiBgand0YCBpcyBhdXRvbWF0aWNhbGx5IHNldCB0byBgdHJ1ZWAgaWYgbm8gZGF0YWJhc2UgaXMgc3BlY2lmaWVkLlxuICAgIGp3dDogdHJ1ZVxuICAgIC8vIFNlY29uZHMgLSBIb3cgbG9uZyB1bnRpbCBhbiBpZGxlIHNlc3Npb24gZXhwaXJlcyBhbmQgaXMgbm8gbG9uZ2VyIHZhbGlkLlxuICAgIC8vIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsIC8vIDMwIGRheXNcbiAgICAvLyBTZWNvbmRzIC0gVGhyb3R0bGUgaG93IGZyZXF1ZW50bHkgdG8gd3JpdGUgdG8gZGF0YWJhc2UgdG8gZXh0ZW5kIGEgc2Vzc2lvbi5cbiAgICAvLyBVc2UgaXQgdG8gbGltaXQgd3JpdGUgb3BlcmF0aW9ucy4gU2V0IHRvIDAgdG8gYWx3YXlzIHVwZGF0ZSB0aGUgZGF0YWJhc2UuXG4gICAgLy8gTm90ZTogVGhpcyBvcHRpb24gaXMgaWdub3JlZCBpZiB1c2luZyBKU09OIFdlYiBUb2tlbnNcbiAgICAvLyB1cGRhdGVBZ2U6IDI0ICogNjAgKiA2MCwgLy8gMjQgaG91cnNcbiAgfSxcblxuICAvLyBKU09OIFdlYiB0b2tlbnMgYXJlIG9ubHkgdXNlZCBmb3Igc2Vzc2lvbnMgaWYgdGhlIGBqd3Q6IHRydWVgIHNlc3Npb25cbiAgLy8gb3B0aW9uIGlzIHNldCAtIG9yIGJ5IGRlZmF1bHQgaWYgbm8gZGF0YWJhc2UgaXMgc3BlY2lmaWVkLlxuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zI2p3dFxuICBqd3Q6IHtcbiAgICAvLyBBIHNlY3JldCB0byB1c2UgZm9yIGtleSBnZW5lcmF0aW9uICh5b3Ugc2hvdWxkIHNldCB0aGlzIGV4cGxpY2l0bHkpXG4gICAgLy8gc2VjcmV0OiAnSU5wOEl2ZEl5ZU1jb0dBZ0ZHb0E2MURkQmdsd3dTcW5YSlprZ3o4UFNudycsXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gdXNlIGVuY3J5cHRpb24gKGRlZmF1bHQ6IGZhbHNlKVxuICAgIC8vIGVuY3J5cHRpb246IHRydWUsXG4gICAgLy8gWW91IGNhbiBkZWZpbmUgeW91ciBvd24gZW5jb2RlL2RlY29kZSBmdW5jdGlvbnMgZm9yIHNpZ25pbmcgYW5kIGVuY3J5cHRpb25cbiAgICAvLyBpZiB5b3Ugd2FudCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIuXG4gICAgLy8gZW5jb2RlOiBhc3luYyAoeyBzZWNyZXQsIHRva2VuLCBtYXhBZ2UgfSkgPT4ge30sXG4gICAgLy8gZGVjb2RlOiBhc3luYyAoeyBzZWNyZXQsIHRva2VuLCBtYXhBZ2UgfSkgPT4ge30sXG4gIH0sXG5cbiAgLy8gWW91IGNhbiBkZWZpbmUgY3VzdG9tIHBhZ2VzIHRvIG92ZXJyaWRlIHRoZSBidWlsdC1pbiBvbmVzLiBUaGVzZSB3aWxsIGJlIHJlZ3VsYXIgTmV4dC5qcyBwYWdlc1xuICAvLyBzbyBlbnN1cmUgdGhhdCB0aGV5IGFyZSBwbGFjZWQgb3V0c2lkZSBvZiB0aGUgJy9hcGknIGZvbGRlciwgZS5nLiBzaWduSW46ICcvYXV0aC9teWN1c3RvbS1zaWduaW4nXG4gIC8vIFRoZSByb3V0ZXMgc2hvd24gaGVyZSBhcmUgdGhlIGRlZmF1bHQgVVJMcyB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGEgY3VzdG9tXG4gIC8vIHBhZ2VzIGlzIG5vdCBzcGVjaWZpZWQgZm9yIHRoYXQgcm91dGUuXG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL3BhZ2VzXG4gIHBhZ2VzOiB7XG4gICAgLy8gc2lnbkluOiAnL3NpZ25pbicsICAvLyBEaXNwbGF5cyBzaWduaW4gYnV0dG9uc1xuICAgIC8vICBzaWduT3V0OiAnL2F1dGgvc2lnbm91dCcsIC8vIERpc3BsYXlzIGZvcm0gd2l0aCBzaWduIG91dCBidXR0b25cbiAgICAvLyBlcnJvcjogJy9hdXRoL2Vycm9yJywgLy8gRXJyb3IgY29kZSBwYXNzZWQgaW4gcXVlcnkgc3RyaW5nIGFzID9lcnJvcj1cbiAgICAvLyB2ZXJpZnlSZXF1ZXN0OiAnL2F1dGgvdmVyaWZ5LXJlcXVlc3QnLCAvLyBVc2VkIGZvciBjaGVjayBlbWFpbCBwYWdlXG4gICAgLy8gbmV3VXNlcjogbnVsbCAvLyBJZiBzZXQsIG5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpblxuICB9LFxuXG4gIC8vIENhbGxiYWNrcyBhcmUgYXN5bmNocm9ub3VzIGZ1bmN0aW9ucyB5b3UgY2FuIHVzZSB0byBjb250cm9sIHdoYXQgaGFwcGVuc1xuICAvLyB3aGVuIGFuIGFjdGlvbiBpcyBwZXJmb3JtZWQuXG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL2NhbGxiYWNrc1xuICBjYWxsYmFja3M6IHtcbiAgICAvLyBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkgeyByZXR1cm4gdHJ1ZSB9LFxuICAgIC8vIGFzeW5jIHJlZGlyZWN0KHVybCwgYmFzZVVybCkgeyByZXR1cm4gYmFzZVVybCB9LFxuICAgIC8vIGFzeW5jIHNlc3Npb24oc2Vzc2lvbiwgdXNlcikgeyByZXR1cm4gc2Vzc2lvbiB9LFxuICAgIC8vIGFzeW5jIGp3dCh0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyKSB7IHJldHVybiB0b2tlbiB9XG5cbiAgICAvL29sZCBjb2RlIHN0YXJ0XG4gICAgLy8gand0OiBhc3luYyAodG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcikgPT4ge1xuXG4gICAgLy8gICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcik7XG4gICAgLy8gICByZXR1cm4gdG9rZW47IC8vIC4uLmhlcmVcbiAgICAvLyB9LFxuICAgIC8vIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyLCBzZXNzaW9uVG9rZW4pID0+IHtcbiAgICAvLyAgIHNlc3Npb24udXNlciA9IHVzZXIudXNlcjtcbiAgICAvLyAgIHJldHVybiBzZXNzaW9uO1xuICAgIC8vb2xkIGNvZGUgZW5kXG5cbiAgICAvL25ldyBzdGFydFxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50IH0pIHtcbiAgICAgIC8vIEluaXRpYWwgc2lnbiBpblxuICAgICAgaWYgKGFjY291bnQgJiYgdXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2NvdW50LmFjY2Vzc190b2tlbixcbiAgICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyZXM6IERhdGUubm93KCkgKyBhY2NvdW50LmV4cGlyZXNfaW4gKiAxMDAwLFxuICAgICAgICAgIHJlZnJlc2hUb2tlbjogYWNjb3VudC5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgIHVzZXJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHByZXZpb3VzIHRva2VuIGlmIHRoZSBhY2Nlc3MgdG9rZW4gaGFzIG5vdCBleHBpcmVkIHlldFxuICAgICAgaWYgKERhdGUubm93KCkgPCB0b2tlbi5hY2Nlc3NUb2tlbkV4cGlyZXMpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuXG4gICAgICAvLyBBY2Nlc3MgdG9rZW4gaGFzIGV4cGlyZWQsIHRyeSB0byB1cGRhdGUgaXRcbiAgICAgIHJldHVybiByZWZyZXNoQWNjZXNzVG9rZW4odG9rZW4pO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIHNlc3Npb24udXNlciA9IHRva2VuLnVzZXI7XG4gICAgICBzZXNzaW9uLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XG4gICAgICBzZXNzaW9uLmVycm9yID0gdG9rZW4uZXJyb3I7XG5cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgLy9uZXcgY29kZSBlbmRzXG4gICAgfVxuICB9LFxuXG4gIC8vIEV2ZW50cyBhcmUgdXNlZnVsIGZvciBsb2dnaW5neWFybiBkZXZcbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vZXZlbnRzXG4gIC8vdGhpcyBpcyB0aGUgcGxhY2Ugd2hlcmUgd2UgY2FuIHN0YXJ0IGN1c3RvbSBhcGkgaGFuZGxpbmcgIHdpdGggZXZlbnRzIGxpa2UgY3JlYXRlVXNlcnIoKSAsIHVwZGF0ZVVzZXIoKSwgZ2V0VXNlclxuICBldmVudHM6IHt9LFxuXG4gIC8vIFlvdSBjYW4gc2V0IHRoZSB0aGVtZSB0byAnbGlnaHQnLCAnZGFyaycgb3IgdXNlICdhdXRvJyB0byBkZWZhdWx0IHRvIHRoZVxuICAvLyB3aGF0ZXZlciBwcmVmZXJzLWNvbG9yLXNjaGVtZSBpcyBzZXQgdG8gaW4gdGhlIGJyb3dzZXIuIERlZmF1bHQgaXMgJ2F1dG8nXG4gIHRoZW1lOiBcImRhcmtcIixcblxuICAvLyBFbmFibGUgZGVidWcgbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgaWYgeW91IGFyZSBoYXZpbmcgcHJvYmxlbXNcbiAgZGVidWc6IHRydWVcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5leHQtYXV0aC9maXJlYmFzZS1hZGFwdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==