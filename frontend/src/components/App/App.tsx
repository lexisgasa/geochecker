import Main from "../../geoChecker/Main/Main";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="app-container">
      <Header />
      <main className="page">
        <Main />
      </main>
    </div>
  );
};

export default App;
