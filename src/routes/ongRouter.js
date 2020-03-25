import express from "express";
import ongController from "../controllers/ongController";
const router = express.Router();

router.get("/", async (request, response) => {
  let selectAllOngsResponse = await ongController.selectAllOngs();
  return response.json(selectAllOngsResponse);
});

router.post("/", async (request, response) => {
  let insertOngResponse = await ongController.insertOng(request);
  return response.json(insertOngResponse);
});

export default router;
