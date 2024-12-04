import { RoleType } from "./types";
import "./Role.css";

const Role = ({ name, path }: RoleType): React.ReactElement => {
  return (
    <li className="main-container__link">
      <a href={path}>{name}</a>
    </li>
  );
};

export default Role;
