import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppRducer";

const initailState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")) || [],
};

export const GlobalContext = createContext(initailState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initailState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(state.expenseTransactions)
    );
  });

  const addIncomeTransaction = (expenseTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: expenseTransaction,
    });
    console.log("insde the context add ", expenseTransaction);
  };

  const addExpenseTransaction = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncomeTransaction,
        addExpenseTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
