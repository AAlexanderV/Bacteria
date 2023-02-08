import { useState } from "react";

function Modal() {
    const [closeModal, setCloseModal] = useState(false);

    if (closeModal) return null;
    return (
        <div
            className="overlay"
            onClick={() => setCloseModal(true)}
        >
            <div className="modal_container">
                <div className="modal_top">
                    <h1>
                        Bacteria <span>evolution simulator</span>
                    </h1>
                    <p>
                        The rules of evolution are simple! The life of a Bact
                        depends on the availability of food and how quickly it
                        can get to that food.
                    </p>
                    <p>
                        You can place as much food and Bacts as you want. Note
                        that if there is not enough food, the Bact will die.
                        Having eaten enough, Bacts multiply and give half of the
                        accumulated food to children - this is how new Bacts are
                        born. The child inherits:
                    </p>
                    <ul>
                        <li>the color of the parent by 100%</li>
                        <li>
                            a speed close to the parent with equal chances of 3
                            possible scenarios: either the same speed of the
                            parent, or +/- 1 to the speed of the parent.
                        </li>
                    </ul>
                    <h3>Game Instruction:</h3>
                    <ul>
                        <li>
                            By default you start with 1 bacteria of each
                            type/color with the speed of 3. Colors are random.
                        </li>
                        <li>
                            The more food the Bact eats, the bigger size it
                            gets.
                        </li>
                        <li>
                            Getting bigger increases its need for food
                            (consumption per second) and also its speed, that
                            allows the Bact to be more competitive in gaining
                            the food. The largest Bacts are the fastest and vice
                            versa.
                        </li>
                        <li>
                            Summarized statistics on colors alive and mutated
                            speeds can be found in the right corner.
                        </li>
                    </ul>
                    <h3>Game Control: </h3>
                    <ul>
                        <li>
                            To place food: click the right mouse button or press
                            “+/- 30 Food” at the control panel located on the
                            left. The Food appears randomly.
                        </li>
                        <li>
                            To create a Bact: click the left mouse button or
                            press “+ 5 Bacts” at the same control panel.
                        </li>
                        <li>
                            It is up to you how many Bacts and food to place –
                            there is no limit.
                        </li>
                    </ul>
                    <p>
                        P.S. Be careful not to exaggerate the number of food.
                        Your PC may not have enough power to handle so many
                        Bacts born.
                    </p>
                </div>
                <div className="modal_bottom">
                    <button
                        className="close_btn"
                        onClick={() => setCloseModal(true)}
                    >
                        Begin
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
