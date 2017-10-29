const { Router } = require('express');
const bodyParser = require('body-parser')

const sessions = require('./sessions');
const ServerError = require('./server-error');

const router = Router();
router.use(bodyParser.json());

router.use('/authors', require('./routes/authors').router);
router.use('/todos', require('./routes/todos').router);
router.get('/sessions', sessions.get);

router.use((req, res, next) => next(new ServerError.NotFound()))
router.use((err, req, res, next) => 	{
  res.status(err.status || 500);
	res.json({
		message: err.message,
	});
});

module.exports = router;
