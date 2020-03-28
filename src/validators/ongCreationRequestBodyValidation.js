import { Segments, Joi } from "celebrate";

export default {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    whatsapp: Joi.string()
      .required()
      .length(11),
    city: Joi.string().required(),
    uf: Joi.string()
      .required()
      .length(2)
  })
};
