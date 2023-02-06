function FoodItem({ x, y }) {
    return (
        <div
            className="food_item"
            style={{ left: x + "px", top: y + "px" }}
        ></div>
    );
}

export default FoodItem;
