import { configureStore } from "@reduxjs/toolkit";
import bacteriasReducer from "../features/bacterias/bacteriasSlice";
import foodReducer from "../features/food/foodSlice";

export default configureStore({
    reducer: {
        bacterias: bacteriasReducer,
        food: foodReducer,
    },
});
