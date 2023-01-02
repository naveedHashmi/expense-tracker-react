import React, {useState} from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import defaultExpenses from './data/expenses'

import './App.css';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';

function App() {
  const [expenses, setExpenses] = useState(defaultExpenses)
  const [filteredExpenses, setFilteredExpenses] = useState(defaultExpenses)

  const addExpenseHandeler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses])
    setFilteredExpenses([expenseData, ...expenses])
  }

  const onDateFilterChange = (year) => {
    setFilteredExpenses(expenses.filter((expenseData) => expenseData.date.getFullYear().toString() === year));
  }

  let filteredContent = <h1>No Expenses Found!</h1>

  if (filteredExpenses.length > 0) {
    filteredContent = filteredExpenses.map(expenseItem => <ExpenseItem item={expenseItem}/>)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandeler}/>
      <ExpenseFilter onDateFilterChange={onDateFilterChange}/>
      { filteredContent }
    </div>
  );
}

export default App;
