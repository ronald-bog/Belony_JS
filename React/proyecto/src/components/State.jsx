import { useState } from "react";


export function State() {
    console.log('Se renderizo el componente !!!!!');

    const [numero, setNumero] = useState(1); // Creamos una variable de estado 'numero' y una funcion 'setNumero' encargada de cambiar el valor de la variable.
    const [nombre, setNombre] = useState('Hulk');

    function aumentar() {
        setNumero(numero + 1);
    }

    const disminuir = () => setNumero(numero - 1);

    function reset() {
        setNumero(0);
    }

    function handleNombre(e) {
        setNombre(e.target.value);
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

            <input type="text" placeholder="Escribe un nombre" value={nombre} onChange={handleNombre} />

            <h2>Hello... {nombre}</h2>
        </>
    );
}
