import express from 'express';
import { rotasAutenticacao } from './routes/autenticacao.routes';

const app = express();
app.use(express.json());

// Toda rota que começar com /login vai ser tratada pelo arquivo de rotas
app.use('/login', rotasAutenticacao);

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});