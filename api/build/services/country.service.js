"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uplodeHelper = exports.updateCountry = exports.searchCountrys = exports.isCreateCountryDataValide = exports.getCountryById = exports.getAllCountrys = exports.deleteCountryToursToArray = exports.deleteCountry = exports.createCountry = exports.addCountryToursToArray = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _country = _interopRequireDefault(require("../models/country.model"));
var _country2 = require("../validators/country.validator");
var _errorHelper = _interopRequireDefault(require("../utils/helpers/errorHelper"));
var _cloudinary = _interopRequireDefault(require("../config/cloudinary"));
var getAllCountrys = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var pageOptions, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          pageOptions = {
            page: parseInt(req.query.page, 10) || 1,
            limit: parseInt(req.query.limit, 10) || 10,
            customLabels: {
              docs: "countrys"
            }
          };
          _context.next = 3;
          return _country["default"].paginate({}, pageOptions);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllCountrys(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllCountrys = getAllCountrys;
var createCountry = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _country["default"].create(body);
        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createCountry(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createCountry = createCountry;
var updateCountry = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _country["default"].findByIdAndUpdate({
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
  return function updateCountry(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateCountry = updateCountry;
var addCountryToursToArray = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(countryId, toursId) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _country["default"].findOneAndUpdate({
            _id: countryId
          }, {
            $push: {
              tours: toursId
            }
          });
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function addCountryToursToArray(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.addCountryToursToArray = addCountryToursToArray;
var deleteCountryToursToArray = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(countryId, toursId) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _country["default"].findOneAndUpdate({
            _id: countryId
          }, {
            $pull: {
              tours: toursId
            }
          });
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteCountryToursToArray(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteCountryToursToArray = deleteCountryToursToArray;
var deleteCountry = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _country["default"].findByIdAndDelete(id);
        case 2:
          return _context6.abrupt("return", "");
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function deleteCountry(_x9) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteCountry = deleteCountry;
var getCountryById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
    var data;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return _country["default"].findById(id).populate("tours");
        case 2:
          data = _context7.sent;
          if (data) {
            _context7.next = 5;
            break;
          }
          throw new _errorHelper["default"](_httpStatusCodes["default"].NOT_FOUND, "Country not found");
        case 5:
          return _context7.abrupt("return", data);
        case 6:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getCountryById(_x10) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getCountryById = getCountryById;
var searchCountrys = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req) {
    var pageOptions;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          pageOptions = {
            page: parseInt(req.query.page, 10) || 1,
            limit: parseInt(req.query.limit, 10) || 10,
            customLabels: {
              docs: "countrys"
            }
          };
          _context8.next = 3;
          return _country["default"].paginate({
            name: {
              $regex: new RegExp(req.query.query, "i")
            }
          }, pageOptions);
        case 3:
          return _context8.abrupt("return", _context8.sent);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function searchCountrys(_x11) {
    return _ref8.apply(this, arguments);
  };
}();
exports.searchCountrys = searchCountrys;
var isCreateCountryDataValide = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(data) {
    var _newCountryValidator, error, value;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _newCountryValidator = (0, _country2.newCountryValidator)(data), error = _newCountryValidator.error, value = _newCountryValidator.value;
          if (!error) {
            _context9.next = 3;
            break;
          }
          throw new _errorHelper["default"](_httpStatusCodes["default"].BAD_REQUEST, error.details[0].message);
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function isCreateCountryDataValide(_x12) {
    return _ref9.apply(this, arguments);
  };
}();
exports.isCreateCountryDataValide = isCreateCountryDataValide;
var uplodeHelper = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, cloudinary_id) {
    var _req$file;
    var result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          if (!(((_req$file = req.file) === null || _req$file === void 0 ? void 0 : _req$file.path) !== undefined)) {
            _context10.next = 9;
            break;
          }
          if (!cloudinary_id) {
            _context10.next = 4;
            break;
          }
          _context10.next = 4;
          return _cloudinary["default"].uploader.destroy(cloudinary_id);
        case 4:
          _context10.next = 6;
          return _cloudinary["default"].uploader.upload(req.file.path, {
            folder: "Country"
          });
        case 6:
          result = _context10.sent;
          req.body.imageUrl = result.secure_url;
          req.body.cloudinary_id = result.public_id;
        case 9:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function uplodeHelper(_x13, _x14) {
    return _ref10.apply(this, arguments);
  };
}();
exports.uplodeHelper = uplodeHelper;