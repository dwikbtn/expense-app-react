import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setButton(true);
  };

  const addExpenseFormHandler = () => {
    setButton(true);
  };

  const onCancelEditingHandler = () => {
    setButton(false);
  };

  //button state
  const [buttonStatus, setButton] = useState(false);
  if (buttonStatus === false) {
    return (
      <div className="new-expense">
        <button onClick={addExpenseFormHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={onCancelEditingHandler}
      />
    </div>
  );
};

export default NewExpense;
