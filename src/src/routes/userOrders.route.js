import express from "express";
import * as userOrdersController from "../controllers/userOrders.controller";
import { isAuth, haveAccses } from "../middlewares/auth.middleware";

const router = express.Router();

//route to get all userOrderss
router.get(
    "",
    isAuth,
    haveAccses(["read"]),
    userOrdersController.getAllUserOrderss
);

router.get(
    "/search",
    isAuth,
    haveAccses(["read"]),
    userOrdersController.searchUserOrders
);
//route to create a new userOrders
router.post("", userOrdersController.createUserOrders);

//route to get a single userOrders by their userOrders id
router.get(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    userOrdersController.getUserOrdersById
);

//route to update a single userOrders by their userOrders id
router.put(
    "/:id",
    isAuth,
    haveAccses(["edit"]),
    userOrdersController.updateUserOrders
);

//route to delete a single userOrders by their userOrders id
router.delete(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    userOrdersController.deleteUserOrders
);

export default router;
