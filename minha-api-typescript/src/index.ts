import express, {Request, Response} from "express";

const app = express();
const port = 3030;

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
    res.json({message: 'pong'});
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

