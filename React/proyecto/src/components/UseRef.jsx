import { useRef } from 'react';

export function UseRef() {
    console.log('Se renderizo el componente');

    const miRef = useRef(0);
    const inputPrueba = useRef();
    const titulo = useRef('');

    function incrementar() {
        miRef.current++;
        console.log(`Valor aumentado: ${miRef.current}`);
    }

    function hacerFocus() {
        //inputPrueba.current.value = 'Holaaaaaa'; mala practica, va en contra de los principios de programacion reactiva
        inputPrueba.current.focus();
    }

    function cambiarTitulo() {
        titulo.current.innerText = 'Js Es Genial'; //Mala practica
    }

    function cambiarEstilo() {
        const entrada = inputPrueba.current;
        entrada.style.backgroundColor = "Green";
    }

    return (
        <>
            <h1 ref={titulo}>React es Genial</h1>
            <input id="inputP" type="text" ref={inputPrueba} />
            <button onClick={cambiarEstilo}>Cambiar Estilo</button>
        </>
    );
}
