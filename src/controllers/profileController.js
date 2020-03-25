import connection from "../database/databaseConnection";
import createGenericResponseObjectFromSelect from "../utils/createGenericResponseObjectFromSelect";

export default {
  selectAllIncidentsFromAnSpecificOng: async (request, response) => {
    let ong_id = request.headers.authorization;
    
    let [totalOfIncidentsInTheDatabase] = await connection("incidents").count();
    let arrayOfAllIncidentsFromAnSpecificOng = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    response.header(
      "X-Total-Count",
      totalOfIncidentsInTheDatabase["count(*)"]
    );

    return response.json(createGenericResponseObjectFromSelect(
      "listOfIncidents",
      arrayOfAllIncidentsFromAnSpecificOng
    ));
  }
};
