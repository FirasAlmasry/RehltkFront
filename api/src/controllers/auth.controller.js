// import HttpStatus from 'http-status-codes';
import * as UserService from "../services/user.service";
import * as AuthService from "../services/auth.service";
import User from "../models/user.model";

import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/helpers/errorHelper";

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const register = async (req, res, next) => {
    try {
        // await UserService.isCreateUserDataValide(req.body);
        await UserService.isNewUser(req.body.email);
        const userInfo = await UserService.createUser(req.body);
        const { password, ...user } = userInfo._doc;

        res.json({
            user,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const login = async (req, res, next) => {
    try {
        await UserService.isLogInDataValide(req.body);

        const user = await User.findOne({
            email: req.body.email,
        }).select("+password");

        if (!user)
            throw new ErrorHandler(400, "Email or password do not match");

        const isMatch = await user.comparePassword(req.body.password);

        if (!isMatch)
            throw new ErrorHandler(400, "Email or password do not match");

        const token = jwt.sign(
            { id: user._id, roles: user.roles },
            process.env.JWT_SECRIT_KEY
        );
        const { password, ...userInfo } = user._doc;
        return res.status(200).json({
            token,
            ...userInfo,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const resetPasswordRequest = async (req, res, next) => {
    try {
        const requestPasswordResetService =
            await AuthService.requestPasswordReset(req.body.email);
        return res.json(requestPasswordResetService);
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const resetPassword = async (req, res, next) => {
    try {
        const resetPassword = await AuthService.resetPassword(
            req.body.userId,
            req.body.token,
            req.body.password
        );
        return res.json({ resetPassword });
    } catch (error) {
        next(error);
    }
};
