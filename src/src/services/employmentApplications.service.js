import HttpStatus from "http-status-codes";
import EmploymentApplications from "../models/employmentApplications.model";
import { newEmploymentApplicationsValidator } from "../validators/employmentApplications.validator";
import ErrorHandler from "../utils/helpers/errorHelper";

export const getAllEmploymentApplicationss = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "employmentApplications",
        },
    };
    const data = await EmploymentApplications.paginate({}, pageOptions);
    return data;
};

export const createEmploymentApplications = async (body) => {
    const data = await EmploymentApplications.create(body);
    return data;
};

export const updateEmploymentApplications = async (_id, body) => {
    const data = await EmploymentApplications.findByIdAndUpdate({ _id }, body, {
        new: true,
    });
    return data;
};

export const deleteEmploymentApplications = async (id) => {
    await EmploymentApplications.findByIdAndDelete(id);
    return "";
};

export const getEmploymentApplicationsById = async (id) => {
    const data = await EmploymentApplications.findById(id);
    if (!data)
        throw new ErrorHandler(
            HttpStatus.NOT_FOUND,
            "EmploymentApplications not found"
        );

    return data;
};

export const searchEmploymentApplicationss = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "employmentApplications",
        },
    };
    return await EmploymentApplications.paginate(
        { name: { $regex: new RegExp(req.query.query, "i") } },
        pageOptions
    );
};

export const isCreateEmploymentApplicationsDataValide = async (data) => {
    const { error, value } = newEmploymentApplicationsValidator(data);
    if (error)
        throw new ErrorHandler(
            HttpStatus.BAD_REQUEST,
            error.details[0].message
        );
};
