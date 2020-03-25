import express from 'express';
import sessionController from '../controllers/sessionController';

const router = express.Router();

router.post("/", async (request, response) => {
    response.status(200).json(sessionController.createSession(request));
});

export default router;