# Resposta

```JavaScript

import express, { json } from "express";
import mysql from "mysql2";

const app = express();

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "hotel",
});

db.serialize(() => {
    db.run('CREATE TABLE users (id INT, name TEXT)');

    const stmt = db.prepare('INSERT INTO users VALUES (?, ?)');
    stmt.run(1, 'Teste');
    stmt.finalize();

    db.each('SELECT id, name FROM users', (err, row) => {
        if (err) {
            console.error('Erro ao buscar dados:', err.message);
            return;
        }
        console.log('ID:', row.id, 'Nome:', row.name);
    });
});

db.close((err) => {
    if (err) {
        return console.error('Erro ao fechar o banco de dados:', err.message);
    }
    console.log('Conexão com o banco de dados encerrada com sucesso.');
});


```
