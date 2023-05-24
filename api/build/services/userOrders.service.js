"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserOrders = exports.searchUserOrderss = exports.isCreateUserOrdersDataValide = exports.getUserOrdersById = exports.getAllUserOrderss = exports.deleteUserOrders = exports.createUserOrders = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _userOrders = _interopRequireDefault(require("../models/userOrders.model"));
var _userOrders2 = require("../validators/userOrders.validator");
var _errorHelper = _interopRequireDefault(require("../utils/helpers/errorHelper"));
var getAllUserOrderss = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var pageOptions, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          pageOptions = {
            page: parseInt(req.query.page, 10) || 1,
            limit: parseInt(req.query.limit, 10) || 10,
            customLabels: {
              docs: "userOrders"
            }
          };
          _context.next = 3;
          return _userOrders["default"].paginate({}, pageOptions);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllUserOrderss(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllUserOrderss = getAllUserOrderss;
var createUserOrders = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _userOrders["default"].create(body);
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createUserOrders(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createUserOrders = createUserOrders;
var updateUserOrders = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _userOrders["default"].findByIdAndUpdate({
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
  return function updateUserOrders(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateUserOrders = updateUserOrders;
var deleteUserOrders = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _userOrders["default"].findByIdAndDelete(id);
        case 2:
          return _context4.abrupt("return", "");
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteUserOrders(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteUserOrders = deleteUserOrders;
var getUserOrdersById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _userOrders["default"].findById(id);
        case 2:
          data = _context5.sent;
          if (data) {
            _context5.next = 5;
            break;
          }
          throw new _errorHelper["default"](_httpStatusCodes["default"].NOT_FOUND, "User Orders not found");
        case 5:
          return _context5.abrupt("return", data);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getUserOrdersById(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getUserOrdersById = getUserOrdersById;
var searchUserOrderss = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req) {
    var pageOptions;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          pageOptions = {
            page: parseInt(req.query.page, 10) || 1,
            limit: parseInt(req.query.limit, 10) || 10,
            customLabels: {
              docs: "userOrders"
            }
          };
          _context6.next = 3;
          return _userOrders["default"].paginate({
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
  return function searchUserOrderss(_x7) {
    return _ref6.apply(this, arguments);
  };
}();
exports.searchUserOrderss = searchUserOrderss;
var isCreateUserOrdersDataValide = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(data) {
    var _newUserOrdersValidat, error, value;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _newUserOrdersValidat = (0, _userOrders2.newUserOrdersValidator)(data), error = _newUserOrdersValidat.error, value = _newUserOrdersValidat.value;
          if (!error) {
            _context7.next = 3;
            break;
          }
          throw new _errorHelper["default"](_httpStatusCodes["default"].BAD_REQUEST, error.details[0].message);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function isCreateUserOrdersDataValide(_x8) {
    return _ref7.apply(this, arguments);
  };
}();
exports.isCreateUserOrdersDataValide = isCreateUserOrdersDataValide;