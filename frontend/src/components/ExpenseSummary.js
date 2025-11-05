import React from 'react';

const ExpenseSummary = ({ total, expenseCount }) => {
  return (
    <div className="summary-grid">
      <div className="summary-card">
        <h3>Total Expenses</h3>
        <div className="amount">${total.toFixed(2)}</div>
      </div>
      <div className="summary-card">
        <h3>Total Transactions</h3>
        <div className="count">{expenseCount}</div>
      </div>
      <div className="summary-card">
        <h3>Average per Transaction</h3>
        <div className="amount">
          ${expenseCount > 0 ? (total / expenseCount).toFixed(2) : '0.00'}
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;


