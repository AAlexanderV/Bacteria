import { useSelector, useDispatch } from "react-redux";
import { start, stop } from "../../features/start/startSlice";

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
                <button className="btn_clear">clear</button>
            </div>
        </div>
    );
}

export default ControlPanel;
