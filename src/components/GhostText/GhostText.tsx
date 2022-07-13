import { v4 as uuid } from "uuid";
import "./GhostText.scss";

interface IGhostText {
  children: string;
}

export const GhostText: React.FC<IGhostText> = ({ children }) => {
  const arr = children.split("");

  return (
    <ul className="ghostText">
      {arr.reverse().map((item: string) => {
        if (item === " ") {
          return (
            <li className="ghostText__item" key={uuid()}>
              &nbsp;
            </li>
          );
        }

        return (
          <li className="ghostText__item" key={uuid()}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

// <ul className="ghostText">
//   <li className="ghostText__item">r</li>
//   <li className="ghostText__item">e</li>
//   <li className="ghostText__item">k</li>
//   <li className="ghostText__item">c</li>
//   <li className="ghostText__item">e</li>
//   <li className="ghostText__item">h</li>
//   <li className="ghostText__item">C</li>
//   <li className="ghostText__item">&nbsp;</li>
//   <li className="ghostText__item">e</li>
//   <li className="ghostText__item">c</li>
//   <li className="ghostText__item">n</li>
//   <li className="ghostText__item">a</li>
//   <li className="ghostText__item">l</li>
//   <li className="ghostText__item">a</li>
//   <li className="ghostText__item">B</li>
//   <li className="ghostText__item">&nbsp;</li>
//   <li className="ghostText__item">s</li>
//   <li className="ghostText__item">o</li>
//   <li className="ghostText__item">z</li>
//   <li className="ghostText__item">e</li>
//   <li className="ghostText__item">T</li>
// </ul>
