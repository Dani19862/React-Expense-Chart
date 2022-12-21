import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFiler from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilerYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilerYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let exepensesContent = <p>No Expenses Found</p>;
  if (filteredExpenses.length > 0) {
    exepensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFiler
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {exepensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
