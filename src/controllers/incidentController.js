import connection from "../database/databaseConnection";
import createGenericResponseObjectFromInsert from "../utils/createGenericResponseObjectFromInsert";
import createGenericResponseObjectFromSelect from "../utils/createGenericResponseObjectFromSelect";
import createGenericResponseObjectFromDelete from "../utils/createGenericResponseObjectFromDelete";
import createErrorResponseObjectBasedOnHttpStatusCode from "../utils/createErrorResponseObjectBasedOnHttpStatusCode";

export default {
  selectAllIncidents: async request => {
    let { page = 1 } = request.query;
    let arrayOfAllIncidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    return createGenericResponseObjectFromSelect(
      "listOfAllIncidents",
      arrayOfAllIncidents
    );
  },
  insertIncident: async request => {
    let { title, description, value } = request.body;

    let ong_id = request.headers.authorization;

    try {
      const [id] = await connection("incidents").insert({
        ong_id,
        title,
        description,
        value
      });
      return createGenericResponseObjectFromInsert(id);
    } catch (error) {
      return createGenericResponseObjectFromInsert("", error);
    }
  },
  deleteIncident: async request => {
    var incident;
    let deletionWasSuccessful = false;
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    try {
      incident = await connection("incidents")
        .where("id", id)
        .select("ong_id")
        .first();

      if (incident.ong_id !== ong_id) {
        return createErrorResponseObjectBasedOnHttpStatusCode("401");
      }

      await connection("incidents")
        .where("id", id)
        .delete();

      deletionWasSuccessful = incident ? true : false;

      return createGenericResponseObjectFromDelete(deletionWasSuccessful);
    } catch (error) {
      return createGenericResponseObjectFromDelete(
        deletionWasSuccessful,
        error
      );
    }
  }
};
