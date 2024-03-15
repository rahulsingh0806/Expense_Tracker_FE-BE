// src/components/ExpenseList.js
import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
    return (
        <div className='listcontainer'>
            <h2 className='listcontainer-h2'>Expense List</h2>
            <table className='listcontainer-table'>
                <thead>
                    <tr className='listcontainer-tr'>
                        <th className='listcontainer-th'>Description</th>
                        <th className='listcontainer-th'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='listcontainer-tr'>
                        <td className='listcontainer-tr'>
                            <ul className='listcontainer-ul'>
                                {expenses.map((expense) => (
                                    <li key={expense.id} className='listcontainer-li'>
                                        {expense.description}
                                    </li>
                                ))}
                            </ul>
                        </td>

                        <td className='listcontainer-td'>
                            <ul className='listcontainer-ul'>
                                {expenses.map((expense) => (
                                    <li key={expense.id} className='listcontainer-li'>
                                        ₹{expense.amount}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default ExpenseList;
