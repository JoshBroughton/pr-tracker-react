const Pool = require('pg').Pool;
let pool;

pool = new Pool({
  user: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  host: 'postgres',
  port: 5432,
})

module.exports = pool;
