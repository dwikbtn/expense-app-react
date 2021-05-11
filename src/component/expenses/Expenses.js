import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
const Expense = (props) => {
  const [filteredYear, setYear] = useState("2020");
  const onFilterHandler = (data) => {
    setYear(data);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No Expenses this year</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense, id) => (
      <ExpenseItem
        key={id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          select={filteredYear}
          onFilterChange={onFilterHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expense;
