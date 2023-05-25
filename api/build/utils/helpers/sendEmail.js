"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _nodemailer = require("nodemailer");
var _handlebars = require("handlebars");
var _fs = require("fs");
var _path = require("path");
var sendEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, subject, payload, template) {
    var transporter, source, compiledTemplate, options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // create reusable transporter object using the default SMTP transport
          transporter = (0, _nodemailer.createTransport)({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_PASSWORD
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          source = (0, _fs.readFileSync)((0, _path.join)(__dirname, template), 'utf8');
          compiledTemplate = (0, _handlebars.compile)(source);
          options = function options() {
            return {
              from: process.env.FROM_EMAIL,
              to: email,
              subject: subject,
              html: compiledTemplate(payload)
            };
          }; // Send email
          transporter.sendMail(options(), function (error, info) {
            if (error) {
              console.log(error);
              return error;
            } else {
              return res.status(200).json({
                success: true
              });
            }
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function sendEmail(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/*
Example:
sendEmail(
  "youremail@gmail.com,
  "Email subject",
  { name: "Eze" },
  "./templates/layouts/main.handlebars"
);
*/
var _default = sendEmail;
exports["default"] = _default;