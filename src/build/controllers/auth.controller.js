"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordRequest = exports.resetPassword = exports.register = exports.login = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var UserService = _interopRequireWildcard(require("../services/user.service"));
var AuthService = _interopRequireWildcard(require("../services/auth.service"));
var _user2 = _interopRequireDefault(require("../models/user.model"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _errorHelper = _interopRequireDefault(require("../utils/helpers/errorHelper"));
var _excluded = ["password"],
  _excluded2 = ["password"]; // import HttpStatus from 'http-status-codes';
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var userInfo, _userInfo$_doc, password, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return UserService.isNewUser(req.body.email);
        case 3:
          _context.next = 5;
          return UserService.createUser(req.body);
        case 5:
          userInfo = _context.sent;
          _userInfo$_doc = userInfo._doc, password = _userInfo$_doc.password, user = (0, _objectWithoutProperties2["default"])(_userInfo$_doc, _excluded);
          res.json({
            user: user
          });
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function register(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.register = register;
var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user, isMatch, token, _user$_doc, password, userInfo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return UserService.isLogInDataValide(req.body);
        case 3:
          _context2.next = 5;
          return _user2["default"].findOne({
            email: req.body.email
          }).select("+password");
        case 5:
          user = _context2.sent;
          if (user) {
            _context2.next = 8;
            break;
          }
          throw new _errorHelper["default"](400, "Email or password do not match");
        case 8:
          _context2.next = 10;
          return user.comparePassword(req.body.password);
        case 10:
          isMatch = _context2.sent;
          if (isMatch) {
            _context2.next = 13;
            break;
          }
          throw new _errorHelper["default"](400, "Email or password do not match");
        case 13:
          token = _jsonwebtoken["default"].sign({
            id: user._id,
            roles: user.roles
          }, process.env.JWT_SECRIT_KEY);
          _user$_doc = user._doc, password = _user$_doc.password, userInfo = (0, _objectWithoutProperties2["default"])(_user$_doc, _excluded2);
          return _context2.abrupt("return", res.status(200).json(_objectSpread({
            token: token
          }, userInfo)));
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function login(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.login = login;
var resetPasswordRequest = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var requestPasswordResetService;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return AuthService.requestPasswordReset(req.body.email);
        case 3:
          requestPasswordResetService = _context3.sent;
          return _context3.abrupt("return", res.json(requestPasswordResetService));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function resetPasswordRequest(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.resetPasswordRequest = resetPasswordRequest;
var resetPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _resetPassword;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return AuthService.resetPassword(req.body.userId, req.body.token, req.body.password);
        case 3:
          _resetPassword = _context4.sent;
          return _context4.abrupt("return", res.json({
            resetPassword: _resetPassword
          }));
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function resetPassword(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
exports.resetPassword = resetPassword;