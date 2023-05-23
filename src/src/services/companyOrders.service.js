import HttpStatus from "http-status-codes";
import CompanyOrders from "../models/companyOrders.model";
import { newCompanyOrdersValidator } from "../validators/companyOrders.validator";
import ErrorHandler from "../utils/helpers/errorHelper";

export const getAllCompanyOrderss = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "companyOrders",
        },
    };
    const data = await CompanyOrders.paginate({}, pageOptions);
    return data;
};

export const createCompanyOrders = async (body) => {
    const data = await CompanyOrders.create(body);
    return data;
};

export const updateCompanyOrders = async (_id, body) => {
    const data = await CompanyOrders.findByIdAndUpdate({ _id }, body, {
        new: true,
    });
    return data;
};

export const deleteCompanyOrders = async (id) => {
    await CompanyOrders.findByIdAndDelete(id);
    return "";
};

export const getCompanyOrdersById = async (id) => {
    const data = await CompanyOrders.findById(id);
    if (!data)
        throw new ErrorHandler(HttpStatus.NOT_FOUND, "CompanyOrders not found");

    return data;
};

export const searchCompanyOrderss = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "companyOrders",
        },
    };
    return await CompanyOrders.paginate(
        { name: { $regex: new RegExp(req.query.query, "i") } },
        pageOptions
    );
};

export const isCreateCompanyOrdersDataValide = async (data) => {
    const { error, value } = newCompanyOrdersValidator(data);
    if (error)
        throw new ErrorHandler(
            HttpStatus.BAD_REQUEST,
            error.details[0].message
        );
};
