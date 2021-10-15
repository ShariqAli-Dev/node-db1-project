const router = require('express').Router();
const Accounts = require('./accounts-model');

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll();
    res.status(201).json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id);
    res.status(201).json(account);
  } catch (err) {
    next(err);
  }
});

router.post('/', (req, res, next) => {
  try {
    // something
  } catch (err) {
    next(err);
  }
});

router.put('/:id', (req, res, next) => {
  try {
    // something
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    // something
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
