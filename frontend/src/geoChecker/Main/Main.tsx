import Role from "../Role/Role";
import { RoleType } from "../Role/types";
import "./Main.css";

const roles: RoleType[] = [
  { id: 1, name: "Trabajador", path: "trabajador" },
  { id: 2, name: "Supervisor", path: "supervisor" },
  { id: 3, name: "Administrador", path: "administrador" },
];

const Main = (): React.ReactElement => {
  return (
    <>
      <h2 main-title>Bienvenido</h2>
      <p>Escoge tu rol para continuar:</p>
      <ul className="main-container">
        {roles.map((role) => (
          <Role key={role.id} {...role} />
        ))}
      </ul>
    </>
  );
};

export default Main;
