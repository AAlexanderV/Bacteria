import { createSlice } from "@reduxjs/toolkit";

export const startSlice = createSlice({
    name: "start",
    initialState: { value: false },
    reducers: {
        start: (state) => {
            state.value = true;
        },
        stop: (state) => {
            state.value = false;
        },
    },
});

export const { start, stop } = startSlice.actions;

export default startSlice.reducer;
