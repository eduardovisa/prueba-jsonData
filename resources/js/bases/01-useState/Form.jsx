import { useState } from "react";

export const Form = () => {
    const [search, setSearch] = useState();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSearch(e.target.search.value);
    // };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    if (search === "bulbasor") setSearch("Capturado");

    return (
        <>
            <h1>Formularios Controlados</h1>
            <hr />

            <form>
                <input
                    type="text"
                    name="search"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
                <p>Busqeuda Pokemon: {search}</p>
            </form>
        </>
    );
};
