import express from "express";
import * as salesController from "../controllers/sales.controller";
import { isAuth, haveAccses } from "../middlewares/auth.middleware";

const router = express.Router();

//route to get all saless
router.get("", isAuth, haveAccses(["read"]), salesController.getAllSaless);

router.get(
    "/search",
    isAuth,
    haveAccses(["read"]),
    salesController.searchSales
);
//route to create a new sales
router.post("", isAuth, haveAccses(["create"]), salesController.createSales);

//route to get a single sales by their sales id
router.get("/:id", isAuth, haveAccses(["read"]), salesController.getSalesById);

//route to update a single sales by their sales id
router.put("/:id", isAuth, haveAccses(["edit"]), salesController.updateSales);

//route to delete a single sales by their sales id
router.delete(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    salesController.deleteSales
);

export default router;
