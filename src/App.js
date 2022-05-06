import ExpenseItem from "./components/ItemExpense";

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
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
