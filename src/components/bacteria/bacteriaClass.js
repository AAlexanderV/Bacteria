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

    move(foodList) {
        const { foodItem, distanceToFood } = this.findFood(foodList); //{item: {x,y,id}, distanceToFood: num}

        /// количество пикселей, на которое за один раз передвинется бактерия в сторону цели
        let perStep = 4;

        console.log(this.position.x);
        console.log(foodItem);
        console.log(distanceToFood);

        // const difX = Math.abs(newBact_x - foodItem.x);
        // const difY = Math.abs(newBact_y - foodItem.y);
        const difX = Math.abs(this.position.x - foodItem.x);
        const difY = Math.abs(this.position.y - foodItem.y);

        // collision with the food
        if (difX < 4 && difY < 4) {
            return { foodItemId: foodItem.id, bacteria: this };
        }

        // если угол атаки на цель большой, например 70-130 градусов, скорее всего это можно обобщить/упростить
        if (difY >= difX) {
            // получаем коэф. соотношения того, на сколько пикселей нам передвинуться по оси Y на каждый пиксель по оси Х,
            // например, коеф 5 =>  все 5 пикселей по Y, а 1 => на 1 пиксель по Х сделать 4 по Y
            const ratio = difX === 0 ? perStep : difY / difX;
            if (ratio >= perStep) {
                this.position.y < foodItem.y
                    ? (this.position.y += 5)
                    : (this.position.y -= 5);

                this.fixAngle(foodItem, distanceToFood);
                return { foodItemId: null, bacteria: this };
            }

            while (perStep > 0) {
                this.position.x < foodItem.x
                    ? this.position.x++
                    : this.position.y--;
                if (perStep <= 0) {
                    break;
                }
                for (let i = 0; i < ratio; i++) {
                    this.position.y < foodItem.y
                        ? this.position.y++
                        : this.position.y--;
                    perStep--;
                    if (perStep <= 0) {
                        break;
                    }
                }
            }

            // если угол атаки на цель маленький, например 10-30 градусов
        } else if (difX >= difY) {
            const ratio = difX / difY;

            if (ratio >= perStep) {
                this.position.x < foodItem.x
                    ? (this.position.x += 5)
                    : (this.position.x -= 5);

                this.fixAngle(foodItem, distanceToFood);
                return { foodItemId: null, bacteria: this };
            }

            while (perStep > 0) {
                this.position.y < foodItem.y
                    ? this.position.y++
                    : this.position.y--;
                if (perStep <= 0) {
                    break;
                }
                for (let i = 0; i < ratio; i++) {
                    this.position.x < foodItem.x
                        ? this.position.x++
                        : this.position.x--;
                    perStep--;
                    if (perStep <= 0) {
                        break;
                    }
                }
            }
        }

        this.fixAngle(foodItem, distanceToFood);
        return { foodItemId: null, bacteria: this };
    }
}
