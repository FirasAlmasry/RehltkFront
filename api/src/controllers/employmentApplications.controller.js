import HttpStatus from "http-status-codes";
import * as EmploymentApplicationsService from "../services/employmentApplications.service";
import * as GoogleSheetService from "../services/googleSheet";

/**
 * Controller to get all employmentApplicationss available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllEmploymentApplicationss = async (req, res, next) => {
    try {
        const data =
            await EmploymentApplicationsService.getAllEmploymentApplicationss(
                req
            );
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "All employment Applications fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a single employmentApplications
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getEmploymentApplicationsById = async (req, res, next) => {
    try {
        const data =
            await EmploymentApplicationsService.getEmploymentApplicationsById(
                req.params.id
            );
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Employment Applications fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to create a new employmentApplications
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createEmploymentApplications = async (req, res, next) => {
    try {
        await EmploymentApplicationsService.isCreateEmploymentApplicationsDataValide(
            req.body
        );

        const data =
            await EmploymentApplicationsService.createEmploymentApplications(
                req.body
            );
        await GoogleSheetService.addEmployee(req.body);

        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "Employment Applications created successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to update a employmentApplications
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateEmploymentApplications = async (req, res, next) => {
    try {
        await EmploymentApplicationsService.getEmploymentApplicationsById(
            req.params.id
        );
        const data =
            await EmploymentApplicationsService.updateEmploymentApplications(
                req.params.id,
                req.body
            );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: "Employment Applications updated successfully",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

/**
 * Controller to delete a employmentApplications
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteEmploymentApplications = async (req, res, next) => {
    try {
        await EmploymentApplicationsService.getEmploymentApplicationsById(
            req.params.id
        );
        await EmploymentApplicationsService.deleteEmploymentApplications(
            req.params.id
        );
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: [],
            message: "Employment Applications deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a employmentApplications
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchEmploymentApplications = async (req, res, next) => {
    try {
        const data =
            await EmploymentApplicationsService.searchEmploymentApplicationss(
                req
            );
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Search Employment Applications fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};
