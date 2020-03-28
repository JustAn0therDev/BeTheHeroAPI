import { Segments, Joi } from "celebrate";

export default {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string()
      .required()
      .max(300),
    value: Joi.number().required()
  })
};
