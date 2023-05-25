import express from "express";
import * as employmentApplicationsController from "../controllers/employmentApplications.controller";
import { isAuth, haveAccses } from "../middlewares/auth.middleware";

const router = express.Router();

//route to get all employmentApplicationss
router.get(
    "",
    isAuth,
    haveAccses(["read"]),
    employmentApplicationsController.getAllEmploymentApplicationss
);

router.get(
    "/search",
    isAuth,
    haveAccses(["read"]),
    employmentApplicationsController.searchEmploymentApplications
);
//route to create a new employmentApplications
router.post("", employmentApplicationsController.createEmploymentApplications);

//route to get a single employmentApplications by their employmentApplications id
router.get(
    "/:id",
    isAuth,
    haveAccses(["read"]),
    employmentApplicationsController.getEmploymentApplicationsById
);

//route to update a single employmentApplications by their employmentApplications id
router.put(
    "/:id",
    isAuth,
    haveAccses(["edit"]),
    employmentApplicationsController.updateEmploymentApplications
);

//route to delete a single employmentApplications by their employmentApplications id
router.delete(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    employmentApplicationsController.deleteEmploymentApplications
);

export default router;
