import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const data = props.item
  return (
    <div className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        {data.title}
      </div>
      <div className="expense-item__price">
        ${data.amount}
      </div>
    </div>
  )
}

export default ExpenseItem;
