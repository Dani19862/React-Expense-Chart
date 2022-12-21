import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React , {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Car Insurance",
      amount: 247.96,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 8, 18),
    },
    {
      id: "e3",
      title: "Wooden",
      amount: 94.6,
      date: new Date(2020, 6, 23),
    },
    {
      id: "e4",
      title: "Watch",
      amount: 150.55,
      date: new Date(2022, 4, 30),
    },
  ];
  
  const App = () => {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
   
  const addExpesnseHandler = (expense) => {
    setExpenses((prevExpenses) => {
     return [expense, ...prevExpenses]; 
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets Started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense = {addExpesnseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
