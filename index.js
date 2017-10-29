const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
const api = require('./server');

app.use(logger('combined'));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', api);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
