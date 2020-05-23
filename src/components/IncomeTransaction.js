import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <span className="transaction-text">{transaction.incomeText}</span>
      <span className="transaction-amount">${transaction.incomeAmount}</span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </>
  );
};

export default Transactions;
