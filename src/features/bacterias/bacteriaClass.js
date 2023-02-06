export default class Bacteria {
    constructor(id, position) {
        this.id = id;
        this.position = position; //{ x, y }
        this.angle = 90;
    }

    findFood(foodList) {
        const offsetCorrection = 7;
        const closestFoodItem = {
            foodItem: undefined,
            distanceToFood: Infinity,
        };

        // перебираем все FoodItem и записываем ближайшую
        foodList.forEach((foodItem) => {
            let distance = Math.sqrt(
                (this.position.x - foodItem.x - offsetCorrection) ** 2 +
                    (this.position.y - foodItem.y - offsetCorrection) ** 2
            );

            if (distance < closestFoodItem.distanceToFood) {
                closestFoodItem.foodItem = foodItem;
                closestFoodItem.distanceToFood = distance;
            }
        });

        return closestFoodItem;
    }

    fixAngle(foodItem, distanceToFood) {
        this.angle =
            this.position.y <= foodItem.y
                ? (Math.acos((foodItem.x - this.position.x) / distanceToFood) *
                      180) /
                  Math.PI
                : (Math.acos((this.position.x - foodItem.x) / distanceToFood) *
                      180) /
                      Math.PI +
                  180;
    }
}
