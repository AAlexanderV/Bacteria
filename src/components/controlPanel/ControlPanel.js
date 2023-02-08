import { useSelector, useDispatch } from "react-redux";
import { start, stop } from "../../features/start/startSlice";
import {
    placeRandomFood,
    deleteFood,
    placeRandomBacteria,
    clearAll,
} from "../../features/arena/arenaSlice";

function ControlPanel() {
    const dispatch = useDispatch();
    const startStatus = useSelector((state) => state.start.value);

    return (
        <div className="control_panel">
            <div className="contol_buttons">
                <button
                    className="btn_start"
                    disabled={startStatus}
                    onClick={() => dispatch(start())}
                >
                    start
                </button>
                <button
                    className="btn_stop"
                    disabled={!startStatus}
                    onClick={() => dispatch(stop())}
                >
                    stop
                </button>
                <button
                    className="btn_clear"
                    onClick={() => dispatch(clearAll())}
                >
                    clear
                </button>
            </div>
            <div className="contol_buttons">
                <button onClick={() => dispatch(placeRandomFood(30))}>
                    +30 Food
                </button>
                <button onClick={() => dispatch(deleteFood(-30))}>
                    -30 Food
                </button>
            </div>
            <div className="contol_buttons">
                <button onClick={() => dispatch(placeRandomBacteria(5))}>
                    +5 Bacts
                </button>
            </div>
        </div>
    );
}

export default ControlPanel;
