"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUserOrdersValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newUserOrdersValidator = function newUserOrdersValidator(data) {
  var schema = _joi["default"].object({
    // name: Joi.string().min(4).required(),
    address: _joi["default"].string().required(),
    country: _joi["default"].string().required(),
    // email: Joi.string().email().required(),
    phone: _joi["default"].string().min(4).required(),
    // description: Joi.string().min(4).required(),
    bookingFlight: _joi["default"].string(),
    // .required(),
    date: _joi["default"].string().required(),
    time: _joi["default"].string().required()
  });
  return schema.validate(data);
};
exports.newUserOrdersValidator = newUserOrdersValidator;