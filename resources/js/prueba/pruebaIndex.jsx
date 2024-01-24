import "./pruebaStyles.css";
import { useEffect, useState } from "react";

export const Prueba = () => {
    const [jsonData, setJsonData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // API - Functions
    const getAllData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        return data;
    };

    const createPost = async (event) => {
        event.preventDefault();
        const title = document.getElementById("form-title").value;
        const body = document.getElementById("form-body").value;

        try {
            await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }).then((response) => setJsonData(response.json()));
            setShowForm(false);
        } catch (err) {
            console.log(err);
        }
    };

    // Functions
    const sortedData = (data) => data.sort((a, b) => b.id - a.id); // Order by recent

    const handleChangeForm = () => {
        setShowForm((prev) => !prev);
    }; // handleChangeForm

    // Components
    const postList = (data) => {
        let jsxElement = [];

        data.map((element, index) => {
            const { id, title, body, ...rest } = element;
            jsxElement.push(
                <div key={"post-" + id + "-" + index}>
                    <p>
                        <span className="subtitle">Title:</span> {title}
                    </p>
                    <p>
                        <span className="subtitle">Body:</span> {body}
                    </p>
                    <hr style={{ color: "black" }} />
                </div>
            );
        });

        return jsxElement;
    };

    const PostForm = () => {
        return (
            <div className="container-form">
                <form onSubmit={(event) => createPost(event)}>
                    <label htmlFor="form-title">Title: </label>
                    <input type="text" id="form-title" name="form-title" />
                    <br />
                    <label htmlFor="form-body">Body: </label>
                    <input type="text" id="form-body" name="form-body" />
                    <br />
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    };

    //useEffetcs
    useEffect(() => {
        getAllData().then((data) => {
            setJsonData(data);
        });
    }, []);

    return (
        <div id="container-main">
            <div className="container-post">
                <div className="container-options">
                    <button className="btn" onClick={handleChangeForm}>
                        Crear POST
                    </button>
                </div>
                <div className="title">Listado de POST: </div>
                {jsonData && !showForm ? (
                    postList(sortedData(jsonData))
                ) : showForm ? (
                    <PostForm />
                ) : (
                    <p>No hay datos</p>
                )}
            </div>
        </div>
    );
};
