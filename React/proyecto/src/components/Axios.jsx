// comando para instalar AXIOS: npm i axios
import axios from "axios";
import { useEffect, useState } from "react";

export function Axios() {

    const [usuarios, setUsuarios] = useState([]);

    //"https://jsonplaceholder.typicode.com/users"

    // axios con then-catch
    /*     useEffect(() => {
            axios.get("https://jsonplaceholder.typicode.com/user")
                .then(response => console.log(response.data))
                .catch((error) => {
                    console.log(`El error fue: ${error}`);
                });
        }, []); */

    useEffect(() => {
        getUsers();
    }, []);

    // axios con async-await
    async function getUsers() {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsuarios(res.data);
        } catch (error) {
            console.log(`El error fue: ${error}`);
        }
    }

    return (
        <>
            <h1>Clase de Axios</h1>

            <div>
                <h6>Usuarios de Json Place Holder</h6>
                {usuarios.map((item) => <p>{item.name}</p>)}
            </div>
        </>
    );

}