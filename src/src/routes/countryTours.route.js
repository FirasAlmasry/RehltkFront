import express from "express";
import * as countryToursController from "../controllers/countryTours.controller";
import { isAuth, haveAccses } from "../middlewares/auth.middleware";
import upload from "../utils/helpers/multer";

const router = express.Router();

//route to get all countryTourss
router.get("", countryToursController.getAllCountryTours);

router.get("/search", countryToursController.searchCountryTours);
//route to create a new countryTours
router.post(
    "",
    isAuth,
    haveAccses(["create"]),
    upload.single("imageUrl"),
    countryToursController.createCountryTours
);

//route to get a single countryTours by their countryTours id
router.get("/:id", countryToursController.getCountryToursById);

//route to update a single countryTours by their countryTours id
router.put(
    "/:id",
    isAuth,
    haveAccses(["edit"]),
    upload.single("imageUrl"),
    countryToursController.updateCountryTours
);

//route to delete a single countryTours by their countryTours id
router.delete(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    countryToursController.deleteCountryTours
);

export default router;
