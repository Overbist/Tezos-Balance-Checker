import { createContext, useContext } from "react";

export const BalanceCheckerContext = createContext({} as any);

export function useBalanceCheckerContext() {
  return useContext<any>(BalanceCheckerContext);
}
