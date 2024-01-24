import { useEffect } from "react";

export const Message = () => {
    useEffect(() => {
        const handleMouseMove = () => {
            console.log(":)");
        };

        // console.log("Aquí estoy");

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            // console.log("Ya me fuí");
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <h1>Me renderice</h1>
        </>
    );
};
