import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import './DashBoard.css';

export default function Dashboard() {
    const [expenses, setExpenses] = useState([]);

    function addExpense(newExpense) {
        setExpenses([...expenses, newExpense]);
    }

    return (
        <div className="main-container">
            <h1 className='main-container-h1'>Expense Tracker</h1>
            <div className='form-container'>
                <ExpenseForm onAddExpense={addExpense} />
            </div>
            <div className='list-container'>
                <ExpenseList expenses={expenses} />
            </div>

            <p className='total-p'>Total: ₹{expenses.reduce((total, expense) => total + expense.amount, 0)}</p>
        </div>
    );
}
