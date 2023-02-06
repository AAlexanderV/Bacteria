import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    return {
        list: [],
        currentID: 0,
    };
};

export const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        createFood: (state, action) => {
            state.currentID += 1;
            const newFood = { ...action.payload, id: state.currentID }; //{x,y,id}

            state.list.push(newFood);
        },
        deleteFood: (state, action) => {
            action.payload.forEach((idToDelete) => {
                console.log("idToDeleteItem", idToDelete);
                const newFoodList = state.list.filter(
                    (item) => item.id !== idToDelete
                );
                state.list = newFoodList;
            });
        },
    },
});

export const { createFood, deleteFood } = foodSlice.actions;

export default foodSlice.reducer;
