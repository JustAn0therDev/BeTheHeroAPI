import connection from "../database/databaseConnection";
import createErrorResponseObjectBasedOnHttpStatusCode from "../utils/createErrorResponseObjectBasedOnHttpStatusCode";
import createGenericResponseObjectFromSelect from "../utils/createGenericResponseObjectFromSelect";

export default {
  createSession: async request => {
    const { id } = request.body;

    const [ongName] = await connection('ongs').where('id', id).select('name');

    if (!ongName) {
      return createErrorResponseObjectBasedOnHttpStatusCode("404");
    }

    return createGenericResponseObjectFromSelect("name", ongName['name']);
  }
};
