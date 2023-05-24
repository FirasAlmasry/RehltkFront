"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.searchUsers = exports.isUserRegisterDataValide = exports.isNewUser = exports.isLogInDataValide = exports.isCreateUserDataValide = exports.getUserById = exports.getAllUsers = exports.deleteUser = exports.createUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _user2 = require("../validators/user.validator");
var _errorHelper = _interopRequireDefault(require("../utils/helpers/errorHelper"));
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var pageOptions, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          pageOptions = {
            page: parseInt(req.query.page, 10) || 1,
            limit: parseInt(req.query.limit, 10) || 10,
            customLabels: {
              docs: "users"
            }
          };
          _context.next = 3;
          return _user["default"].paginate({}, pageOptions);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllUsers(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllUsers = getAllUsers;
var createUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _user["default"].create(body);
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createUser = createUser;
var updateUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _user["default"].findByIdAndUpdate({
            _id: _id
          }, body, {
            "new": true
          });
        case 2:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function updateUser(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateUser = updateUser;
var deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _user["default"].findByIdAndDelete(id);
        case 2:
          return _context4.abrupt("return", "");
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteUser(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteUser = deleteUser;
var getUserById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _user["default"].findById(id);
        case 2:
          data = _context5.sent;
          if (data) {
            _context5.next = 5;
            break;
          }
          throw new _errorHelper["default"](_httpStatusCodes["default"].NOT_FOUND, "User not found");
        case 5:
          return _context5.abrupt("return", data);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getUserById(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getUserById = getUserById;
var searchUsers = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req) {
    var pageOptions;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          pageOptions = {
            page: parseInt(req.query.page, 10) || 1,
            limit: parseInt(req.query.limit, 10) || 10,
            customLabels: {
              docs: "users"
            }
          };
          _context6.next = 3;
          return _user["default"].paginate({
            name: {
              $regex: new RegExp(req.query.query, "i")
            }
          }, pageOptions);
        case 3:
          return _context6.abrupt("return", _context6.sent);
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function searchUsers(_x7) {
    return _ref6.apply(this, arguments);
  };
}();
exports.searchUsers = searchUsers;
var isCreateUserDataValide = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(data) {
    var _newUserValidator, error, value;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _newUserValidator = (0, _user2.newUserValidator)(data), error = _newUserValidator.error, value = _newUserValidator.value;
          if (!error) {
            _context7.next = 3;
            break;
          }
          throw new _errorHelper["default"](400, error.details[0].message);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function isCreateUserDataValide(_x8) {
    return _ref7.apply(this, arguments);
  };
}();
exports.isCreateUserDataValide = isCreateUserDataValide;
var isNewUser = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(email) {
    var user;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return _user["default"].findOne({
            email: email
          });
        case 2:
          user = _context8.sent;
          if (!user) {
            _context8.next = 5;
            break;
          }
          throw new _errorHelper["default"](400, "user already exist!");
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function isNewUser(_x9) {
    return _ref8.apply(this, arguments);
  };
}();
exports.isNewUser = isNewUser;
var isUserRegisterDataValide = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(data) {
    var _userRegisterValidati, error, value;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _userRegisterValidati = userRegisterValidation(data), error = _userRegisterValidati.error, value = _userRegisterValidati.value;
          if (!error) {
            _context9.next = 3;
            break;
          }
          throw new _errorHelper["default"](400, error.details[0].message);
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function isUserRegisterDataValide(_x10) {
    return _ref9.apply(this, arguments);
  };
}();
exports.isUserRegisterDataValide = isUserRegisterDataValide;
var isLogInDataValide = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(data) {
    var _userLogInValidation, error, value;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _userLogInValidation = (0, _user2.userLogInValidation)(data), error = _userLogInValidation.error, value = _userLogInValidation.value;
          if (!error) {
            _context10.next = 3;
            break;
          }
          throw new _errorHelper["default"](400, error.details[0].message);
        case 3:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function isLogInDataValide(_x11) {
    return _ref10.apply(this, arguments);
  };
}();
exports.isLogInDataValide = isLogInDataValide;