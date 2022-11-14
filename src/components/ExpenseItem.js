import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <ExpenseDate></ExpenseDate>
      <div className="expense-item__title">
        Title
      </div>
      <div className="expense-item__amount">
        Amount
      </div>
    </div>
  )
}

export default ExpenseItem;
