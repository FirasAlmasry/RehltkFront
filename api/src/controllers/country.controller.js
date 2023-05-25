import HttpStatus from "http-status-codes";
import * as CountryService from "../services/country.service";
import cloudinary from "../config/cloudinary";


/**
 * Controller to get all countrys available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllCountrys = async (req, res, next) => {
    try {
        const data = await CountryService.getAllCountrys(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "All countrys fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a single country
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getCountryById = async (req, res, next) => {
    try {
        const data = await CountryService.getCountryById(req.params.id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Country fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to create a new country
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createCountry = async (req, res, next) => {
    try {
        await CountryService.isCreateCountryDataValide(req.body);
        if (req.file?.path !== undefined) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "Country",
            });
            req.body.imageUrl = result.secure_url;
            req.body.cloudinary_id = result.public_id;
        }
        

        const data = await CountryService.createCountry(req.body);

        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "Country created successfully",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

/**
 * Controller to update a country
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateCountry = async (req, res, next) => {
    try {
        const excistCountry = await CountryService.getCountryById(
            req.params.id
        );
        if (req.file?.path !== undefined) {
            await CountryService.uplodeHelper(req, excistCountry.cloudinary_id);
        }

        const data = await CountryService.updateCountry(
            req.params.id,
            req.body
        );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: "Country updated successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a country
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteCountry = async (req, res, next) => {
    try {
        await CountryService.getCountryById(req.params.id);
        const country = await CountryService.deleteCountry(req.params.id);
        if (country.cloudinary_id) {
            await cloudinary.uploader.destroy(country.cloudinary_id);
        }
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: [],
            message: "Country deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a country
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const searchCountry = async (req, res, next) => {
    try {
        const data = await CountryService.searchCountrys(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Search countrys fetched successfully",
        });
    } catch (error) {
        next(error);
    }
};
