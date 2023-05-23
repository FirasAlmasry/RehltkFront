import express from "express";
import * as countryController from "../controllers/country.controller";
import { isAuth, haveAccses } from "../middlewares/auth.middleware";
import upload from "../utils/helpers/multer";

const router = express.Router();

//route to get all countrys
router.get("", countryController.getAllCountrys);

router.get("/search", countryController.searchCountry);
//route to create a new country
router.post(
    "",
    isAuth,
    haveAccses(["create"]),
    upload.single("imageUrl"),
    countryController.createCountry
);

//route to get a single country by their country id
router.get("/:id", countryController.getCountryById);

//route to update a single country by their country id
router.put(
    "/:id",
    isAuth,
    haveAccses(["edit"]),
    upload.single("imageUrl"),
    countryController.updateCountry
);

//route to delete a single country by their country id
router.delete(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    countryController.deleteCountry
);

export default router;
