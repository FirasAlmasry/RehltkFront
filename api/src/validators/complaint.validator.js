import Joi from '@hapi/joi';

export const newComplaintValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(4).required(),
    description: Joi.string().min(4).required()
  });

  return schema.validate(data);
};
