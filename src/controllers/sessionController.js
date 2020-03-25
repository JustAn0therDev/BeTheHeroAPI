import connection from "../database/databaseConnection";
import createErrorResponseObjectBasedOnHttpStatusCode from "../utils/createErrorResponseObjectBasedOnHttpStatusCode";
import createGenericResponseObjectFromSelect from "../utils/createGenericResponseObjectFromSelect";

export default {
  createSession: async request => {
    const { id } = request.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return createErrorResponseObjectBasedOnHttpStatusCode("404");
    }

    return createGenericResponseObjectFromSelect("name", ong);
  }
};
