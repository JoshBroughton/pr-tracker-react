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
  const lifts = {
    squats: [{
      reps: 1,
      weight: 445,
      date: new Date(),
      e1rm: 445, 
    },
    {
      reps: 2,
      weight: 405,
      date: new Date(),
      e1rm: 435,
    }],
    benches:
    [{
      reps: 1,
      weight: 445,
      date: new Date(),
      e1rm: 445, 
    },
    {
      reps: 2,
      weight: 405,
      date: new Date(),
      e1rm: 435,
    }],
    deadlifts: [{
      reps: 1,
      weight: 445,
      date: new Date(),
      e1rm: 445, 
    },
    {
      reps: 2,
      weight: 405,
      date: new Date(),
      e1rm: 435,
    }]
  }
  res.json(lifts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})