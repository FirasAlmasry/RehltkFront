"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newCompanyOrdersValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newCompanyOrdersValidator = function newCompanyOrdersValidator(data) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(4).required(),
    companyName: _joi["default"].string().min(4).required(),
    address: _joi["default"].string().min(4).required(),
    email: _joi["default"].string().email().required(),
    phone: _joi["default"].string().min(4).required(),
    description: _joi["default"].string().min(4).required(),
    date: _joi["default"].string().required(),
    time: _joi["default"].string().required()
  });
  return schema.validate(data);
};
exports.newCompanyOrdersValidator = newCompanyOrdersValidator;