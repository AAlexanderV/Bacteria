function BacteriaItem({ bact }) {
    return (
        <div
            className="bacteria"
            style={{
                left: bact.position.x + "px",
                top: bact.position.y + "px",
                transform: `rotate(${bact.angle + 180}deg)`,
                backgroundColor: "#" + bact.color,
                // scale: `1.${Math.round(bact.speed / 2)}`,
                scale: `${bact.speed / 8 + 1}`,
            }}
        ></div>
    );
}

export default BacteriaItem;
