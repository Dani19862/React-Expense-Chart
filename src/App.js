import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 12.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 10.5,
    date: new Date(2021, 8, 18),
  },
  {
    id: "e4",
    title: "Tv",
    amount: 154.99,
    date: new Date(2022, 4, 7),
  },
  {
    id: "e5",
    title: "wallet",
    amount: 100,
    date: new Date(2022, 6, 23),
  },
  {
    id: "e6",
    title: "Bag",
    amount: 94.12,
    date: new Date(2020, 8, 18),
  },
  {
    id: "e7",
    title: "wallet",
    amount: 94.12,
    date: new Date(2020, 3, 18),
  },
  {
    id: "e8",
    title: "Toilet Paper",
    amount: 15.9,
    date: new Date(2019, 1, 18),
  },
  {
    id: "e9",
    title: "bla bla",
    amount: 49.99,
    date: new Date(2019, 11, 23),
  },
  {
    id: "e10",
    title: "some staff",
    amount: 92.5,
    date: new Date(2019, 3, 30),
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
    <div className="app">
      <NewExpense onAddExpense={addExpesnseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
