import express, {Express, Request, Response } from "express";
import dotenv from 'dotenv';

const app:Express = express();
const PORT = process.env.PORT || 3050;

app.get('/api/jobs', (req: Request, res: Response) => {

})

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))