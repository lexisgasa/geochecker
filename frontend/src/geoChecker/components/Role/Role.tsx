import { RoleType } from "./types";
import "./Role.css";

const Role = ({ name, path }: RoleType): React.ReactElement => {
  return (
    <li className="nav-links">
      <a href={path} className="nav-links__link">
        {name}
      </a>
    </li>
  );
};

export default Role;
