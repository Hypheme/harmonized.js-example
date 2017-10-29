const { Router } = require('express');
const cookieParser = require('cookie-parser')

const config = require('./config');
const sessions = require('./sessions');
const ServerError = require('./server-error');

const router = Router();
router.use(cookieParser(undefined, {
  maxAge: config.SESSION_LIFETIME_IN_SECONDS
}));

router.use('/authors', sessions.authenticate, require('./routes/authors'));
router.use('/todos', sessions.authenticate, require('./routes/todos'));
router.use('/sessions', sessions.authenticate, sessions.get);

router.use((req, res, next) => next(new ServerError.notFound()))

module.exports = router;
