const Pool = require('pg').Pool;
// this is what connects express to the db
let pool;
// for localhost connections (development)
console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env);
pool = new Pool({
  user: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 5432,
})

module.exports = pool;
