import { createSlice } from "@reduxjs/toolkit";
import moveBact from "./moveFunction";

const initialState = () => {
    return {
        bactList: [],
        bactID: 0,
        // eatenFoodIds: [],
        foodList: [],
        foodID: 0,
    };
};

export const bacteriasSlice = createSlice({
    name: "bacterias",
    initialState,
    reducers: {
        createBacteria: (state, action) => {
            state.bactID += 1;
            // const newBacteria = new Bacteria(state.currentID, action.payload);
            const newBacteria = {
                id: state.bactID,
                position: action.payload, //{ x, y }
                angle: 1,
            };

            state.bactList.push(newBacteria);
        },
        createFood: (state, action) => {
            state.foodID += 1;
            const newFood = { ...action.payload, id: state.foodID }; //{x,y,id}

            state.foodList.push(newFood);
        },

        moveAllBacterias: (state) => {
            const newBacteriasList = state.bactList.map((bact) => {
                if (state.foodList.length > 0) {
                    const { eatenFoodId, newBact } = moveBact(
                        state.foodList,
                        bact
                    );
                    //{ eatenFoodId: foodItem.id, newBact: newBact }

                    if (eatenFoodId) {
                        const newFoodList = state.foodList.filter(
                            (item) => item.id !== eatenFoodId
                        );
                        state.foodList = newFoodList;
                    }

                    return newBact;
                } else {
                    return bact;
                }
            });

            state.bactList = newBacteriasList;
        },
        // deleteFood: (state, action) => {
        //     action.payload.forEach((idToDelete) => {
        //         console.log("idToDeleteItem", idToDelete);
        //         const newFoodList = state.list.filter(
        //             (item) => item.id !== idToDelete
        //         );
        //         state.list = newFoodList;
        //     });
        // },
    },
});

export const { createBacteria, moveAllBacterias, createFood } =
    bacteriasSlice.actions;

export default bacteriasSlice.reducer;
