import express from "express";
import { celebrate } from "celebrate";
import headersValidation from "../validators/headersValidation";
import profileController from "../controllers/profileController";

const router = express.Router();

router.get("/", celebrate(headersValidation), async (request, response) => {
  return await profileController.selectAllIncidentsFromAnSpecificOng(
    request,
    response
  );
});

export default router;
