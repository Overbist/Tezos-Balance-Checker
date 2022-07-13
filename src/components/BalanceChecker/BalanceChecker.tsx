import React, { useEffect, useReducer } from "react";

import { BalanceCheckerContext } from "../../contexts/BalanceCheckerContext";
import { BalanceCheckerReducer } from "./BalanceCheckerReducer";
import { BalanceCheckerForm } from "./BalanceCheckerForm";
import { BalanceCheckerList } from "./BalanceCheckerList";
import { IBalanceChecker } from "../../interfaces/interfaces";

import "./BalanceChecker.scss";

export const BalanceChecker: React.FC = () => {
  const initialState = JSON.parse(
    localStorage.getItem("dataBalanceItems") || "[]"
  ) as IBalanceChecker[];
  const [state, dispatch] = useReducer(
    BalanceCheckerReducer,
    initialState
  ) as any[];

  useEffect(() => {
    localStorage.setItem("dataBalanceItems", JSON.stringify(state));
  }, [state]);

  return (
    <div className="balanceChecker">
      <BalanceCheckerContext.Provider value={{ dispatch }}>
        <BalanceCheckerForm />
        <BalanceCheckerList dataBalanceItems={state} />
      </BalanceCheckerContext.Provider>
    </div>
  );
};
