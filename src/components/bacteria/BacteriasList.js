import { useSelector } from "react-redux";
import BacteriaItem from "./BacteriaItem";

function BacteriasList() {
    const bacteriasList = useSelector((state) => state.arena.bactList);

    return (
        <>
            {bacteriasList.map((bact) => {
                return (
                    <BacteriaItem
                        bact={bact}
                        key={bact.id}
                    />
                );
            })}
        </>
    );
}

export default BacteriasList;
