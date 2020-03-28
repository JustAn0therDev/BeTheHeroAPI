import express from 'express';
import { celebrate, Segments, Joi } from "celebrate";
import sessionController from '../controllers/sessionController';
import sessionValidation from '../validators/sessionValidation';

const router = express.Router();

router.post("/", celebrate(sessionValidation), async (request, response) => {
    return response.json(await sessionController.createSession(request));
});

export default router;