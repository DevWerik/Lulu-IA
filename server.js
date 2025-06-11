import express from 'express';
import chatRoutes from './src/routes/chat.routes.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use ('/api/chat', chatRoutes)

app.listen(PORT, () => {

  console.log(`Servidor rodando na Porta ${PORT}`)
});