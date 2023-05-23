import HttpStatus from "http-status-codes";
import Sales from "../models/sales.model";
import { newSalesValidator } from "../validators/sales.validator";
import ErrorHandler from "../utils/helpers/errorHelper";

export const getAllSaless = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "saless",
        },
    };
    const data = await Sales.paginate({}, pageOptions);
    return data;
};

export const createSales = async (body) => {
    const data = await Sales.create(body);
    return data;
};

export const updateSales = async (_id, body) => {
    const data = await Sales.findByIdAndUpdate({ _id }, body, { new: true });
    return data;
};

export const deleteSales = async (id) => {
    await Sales.findByIdAndDelete(id);
    return "";
};

export const getSalesById = async (id) => {
    const data = await Sales.findById(id);
    if (!data) throw new ErrorHandler(HttpStatus.NOT_FOUND, "Sales not found");

    return data;
};

export const searchSaless = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "saless",
        },
    };
    return await Sales.paginate(
        { name: { $regex: new RegExp(req.query.query, "i") } },
        pageOptions
    );
};

export const isCreateSalesDataValide = async (data) => {
    const { error, value } = newSalesValidator(data);
    if (error)
        throw new ErrorHandler(
            HttpStatus.BAD_REQUEST,
            error.details[0].message
        );
};
