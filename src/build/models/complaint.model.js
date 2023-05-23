"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
var complaintSchema = new _mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});
complaintSchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)('Complaint', complaintSchema);
exports["default"] = _default;