const Accounts = require('./accounts-model');

const checkAccountPayload = (req, res, next) => {
  const name = req.body.name.trim();
  const budget = req.body.budget;

  if (!name || !budget) {
    next({ status: 400, message: 'name and budget are required' });
  } else if (typeof name !== 'string') {
    next({ status: 400, message: 'name of account must be a string' });
  } else if (name.length < 3 || name.length > 100) {
    next({ status: 400, message: 'name of account must be between 3 and 100' });
  } else if (typeof budget !== 'number') {
    next({ status: 400, message: 'budget of account must be a number' });
  } else if (budget < 0 || budget > 1000000) {
    next({
      status: 400,
      message: 'budget of account is too large or too small',
    });
  } else {
    req.account = { name: name, budget: budget };
    next();
  }
};

const checkAccountNameUnique = async (req, res, next) => {
  const accounts = await Accounts.getAll();
  if (accounts.find((account) => account.name === req.body.name.trim())) {
    next({ message: 'that name is taken' });
  } else {
    next();
  }
};

const checkAccountId = async (req, res, next) => {
  const accounts = await Accounts.getById(req.params.id);
  if (!accounts) {
    next({ status: 400, message: 'that name is taken' });
  } else {
    next();
  }
};

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
};
