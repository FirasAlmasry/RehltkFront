"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addComplaint = addComplaint;
exports.addCoumpanyOrder = addCoumpanyOrder;
exports.addEmployee = addEmployee;
exports.addOrder = addOrder;
exports.addSales = addSales;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _googleSpreadsheet = require("google-spreadsheet");
function addOrder(_x) {
  return _addOrder.apply(this, arguments);
}
function _addOrder() {
  _addOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var doc, sheet, formatedData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          doc = new _googleSpreadsheet.GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);
          _context.next = 4;
          return doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY
          });
        case 4:
          _context.next = 6;
          return doc.loadInfo();
        case 6:
          sheet = doc.sheetsByTitle["orders"];
          formatedData = {
            "رقم الجوال": data.phone,
            المدينة: data.city,
            الدولة: data.country,
            "حاجز طيران": data.bookingFlight,
            التاريخ: data.date,
            الوقت: data.time
          };
          _context.next = 10;
          return sheet.addRow(formatedData);
        case 10:
          return _context.abrupt("return", true);
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", false);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _addOrder.apply(this, arguments);
}
function addCoumpanyOrder(_x2) {
  return _addCoumpanyOrder.apply(this, arguments);
}
function _addCoumpanyOrder() {
  _addCoumpanyOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var doc, sheet, formatedData;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          doc = new _googleSpreadsheet.GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);
          _context2.next = 4;
          return doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY
          });
        case 4:
          _context2.next = 6;
          return doc.loadInfo();
        case 6:
          sheet = doc.sheetsByTitle["companiesOrders"];
          formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.personName,
            "اسم الشركة": data.coumpanyName,
            "البريد الالكتروني": data.email,
            المدينة: data.city,
            الوصف: data.desc,
            التاريخ: data.date,
            الوقت: data.time
          };
          _context2.next = 10;
          return sheet.addRow(formatedData);
        case 10:
          return _context2.abrupt("return", true);
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", false);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _addCoumpanyOrder.apply(this, arguments);
}
function addComplaint(_x3) {
  return _addComplaint.apply(this, arguments);
}
function _addComplaint() {
  _addComplaint = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
    var doc, sheet, formatedData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          doc = new _googleSpreadsheet.GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);
          _context3.next = 4;
          return doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY
          });
        case 4:
          _context3.next = 6;
          return doc.loadInfo();
        case 6:
          sheet = doc.sheetsByTitle["complaint"];
          formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            الوصف: data.desc,
            التاريخ: data.date,
            الوقت: data.time
          };
          _context3.next = 10;
          return sheet.addRow(formatedData);
        case 10:
          return _context3.abrupt("return", true);
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", false);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return _addComplaint.apply(this, arguments);
}
function addEmployee(_x4) {
  return _addEmployee.apply(this, arguments);
}
function _addEmployee() {
  _addEmployee = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
    var doc, sheet, formatedData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          doc = new _googleSpreadsheet.GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);
          _context4.next = 4;
          return doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY
          });
        case 4:
          _context4.next = 6;
          return doc.loadInfo();
        case 6:
          sheet = doc.sheetsByTitle["employee"];
          formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            العمر: data.age,
            المدينة: data.city,
            "لدية خبرة": data.hasExpr,
            التاريخ: data.date,
            الوقت: data.time
          };
          _context4.next = 10;
          return sheet.addRow(formatedData);
        case 10:
          return _context4.abrupt("return", true);
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", false);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return _addEmployee.apply(this, arguments);
}
function addSales(_x5) {
  return _addSales.apply(this, arguments);
}
function _addSales() {
  _addSales = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
    var doc, sheet, formatedData;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          doc = new _googleSpreadsheet.GoogleSpreadsheet("1KijO5AaYQlIQwLMz87BEA-B9MhQh5pSYY2_i3asGvuk");
          _context5.next = 4;
          return doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY
          });
        case 4:
          _context5.next = 6;
          return doc.loadInfo();
        case 6:
          sheet = doc.sheetsByTitle["sales"];
          formatedData = {
            "اسم العميل": data.name,
            "رقم الجوال": data.phone,
            الدولة: data.country,
            "سعر تكلفة الباكدج بدون الطيران": data.packageWithoutFlightCost,
            "تكلفة الطيران": data.flightCost,
            "سعر بيع الباكدج": data.PackagePrice,
            المدينة: data.city,
            التاريخ: data.date,
            الوقت: data.time,
            الموظف: data.employee,
            "اسم الوكيل": data.agent
          };
          _context5.next = 10;
          return sheet.addRow(formatedData);
        case 10:
          return _context5.abrupt("return", true);
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", false);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return _addSales.apply(this, arguments);
}