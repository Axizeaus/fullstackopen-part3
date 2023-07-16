const express = require('express');
const app = express()

app.get('/', (request, response) => {
  response.send('<h2>this is working</h2>')
})