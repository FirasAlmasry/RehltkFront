import Joi from "@hapi/joi";

export const newUserValidator = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().min(3).required(),
        password: Joi.string().min(8).required(),
        phone: Joi.string().min(6).max(15).required(),
        roles: Joi.array(),
    });

    return schema.validate(data);
};

export const userLogInValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });

    return schema.validate(data);
};
