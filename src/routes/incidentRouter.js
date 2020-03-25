import express from "express";
import incidentController from "../controllers/incidentController";

const router = express.Router();

router.get("/", async (request, response) => {
  let selectAllIncidentsResponse = await incidentController.selectAllIncidents(
    request
  );
  return response.json(selectAllIncidentsResponse);
});

router.post("/", async (request, response) => {
  let insertIncidentResponse = await incidentController.insertIncident(request);
  return response.json(insertIncidentResponse);
});

router.delete("/:id", async (request, response) => {
  let deleteIncidentResponse = await incidentController.deleteIncident(request);
  return response.json(deleteIncidentResponse);
});

export default router;
