import { Segments, Joi } from "celebrate";

export default {
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
};
