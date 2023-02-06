// import { useState } from "react";
import { useDispatch } from "react-redux";
import FoodList from "../food/FoodList";
import BacteriasList from "../bacteria/BacteriasList";

import { createFood } from "../../features/food/foodSlice";
import { createBacteria } from "../../features/bacterias/bacteriasSlice";

function Arena() {
    const dispatch = useDispatch();
    // const [bacteriasArray, setBacteriasArray] = useState([]);

    function rightClickHandler(e) {
        e.preventDefault();
        dispatch(createFood({ x: e.clientX, y: e.clientY }));
    }

    function leftClickHandler(e) {
        dispatch(createBacteria({ x: e.clientX, y: e.clientY }));
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
