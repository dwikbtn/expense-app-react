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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          select={filteredYear}
          onFilterChange={onFilterHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
