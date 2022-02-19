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






const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId
};
const firestore = ((_firebase$apps$ = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.apps[0]) !== null && _firebase$apps$ !== void 0 ? _firebase$apps$ : firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(firebaseConfig)).firestore();
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
    jwt: async (token, user, account, profile, isNewUser) => {
      //  "user" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      user && (token.user = user);
      return token; // ...here
    },
    session: async (session, user, sessionToken) => {
      //  "session" is current session object
      //  below we set "user" param of "session" to value received from "jwt" callback
      session.user = user.user;
      return session;
    }
  },
  // Events are useful for loggingyarn dev
  // https://next-auth.js.org/configuration/events
  //this is the place where we can start custom api handling  with events like createUserr() , updateUser(), getUser
  events: {},
  // You can set the theme to 'light', 'dark' or use 'auto' to default to the
  // whatever prefers-color-scheme is set to in the browser. Default is 'auto'
  theme: 'dark',
  // Enable debug messages in the console if you are having problems
  debug: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmV4dC1hdXRoL2ZpcmViYXNlLWFkYXB0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiRklSRUJBU0VfYXBpS2V5IiwiYXV0aERvbWFpbiIsIkZJUkVCQVNFX2F1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJGSVJFQkFTRV9wcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwiRklSRUJBU0Vfc3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiRklSRUJBU0VfbWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZJUkVCQVNFX2FwcElkIiwibWVhc3VyZW1lbnRJZCIsIkZJUkVCQVNFX21lYXN1cmVtZW50SWQiLCJmaXJlc3RvcmUiLCJmaXJlYmFzZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiTmV4dEF1dGgiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiRmlyZWJhc2VBZGFwdGVyIiwic2VjcmV0IiwiU0VDUkVUIiwic2Vzc2lvbiIsImp3dCIsInBhZ2VzIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJpc05ld1VzZXIiLCJzZXNzaW9uVG9r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QyxJQUFkLEVBQW9CQyxPQUFwQixFQUE2QkMsT0FBN0IsRUFBc0NDLFNBQXRDLEtBQW9EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0FILFVBQUksS0FBS0QsS0FBSyxDQUFDQyxJQUFOLEdBQWFBLElBQWxCLENBQUo7QUFDQSxhQUFPRCxLQUFQLENBTnVELENBTXhDO0FBQ2QsS0FaTTtBQWFUSixXQUFPLEVBQUUsT0FBT0EsT0FBUCxFQUFnQkssSUFBaEIsRUFBc0JJLFlBQXRCLEtBQXVDO0FBQzlDO0FBQ0E7QUFDQVQsYUFBTyxDQUFDSyxJQUFSLEdBQWVBLElBQUksQ0FBQ0EsSUFBcEI7QUFDQSxhQUFPTCxPQUFQO0FBQ0E7QUFsQk8sR0FsRlc7QUF1R3RCO0FBQ0E7QUFDQTtBQUNBVSxRQUFNLEVBQUUsRUExR2M7QUE0R3RCO0FBQ0E7QUFDQUMsT0FBSyxFQUFFLE1BOUdlO0FBZ0h0QjtBQUNBQyxPQUFLLEVBQUU7QUFqSGUsQ0FBRCxDQUF2QixFOzs7Ozs7Ozs7OztBQ3JCQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzXCIpO1xuIiwiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCJcclxuaW1wb3J0IHsgRmlyZWJhc2VBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvZmlyZWJhc2UtYWRhcHRlclwiXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCJcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiAgcHJvY2Vzcy5lbnYuRklSRUJBU0VfYXBpS2V5LFxyXG4gICAgYXV0aERvbWFpbjogIHByb2Nlc3MuZW52LkZJUkVCQVNFX2F1dGhEb21haW4sXHJcbiAgICBwcm9qZWN0SWQ6ICBwcm9jZXNzLmVudi5GSVJFQkFTRV9wcm9qZWN0SWQsXHJcbiAgICBzdG9yYWdlQnVja2V0OiAgcHJvY2Vzcy5lbnYuRklSRUJBU0Vfc3RvcmFnZUJ1Y2tldCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAgcHJvY2Vzcy5lbnYuRklSRUJBU0VfbWVzc2FnaW5nU2VuZGVySWQsXHJcbiAgICBhcHBJZDogIHByb2Nlc3MuZW52LkZJUkVCQVNFX2FwcElkLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogIHByb2Nlc3MuZW52LkZJUkVCQVNFX21lYXN1cmVtZW50SWRcclxufVxyXG5cclxuY29uc3QgZmlyZXN0b3JlID0gKFxyXG4gIGZpcmViYXNlLmFwcHNbMF0gPz8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcclxuKS5maXJlc3RvcmUoKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFxyXG4gICBQcm92aWRlcnMuR29vZ2xlKHtcclxuICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXHJcbiAgfSksXHJcbiAgICBcclxuICAgIC8vIFByb3ZpZGVycy5FbWFpbCh7XHJcbiAgICAvLyAgIHNlcnZlcjoge1xyXG4gICAgLy8gICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxyXG4gICAgLy8gICAgIHBvcnQ6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QT1JULFxyXG4gICAgLy8gICAgIGF1dGg6IHtcclxuICAgIC8vICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxyXG4gICAgLy8gICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BBU1NXT1JEXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NXHJcbiAgICAvLyB9KSxcclxuICBdLFxyXG4gIFxyXG4gIGFkYXB0ZXI6IEZpcmViYXNlQWRhcHRlcihmaXJlc3RvcmUpLFxyXG4gIC8vIERhdGFiYXNlIG9wdGlvbmFsLiBNeVNRTCwgTWFyaWEgREIsIFBvc3RncmVzIGFuZCBNb25nb0RCIGFyZSBzdXBwb3J0ZWQuXHJcbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vZGF0YWJhc2VzXHJcbiAgLy9cclxuICAvLyBOb3RlczpcclxuICAvLyAqIFlvdSBtdXN0IGluc3RhbGwgYW4gYXBwcm9wcmlhdGUgbm9kZV9tb2R1bGUgZm9yIHlvdXIgZGF0YWJhc2VcclxuICAvLyAqIFRoZSBFbWFpbCBwcm92aWRlciByZXF1aXJlcyBhIGRhdGFiYXNlIChPQXV0aCBwcm92aWRlcnMgZG8gbm90KVxyXG4gIC8vZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcclxuXHJcbiAgLy8gVGhlIHNlY3JldCBzaG91bGQgYmUgc2V0IHRvIGEgcmVhc29uYWJseSBsb25nIHJhbmRvbSBzdHJpbmcuXHJcbiAgLy8gSXQgaXMgdXNlZCB0byBzaWduIGNvb2tpZXMgYW5kIHRvIHNpZ24gYW5kIGVuY3J5cHQgSlNPTiBXZWIgVG9rZW5zLCB1bmxlc3NcclxuICAvLyBhIHNlcGFyYXRlIHNlY3JldCBpcyBkZWZpbmVkIGV4cGxpY2l0bHkgZm9yIGVuY3J5cHRpbmcgdGhlIEpXVC5cclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcclxuXHJcblxyXG5cclxuICBzZXNzaW9uOiB7XHJcbiAgICAvLyBVc2UgSlNPTiBXZWIgVG9rZW5zIGZvciBzZXNzaW9uIGluc3RlYWQgb2YgZGF0YWJhc2Ugc2Vzc2lvbnMuXHJcbiAgICAvLyBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB3aXRoIG9yIHdpdGhvdXQgYSBkYXRhYmFzZSBmb3IgdXNlcnMvYWNjb3VudHMuXHJcbiAgICAvLyBOb3RlOiBgand0YCBpcyBhdXRvbWF0aWNhbGx5IHNldCB0byBgdHJ1ZWAgaWYgbm8gZGF0YWJhc2UgaXMgc3BlY2lmaWVkLlxyXG4gICAgand0OiB0cnVlLFxyXG5cclxuICAgIC8vIFNlY29uZHMgLSBIb3cgbG9uZyB1bnRpbCBhbiBpZGxlIHNlc3Npb24gZXhwaXJlcyBhbmQgaXMgbm8gbG9uZ2VyIHZhbGlkLlxyXG4gICAgLy8gbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG5cclxuICAgIC8vIFNlY29uZHMgLSBUaHJvdHRsZSBob3cgZnJlcXVlbnRseSB0byB3cml0ZSB0byBkYXRhYmFzZSB0byBleHRlbmQgYSBzZXNzaW9uLlxyXG4gICAgLy8gVXNlIGl0IHRvIGxpbWl0IHdyaXRlIG9wZXJhdGlvbnMuIFNldCB0byAwIHRvIGFsd2F5cyB1cGRhdGUgdGhlIGRhdGFiYXNlLlxyXG4gICAgLy8gTm90ZTogVGhpcyBvcHRpb24gaXMgaWdub3JlZCBpZiB1c2luZyBKU09OIFdlYiBUb2tlbnNcclxuICAgIC8vIHVwZGF0ZUFnZTogMjQgKiA2MCAqIDYwLCAvLyAyNCBob3Vyc1xyXG4gIH0sXHJcblxyXG4gIC8vIEpTT04gV2ViIHRva2VucyBhcmUgb25seSB1c2VkIGZvciBzZXNzaW9ucyBpZiB0aGUgYGp3dDogdHJ1ZWAgc2Vzc2lvblxyXG4gIC8vIG9wdGlvbiBpcyBzZXQgLSBvciBieSBkZWZhdWx0IGlmIG5vIGRhdGFiYXNlIGlzIHNwZWNpZmllZC5cclxuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zI2p3dFxyXG4gIGp3dDoge1xyXG4gICAgLy8gQSBzZWNyZXQgdG8gdXNlIGZvciBrZXkgZ2VuZXJhdGlvbiAoeW91IHNob3VsZCBzZXQgdGhpcyBleHBsaWNpdGx5KVxyXG4gICAgLy8gc2VjcmV0OiAnSU5wOEl2ZEl5ZU1jb0dBZ0ZHb0E2MURkQmdsd3dTcW5YSlprZ3o4UFNudycsXHJcbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byB1c2UgZW5jcnlwdGlvbiAoZGVmYXVsdDogZmFsc2UpXHJcbiAgICAvLyBlbmNyeXB0aW9uOiB0cnVlLFxyXG4gICAgLy8gWW91IGNhbiBkZWZpbmUgeW91ciBvd24gZW5jb2RlL2RlY29kZSBmdW5jdGlvbnMgZm9yIHNpZ25pbmcgYW5kIGVuY3J5cHRpb25cclxuICAgIC8vIGlmIHlvdSB3YW50IHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGJlaGF2aW91ci5cclxuICAgIC8vIGVuY29kZTogYXN5bmMgKHsgc2VjcmV0LCB0b2tlbiwgbWF4QWdlIH0pID0+IHt9LFxyXG4gICAgLy8gZGVjb2RlOiBhc3luYyAoeyBzZWNyZXQsIHRva2VuLCBtYXhBZ2UgfSkgPT4ge30sXHJcbiAgfSxcclxuXHJcbiAgLy8gWW91IGNhbiBkZWZpbmUgY3VzdG9tIHBhZ2VzIHRvIG92ZXJyaWRlIHRoZSBidWlsdC1pbiBvbmVzLiBUaGVzZSB3aWxsIGJlIHJlZ3VsYXIgTmV4dC5qcyBwYWdlc1xyXG4gIC8vIHNvIGVuc3VyZSB0aGF0IHRoZXkgYXJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSAnL2FwaScgZm9sZGVyLCBlLmcuIHNpZ25JbjogJy9hdXRoL215Y3VzdG9tLXNpZ25pbidcclxuICAvLyBUaGUgcm91dGVzIHNob3duIGhlcmUgYXJlIHRoZSBkZWZhdWx0IFVSTHMgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBhIGN1c3RvbVxyXG4gIC8vIHBhZ2VzIGlzIG5vdCBzcGVjaWZpZWQgZm9yIHRoYXQgcm91dGUuXHJcbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vcGFnZXNcclxuICBwYWdlczoge1xyXG4gICAgLy8gc2lnbkluOiAnL3NpZ25pbicsICAvLyBEaXNwbGF5cyBzaWduaW4gYnV0dG9uc1xyXG4gICAgLy8gIHNpZ25PdXQ6ICcvYXV0aC9zaWdub3V0JywgLy8gRGlzcGxheXMgZm9ybSB3aXRoIHNpZ24gb3V0IGJ1dHRvblxyXG4gICAgLy8gZXJyb3I6ICcvYXV0aC9lcnJvcicsIC8vIEVycm9yIGNvZGUgcGFzc2VkIGluIHF1ZXJ5IHN0cmluZyBhcyA/ZXJyb3I9XHJcbiAgICAvLyB2ZXJpZnlSZXF1ZXN0OiAnL2F1dGgvdmVyaWZ5LXJlcXVlc3QnLCAvLyBVc2VkIGZvciBjaGVjayBlbWFpbCBwYWdlXHJcbiAgICAvLyBuZXdVc2VyOiBudWxsIC8vIElmIHNldCwgbmV3IHVzZXJzIHdpbGwgYmUgZGlyZWN0ZWQgaGVyZSBvbiBmaXJzdCBzaWduIGluXHJcbiAgfSxcclxuXHJcbiAgLy8gQ2FsbGJhY2tzIGFyZSBhc3luY2hyb25vdXMgZnVuY3Rpb25zIHlvdSBjYW4gdXNlIHRvIGNvbnRyb2wgd2hhdCBoYXBwZW5zXHJcbiAgLy8gd2hlbiBhbiBhY3Rpb24gaXMgcGVyZm9ybWVkLlxyXG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL2NhbGxiYWNrc1xyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgLy8gYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHsgcmV0dXJuIHRydWUgfSxcclxuICAgIC8vIGFzeW5jIHJlZGlyZWN0KHVybCwgYmFzZVVybCkgeyByZXR1cm4gYmFzZVVybCB9LFxyXG4gICAgLy8gYXN5bmMgc2Vzc2lvbihzZXNzaW9uLCB1c2VyKSB7IHJldHVybiBzZXNzaW9uIH0sXHJcbiAgICAvLyBhc3luYyBqd3QodG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcikgeyByZXR1cm4gdG9rZW4gfVxyXG4gICAgand0OiBhc3luYyAodG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcikgPT4ge1xyXG4gICAgICAvLyAgXCJ1c2VyXCIgcGFyYW1ldGVyIGlzIHRoZSBvYmplY3QgcmVjZWl2ZWQgZnJvbSBcImF1dGhvcml6ZVwiXHJcbiAgICAgIC8vICBcInRva2VuXCIgaXMgYmVpbmcgc2VuZCBiZWxvdyB0byBcInNlc3Npb25cIiBjYWxsYmFjay4uLlxyXG4gICAgICAvLyAgLi4uc28gd2Ugc2V0IFwidXNlclwiIHBhcmFtIG9mIFwidG9rZW5cIiB0byBvYmplY3QgZnJvbSBcImF1dGhvcml6ZVwiLi4uXHJcbiAgICAgIC8vICAuLi5hbmQgcmV0dXJuIGl0Li4uXHJcbiAgICAgIHVzZXIgJiYgKHRva2VuLnVzZXIgPSB1c2VyKTtcclxuICAgICAgcmV0dXJuIHRva2VuICAgLy8gLi4uaGVyZVxyXG4gICAgICB9LFxyXG4gICAgc2Vzc2lvbjogYXN5bmMgKHNlc3Npb24sIHVzZXIsIHNlc3Npb25Ub2tlbikgPT4ge1xyXG4gICAgICAvLyAgXCJzZXNzaW9uXCIgaXMgY3VycmVudCBzZXNzaW9uIG9iamVjdFxyXG4gICAgICAvLyAgYmVsb3cgd2Ugc2V0IFwidXNlclwiIHBhcmFtIG9mIFwic2Vzc2lvblwiIHRvIHZhbHVlIHJlY2VpdmVkIGZyb20gXCJqd3RcIiBjYWxsYmFja1xyXG4gICAgICBzZXNzaW9uLnVzZXIgPSB1c2VyLnVzZXI7XHJcbiAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIEV2ZW50cyBhcmUgdXNlZnVsIGZvciBsb2dnaW5neWFybiBkZXZcclxuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9ldmVudHNcclxuICAvL3RoaXMgaXMgdGhlIHBsYWNlIHdoZXJlIHdlIGNhbiBzdGFydCBjdXN0b20gYXBpIGhhbmRsaW5nICB3aXRoIGV2ZW50cyBsaWtlIGNyZWF0ZVVzZXJyKCkgLCB1cGRhdGVVc2VyKCksIGdldFVzZXJcclxuICBldmVudHM6IHt9LFxyXG5cclxuICAvLyBZb3UgY2FuIHNldCB0aGUgdGhlbWUgdG8gJ2xpZ2h0JywgJ2RhcmsnIG9yIHVzZSAnYXV0bycgdG8gZGVmYXVsdCB0byB0aGVcclxuICAvLyB3aGF0ZXZlciBwcmVmZXJzLWNvbG9yLXNjaGVtZSBpcyBzZXQgdG8gaW4gdGhlIGJyb3dzZXIuIERlZmF1bHQgaXMgJ2F1dG8nXHJcbiAgdGhlbWU6ICdkYXJrJyxcclxuXHJcbiAgLy8gRW5hYmxlIGRlYnVnIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIGlmIHlvdSBhcmUgaGF2aW5nIHByb2JsZW1zXHJcbiAgZGVidWc6IGZhbHNlLFxyXG59KVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmV4dC1hdXRoL2ZpcmViYXNlLWFkYXB0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9