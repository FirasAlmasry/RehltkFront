"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newEmploymentApplicationsValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newEmploymentApplicationsValidator = function newEmploymentApplicationsValidator(data) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(4).required(),
    email: _joi["default"].string().email().required(),
    phone: _joi["default"].string().min(4).required(),
    address: _joi["default"].string().min(4).required(),
    description: _joi["default"].string().min(4).required()
  });
  return schema.validate(data);
};
exports.newEmploymentApplicationsValidator = newEmploymentApplicationsValidator;