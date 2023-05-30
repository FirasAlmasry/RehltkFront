"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newCountryToursValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newCountryToursValidator = function newCountryToursValidator(data) {
  var schema = _joi["default"].object({
    imageUrl: _joi["default"].string(),
    country: _joi["default"].string().min(4).required(),
    title: _joi["default"].string().min(4).required(),
    subTitle: _joi["default"].string().min(4).required(),
    price: _joi["default"].number().min(4).required(),
    description: _joi["default"].string().min(4).required(),
    duration: _joi["default"].string().min(4).required(),
    days: _joi["default"].any()
  });
  return schema.validate(data);
};
exports.newCountryToursValidator = newCountryToursValidator;