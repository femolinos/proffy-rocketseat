import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// http://localhost:3333/users - Isto é uma rota, e o "users" é um recurso
// http://localhost:3333/contacts - Isto é outra rota, e o "contacts" é um recurso
// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar (request.params)
// Query Params: Paginação, filtros, ordenação (request.query)

app.listen(3333);

// SELECT * FROM users ficaria assim: knex('users').select('*');