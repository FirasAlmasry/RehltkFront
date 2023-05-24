import HttpStatus from "http-status-codes";
import UserOrders from "../models/userOrders.model";
import { newUserOrdersValidator } from "../validators/userOrders.validator";
import ErrorHandler from "../utils/helpers/errorHelper";

export const getAllUserOrderss = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "userOrders",
        },
    };
    const data = await UserOrders.paginate({}, pageOptions);
    return data;
};

export const createUserOrders = async (body) => {
    const data = await UserOrders.create(body);
    return data;
};

export const updateUserOrders = async (_id, body) => {
    const data = await UserOrders.findByIdAndUpdate({ _id }, body, {
        new: true,
    });
    return data;
};

export const deleteUserOrders = async (id) => {
    await UserOrders.findByIdAndDelete(id);
    return "";
};

export const getUserOrdersById = async (id) => {
    const data = await UserOrders.findById(id);
    if (!data)
        throw new ErrorHandler(HttpStatus.NOT_FOUND, "User Orders not found");

    return data;
};

export const searchUserOrderss = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "userOrders",
        },
    };
    return await UserOrders.paginate(
        { name: { $regex: new RegExp(req.query.query, "i") } },
        pageOptions
    );
};

export const isCreateUserOrdersDataValide = async (data) => {
    const { error, value } = newUserOrdersValidator(data);
    if (error)
        throw new ErrorHandler(
            HttpStatus.BAD_REQUEST,
            error.details[0].message
        );
};
