import { useSelector } from "react-redux";
import BacteriaItem from "./BacteriaItem";

function BacteriasList() {
    const bacteriasList = useSelector((state) => state.bacterias.bactList);

    return (
        <>
            {bacteriasList.map((bact) => {
                return (
                    <BacteriaItem
                        x={bact.position.x}
                        y={bact.position.y}
                        angle={bact.angle}
                        key={bact.id}
                    />
                );
            })}
        </>
    );
}

export default BacteriasList;
