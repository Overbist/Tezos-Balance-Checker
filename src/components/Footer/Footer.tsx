import { CreatorName } from "../CreatorName/CreatorName";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__creatorName">
        <CreatorName />
      </div>
    </footer>
  );
};
