import ExpenseDate from '../ExpenseDate/ExpenseDate'
import ExpenseCard from '../ExpenseCard/ExpenseCard'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const data = props.item
  return (
    <ExpenseCard className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        {data.title}
      </div>
      <div className="expense-item__price">
        ${data.amount}
      </div>
    </ExpenseCard>
  )
}

export default ExpenseItem;
