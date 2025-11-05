import React from 'react';
import { format } from 'date-fns';

const ExpenseList = ({ expenses, onDelete, onEdit, loading }) => {
  if (loading) {
    return (
      <div className="card">
        <div className="loading">Loading expenses...</div>
      </div>
    );
  }

  if (expenses.length === 0) {
    return (
      <div className="card">
        <div className="empty-state">
          <h3>No expenses yet</h3>
          <p>Start tracking your expenses by adding your first expense above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Expense History</h2>
      <div>
        {expenses.map(expense => (
          <div key={expense._id} className="expense-item">
            <div className="expense-info">
              <div className="expense-title">{expense.title}</div>
              <div className="expense-details">
                <span>📁 {expense.category}</span>
                <span>📅 {format(new Date(expense.date), 'MMM dd, yyyy')}</span>
                {expense.description && <span>💬 {expense.description}</span>}
              </div>
            </div>
            <div className="expense-amount">${expense.amount.toFixed(2)}</div>
            <div className="expense-actions">
              <button
                className="btn btn-success btn-sm"
                onClick={() => onEdit(expense)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(expense._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;


