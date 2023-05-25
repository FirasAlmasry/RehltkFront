import HttpStatus from "http-status-codes";
import Complaint from "../models/complaint.model";
import { newComplaintValidator } from "../validators/complaint.validator";
import ErrorHandler from "../utils/helpers/errorHelper";

export const getAllComplaints = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "complaints",
        },
    };
    const data = await Complaint.paginate({}, pageOptions);
    return data;
};

export const createComplaint = async (body) => {
    const data = await Complaint.create(body);
    return data;
};

export const updateComplaint = async (_id, body) => {
    const data = await Complaint.findByIdAndUpdate({ _id }, body, {
        new: true,
    });
    return data;
};

export const deleteComplaint = async (id) => {
    await Complaint.findByIdAndDelete(id);
    return "";
};

export const getComplaintById = async (id) => {
    const data = await Complaint.findById(id);
    if (!data)
        throw new ErrorHandler(HttpStatus.NOT_FOUND, "Complaint not found");

    return data;
};

export const searchComplaints = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "complaints",
        },
    };
    return await Complaint.paginate(
        { name: { $regex: new RegExp(req.query.query, "i") } },
        pageOptions
    );
};

export const isCreateComplaintDataValide = async (data) => {
    const { error, value } = newComplaintValidator(data);
    if (error)
        throw new ErrorHandler(
            HttpStatus.BAD_REQUEST,
            error.details[0].message
        );
};
