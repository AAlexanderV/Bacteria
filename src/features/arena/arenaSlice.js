import { createSlice } from "@reduxjs/toolkit";
import moveBact from "./moveFunction";
import createChild from "./createChildFunction";

const initialState = () => {
    return {
        bactList: [],
        bactID: 0,
        foodList: [],
        foodID: 0,
        arenaSize: {
            width: window.innerWidth,
            height: window.innerHeight,
        },
        statistics: {
            perColor: {},
            perSpeedLvl: [],
        },
    };
};

export const arenaSlice = createSlice({
    name: "arena",
    initialState,
    reducers: {
        createBacteria: (state, action) => {
            state.bactID += 1;
            const newBacteria = {
                id: state.bactID,
                position: action.payload, //{ x, y }
                angle: 1,
                speed: 3,
                foodLeft: 400,
                color: Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "0")
                    .toUpperCase(),
            };

            state.statistics.perColor[newBacteria.color] = 1;
            state.statistics.perSpeedLvl[newBacteria.speed]
                ? ++state.statistics.perSpeedLvl[newBacteria.speed]
                : (state.statistics.perSpeedLvl[newBacteria.speed] = 1);

            state.bactList.push(newBacteria);
        },
        placeRandomBacteria: (state, action) => {
            for (let i = 0; i < action.payload; i++) {
                const newBact = {
                    id: ++state.bactID,
                    position: {
                        x: Math.floor(Math.random() * state.arenaSize.width),
                        y: Math.floor(Math.random() * state.arenaSize.height),
                    },
                    angle: 1,
                    speed: 3,
                    foodLeft: 400,
                    color: Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0")
                        .toUpperCase(),
                };
                state.statistics.perColor[newBact.color] = 1;
                state.statistics.perSpeedLvl[newBact.speed]
                    ? ++state.statistics.perSpeedLvl[newBact.speed]
                    : (state.statistics.perSpeedLvl[newBact.speed] = 1);

                state.bactList.push(newBact);
            }
        },
        createFood: (state, action) => {
            state.foodID += 1;
            const newFood = { ...action.payload, id: state.foodID }; //{x,y,id}

            state.foodList.push(newFood);
        },
        placeRandomFood: (state, action) => {
            for (let i = 0; i < action.payload; i++) {
                const newFood = {
                    x: Math.floor(Math.random() * state.arenaSize.width),
                    y: Math.floor(Math.random() * state.arenaSize.height),
                    id: ++state.foodID,
                };
                state.foodList.push(newFood);
            }
        },
        deleteFood: (state, action) => {
            state.foodList = state.foodList.slice(0, action.payload);
        },
        setArenaSize: (state) => {
            state.arenaSize.width = window.innerWidth;
            state.arenaSize.height = window.innerHeight;
        },

        moveAll: (state) => {
            const newBacteriasList = [];
            state.bactList.forEach((bact) => {
                bact.foodLeft -= bact.speed;

                if (state.foodList.length > 0 && bact.foodLeft > 0) {
                    const { eatenFoodId, newBact } = moveBact(
                        state.foodList,
                        bact
                    );
                    //returns from fn moveBact =>{ eatenFoodId: foodItem.id, newBact: newBact }

                    if (eatenFoodId) {
                        newBact.foodLeft += 90;
                        const foodIndexToMove = state.foodList.findIndex(
                            (item) => item.id === eatenFoodId
                        );

                        state.foodList[foodIndexToMove].x = Math.floor(
                            Math.random() * state.arenaSize.width
                        );
                        state.foodList[foodIndexToMove].y = Math.floor(
                            Math.random() * state.arenaSize.height
                        );
                    }

                    if (newBact.foodLeft > 1000) {
                        newBact.foodLeft = 400;
                        const child = createChild(newBact, ++state.bactID);
                        newBacteriasList.push(child);
                        state.statistics.perColor[child.color] += 1;
                        state.statistics.perSpeedLvl[child.speed]
                            ? ++state.statistics.perSpeedLvl[child.speed]
                            : (state.statistics.perSpeedLvl[child.speed] = 1);
                    }

                    newBacteriasList.push(newBact);
                } else if (bact.foodLeft > 0) {
                    newBacteriasList.push(bact);
                } else {
                    state.statistics.perColor[bact.color] -= 1;
                    state.statistics.perSpeedLvl[bact.speed] -= 1;
                }
            });

            state.bactList = newBacteriasList;
        },
        clearAll: (state) => {
            state.bactList = [];
            state.bactID = 0;
            state.foodList = [];
            state.foodID = 0;
            state.arenaSize = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            state.statistics = {
                perColor: {},
                perSpeedLvl: [],
            };
        },
    },
});

export const {
    createBacteria,
    placeRandomBacteria,
    setArenaSize,
    createFood,
    deleteFood,
    placeRandomFood,
    moveAll,
    clearAll,
} = arenaSlice.actions;

export default arenaSlice.reducer;
