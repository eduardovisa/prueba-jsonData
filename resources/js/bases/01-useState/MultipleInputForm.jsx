import { useState } from "react";

export const MultipleInputForm = () => {
    // Formualrio Controlado
    // Método que al hacer submit imprima el valor del formulario
    // Unsolo método para controlar el formulario

    const [formData, setFormData] = useState({});

    const handleFormChange = (e) => {
        setFormData((prev) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <h1>Multiple Input Form</h1>
            <hr />

            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        name="email"
                        className="nam"
                        placeholder="Enter email"
                        type="email"
                        onChange={handleFormChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        onChange={handleFormChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};
