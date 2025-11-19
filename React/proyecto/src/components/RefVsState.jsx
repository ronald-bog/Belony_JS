import { useEffect, useRef, useState } from "react";


export function RefVsState() {
    console.log('Se renderizo el componente !!!!!');

    // useRef

    const inputRef = useRef(null);
    const renders = useRef(0);

    // useState
    const [contador, setContador] = useState(0);

    function cambiarColor() {
        const input = inputRef.current;
        input.style.backgroundColor =
            input.style.backgroundColor === "lightblue" ? "red" : "lightblue";
    }

    return (
        <>
            <div>
                <h2>useRef VS useState</h2><h1>********************</h1>
                <div style={{ backgroundColor: "pink" }}>
                    <input ref={inputRef} type="text" />
                    <button onClick={cambiarColor} style={{ marginLeft: "50px" }}>Cambia Color </button>
                </div>

                <h1>********************</h1>
                <div>
                    <button onClick={() => setContador(x => x + 1)}>Incrementar</button>
                    <p>Contador: {contador}</p>
                </div>
                <h1>********************</h1>

            </div>
        </>
    );
}
