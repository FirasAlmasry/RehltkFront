import express from "express";
import * as complaintController from "../controllers/complaint.controller";
import { isAuth, haveAccses } from "../middlewares/auth.middleware";

const router = express.Router();

//route to get all complaints
router.get(
    "",
    isAuth,
    haveAccses(["read"]),
    complaintController.getAllComplaints
);

router.get(
    "/search",
    isAuth,
    haveAccses(["read"]),
    complaintController.searchComplaint
);
//route to create a new complaint
router.post("", complaintController.createComplaint);

//route to get a single complaint by their complaint id
router.get(
    "/:id",
    isAuth,
    haveAccses(["read"]),
    complaintController.getComplaintById
);

//route to update a single complaint by their complaint id
router.put(
    "/:id",
    isAuth,
    haveAccses(["edit"]),
    complaintController.updateComplaint
);

//route to delete a single complaint by their complaint id
router.delete(
    "/:id",
    isAuth,
    haveAccses(["delete"]),
    complaintController.deleteComplaint
);

export default router;
