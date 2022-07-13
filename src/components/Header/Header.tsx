import { CurrentXtzPrice } from "../CurrentXtzPrice/CurrentXtzPrice";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { Toggle } from "../ThemeToggle/ThemeToggle";

import Logo from "../../assets/img/logo.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header bg">
      <div className="header__inner">
        <img className="header__logo" src={Logo} alt="Tezos" />
        <div className="header__xtzPrice">
          <CurrentXtzPrice data={undefined} price={undefined} />
        </div>
        <div className="header__themeToggle">
          <ThemeContext.Consumer>
            {({ theme, setTheme }) => (
              <Toggle
                onChange={() => {
                  if (theme === themes.light) setTheme(themes.dark);
                  if (theme === themes.dark) setTheme(themes.light);
                }}
                value={theme === themes.dark}
              />
            )}
          </ThemeContext.Consumer>
        </div>
      </div>
    </header>
  );
};
