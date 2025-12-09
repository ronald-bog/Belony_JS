import { useState } from "react";

export function Fetch() {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorDB, setErrorDB] = useState(null);

    async function loadUsers() {
        setLoading(true);
        setErrorDB(null);
        try {
            const resultado = await fetch("https://jsonplaceholder.typicode.com/users");

            //if (resultado.ok === false) 
            if (!resultado.ok) {
                throw new Error('Error al cargar usuarios'); //generamos excepcion manual
            }

            const datosBody = await resultado.json();
            setUsuarios(datosBody);
        } catch (error) {
            setUsuarios([]);
            setErrorDB(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    async function enviarUsuario(e) {
        e.preventDefault(); // evitar recarga por defecto de html al usar formularios

        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre: nombre, apellido: apellido })
            });

            if (!respuesta.ok) {
                throw new Error('Error al guardar usuario');
            }

            const datosRta = await respuesta.json();
            console.log(datosRta);

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <h1>*** Clase de fetch ***</h1>
            {loading && <h3 className="loading">Cargando.....</h3>}
            {errorDB && <h6>{errorDB}</h6>}
            <button onClick={loadUsers}>LOAD</button>
            <ul>
                {usuarios.map(obj =>
                    <li key={obj.id}>Username: {obj.username} - {obj.name} - {obj.id}</li>)
                }
            </ul>
            <br />
            <h1>____ Ejemplo fetch con post ___</h1>
            <br />

            <form onSubmit={enviarUsuario}>
                <input type="text" placeholder="Nombre" onChange={event => setNombre(event.target.value)} />

                <input type="text" placeholder="Apellido" onChange={event => setApellido(event.target.value)} />

                <button type="submit">Guardar Usuario</button>
            </form>
        </>
    );
}