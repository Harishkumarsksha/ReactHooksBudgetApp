import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <span className="transaction-text">{transaction.expenseText}</span>
      <span className="transaction-amount">${transaction.expenseAmount}</span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </>
  );
};

export default ExpenseTransaction;
