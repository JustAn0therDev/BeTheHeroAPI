import crypto from "crypto";
import databaseConnection from "../database/databaseConnection";
import createGenericResponseObjectFromSelect from "../utils/createGenericResponseObjectFromSelect";
import createGenericResponseObjectFromInsert from "../utils/createGenericResponseObjectFromInsert";

export default {
  selectAllOngs: async () => {
    let arrayOfAllOngs = await databaseConnection("ongs").select("*");

    return createGenericResponseObjectFromSelect(
      "listOfAllOngs",
      arrayOfAllOngs
    );
  },
  insertOng: async request => {
    let { name, email, whatsapp, city, uf } = request.body;

    let randomlyGeneratedId = crypto.randomBytes(4).toString("HEX");

    try {
      await databaseConnection("ongs").insert({
        id: randomlyGeneratedId,
        name,
        email,
        whatsapp,
        city,
        uf
      });

      return createGenericResponseObjectFromInsert(randomlyGeneratedId);
    } catch (error) {
      return createGenericResponseObjectFromInsert("", error);
    }
  }
};
