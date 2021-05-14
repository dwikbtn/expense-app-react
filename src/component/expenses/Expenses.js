import React, { useState } from "react";

import "./Expenses.css";

import Card from "./../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpensesFilter";
const Expense = (props) => {
  const [filteredYear, setYear] = useState("2020");
  const onFilterHandler = (data) => {
    setYear(data);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          select={filteredYear}
          onFilterChange={onFilterHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
