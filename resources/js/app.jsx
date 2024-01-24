require("./bootstrap");

import React from "react";
import { createRoot } from "react-dom/client";
import { Form } from "./bases/01-useState/Form";
import { MultipleInputForm } from "./bases/01-useState/MultipleInputForm";
import { EffectCleanUp } from "./bases/02-useEffect/EffectCleanUp";
import { RandomNumber } from "./bases/02-useEffect/RandomNumber";
import { Prueba } from "./prueba/pruebaIndex";

export const App = () => {
    return (
        <React.StrictMode>
            <Prueba />
        </React.StrictMode>
    );
};

createRoot(document.getElementById("root")).render(<App />);
