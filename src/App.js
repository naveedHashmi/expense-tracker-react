import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import expences from './data/expenses'

import './App.css';

function App() {
  return (
    <div className="App">
      <NewExpense />
      { expences.map(expenseItem => <ExpenseItem item={expenseItem}/>) }
    </div>
  );
}

export default App;
