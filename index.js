const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser')

const app = express();

const config = require('./server/config');
const api = require('./server');
const { authenticate, authenticateRoot } = require('./server/sessions');

app.use(cookieParser(undefined, {
  maxAge: config.SESSION_LIFETIME_IN_SECONDS
}));

app.use(logger('combined'));
app.get('index.html', authenticateRoot)
app.get('/', authenticateRoot)

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', authenticate)
app.use('/api', api);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
