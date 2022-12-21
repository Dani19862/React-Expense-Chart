import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFiler from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilerYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilerYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
    <div>
      <Card className="expenses">
        <ExpensesFiler
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
