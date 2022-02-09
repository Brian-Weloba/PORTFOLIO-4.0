import logo from "./logo.svg";
import "./styles/App.css";
import Home from "./components/Home";
import LeftNavContainer from "./components/LeftNav";

function App() {
  return (
    <div className="App" style={{}}>
      <LeftNavContainer />
      <Home />
    </div>
  );
}

export default App;
