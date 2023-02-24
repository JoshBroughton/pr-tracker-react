const Pool = require('pg').Pool;
require('dotenv').config();
// this is what connects express to the db
let pool;
// for localhost connections (development)
if (process.env.NODE_ENV === "'DEVELOPMENT';") {
  pool = new Pool({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'prtracker'
  });
} else { // gets the connection string from render.com environment variables
  pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
  })
}

module.exports = pool;