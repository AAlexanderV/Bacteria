import { configureStore } from "@reduxjs/toolkit";
import bacteriasReducer from "../features/bacterias/bacteriasSlice";
import startReducer from "../features/start/startSlice";

export default configureStore({
    reducer: {
        start: startReducer,
        bacterias: bacteriasReducer,
    },
});
