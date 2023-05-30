"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
var countryToursSchema = new _mongoose.Schema({
  country: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Country"
  },
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  cloudinary_id: {
    type: String
  },
  days: [{
    title: String,
    description: String
  }]
}, {
  timestamps: true
});
countryToursSchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)("CountryTours", countryToursSchema);
exports["default"] = _default;