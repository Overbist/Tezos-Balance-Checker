import React from "react";
import "./ThemeToggle.scss";

export interface IToggle {
  value: any;
  onChange: () => void;
}

export const Toggle: React.FC<IToggle> = ({ value, onChange }) => (
  <input
    className="themeToggle"
    type="checkbox"
    onClick={onChange}
    checked={value}
    readOnly
  />
);
