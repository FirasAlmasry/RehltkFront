import express from "express";
const router = express.Router();

import salesRoute from "./sales.route";
import countryToursRoute from "./countryTours.route";
import countryRoute from "./country.route";
import employmentApplicationsRoute from "./employmentApplications.route";
import complaintRoute from "./complaint.route";
import companyOrdersRoute from "./companyOrders.route";
import userOrdersRoute from "./userOrders.route";
import userRoute from "./user.route";
import authRoute from "./auth.route";
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
    router.get("/", (req, res) => {
        res.json("Welcome to rehlitk");
    });
    router.use("/auth", authRoute);
    router.use("/users", userRoute);

    router.use("/user-orders", userOrdersRoute);
    router.use("/company-orders", companyOrdersRoute);
    router.use("/complaints", complaintRoute);
    router.use("/employment-applications", employmentApplicationsRoute);
    router.use("/countrys", countryRoute);
    router.use("/country-tours", countryToursRoute);
    router.use("/sales", salesRoute);

    return router;
};

export default routes;
