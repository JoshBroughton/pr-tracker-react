const Pool = require('pg').Pool;
// this is what connects express to the db
const pool = new Pool({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'prtracker'
});

module.exports = pool;