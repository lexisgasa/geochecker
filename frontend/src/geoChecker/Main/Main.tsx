import "./Main.css";

const Main = (): React.ReactElement => {
  return (
    <ul className="main-container">
      <li>
        <a href="empleado">Empleado</a>
      </li>
      <li>
        <a href="supervisor">Supervisor</a>
      </li>
      <li>
        <a href="administrador">Administrador</a>
      </li>
    </ul>
  );
};

export default Main;
