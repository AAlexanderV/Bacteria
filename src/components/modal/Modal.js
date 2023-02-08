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
                    <h1>Bacteria evolution simulator</h1>
                    <p>
                        The rules are simple. You can place as many food and
                        Bacts as you want. If there is not enough food on the
                        field, Bact dies. If enough food is accumulated, bactera
                        multiplies and gives half of its food to a child. Child
                        inherits parent's color and has an equal chance to
                        increase or decrease its speed by 1 or inherit parent's
                        speed. By default all Bacts appear on the field with the
                        speed of 3 and random color. It means, the child of this
                        parent can be born with the same color only and the
                        speed of 2, 3 or 4. More speed means more food
                        consumption per second. The size of Bact depends on its
                        speed. The largest Bacts are the fastest and vice versa.
                        Summarized statistics on colors alive and mutated speeds
                        can be seen in the right corner.
                    </p>
                    <p>
                        You can place food by right-clicking on the field. Use
                        the left mouse button to create Bacteria. Or use the
                        buttons on the control panel on the left corner to place
                        them randomly. When you start food will start randomly
                        appear on the field, you do not need to add extra food,
                        but you can.
                    </p>
                    <p>
                        There is no limit on amount of food or Bacts alive, so
                        be carefull and do not place too much food. Your PC may
                        not have enough power for too many Bacts.
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
