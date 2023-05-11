const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/)
    .messages({
      "string.pattern.base": `Phone number must have min 8 and max 12 digits.`,
    })
    .required(),
});

module.exports = { addSchema };
