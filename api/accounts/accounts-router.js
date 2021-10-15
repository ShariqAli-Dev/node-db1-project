const router = require('express').Router();
const Accounts = require('./accounts-model');

router.get('/', async (req, res, next) => {
  try {
    const data = await Accounts.getAll();
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    // something
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
