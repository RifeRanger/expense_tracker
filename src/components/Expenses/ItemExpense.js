import './ItemExpense.css';
import DateExpense from './DateExpense';
import Card from '../Card';

function ExpenseItem(props) {


  return (
    <Card className='expense-item'>
      <DateExpense date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;