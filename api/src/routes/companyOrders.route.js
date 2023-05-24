import express from "express";
import * as companyOrdersController from "../controllers/companyOrders.controller";
import { isAuth, haveAccses } from "../middlewares/auth.middleware";

const router = express.Router();

//route to get all companyOrderss
router.get(
    "",
    isAuth,
    haveAccses(["read"]),
    companyOrdersController.getAllCompanyOrderss
);

router.get(
    "/search",
    isAuth,
    haveAccses(["read"]),
    companyOrdersController.searchCompanyOrders
);
//route to create a new companyOrders
router.post("", companyOrdersController.createCompanyOrders);

//route to get a single companyOrders by their companyOrders id
router.get(
    "/:id",
    isAuth,
    haveAccses(["read"]),
    companyOrdersController.getCompanyOrdersById
);

//route to update a single companyOrders by their companyOrders id
router.put(
    "/:id",
    isAuth,
    haveAccses(["update"]),
    companyOrdersController.updateCompanyOrders
);

//route to delete a single companyOrders by their companyOrders id
router.delete(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    companyOrdersController.deleteCompanyOrders
);

export default router;
