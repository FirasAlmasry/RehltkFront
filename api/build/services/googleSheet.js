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
var _dotenv = _interopRequireDefault(require("dotenv"));
var _googleSpreadsheet = require("google-spreadsheet");
_dotenv["default"].config();
function getCurrentData() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth() + 1; // Months start at 0!
  var dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + "/" + mm + "/" + yyyy;
}
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
          doc = new _googleSpreadsheet.GoogleSpreadsheet("1AWw3dJZrekEbm1eKBPvzeQ5MOEcYW9KY0QxyQYYBDQE");
          _context.next = 4;
          return doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n"
          });
        case 4:
          _context.next = 6;
          return doc.loadInfo();
        case 6:
          sheet = doc.sheetsByTitle["orders"];
          formatedData = {
            "رقم الجوال": data.phone,
            المدينة: data.address,
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
          console.log(_context.t0);
          return _context.abrupt("return", false);
        case 17:
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
          doc = new _googleSpreadsheet.GoogleSpreadsheet("1AWw3dJZrekEbm1eKBPvzeQ5MOEcYW9KY0QxyQYYBDQE");
          _context2.next = 4;
          return doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n"
          });
        case 4:
          _context2.next = 6;
          return doc.loadInfo();
        case 6:
          sheet = doc.sheetsByTitle["companiesOrders"];
          formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            "اسم الشركة": data.companyName,
            "البريد الالكتروني": data.email,
            المدينة: data.address,
            الوصف: data.description,
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
          console.log(_context2.t0);
          return _context2.abrupt("return", false);
        case 17:
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
          doc = new _googleSpreadsheet.GoogleSpreadsheet("1AWw3dJZrekEbm1eKBPvzeQ5MOEcYW9KY0QxyQYYBDQE");
          _context3.next = 4;
          return doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n"
          });
        case 4:
          _context3.next = 6;
          return doc.loadInfo();
        case 6:
          sheet = doc.sheetsByTitle["complaint"];
          formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            الوصف: data.description,
            التاريخ: getCurrentData(),
            الوقت: new Date().toLocaleTimeString()
          };
          _context3.next = 10;
          return sheet.addRow(formatedData);
        case 10:
          return _context3.abrupt("return", true);
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", false);
        case 17:
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
          doc = new _googleSpreadsheet.GoogleSpreadsheet("1AWw3dJZrekEbm1eKBPvzeQ5MOEcYW9KY0QxyQYYBDQE");
          _context4.next = 4;
          return doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n"
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
            التاريخ: getCurrentData(),
            الوقت: new Date().toLocaleTimeString()
          };
          _context4.next = 10;
          return sheet.addRow(formatedData);
        case 10:
          return _context4.abrupt("return", true);
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", false);
        case 17:
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
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n"
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
            "سعر بيع الباكدج": data.packagePrice,
            المدينة: data.city,
            التاريخ: data.date,
            الوقت: data.time,
            الموظف: data.employee,
            "اسم الوكيل": data.agent,
            "المبلغ الذي تم دفعه": data.theAmountPaid,
            "عربون ام دفع كامل": data.depositOrFullPayment,
            "تاريخ العودة": data.returnDate,
            "تاريخ السفر": data.dateOfTravel,
            "تاريخ الدفع": data.paymentDate
          };
          _context5.next = 10;
          return sheet.addRow(formatedData);
        case 10:
          return _context5.abrupt("return", true);
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", false);
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return _addSales.apply(this, arguments);
}