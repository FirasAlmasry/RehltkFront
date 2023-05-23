"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
var countrySchema = new _mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  },
  cloudinary_id: {
    type: String
  },
  tours: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "CountryTours"
  }]
}, {
  timestamps: true
});
countrySchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)("Country", countrySchema);
exports["default"] = _default;