import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

function FoodList({ x, y }) {
    const foodList = useSelector((state) => state.food.list);

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
