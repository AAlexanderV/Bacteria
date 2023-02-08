import { useSelector } from "react-redux";
import { useState } from "react";
import AdditionalStatistics from "./AdditionalStatistics";

function Statistics() {
    const bacteriasList = useSelector((state) => state.arena.bactList);
    const currentBactId = useSelector((state) => state.arena.bactID);

    const [fullStatistics, setFullStatistics] = useState(true);

    return (
        <div className="statistics_container">
            <h3>Current population: {bacteriasList.length}</h3>
            <h3>Mortality: {currentBactId - bacteriasList.length}</h3>

            <AdditionalStatistics showFull={fullStatistics} />
            {/* <AdditionalStatistics /> */}

            <button onClick={() => setFullStatistics(!fullStatistics)}>
                {fullStatistics ? "Hide" : "Show"} full statistics
            </button>
        </div>
    );
}

export default Statistics;
