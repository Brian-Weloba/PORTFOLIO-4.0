import "./styles/App.css";
import Home from "./components/Home";
import SideNav from "./components/SideNav";

function App() {
    return (
        <div className="App" style={{}}>
            {/*<LeftNavContainer />*/}
            <SideNav/>
            <div className="App-content">
                <Home/>
                <Home/>

            </div>
        </div>
    );
}

export default App;
