import Joi from '@hapi/joi';

export const newUserOrdersValidator = (data) => {
  const schema = Joi.object({
    // name: Joi.string().min(4).required(),
    address: Joi.string().required(),
    country: Joi.string().required(),
    // email: Joi.string().email().required(),
    phone: Joi.string().min(4).required(),
    // description: Joi.string().min(4).required(),
    bookingFlight: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
  });

  return schema.validate(data);
};
