import { useState } from "react";


export function State() {
    console.log('Se renderizo el componente !!!!!');

    const [numero, setNumero] = useState(1); // Creamos una variable de estado 'numero' y una funcion 'setNumero' encargada de cambiar el valor de la variable.
    const [nombre, setNombre] = useState('');
    const [nombre1, setNombre1] = useState('');
    const [edad, setEdad] = useState('');
    const [texto, setTexto] = useState('');
    const [lista, setLista] = useState([]);

    function aumentar() {
        setNumero(numero + 1);
    }

    const disminuir = () => setNumero(numero - 1);

    function reset() {
        setNumero(0);
    }

    function handleInput(e) {
        setNombre(e.target.value);
    }

    function handleEdad(e) {
        setEdad(e.target.value);
    }

    function agregarTarea() {
        setLista([...lista, texto]);
        setTexto('');
    }

    function deleteArr(i) {
        setLista(lista.filter((_, idx) => idx !== i));
    }

    return (
        <>
            <h1>Valor: {numero}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={reset}>Reinicio</button>

            {/*             <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            <button onClick={() => setNumero(numero - 1)}>Disminuir</button>
            <button onClick={() => setNumero(0)}>Reset</button> */}

            <h1>__________________________</h1>

            <input type="text" placeholder="Escribe un nombre" value={nombre} onChange={handleInput} />

            <h2>Hello... {nombre}</h2>

            <h1>__________________________</h1>
            <input type="text" value={nombre1} onChange={(e) => setNombre1(e.target.value)} />
            <input type="text" value={edad} onChange={handleEdad} />
            <h6>Nombre: {nombre1 || "Sin nombre"}</h6>
            <h6>Edad: {edad || "sin edad"}</h6>

            <h1>__________________________</h1>

            <div>
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
                <button onClick={agregarTarea}>Agregar</button>
                <ul>
                    {lista.map((item, index) =>
                        <li key={index}> {/* sirve para diferenciar el orden de los elementos */}
                            {item}
                            <button onClick={() => deleteArr(index)}>Delete</button>
                        </li>
                    )
                    }
                </ul>
            </div>
        </>
    );
}
