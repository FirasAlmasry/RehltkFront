import HttpStatus from "http-status-codes";
import * as UserOrdersService from "../services/userOrders.service";
import * as GoogleSheetService from "../services/googleSheet";

/**
 * Controller to get all userOrderss available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllUserOrderss = async (req, res, next) => {
    try {
        const data = await UserOrdersService.getAllUserOrderss(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "All user Orders fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a single userOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getUserOrdersById = async (req, res, next) => {
    try {
        const data = await UserOrdersService.getUserOrdersById(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "User Orders fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to create a new userOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createUserOrders = async (req, res, next) => {
    try {
        await UserOrdersService.isCreateUserOrdersDataValide(req.body);

        const data = await UserOrdersService.createUserOrders(req.body);
        await GoogleSheetService.addOrder(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "User Orders created successfully",
        });
    } catch (error) {
        console.log("🚀 ~ file: userOrders.controller.js:61 ~ createUserOrders ~ error:", error)
        next(error);
    }
};

/**
 * Controller to update a userOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateUserOrders = async (req, res, next) => {
    try {
        await UserOrdersService.getUserOrdersById(req.params.id);
        const data = await UserOrdersService.updateUserOrders(
            req.params.id,
            req.body
        );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: "User Orders updated successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a userOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteUserOrders = async (req, res, next) => {
    try {
        await UserOrdersService.getUserOrdersById(req.params.id);
        await UserOrdersService.deleteUserOrders(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: [],
            message: "User Orders deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a userOrders
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchUserOrders = async (req, res, next) => {
    try {
        const data = await UserOrdersService.searchUserOrderss(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Search user Orders fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};
