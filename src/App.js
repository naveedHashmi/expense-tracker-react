import ExpenseItem from './components/ExpenseItem';
import expences from './data/expenses'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Let's get started</h1>
      { expences.map(expenseItem => <ExpenseItem item={expenseItem}/>) }
    </div>
  );
}

export default App;
