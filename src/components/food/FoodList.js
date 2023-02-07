import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

function FoodList() {
    const foodList = useSelector((state) => state.bacterias.foodList);

    return (
        <>
            {foodList.map((food) => {
                return (
                    <FoodItem
                        x={food.x}
                        y={food.y}
                        key={food.id}
                    />
                );
            })}
        </>
    );
}

export default FoodList;
