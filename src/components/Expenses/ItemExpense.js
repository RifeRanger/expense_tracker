import React, { useState } from 'react';

import './ItemExpense.css';
import DateExpense from './DateExpense';
import Card from '../UI/Card';

function ItemExpense(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Title Updated');
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <DateExpense date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card>
  );
}

export default ItemExpense;