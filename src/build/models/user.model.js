"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  phone: {
    type: String,
    lowercase: true,
    required: true
  },
  roles: {
    type: [String],
    lowercase: true,
    "default": ["read"]
  }
}, {
  timestamps: true
});
userSchema.pre("save", function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  _bcryptjs["default"].genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    _bcryptjs["default"].hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});
userSchema.methods.comparePassword = /*#__PURE__*/function () {
  var _comparePassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _bcryptjs["default"].compareSync(data, this.password));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  function comparePassword(_x) {
    return _comparePassword.apply(this, arguments);
  }
  return comparePassword;
}();
userSchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)("User", userSchema);
exports["default"] = _default;