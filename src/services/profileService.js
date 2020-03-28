import connection from "../database/databaseConnection";
import createGenericResponseObjectFromSelect from "../utils/createGenericResponseObjectFromSelect";

export default {
  selectAllIncidentsFromAnSpecificOng: async (request, response) => {
    let ong_id = request.headers.authorization;
    
    let [totalOfIncidentsInTheDatabase] = await connection("incidents").count();
    let arrayOfAllIncidentsFromASpecificOng = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    //This function is the only one that has a response parameter,
    //since it has a custom header that needs to be built from the database.
    response.header(
      "X-Total-Count",
      totalOfIncidentsInTheDatabase["count(*)"]
    );

    return response.json(createGenericResponseObjectFromSelect(
      "listOfIncidents",
      arrayOfAllIncidentsFromASpecificOng
    ));
  }
};
