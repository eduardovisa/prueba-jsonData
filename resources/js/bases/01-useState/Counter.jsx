import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(100);

    const hanldeIncrement = () => {
        setCounter(counter + 1);
    };
    const hanldeDecrement = () => {
        setCounter(counter - 1);
    };
    const hanldeReset = () => {
        setCounter(100);
    };
    const hanldeIncrementByTen = () => {
        setCounter(counter + 10);
    };

    return (
        <>
            <h1>use state</h1>
            <hr />
            <div>Counter</div>

            <div className="d-flex">
                <h2>Valor:</h2>
                <span
                    style={{
                        color: "black",
                        marginLeft: "1rem",
                        marginTop: "5px",
                    }}
                >
                    {counter}
                </span>
            </div>

            <div className="d-flex">
                <button className="btn btn-success" onClick={hanldeIncrement}>
                    Incrementar
                </button>
                <button className="btn btn-warning" onClick={hanldeDecrement}>
                    Restar
                </button>
                <button className="btn btn-danger" onClick={hanldeReset}>
                    Reset
                </button>
                <button className="btn btn-dark" onClick={hanldeIncrementByTen}>
                    Increment By 10
                </button>
            </div>
        </>
    );
};
