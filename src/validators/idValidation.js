import { Segments, Joi } from "celebrate";

export default {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
};
