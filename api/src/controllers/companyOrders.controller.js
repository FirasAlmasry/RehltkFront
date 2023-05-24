import HttpStatus from "http-status-codes";
import * as CompanyOrdersService from "../services/companyOrders.service";
import * as GoogleSheetService from "../services/googleSheet";

/**
 * Controller to get all companyOrderss available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllCompanyOrderss = async (req, res, next) => {
    try {
        const data = await CompanyOrdersService.getAllCompanyOrderss(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "All companyOrderss fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a single companyOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getCompanyOrdersById = async (req, res, next) => {
    try {
        const data = await CompanyOrdersService.getCompanyOrdersById(
            req.params.id
        );
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "CompanyOrders fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to create a new companyOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createCompanyOrders = async (req, res, next) => {
    try {
        await CompanyOrdersService.isCreateCompanyOrdersDataValide(req.body);

        const data = await CompanyOrdersService.createCompanyOrders(req.body);
        await GoogleSheetService.addCoumpanyOrder(req.data);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "CompanyOrders created successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to update a companyOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateCompanyOrders = async (req, res, next) => {
    try {
        await CompanyOrdersService.getCompanyOrdersById(req.params.id);
        const data = await CompanyOrdersService.updateCompanyOrders(
            req.params.id,
            req.body
        );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: "CompanyOrders updated successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a companyOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteCompanyOrders = async (req, res, next) => {
    try {
        await CompanyOrdersService.getCompanyOrdersById(req.params.id);
        await CompanyOrdersService.deleteCompanyOrders(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: [],
            message: "CompanyOrders deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a companyOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchCompanyOrders = async (req, res, next) => {
    try {
        const data = await CompanyOrdersService.searchCompanyOrderss(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Search companyOrderss fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};
