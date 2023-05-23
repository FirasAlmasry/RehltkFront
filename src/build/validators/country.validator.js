"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newCountryValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newCountryValidator = function newCountryValidator(data) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(4).required(),
    description: _joi["default"].string().min(4).required(),
    imageUrl: _joi["default"].string()
  });
  return schema.validate(data);
};
exports.newCountryValidator = newCountryValidator;