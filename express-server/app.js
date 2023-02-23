const express = require('express');
const cors = require('cors');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const pool = require('./db');
const port = 4000;

app.use(cors())
app.use(express.json())

app.post('/lifts', async (req, res) => {
  const { user_id, lift_type } = req.body;
  try {
    const lifts = await pool.query(
      'SELECT reps, weight, estimated_max, date FROM lifts ' +
      'WHERE user_id = $1 AND lift_type = $2 AND weight IN (SELECT MAX(weight) FROM lifts WHERE user_id = $1 AND lift_type = $2 GROUP BY reps)',
      [user_id, lift_type]
    )
    console.log(lifts.rows)
    res.json(lifts.rows)
  } catch (error) {
    console.error(error.message);
  }
})

app.post('/create-lift', async (req, res) => {
  try {
    const { user_id, lift_type, reps, weight, date} = req.body;
    const lift = await pool.query(
      'INSERT INTO lifts(user_id, lift_type, reps, weight, date) values($1, $2, $3, $4, $5)',
      [user_id, lift_type, reps, weight, date]
    )
  } catch (error) {
    console.error(error.message)
  }
  res.send();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})