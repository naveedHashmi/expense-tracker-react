import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = () => {
  const [addExpenseButtonClicked, setAddExpenseButtonClicked] = useState(false);

  const addNewExpnseHandler = () => {
    setAddExpenseButtonClicked(!addExpenseButtonClicked)
  }

  let newExpenseContent = <button onClick={addNewExpnseHandler}>Add New Expense</button>

  if (addExpenseButtonClicked) {
    newExpenseContent = <ExpenseForm />
  }

  return <div className="new-expense">
    {newExpenseContent}
  </div>
};

export default NewExpense;
