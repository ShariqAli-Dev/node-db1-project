const router = require('express').Router();
const Accounts = require('./accounts-model');
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
} = require('./accounts-middleware');

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

router.post('/', checkAccountPayload, async (req, res, next) => {
  try {
    const newAccount = await Accounts.create(req.account);
    res.status(201).json(newAccount);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', checkAccountPayload, async (req, res, next) => {
  try {
    const updatedAccount = await Accounts.updateById(
      req.params.id,
      req.account
    );
    res.status(201).json(updatedAccount);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = await Accounts.deleteById(req.params.id);
    res.status(201).json(data);
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
