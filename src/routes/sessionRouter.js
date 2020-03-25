import express from 'express';
import sessionController from '../controllers/sessionController';

const router = express.Router();

router.post("/", async (request, response) => {
    return response.json(await sessionController.createSession(request));
});

export default router;