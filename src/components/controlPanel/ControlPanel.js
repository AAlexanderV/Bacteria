import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteFood } from "../../features/food/foodSlice";
import { moveAllBacterias } from "../../features/bacterias/bacteriasSlice";

function ControlPanel() {
    const [startIntervalID, setStartIntervalID] = useState(null);
    const dispatch = useDispatch();
    // const bacteriasList = useSelector((state) => state.bacterias.list);
    const foodList = useSelector((state) => state.food.list);
    const foodToDelete = useSelector((state) => state.bacterias.eatenFoodIds);

    function start() {
        setStartIntervalID(
            setInterval(() => {
                console.log("foodToDeleteArray", foodToDelete);
                console.log(foodToDelete.length > 0);
                foodToDelete.length > 0 && dispatch(deleteFood(foodToDelete));

                console.log(foodList);

                dispatch(moveAllBacterias(foodList));
            }, 50)
        );
    }
    function stop() {
        clearInterval(startIntervalID);
        setStartIntervalID(null);
    }

    return (
        <div className="control_panel">
            <div className="contol_buttons">
                <button
                    className="btn_start"
                    disabled={Boolean(startIntervalID)}
                    onClick={start}
                >
                    start
                </button>
                <button
                    className="btn_stop"
                    onClick={stop}
                >
                    stop
                </button>
                <button className="btn_clear">clear</button>
            </div>
        </div>
    );
}

export default ControlPanel;
