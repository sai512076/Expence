const express = require('express');
const router = express.Router();
const {
  getAllExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
  getExpensesByCategory,
  getTotalExpenses
} = require('../controllers/expenseController');

router.route('/')
  .get(getAllExpenses)
  .post(createExpense);

router.route('/total')
  .get(getTotalExpenses);

router.route('/category/:category')
  .get(getExpensesByCategory);

router.route('/:id')
  .get(getExpense)
  .put(updateExpense)
  .delete(deleteExpense);

module.exports = router;


