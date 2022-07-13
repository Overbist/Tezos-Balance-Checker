import { BsHeartFill } from "react-icons/bs";
import "./CreatorName.scss";

export const CreatorName = () => {
  return (
    <p className="creatorName">
      Created with{" "}
      <BsHeartFill className="creatorName__icon" size={14} color="#ff0000" /> by
      Ihor K.
    </p>
  );
};
