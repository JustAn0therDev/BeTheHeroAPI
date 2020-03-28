import { Segments, Joi } from "celebrate";

export default {
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().required()
  })
};
