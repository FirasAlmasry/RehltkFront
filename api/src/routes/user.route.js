import express from "express";
import * as userController from "../controllers/user.controller";
import { isAuth, haveAccses } from "../middlewares/auth.middleware";

const router = express.Router();

//route to get all users
router.get("", isAuth, haveAccses(["read"]), userController.getAllUsers);

router.get("/search", isAuth, haveAccses(["read"]), userController.searchUser);
//route to create a new user
router.post("", isAuth, haveAccses(["create"]), userController.createUser);

//route to get a single user by their user id
router.get("/:id", isAuth, haveAccses(["read"]), userController.getUserById);

//route to update a single user by their user id
router.put("/:id", isAuth, haveAccses(["edit"]), userController.updateUser);

//route to delete a single user by their user id
router.delete(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    userController.deleteUser
);

export default router;
