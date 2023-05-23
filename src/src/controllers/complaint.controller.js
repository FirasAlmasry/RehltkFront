import HttpStatus from "http-status-codes";
import * as ComplaintService from "../services/complaint.service";
import * as GoogleSheetService from "../services/googleSheet";

/**
 * Controller to get all complaints available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllComplaints = async (req, res, next) => {
    try {
        const data = await ComplaintService.getAllComplaints(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "All complaints fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a single complaint
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getComplaintById = async (req, res, next) => {
    try {
        const data = await ComplaintService.getComplaintById(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Complaint fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to create a new complaint
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createComplaint = async (req, res, next) => {
    try {
        await ComplaintService.isCreateComplaintDataValide(req.body);

        const data = await ComplaintService.createComplaint(req.body);
        await GoogleSheetService.addComplaint(req.data);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "Complaint created successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to update a complaint
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateComplaint = async (req, res, next) => {
    try {
        await ComplaintService.getComplaintById(req.params.id);
        const data = await ComplaintService.updateComplaint(
            req.params.id,
            req.body
        );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: "Complaint updated successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a complaint
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteComplaint = async (req, res, next) => {
    try {
        await ComplaintService.getComplaintById(req.params.id);
        await ComplaintService.deleteComplaint(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: [],
            message: "Complaint deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a complaint
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchComplaint = async (req, res, next) => {
    try {
        const data = await ComplaintService.searchComplaints(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Search complaints fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};
