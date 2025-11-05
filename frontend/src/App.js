import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
    fetchTotal();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/expenses`);
      setExpenses(response.data.data || []);
    } catch (error) {
      console.error('Error fetching expenses:', error);
      alert('Error fetching expenses. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const fetchTotal = async () => {
    try {
      const response = await axios.get(`${API_URL}/expenses/total`);
      setTotal(response.data.total || 0);
    } catch (error) {
      console.error('Error fetching total:', error);
    }
  };

  const handleAddExpense = async (expenseData) => {
    try {
      if (editingExpense) {
        await axios.put(`${API_URL}/expenses/${editingExpense._id}`, expenseData);
        setEditingExpense(null);
      } else {
        await axios.post(`${API_URL}/expenses`, expenseData);
      }
      fetchExpenses();
      fetchTotal();
    } catch (error) {
      console.error('Error saving expense:', error);
      alert('Error saving expense. Please try again.');
    }
  };

  const handleDeleteExpense = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await axios.delete(`${API_URL}/expenses/${id}`);
        fetchExpenses();
        fetchTotal();
      } catch (error) {
        console.error('Error deleting expense:', error);
        alert('Error deleting expense. Please try again.');
      }
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>💰 Expenses Tracker</h1>
          <p>Track and manage your expenses easily</p>
        </header>

        <ExpenseSummary total={total} expenseCount={expenses.length} />

        <ExpenseForm
          onSubmit={handleAddExpense}
          editingExpense={editingExpense}
          onCancel={handleCancelEdit}
        />

        <ExpenseList
          expenses={expenses}
          onDelete={handleDeleteExpense}
          onEdit={handleEditExpense}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;


