const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const port = 4000;

const jwtCheck = auth({
  audience: 'https://pr-tracker-api-endpoint',
  issuerBaseURL: 'https://dev-51h0rrt38nuipv61.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})