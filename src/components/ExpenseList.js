import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";
const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => (
          <li className="transaction " key={expenseTransaction.id}>
            <ExpenseTransaction transaction={expenseTransaction} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
