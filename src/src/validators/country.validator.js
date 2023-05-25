import Joi from '@hapi/joi';

export const newCountryValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    description: Joi.string().min(4).required(),
    imageUrl: Joi.string()
  });

  return schema.validate(data);
};
