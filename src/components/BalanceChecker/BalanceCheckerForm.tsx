import React, { useState, useRef, useEffect } from "react";
import { useBalanceCheckerContext } from "../../contexts/BalanceCheckerContext";
import { TezosToolkit } from "@taquito/taquito";
import { toast } from "react-toastify";

export const BalanceCheckerForm: React.FC = () => {
  const { dispatch } = useBalanceCheckerContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const RPC_URL = "https://mainnet-node.madfish.solutions";
  const Tezos = new TezosToolkit(RPC_URL);
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    (async () => getWalletBalance())();
  }, [address]);

  const getWalletBalance = async () => {
    if (address.trim() === "" || address.trim().length !== 36) return;
    try {
      const bal = await Tezos.tz.getBalance(address);
      const res = bal.toNumber() / 1000000;
      setBalance(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onAddAddressItem = () => {
    dispatch({
      type: "addAddressItem",
      setPkh: address,
      setBalance: balance,
    });
  };

  const onInputFocus = () => {
    inputRef.current!.focus();
  };

  const submitHandler = (event: React.MouseEvent) => {
    const validateInput = address.trim() !== "" && address.trim().length === 36;
    event.preventDefault();

    if (validateInput) {
      getWalletBalance();
      onAddAddressItem();
      onInputFocus();
      setAddress("");
      //toast.success("Balance updated");
    } else {
      toast.error("Enter valid address.");
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <div className="balanceChecker__form">
      <input
        className="balanceChecker__input"
        placeholder="Enter your pkh here..."
        onChange={onChangeHandler}
        value={address}
        ref={inputRef}
        type="text"
      />
      <button className="balanceChecker__btn" onClick={submitHandler}>
        Add
      </button>
    </div>
  );
};
