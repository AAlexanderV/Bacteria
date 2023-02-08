import { configureStore } from "@reduxjs/toolkit";
import arenaReducer from "../features/arena/arenaSlice";
import startReducer from "../features/start/startSlice";

export default configureStore({
    reducer: {
        start: startReducer,
        arena: arenaReducer,
    },
});
