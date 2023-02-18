const express = require('express');
const cors = require('cors');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const port = 4000;

app.use(cors())
app.use(express.json())

const jwtCheck = auth({
  audience: 'https://pr-tracker-api-endpoint',
  issuerBaseURL: 'https://dev-51h0rrt38nuipv61.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

date = new Date()
  const lifts = {
    Squat: [{
      reps: 1,
      weight: 445,
      date: date.toDateString(),
      e1rm: 445, 
    },
    {
      reps: 2,
      weight: 405,
      date: date.toDateString(),
      e1rm: 435,
    }],
    Bench:
    [{
      reps: 1,
      weight: 245,
      date: date.toDateString(),
      e1rm: 245, 
    },
    {
      reps: 2,
      weight: 235,
      date: date.toDateString(),
      e1rm: 240,
    }],
    Deadlift: [{
      reps: 1,
      weight: 425,
      date: date.toDateString(),
      e1rm: 425, 
    },
    {
      reps: 2,
      weight: 405,
      date: date.toDateString(),
      e1rm: 435,
    }]
  }

app.get('/lifts', (req, res) => {
  res.json(lifts)
})

app.post('/create-lift', (req, res) => {
  console.log(req.body);
  newLift = req.body;
  lifts[newLift.lift].push({reps: newLift.reps, weight: newLift.weight, date: newLift.date, e1rm: 200 })
  res.send();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})