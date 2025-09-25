// Importa o framework Express e os tipos Request e Response do TypeScript
// - express: função principal para criar o app
// - Request: tipo que representa a requisição HTTP
// - Response: tipo que representa a resposta HTTP
import express, { Request, Response } from "express";

// Cria uma instância do servidor Express
const app = express();

// Define a porta em que o servidor vai rodar
const port = 3030;

// Middleware que diz ao Express para entender requisições com corpo JSON
// Isso é necessário para que possamos acessar os dados enviados em POST, por exemplo
app.use(express.json());

// Define uma rota do tipo GET em /ping
// Quando o usuário acessa GET /ping, essa função é executada
app.get('/ping', (req: Request, res: Response) => {
    // Envia uma resposta JSON com a mensagem "pong"
    res.json({ message: 'pong' });
});

// Inicia o servidor e faz ele "ouvir" na porta definida (3030)
// Quando o servidor estiver rodando, imprime a mensagem no console
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

