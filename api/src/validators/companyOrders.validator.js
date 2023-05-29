import Joi from '@hapi/joi';

export const newCompanyOrdersValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    companyName: Joi.string().min(4).required(),
    address: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(4).required(),
    description: Joi.string().min(4).required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
  });

  return schema.validate(data);
};
