import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      enteredTitle: title,
      enteredAmount: +amount,
      enteredDate: new Date(date)
    }

    props.enteredExpenseHandler(expenseData)

    setTitle('');
    setAmount(0);
    setDate(new Date());
  }

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type='number' value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input type='date' value={date} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  )
};

export default ExpenseForm;
