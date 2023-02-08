export default function createChildFunction(parent, id) {
    return {
        id,
        position: { x: parent.position.x + 100, y: parent.position.y + 100 }, //{ x, y }
        angle: 1,
        foodLeft: 400,
        color: parent.color,
        speed: Math.floor(Math.random() * 3 - 1) + parent.speed,
    };
}
