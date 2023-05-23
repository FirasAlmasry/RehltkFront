"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogInValidation = exports.newUserValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newUserValidator = function newUserValidator(data) {
  var schema = _joi["default"].object({
    email: _joi["default"].string().email().required(),
    name: _joi["default"].string().min(3).required(),
    password: _joi["default"].string().min(8).required(),
    phone: _joi["default"].string().min(6).max(15).required(),
    roles: _joi["default"].array()
  });
  return schema.validate(data);
};
exports.newUserValidator = newUserValidator;
var userLogInValidation = function userLogInValidation(data) {
  var schema = _joi["default"].object({
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(8).required()
  });
  return schema.validate(data);
};
exports.userLogInValidation = userLogInValidation;