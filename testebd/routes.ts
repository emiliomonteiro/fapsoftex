// routes.ts
import { Express } from 'express';
import { createFuncionario, getFuncionario, getFuncionarioById, updateFuncionario, deleteFuncionario } from './controller';

export function configureRoutes(app: Express, conexao: any) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/funcionario', (req, res) => {
    const consulta = 'SELECT funcionario.nome, funcionario.cargo FROM hotel.funcionario';
    conexao.query(consulta, (erro, resultado) => {
      if (erro) {
        console.log(erro);
        res.status(400).json({ erro: erro });
      } else {
        res.status(200).json(resultado);
      }
    });
  });

  app.post('/cadastrar', createFuncionario);

  app.get('/funcionario/:id', getFuncionarioById);

  app.put('/alterar/:id', updateFuncionario);

  app.delete('/excluir/:id', deleteFuncionario);
}
