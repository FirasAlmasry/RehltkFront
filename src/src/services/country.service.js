import HttpStatus from "http-status-codes";
import Country from "../models/country.model";
import { newCountryValidator } from "../validators/country.validator";
import ErrorHandler from "../utils/helpers/errorHelper";
import cloudinary from "../config/cloudinary";

export const getAllCountrys = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "countrys",
        },
    };
    const data = await Country.paginate({}, pageOptions);
    return data;
};

export const createCountry = async (body) => {
    const data = await Country.create(body);
    return data;
};

export const updateCountry = async (_id, body) => {
    const data = await Country.findByIdAndUpdate({ _id }, body, { new: true });
    return data;
};

export const addCountryToursToArray = async (countryId, toursId) => {
    return await Country.findOneAndUpdate(
        { _id: countryId },
        { $push: { tours: toursId } }
    );
};
export const deleteCountryToursToArray = async (countryId, toursId) => {
    return await Country.findOneAndUpdate(
        { _id: countryId },
        { $pull: { tours: toursId } }
    );
};

export const deleteCountry = async (id) => {
    await Country.findByIdAndDelete(id);
    return "";
};

export const getCountryById = async (id) => {
    const data = await Country.findById(id).populate("tours");
    // const data = await Country.findById(id);
    if (!data)
        throw new ErrorHandler(HttpStatus.NOT_FOUND, "Country not found");

    return data;
};

export const searchCountrys = async (req) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 1,
        limit: parseInt(req.query.limit, 10) || 10,
        customLabels: {
            docs: "countrys",
        },
    };
    return await Country.paginate(
        { name: { $regex: new RegExp(req.query.query, "i") } },
        pageOptions
    );
};

export const isCreateCountryDataValide = async (data) => {
    const { error, value } = newCountryValidator(data);
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
