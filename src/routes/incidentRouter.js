import express from "express";
import { celebrate } from "celebrate";

import incidentController from "../controllers/incidentController";

import idValidation from "../validators/idValidation";
import queryParamsNumOfPagesValidation from "../validators/queryParamsNumOfPagesValidation";
import incidentCreationRequestBodyValidation from "../validators/incidentCreationRequestValidation";

const router = express.Router();

router.get("/", celebrate(queryParamsNumOfPagesValidation), async (request, response) => {
  let selectAllIncidentsResponse = await incidentController.selectAllIncidents(
    request
  );
  return response.json(selectAllIncidentsResponse);
});

router.post("/", celebrate(incidentCreationRequestBodyValidation), async (request, response) => {
  let insertIncidentResponse = await incidentController.insertIncident(request);
  return response.json(insertIncidentResponse);
});

router.delete("/:id", celebrate(idValidation), async (request, response) => {
  let deleteIncidentResponse = await incidentController.deleteIncident(request);
  return response.json(deleteIncidentResponse);
});

export default router;
