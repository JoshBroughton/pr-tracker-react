const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const port = 4000;

const jwtCheck = auth({
  audience: 'https://pr-tracker-api-endpoint',
  issuerBaseURL: 'https://dev-51h0rrt38nuipv61.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

app.get('/lifts', (req, res) => {
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
  res.json(lifts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})