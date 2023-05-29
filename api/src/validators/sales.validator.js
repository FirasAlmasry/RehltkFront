import Joi from "@hapi/joi";

export const newSalesValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        employee: Joi.string().min(4).required(),
        phone: Joi.string().min(4).required(),
        city: Joi.string().min(4).required(),
        country: Joi.string().min(4).required(),
        agent: Joi.string().min(4).required(),
        packageWithoutFlightCost: Joi.number().min(4).required(),
        flightCost: Joi.number().min(4).required(),
        packagePrice: Joi.number().min(4).required(),
        theAmountPaid: Joi.number().required(),
        depositOrFullPayment: Joi.string().required(),
        returnDate: Joi.date().required(),
        dateOfTravel: Joi.date().required(),
        paymentDate: Joi.date().required(),
        date: Joi.string().required(),
        time: Joi.string().required(),
    });

    return schema.validate(data);
};
