import { Router } from 'express';
import { AutenticacaoController } from '../controllers/AutenticacaoController';

const rotasAutenticacao = Router();
const autenticacaoController = new AutenticacaoController();

// Definindo que quando chamarem POST /, vai para o Controller
rotasAutenticacao.post('/', autenticacaoController.login);

export { rotasAutenticacao };