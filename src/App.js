import ExpenseItem from './components/ExpenseItem';

import './App.css';

function App() {
  const expences = [
    {id: 'e1', title: 'Expense Item 1', amount: 333.2, date: new Date(2000, 1, 1) },
    {id: 'e2', title: 'Expense Item 2', amount: 33.2, date: new Date(2000, 1, 1) },
    {id: 'e3', title: 'Expense Item 3', amount: 13.2, date: new Date(2000, 1, 1) },
    {id: 'e4', title: 'Expense Item 4', amount: 48.2, date: new Date(2000, 1, 1) }
  ]
  return (
    <div className="App">
      <h1>Let's get started</h1>
      { expences.map(expenseItem => <ExpenseItem/>) }
    </div>
  );
}

export default App;
