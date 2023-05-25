"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCountryTours = exports.searchCountryTours = exports.getCountryToursById = exports.getAllCountryTours = exports.deleteCountryTours = exports.createCountryTours = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var CountryToursService = _interopRequireWildcard(require("../services/countryTours.service"));
var _country = require("../services/country.service");
var _cloudinary = _interopRequireDefault(require("../config/cloudinary"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Controller to get all countryTourss available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
var getAllCountryTours = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return CountryToursService.getAllCountryTourss(req);
        case 3:
          _data = _context.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: _data,
            message: "All countryTourss fetched successfully"
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllCountryTours(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Controller to get a single countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.getAllCountryTours = getAllCountryTours;
var getCountryToursById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _data2;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return CountryToursService.getCountryToursById(req.params.id);
        case 3:
          _data2 = _context2.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: _data2,
            message: "CountryTours fetched successfully"
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getCountryToursById(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Controller to create a new countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.getCountryToursById = getCountryToursById;
var createCountryTours = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$file, result, _data3;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return CountryToursService.isCreateCountryToursDataValide(req.body);
        case 3:
          if (!(((_req$file = req.file) === null || _req$file === void 0 ? void 0 : _req$file.path) !== undefined)) {
            _context3.next = 9;
            break;
          }
          _context3.next = 6;
          return _cloudinary["default"].uploader.upload(req.file.path, {
            folder: "Tours"
          });
        case 6:
          result = _context3.sent;
          req.body.imageUrl = result.secure_url;
          req.body.cloudinary_id = result.public_id;
        case 9:
          _context3.next = 11;
          return CountryToursService.createCountryTours(req.body);
        case 11:
          _data3 = _context3.sent;
          _context3.next = 14;
          return (0, _country.addCountryToursToArray)(_data3.country, _data3._id);
        case 14:
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: _data3,
            message: "Country Tours created successfully"
          });
          _context3.next = 20;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 17]]);
  }));
  return function createCountryTours(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Controller to update a countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.createCountryTours = createCountryTours;
var updateCountryTours = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _req$file2, excistCountryTours, _data4;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return CountryToursService.isCreateCountryToursDataValide(req.body);
        case 3:
          _context4.next = 5;
          return CountryToursService.getCountryToursById(req.params.id);
        case 5:
          excistCountryTours = _context4.sent;
          if (!(((_req$file2 = req.file) === null || _req$file2 === void 0 ? void 0 : _req$file2.path) !== undefined)) {
            _context4.next = 9;
            break;
          }
          _context4.next = 9;
          return CountryToursService.uplodeHelper(req, excistCountryTours.cloudinary_id);
        case 9:
          _context4.next = 11;
          return CountryToursService.updateCountryTours(req.params.id, req.body);
        case 11:
          _data4 = _context4.sent;
          res.status(_httpStatusCodes["default"].ACCEPTED).json({
            code: _httpStatusCodes["default"].ACCEPTED,
            data: _data4,
            message: "CountryTours updated successfully"
          });
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return function updateCountryTours(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Controller to delete a countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.updateCountryTours = updateCountryTours;
var deleteCountryTours = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var countryTours;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return CountryToursService.getCountryToursById(req.params.id);
        case 3:
          _context5.next = 5;
          return CountryToursService.deleteCountryTours(req.params.id);
        case 5:
          countryTours = _context5.sent;
          if (!countryTours.cloudinary_id) {
            _context5.next = 9;
            break;
          }
          _context5.next = 9;
          return _cloudinary["default"].uploader.destroy(countryTours.cloudinary_id);
        case 9:
          _context5.next = 11;
          return (0, _country.deleteCountryToursToArray)(data.country, data._id);
        case 11:
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: [],
            message: "CountryTours deleted successfully"
          });
          _context5.next = 17;
          break;
        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 14]]);
  }));
  return function deleteCountryTours(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * Controller to delete a countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.deleteCountryTours = deleteCountryTours;
var searchCountryTours = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _data5;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return CountryToursService.searchCountryTourss(req);
        case 3:
          _data5 = _context6.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: _data5,
            message: "Search countryTourss fetched successfully"
          });
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function searchCountryTours(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
exports.searchCountryTours = searchCountryTours;