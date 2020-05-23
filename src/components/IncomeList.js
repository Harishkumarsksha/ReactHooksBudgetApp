import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  console.log(incomeTransactions);
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction) => (
          <li className="transaction " key={incomeTransaction.id}>
            <Transaction transaction={incomeTransaction} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
