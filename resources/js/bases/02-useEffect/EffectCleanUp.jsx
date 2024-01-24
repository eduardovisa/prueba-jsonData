import { useState } from "react";
import { Message } from "./Message";

export const EffectCleanUp = () => {
    const [showComponente, setShowComponent] = useState(false);

    const handleChangeFlat = () => {
        setShowComponent((prev) => !prev);
    };

    return (
        <>
            <h1>Effect Clean Up</h1>
            <hr />

            <h3>
                Componente:{" "}
                {!showComponente
                    ? "Componente desmontado"
                    : "Componente montado"}
            </h3>

            {showComponente && <Message />}

            <button onClick={handleChangeFlat}>
                {!showComponente ? "Montar" : "Desmontar"}
            </button>
        </>
    );
};
