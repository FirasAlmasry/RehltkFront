"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.havePermission = havePermission;
var _errorHelper = require("./errorHelper");
function havePermission(req, userId) {
  if (userId != req.user.id && !req.user.roll !== 'admin') throw new _errorHelper.ErrorHandler(402, 'you dont have promithon to make change! ');
}