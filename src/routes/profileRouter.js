import express from "express";
import profileController from "../controllers/profileController";

const router = express.Router();

router.get("/", async (request, response) => {
  return profileController.selectAllIncidentsFromAnSpecificOng(
    request,
    response
  );
});

export default router;
