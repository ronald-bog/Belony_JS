import { useState } from "react";

export function Fetch() {
    const [usuarios, setUsuarios] = useState([]);

    async function loadUsers() {
        try {
            const resultado = await fetch("https://jsonplaceholder.typicode.com/users");
            console.log(resultado);

            if(resultado){
                console.log('No se pudo cargar la base de datos');
             
            }

            const datosBody = await resultado.json();
            setUsuarios(datosBody);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>*** Clase de fetch ***</h1>
            <button onClick={loadUsers}>LOAD</button>
            <ul>
                {usuarios.map(obj =>
                    <li key={obj.id}>Username: {obj.username} - {obj.name} - {obj.id}</li>)
                }
            </ul>
        </>
    );
}