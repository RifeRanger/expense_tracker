import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
const expenses = [
  {title: 'King Soopers', amount: 83.76, date: new Date(2021, 4, 5)},
  {title: 'King Soopers', amount: 83.76, date: new Date(2021, 4, 5)},
  {title: 'King Soopers', amount: 83.76, date: new Date(2021, 4, 5)},
  {title: 'King Soopers', amount: 83.76, date: new Date(2021, 4, 5)}
]

  return (
    <div>
      <h2> Expense Tracker </h2>
      <NewExpense />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
