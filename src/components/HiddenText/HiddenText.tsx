import React from "react";
import "./HiddenText.scss";

interface IHiddenText {
  children: string;
}

export const HiddenText: React.FC<IHiddenText> = ({ children }) => {
  return <h2 className="hiddenText">{children}</h2>;
};
