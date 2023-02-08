import { useSelector } from "react-redux";

function AdditionalStatistics({ showFull }) {
    const statistics = useSelector((state) => state.arena.statistics);
    const perColor = [];
    const perSpeedLvl = [];

    for (const key in statistics.perColor) {
        if (statistics.perColor[key] > 0) {
            perColor.push({ color: key, population: statistics.perColor[key] });
        }
    }
    for (const key in statistics.perSpeedLvl) {
        if (statistics.perSpeedLvl[key] > 0) {
            perSpeedLvl.push({
                speed: key,
                population: statistics.perSpeedLvl[key],
            });
        }
    }

    if (!showFull) return <></>;

    return (
        <div className="additional_statistics">
            <table>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Alive</th>
                    </tr>
                </thead>
                <tbody>
                    {perColor.map((item, i) => {
                        return (
                            <tr key={i.toString()}>
                                <td
                                    style={{
                                        backgroundColor: "#" + item.color,
                                    }}
                                ></td>
                                <td>{item.population}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>Speed LVL</th>
                        <th>Alive</th>
                    </tr>
                </thead>
                <tbody>
                    {perSpeedLvl.map((item, i) => {
                        return (
                            <tr key={i.toString()}>
                                <td>{item.speed}</td>
                                <td>{item.population}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdditionalStatistics;
