"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _sales = _interopRequireDefault(require("./sales.route"));
var _countryTours = _interopRequireDefault(require("./countryTours.route"));
var _country = _interopRequireDefault(require("./country.route"));
var _employmentApplications = _interopRequireDefault(require("./employmentApplications.route"));
var _complaint = _interopRequireDefault(require("./complaint.route"));
var _companyOrders = _interopRequireDefault(require("./companyOrders.route"));
var _userOrders = _interopRequireDefault(require("./userOrders.route"));
var _user = _interopRequireDefault(require("./user.route"));
var _auth = _interopRequireDefault(require("./auth.route"));
var router = _express["default"].Router();
/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.get("/", function (req, res) {
    res.json("Welcome to rehlitk");
  });
  router.use("/auth", _auth["default"]);
  router.use("/users", _user["default"]);
  router.use("/user-orders", _userOrders["default"]);
  router.use("/company-orders", _companyOrders["default"]);
  router.use("/complaints", _complaint["default"]);
  router.use("/employment-applications", _employmentApplications["default"]);
  router.use("/countrys", _country["default"]);
  router.use("/country-tours", _countryTours["default"]);
  router.use("/sales", _sales["default"]);
  return router;
};
var _default = routes;
exports["default"] = _default;