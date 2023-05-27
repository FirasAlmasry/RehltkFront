"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.requestPasswordReset = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _token = _interopRequireDefault(require("../models/token.model"));
var _crypto = _interopRequireDefault(require("crypto"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _sendEmail = _interopRequireDefault(require("../utils/helpers/sendEmail"));
var requestPasswordReset = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email) {
    var user, token, resetToken, hash, link;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].findOne({
            email: email
          });
        case 2:
          user = _context.sent;
          if (user) {
            _context.next = 5;
            break;
          }
          throw new Error('User does not exist');
        case 5:
          _context.next = 7;
          return _token["default"].findOne({
            userId: user._id
          });
        case 7:
          token = _context.sent;
          if (!token) {
            _context.next = 11;
            break;
          }
          _context.next = 11;
          return token.deleteOne();
        case 11:
          resetToken = _crypto["default"].randomBytes(32).toString('hex');
          _context.next = 14;
          return _bcryptjs["default"].hash(resetToken, 10);
        case 14:
          hash = _context.sent;
          _context.next = 17;
          return new _token["default"]({
            userId: user._id,
            token: hash,
            createdAt: Date.now()
          }).save();
        case 17:
          link = "".concat(process.env.CLIENT_URL, "/auth/new-password?token=").concat(resetToken, "&id=").concat(user._id); // const link = `${process.env.CLIENT_URL}/new-password?token=${resetToken}&id=${user._id}`;
          // const link = `${process.env.CLIENT_URL}/resetPassword?token=${resetToken}&id=${user._id}`;
          (0, _sendEmail["default"])(user.email, 'Password Reset Request', {
            name: user.name,
            link: link
          }, './template/requestResetPassword.handlebars');
          return _context.abrupt("return", link);
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function requestPasswordReset(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.requestPasswordReset = requestPasswordReset;
var resetPassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId, token, password) {
    var passwordResetToken, isValid, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _token["default"].findOne({
            userId: userId
          });
        case 2:
          passwordResetToken = _context2.sent;
          if (passwordResetToken) {
            _context2.next = 5;
            break;
          }
          throw new Error('Invalid or expired password reset token');
        case 5:
          _context2.next = 7;
          return _bcryptjs["default"].compare(token, passwordResetToken.token);
        case 7:
          isValid = _context2.sent;
          if (isValid) {
            _context2.next = 10;
            break;
          }
          throw new Error('Invalid or expired password reset token');
        case 10:
          _context2.next = 12;
          return _user["default"].findById({
            _id: userId
          });
        case 12:
          user = _context2.sent;
          user.password = password;
          _context2.next = 16;
          return user.save();
        case 16:
          (0, _sendEmail["default"])(user.email, 'Password Reset Successfully', {
            name: user.name
          }, './template/resetPassword.handlebars');
          _context2.next = 19;
          return passwordResetToken.deleteOne();
        case 19:
          return _context2.abrupt("return", true);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function resetPassword(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.resetPassword = resetPassword;