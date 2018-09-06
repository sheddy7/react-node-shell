const express = require('express');
const bodyParser = require('body-parser');

export const PORT = 3000;

import fetchData from './middleware/fetchData';

const app = express();

app.set('port', PORT);

app.use(bodyParser.json());

// Use the timeout delay to imitate a real request
app.use((req, res, next) => {
  setTimeout(next, 1000);
});

app.get('/api/data', fetchData);

app.use(express.static(__dirname + './../../')); //serves the index.html
app.listen(PORT);
