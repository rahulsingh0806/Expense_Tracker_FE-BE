// src/components/ExpenseForm.js
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense, userId }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!description || !amount) {
            setError('Please fill in all fields.');
            return;
        }
        const newExpense = {
            id: new Date().getTime().toString(), 
            description,
            amount: parseFloat(amount),
        };

        onAddExpense(newExpense);
        setDescription('');
        setAmount('');

    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <table className='form-container-table'>
                <tbody>
                    <tr>
                        <td className='title'>
                            <label htmlFor='desc' className='form-container-label'>
                                Description:
                            </label>
                        </td>
                        <td className='data'>
                            <input
                                className='form-container-input'
                                name='desc'
                                type='text'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>
                            <label htmlFor='amount' className='form-container-label'>
                                Amount:
                            </label>
                        </td>
                        <td className='data'>
                            <input
                                className='form-container-input'
                                name='amount'
                                type='number'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <button type='submit' className='form-container-button'>
                Add Expense
            </button>

            {error && <p className='form-error'>{error}</p>}
        </form>
    );
};

export default ExpenseForm;
