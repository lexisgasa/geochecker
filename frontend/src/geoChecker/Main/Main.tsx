import "./Main.css";

const Main = (): React.ReactElement => {
  return (
    <>
      <h2 main-title>Bienvenido</h2>
      <p>Escoge tu rol para continuar:</p>
      <ul className="main-container">
        <li className="main-container__link">
          <a href="empleado">Empleado</a>
        </li>
        <li className="main-container__link">
          <a href="supervisor">Supervisor</a>
        </li>
        <li className="main-container__link">
          <a href="administrador">Administrador</a>
        </li>
      </ul>
    </>
  );
};

export default Main;
