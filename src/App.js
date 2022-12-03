import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/Header.js";
import MainPage from "./component/homepage/HomePage.js";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Jacque Pointer's Website</title>
      </Helmet>
      <Header name="Jacque Pointer" />
      <MainPage />
    </div>
  );
}

export default App;
