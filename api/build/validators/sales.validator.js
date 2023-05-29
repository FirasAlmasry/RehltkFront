"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newSalesValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newSalesValidator = function newSalesValidator(data) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(4).required(),
    employee: _joi["default"].string().min(4).required(),
    phone: _joi["default"].string().min(4).required(),
    city: _joi["default"].string().min(4).required(),
    country: _joi["default"].string().min(4).required(),
    agent: _joi["default"].string().min(4).required(),
    packageWithoutFlightCost: _joi["default"].number().min(4).required(),
    flightCost: _joi["default"].number().min(4).required(),
    packagePrice: _joi["default"].number().min(4).required(),
    theAmountPaid: _joi["default"].number().required(),
    depositOrFullPayment: _joi["default"].string().required(),
    returnDate: _joi["default"].date().required(),
    dateOfTravel: _joi["default"].date().required(),
    paymentDate: _joi["default"].date().required()
  });
  return schema.validate(data);
};
exports.newSalesValidator = newSalesValidator;