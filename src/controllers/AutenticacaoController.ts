import { Request, Response } from 'express';

export class AutenticacaoController {
  
  // Método responsável por receber a requisição de login
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    // Por enquanto, mantemos o MOCK aqui dentro para não travar o projeto
    return res.json({
      mensagem: "Login realizado com sucesso (MOCK DO CONTROLLER)",
      token: "token-jwt-exemplo-modulo-1",
      usuario: {
        nome: "Usuário Teste",
        perfil: "Aluno"
      }
    });
  }

}