function BacteriaItem({ x, y, angle }) {
    return (
        <div
            className="bacteria"
            style={{
                left: x + "px",
                top: y + "px",
                transform: `rotate(${angle + 180}deg)`,
            }}
        ></div>
    );
}

export default BacteriaItem;
