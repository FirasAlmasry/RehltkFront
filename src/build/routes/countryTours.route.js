"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var countryToursController = _interopRequireWildcard(require("../controllers/countryTours.controller"));
var _auth = require("../middlewares/auth.middleware");
var _multer = _interopRequireDefault(require("../utils/helpers/multer"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = _express["default"].Router();

//route to get all countryTourss
router.get("", countryToursController.getAllCountryTours);
router.get("/search", countryToursController.searchCountryTours);
//route to create a new countryTours
router.post("", _auth.isAuth, (0, _auth.haveAccses)(["create"]), _multer["default"].single("imageUrl"), countryToursController.createCountryTours);

//route to get a single countryTours by their countryTours id
router.get("/:id", countryToursController.getCountryToursById);

//route to update a single countryTours by their countryTours id
router.put("/:id", _auth.isAuth, (0, _auth.haveAccses)(["edit"]), _multer["default"].single("imageUrl"), countryToursController.updateCountryTours);

//route to delete a single countryTours by their countryTours id
router["delete"]("/:id", _auth.isAuth, (0, _auth.haveAccses)(["delete"]), countryToursController.deleteCountryTours);
var _default = router;
exports["default"] = _default;