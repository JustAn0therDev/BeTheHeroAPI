import express from 'express';
import ongController from '../controllers/ongController';

const router = express.Router();

router.get('/', async (req, res) => {
    return res.json(await ongController.selectAllOngs());
});

router.post('/', async (req, res) => {
    return res.json(await ongController.insertOng(request)).statusCode(201);
});

export default router;