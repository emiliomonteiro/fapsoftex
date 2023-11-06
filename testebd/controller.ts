// controller.ts
import { Request, Response } from 'express';

export function createFuncionario(req: Request, res: Response) {
  const dados = req.body;
  const sql = 'INSERT INTO hotel.funcionario SET ?';
  conexao.query(sql, dados, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(400).json({ erro: erro });
    } else {
      res.status(201).json(resultado);
    }
  });
}

export function getFuncionarioById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const sql = 'SELECT * FROM hotel.funcionario WHERE idFuncionario = ?';
  conexao.query(sql, id, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(400).json({ erro: erro });
    } else {
      res.status(201).json(resultado);
    }
  });
}

export function updateFuncionario(req: Request, res: Response) {
  const id = Number(req.params.id);
  const dados = req.body;
  const sql = 'UPDATE funcionario SET ? WHERE idFuncionario = ?';
  conexao.query(sql, [dados, id], (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(400).json({ erro: erro });
    } else {
      res.status(201).json(resultado);
    }
  });
}

export function deleteFuncionario(req: Request, res: Response) {
  const id = Number(req.params.id);
  const sql = 'DELETE FROM hotel.funcionario WHERE idFuncionario = ?';
  conexao.query(sql, id, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(400).json({ erro: erro });
    } else {
      res.status(201).json(resultado);
    }
  });
}
