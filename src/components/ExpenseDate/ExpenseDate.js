import './ExpenseDate.css'


function ExpenseDate(props) {
  const date = props.date
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  const day = date.getDay()
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {month}
      </div>
      <div className="expense-date__year">
        {year}
      </div>
      <div className="expense-date__date">{day}</div>
    </div>
  )
}

export   default ExpenseDate;
