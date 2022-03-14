import "./styles/App.css";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import About from "./components/About";

function App() {
    return (
        <div className="App" style={{}}>
            {/*<LeftNavContainer />*/}
            <SideNav/>
            <div className="App-content">
                <Home/>
                <About/>
            </div>
        </div>
    );
}

export default App;
