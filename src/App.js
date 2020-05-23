import React from "react";
import "./App.css";

import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransactions from "./components/AddTransactions";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";
import { AppReducer } from "./context/AppRducer";
const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransactions />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
