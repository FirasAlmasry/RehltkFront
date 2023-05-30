import Joi from '@hapi/joi';

export const newCountryToursValidator = (data) => {
  const schema = Joi.object({
    imageUrl: Joi.string(),
    country: Joi.string().min(4).required(),
    title: Joi.string().min(4).required(),
    subTitle: Joi.string().min(4).required(),
    price: Joi.number().min(4).required(),
    description: Joi.string().min(4).required(),
    duration: Joi.string().min(4).required(),
    days: Joi.any()
  });

  return schema.validate(data);
};
