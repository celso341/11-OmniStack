const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTPS:
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação o back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * tipo de parâmetros
   * 
   * Query Params: Parâmetro nomeados enviados na rota após "?" (Filtros paginação)
   * Route Params: Parêmetros utilizados para indentificar recursos
   * Request Body: Corpo da requisição utilizando para criar o alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostreSQL, Oracle, Microsoft SQL Server.
    * NoSQL: MongoDB, CouchDB, etc.
    */
   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */