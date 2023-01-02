import React, {useState} from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import defaultExpenses from './data/expenses'

import './App.css';

function App() {
  const [expenses, setExpenses] = useState(defaultExpenses)

  const addExpenseHandeler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses])
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandeler}/>
      { expenses.map(expenseItem => <ExpenseItem item={expenseItem}/>) }
    </div>
  );
}

export default App;
