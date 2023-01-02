import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const [addExpenseButtonClicked, setAddExpenseButtonClicked] = useState(false);

  const addNewExpnseHandler = () => {
    setAddExpenseButtonClicked(!addExpenseButtonClicked)
  }

  const enteredExpenseHandler = (expenseData) => {
    props.onAddExpense(expenseData)
  }

  let newExpenseContent = <button onClick={addNewExpnseHandler}>Add New Expense</button>

  if (addExpenseButtonClicked) {
    newExpenseContent = <ExpenseForm enteredExpenseHandler={enteredExpenseHandler}/>
  }

  return <div className="new-expense">
    {newExpenseContent}
  </div>
};

export default NewExpense;
