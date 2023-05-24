import HttpStatus from "http-status-codes";
import * as SalesService from "../services/sales.service";
import * as GoogleSheetService from "../services/googleSheet";

/**
 * Controller to get all saless available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllSaless = async (req, res, next) => {
    try {
        const data = await SalesService.getAllSaless(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "All saless fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a single sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getSalesById = async (req, res, next) => {
    try {
        const data = await SalesService.getSalesById(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Sales fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to create a new sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createSales = async (req, res, next) => {
    try {
        console.log(req.body);
        await SalesService.isCreateSalesDataValide(req.body);

        const data = await SalesService.createSales(req.body);
        await GoogleSheetService.addSales(req.body);

        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "Sales created successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to update a sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateSales = async (req, res, next) => {
    try {
        await SalesService.getSalesById(req.params.id);
        const data = await SalesService.updateSales(req.params.id, req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: "Sales updated successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteSales = async (req, res, next) => {
    try {
        await SalesService.getSalesById(req.params.id);
        await SalesService.deleteSales(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: [],
            message: "Sales deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchSales = async (req, res, next) => {
    try {
        const data = await SalesService.searchSaless(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Search saless fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};
