import { Segments, Joi } from "celebrate";

export default {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
};