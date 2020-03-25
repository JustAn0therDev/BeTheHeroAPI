import express from "express";
import cors from "cors";
import ongRouter from "./routes/ongRouter";
import incidentRouter from "./routes/incidentRouter";
import profileRouter from "./routes/profileRouter";
import sessionRouter from "./routes/sessionRouter";

const app = express();

app.use(express.json());
app.use(cors()); 

app.use('/sessions', sessionRouter)
app.use('/ongs', ongRouter);
app.use('/incidents', incidentRouter);
app.use('/profile', profileRouter);

app.listen(3333);
