import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodList from "../food/FoodList";
import BacteriasList from "../bacteria/BacteriasList";

import {
    setArenaSize,
    createBacteria,
    moveAll,
    createFood,
} from "../../features/arena/arenaSlice";

function Arena() {
    const dispatch = useDispatch();
    const startStatus = useSelector((state) => state.start.value);

    const [startIntervalID, setStartIntervalID] = useState(null);

    function start() {
        setStartIntervalID(
            setInterval(() => {
                dispatch(moveAll());
            }, 60)
        );
    }

    function stop() {
        clearInterval(startIntervalID);
        setStartIntervalID(null);
    }

    useEffect(() => {
        const handleWindowResize = () => {
            dispatch(setArenaSize());
        };
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    });

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
            onClick={(e) =>
                dispatch(createBacteria({ x: e.clientX, y: e.clientY }))
            }
            onContextMenu={(e) => {
                e.preventDefault();
                dispatch(createFood({ x: e.clientX, y: e.clientY }));
            }}
        >
            <FoodList />
            <BacteriasList />
        </div>
    );
}

export default Arena;
