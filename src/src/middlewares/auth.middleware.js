import HttpStatus from "http-status-codes";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/helpers/errorHelper";

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export const isAuth = async (req, res, next) => {
    try {
        let bearerToken = req.header("Authorization");
        if (!bearerToken)
            throw new ErrorHandler(
                HttpStatus.BAD_REQUEST,
                "Authorization token is required"
            );
        bearerToken = bearerToken.split(" ")[1];

        const user = await jwt.verify(bearerToken, process.env.JWT_SECRIT_KEY);
        req.user = user;
        req.token = bearerToken;
        next();
    } catch (error) {
        next(error);
    }
};

const chack = (roles, user) => {
    roles.forEach((role) => {
        if (user.roles.includes(role)) {
            console.log("authenticated");
            // if authenticated
            return next();
        }
    });
};

export const haveAccses = (roles) => async (req, res, next) => {
    try {
        const haveAccses = roles.some((r) => req.user.roles.includes(r));
        haveAccses
            ? next()
            : res
                  .status(401)
                  .json("Sorry you do not have access to this route");
    } catch (error) {
        next(error);
    }
};
