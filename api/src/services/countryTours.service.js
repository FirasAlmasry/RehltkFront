import HttpStatus from "http-status-codes";
import CountryTours from "../models/countryTours.model";
import { newCountryToursValidator } from "../validators/countryTours.validator";
import ErrorHandler from "../utils/helpers/errorHelper";
import cloudinary from "../config/cloudinary";

export const getAllCountryTourss = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "countryTourss",
        },
    };
    const data = await CountryTours.paginate({}, pageOptions);
    return data;
};

export const createCountryTours = async (body) => {
    const data = await CountryTours.create(body);
    return data;
};

export const updateCountryTours = async (_id, body) => {
    const data = await CountryTours.findByIdAndUpdate({ _id }, body, {
        new: true,
    });
    return data;
};

export const deleteCountryTours = async (id) => {
    await CountryTours.findByIdAndDelete(id);
    return "";
};

export const getCountryToursById = async (id) => {
    const data = await CountryTours.findById(id);
    if (!data)
        throw new ErrorHandler(HttpStatus.NOT_FOUND, "CountryTours not found");

    return data;
};

export const searchCountryTourss = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "countryTourss",
        },
    };
    return await CountryTours.paginate(
        { name: { $regex: new RegExp(req.query.query, "i") } },
        pageOptions
    );
};

export const isCreateCountryToursDataValide = async (data) => {
    const { error, value } = newCountryToursValidator(data);
    if (error)
        throw new ErrorHandler(
            HttpStatus.BAD_REQUEST,
            error.details[0].message
        );
};

export const uplodeHelper = async (req, cloudinary_id) => {
    if (req.file?.path !== undefined) {
        if (cloudinary_id) {
            await cloudinary.uploader.destroy(cloudinary_id);
        }
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "Country",
        });
        req.body.imageUrl = result.secure_url;
        req.body.cloudinary_id = result.public_id;
    }
};
