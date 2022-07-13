import React from "react";
import { useBalanceCheckerContext } from "../../contexts/BalanceCheckerContext";
import { IBalanceChecker } from "../../interfaces/interfaces";
import { CgClose } from "react-icons/cg";

type IBalanceCheckerListProps = {
  dataBalanceItems: IBalanceChecker[];
};

export const BalanceCheckerList: React.FC<IBalanceCheckerListProps> = ({
  dataBalanceItems,
}) => {
  const { dispatch } = useBalanceCheckerContext();

  const onDeletePkh = (id: string) => {
    dispatch({
      type: "deleteAddressItem",
      payload: id,
    });
  };

  return (
    <>
      {dataBalanceItems.length > 0 && (
        <ul className="balanceChecker__list">
          {dataBalanceItems.map((balanceItem) => {
            return (
              <li className="balanceChecker__item" key={balanceItem.id}>
                <p className="balanceChecker__pkh">{balanceItem.pkh}</p>
                <p className="balanceChecker__balance">{balanceItem.balance}</p>
                <CgClose
                  className="balanceChecker__trash"
                  onClick={() => onDeletePkh(balanceItem.id)}
                  size={20}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
