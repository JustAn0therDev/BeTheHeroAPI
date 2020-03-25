import express from "express";
import incidentController from "../controllers/incidentController";

const router = express.Router();

router.get("/", async (request, response) => {
  return response.json(await incidentController.selectAllIncidents(request));
});

router.post("/", async (request, response) => {
  return response.status(201).json(await incidentController.insertIncident(request));
});

router.delete("/:id", async (request, response) => {
  return response.status(204).json(await incidentController.deleteIncident(request));
});

export default router;
