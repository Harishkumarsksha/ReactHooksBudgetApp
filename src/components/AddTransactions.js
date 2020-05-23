import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";
const AddTransactions = () => {
  const { addIncomeTransaction } = useContext(GlobalContext);
  const { addExpenseTransaction } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const onChangeIncome = (event) => {
    setIncome({ ...income, [event.target.name]: event.target.value });
  };

  const handelIncomeFromSubmit = (event) => {
    event.preventDefault();

    if (income.incomeText !== "" && income.incomeAmount) {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText: income.incomeText,
        incomeAmount: income.incomeAmount * 1,
      };
      addIncomeTransaction(newIncomeTransaction);
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const onChanewExpense = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  const handelExpenseFromSubmit = (event) => {
    event.preventDefault();

    if (expense.incomeText !== "" && expense.incomeAmount) {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText: expense.expenseText,
        expenseAmount: expense.expenseAmount * 1,
      };
      addExpenseTransaction(newExpenseTransaction);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handelIncomeFromSubmit}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add Income ...."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={handelExpenseFromSubmit}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            placeholder="Add Expense ...."
            autoComplete="off"
            onChange={onChanewExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChanewExpense}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransactions;
