import { createSlice } from "@reduxjs/toolkit";
import Bacteria from "./bacteriaClass";
import moveBact from "./moveFunction";

const initialState = () => {
    return {
        list: [],
        currentID: 0,
        eatenFoodIds: [],
    };
};

export const bacteriasSlice = createSlice({
    name: "bacterias",
    initialState,
    reducers: {
        createBacteria: (state, action) => {
            state.currentID += 1;
            // const newBacteria = new Bacteria(state.currentID, action.payload);
            const newBacteria = {
                id: state.currentID,
                position: action.payload, //{ x, y }
                angle: 1,
            };

            state.list.push(newBacteria);
        },
        moveAllBacterias: (state, action) => {
            state.eatenFoodIds = [];

            const newBacteriasList = state.list.map((bact) => {
                const { eatenFoodId, newBact } = moveBact(action.payload, bact);
                //{ eatenFoodId: foodItem.id, newBact: newBact }

                eatenFoodId && state.eatenFoodIds.push(eatenFoodId);
                return newBact;
            });

            state.list = newBacteriasList;
        },
    },
});

export const { createBacteria, moveAllBacterias } = bacteriasSlice.actions;

export default bacteriasSlice.reducer;
