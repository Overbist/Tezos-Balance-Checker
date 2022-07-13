import { v4 as uuid } from "uuid";

export function BalanceCheckerReducer(
  state: any[],
  action: {
    type: any;
    setPkh: string;
    setBalance: number;
    payload: string;
  }
) {
  switch (action.type) {
    case "addAddressItem":
      return [
        ...state,
        {
          id: uuid(),
          pkh: action.setPkh,
          balance: action.setBalance,
        },
      ];
    case "deleteAddressItem":
      return state.filter((todo: { id: string }) => todo.id !== action.payload);
    default:
      return state;
  }
}
