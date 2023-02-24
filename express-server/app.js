const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');
const port = 4000;

const corsOptions = {
  origin: 'https://joshbroughton.github.io',
  optionsSuccessStatus: 200,
};

app.use(express.json())

app.post('/lifts', cors(corsOptions), async (req, res) => {
  const { user_id, lift_type } = req.body;
  try {
    const lifts = await pool.query(
      'SELECT a.reps, a.weight, a.estimated_max, a.date FROM lifts AS a ' +
      'INNER JOIN (SELECT reps, MAX(weight) AS max_weight FROM lifts WHERE user_id = $1 AND lift_type = $2 GROUP BY reps) as b ' +
      'ON a.reps = b.reps AND a.weight = b.max_weight AND a.user_id = $1 AND a.lift_type = $2',
      [user_id, lift_type]
    )
    res.json(lifts.rows)
  } catch (error) {
    console.error(error.message);
  }
})

app.post('/create-lift', cors(corsOptions), async (req, res) => {
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
  console.log(`PR Tracker API app listening`);
})