import HttpStatus from "http-status-codes";
import * as CountryToursService from "../services/countryTours.service";
import {
    addCountryToursToArray,
    deleteCountryToursToArray,
} from "../services/country.service";
import cloudinary from "../config/cloudinary";

/**
 * Controller to get all countryTourss available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllCountryTours = async (req, res, next) => {
    try {
        const data = await CountryToursService.getAllCountryTourss(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "All countryTourss fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a single countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getCountryToursById = async (req, res, next) => {
    try {
        const data = await CountryToursService.getCountryToursById(
            req.params.id
        );
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "CountryTours fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to create a new countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createCountryTours = async (req, res, next) => {
    try {

        req.body.days = JSON.parse(req.body.days) || [];
        await CountryToursService.isCreateCountryToursDataValide(req.body);
        if (req.file?.path !== undefined) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "Tours",
            });

            req.body.imageUrl = result.secure_url;
            req.body.cloudinary_id = result.public_id;
        }

        const data = await CountryToursService.createCountryTours(req.body);
        console.log(data)
        await addCountryToursToArray(data.country, data._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "Country Tours created successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to update a countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateCountryTours = async (req, res, next) => {
    try {
        req.body.days = JSON.parse(req.body.days) || [];
        await CountryToursService.isCreateCountryToursDataValide(req.body);
        const excistCountryTours =
            await CountryToursService.getCountryToursById(req.params.id);

        if (req.file?.path !== undefined) {
            await CountryToursService.uplodeHelper(
                req,
                excistCountryTours.cloudinary_id
            );
        }
        const data = await CountryToursService.updateCountryTours(
            req.params.id,
            req.body
        );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: "CountryTours updated successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteCountryTours = async (req, res, next) => {
    try {
        await CountryToursService.getCountryToursById(req.params.id);
        const countryTours = await CountryToursService.deleteCountryTours(
            req.params.id
        );
        if (countryTours.cloudinary_id) {
            await cloudinary.uploader.destroy(countryTours.cloudinary_id);
        }
        await deleteCountryToursToArray(data.country, data._id);

        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: [],
            message: "CountryTours deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a countryTours
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchCountryTours = async (req, res, next) => {
    try {
        const data = await CountryToursService.searchCountryTourss(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Search countryTourss fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};
