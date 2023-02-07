import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodList from "../food/FoodList";
import BacteriasList from "../bacteria/BacteriasList";

import {
    createBacteria,
    moveAllBacterias,
    createFood,
} from "../../features/bacterias/bacteriasSlice";

function Arena() {
    const dispatch = useDispatch();
    const [startIntervalID, setStartIntervalID] = useState(null);

    const startStatus = useSelector((state) => state.start.value);

    function rightClickHandler(e) {
        e.preventDefault();
        dispatch(createFood({ x: e.clientX, y: e.clientY }));
    }

    function leftClickHandler(e) {
        dispatch(createBacteria({ x: e.clientX, y: e.clientY }));
    }

    function start() {
        setStartIntervalID(
            setInterval(() => {
                dispatch(moveAllBacterias());
            }, 60)
        );
    }

    function stop() {
        clearInterval(startIntervalID);
        setStartIntervalID(null);
    }

    if (startStatus && !startIntervalID) {
        console.log("start");
        start();
    } else if (!startStatus && startIntervalID) {
        console.log("stop");
        stop();
    }

    return (
        <div
            className="arena"
            onClick={leftClickHandler}
            onContextMenu={rightClickHandler}
        >
            <FoodList />
            <BacteriasList />
        </div>
    );
}

export default Arena;
