import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditiing] = useState(false);

  const saveExpenseDataHandler = (enteredExpreseData) => {
    const expenseData = {
      ...enteredExpreseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditiing(false);
  };

  const startEditingHandler = () => {
    setIsEditiing(true);
  };

  const stopEditingHandler = () => {
    setIsEditiing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
