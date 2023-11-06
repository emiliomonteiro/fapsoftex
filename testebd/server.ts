// server.ts
import express from 'express';
import { json } from 'express';
import { createConnection } from 'mysql2';
import { configureRoutes } from './routes';

const app = express();

const conexao = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'hotel',
});

app.use(json());

configureRoutes(app, conexao);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
