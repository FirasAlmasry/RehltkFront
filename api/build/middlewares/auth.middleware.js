"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuth = exports.haveAccses = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _errorHelper = _interopRequireDefault(require("../utils/helpers/errorHelper"));
/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

var isAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          bearerToken = req.header("Authorization");
          if (bearerToken) {
            _context.next = 4;
            break;
          }
          throw new _errorHelper["default"](_httpStatusCodes["default"].BAD_REQUEST, "Authorization token is required");
        case 4:
          bearerToken = bearerToken.split(" ")[1];
          _context.next = 7;
          return _jsonwebtoken["default"].verify(bearerToken, process.env.JWT_SECRIT_KEY);
        case 7:
          user = _context.sent;
          req.user = user;
          req.token = bearerToken;
          next();
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function isAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.isAuth = isAuth;
var chack = function chack(roles, user) {
  roles.forEach(function (role) {
    if (user.roles.includes(role)) {
      console.log("authenticated");
      // if authenticated
      return next();
    }
  });
};
var haveAccses = function haveAccses(roles) {
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var _haveAccses;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            try {
              _haveAccses = roles.some(function (r) {
                return req.user.roles.includes(r);
              });
              _haveAccses ? next() : res.status(401).json("Sorry you do not have access to this route");
            } catch (error) {
              next(error);
            }
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};
exports.haveAccses = haveAccses;