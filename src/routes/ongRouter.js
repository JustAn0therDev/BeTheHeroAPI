import express from "express";
import { celebrate } from "celebrate";
import ongController from "../controllers/ongController";
import ongCreationRequestBodyValidation from "../validators/ongCreationRequestBodyValidation";
const router = express.Router();

router.get("/", async (request, response) => {
  let selectAllOngsResponse = await ongController.selectAllOngs();
  return response.json(selectAllOngsResponse);
});

router.post(
  "/",
  celebrate(ongCreationRequestBodyValidation),
  async (request, response) => {
    let insertOngResponse = await ongController.insertOng(request);
    return response.json(insertOngResponse);
  }
);

export default router;
