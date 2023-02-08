// коэф. корректировки размера foodItem - его позиция вычисляется по top left, а не центру)
const offsetCorrection = 0;

export default function moveBact(foodList, bact) {
    const newBact = { ...bact };
    const { foodItem, distanceToFood } = findFood(foodList, newBact); //{item: {x,y,id}, distanceToFood: num}

    /// количество пикселей, на которое за один раз передвинется бактерия в сторону цели
    let perStep = bact.speed;

    const difX = Math.abs(newBact.position.x - foodItem.x - offsetCorrection);
    const difY = Math.abs(newBact.position.y - foodItem.y - offsetCorrection);

    // collision with the food
    if (difX < perStep && difY < perStep) {
        return { eatenFoodId: foodItem.id, newBact: newBact };
    }

    // FIX angle
    newBact.angle = fixAngle(newBact, foodItem, distanceToFood);

    // если угол атаки на цель большой, например 70-130 градусов, скорее всего это можно обобщить/упростить
    if (difY >= difX) {
        // получаем коэф. соотношения того, на сколько пикселей нам передвинуться по оси Y на каждый пиксель по оси Х,
        // например, коеф 5 =>  все 5 пикселей по Y, а 1 => на 1 пиксель по Х сделать 4 по Y
        const ratio = difX === 0 ? perStep : difY / difX;
        if (ratio >= perStep) {
            newBact.position.y < foodItem.y
                ? (newBact.position.y += perStep)
                : (newBact.position.y -= perStep);

            return { eatenFoodId: null, newBact: newBact };
        }

        while (perStep > 0) {
            newBact.position.x < foodItem.x
                ? newBact.position.x++
                : newBact.position.x--;

            for (let i = 0; i < ratio; i++) {
                newBact.position.y < foodItem.y
                    ? newBact.position.y++
                    : newBact.position.y--;
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
            newBact.position.x < foodItem.x
                ? (newBact.position.x += perStep)
                : (newBact.position.x -= perStep);

            return { eatenFoodId: null, newBact: newBact };
        }

        while (perStep > 0) {
            newBact.position.y < foodItem.y
                ? newBact.position.y++
                : newBact.position.y--;
            if (perStep <= 0) {
                break;
            }
            for (let i = 0; i < ratio; i++) {
                newBact.position.x < foodItem.x
                    ? newBact.position.x++
                    : newBact.position.x--;
                perStep--;
                if (perStep <= 0) {
                    break;
                }
            }
        }
    }

    return { eatenFoodId: null, newBact: newBact };
}

function findFood(foodList, bact) {
    const closestFoodItem = {
        foodItem: undefined,
        distanceToFood: Infinity,
    };

    // перебираем все FoodItem и записываем ближайшую
    foodList.forEach((foodItem) => {
        let distance = Math.sqrt(
            (bact.position.x - foodItem.x - offsetCorrection) ** 2 +
                (bact.position.y - foodItem.y - offsetCorrection) ** 2
        );

        if (distance < closestFoodItem.distanceToFood) {
            closestFoodItem.foodItem = foodItem;
            closestFoodItem.distanceToFood = distance;
        }
    });

    return closestFoodItem;
}

function fixAngle(oldBact, foodItem, distanceToFood) {
    return oldBact.position.y <= foodItem.y
        ? (Math.acos(
              (foodItem.x - offsetCorrection - oldBact.position.x) /
                  distanceToFood
          ) *
              180) /
              Math.PI
        : (Math.acos(
              (oldBact.position.x - foodItem.x - offsetCorrection) /
                  distanceToFood
          ) *
              180) /
              Math.PI +
              180;
}
