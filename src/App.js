import "./App.css";
import Arena from "./components/arena/Arena";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Statistics from "./components/statistics/Statistics";
import Modal from "./components/modal/Modal";

function App() {
    return (
        <div className="App">
            <Arena />
            <ControlPanel />
            <Statistics />
            <Modal />
        </div>
    );
}

export default App;
