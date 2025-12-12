import { useEffect, useState } from "react";

export default function UseEffect() {

    const [update, setUpdate] = useState(false);
    const [numero, setNumero] = useState(0);

    useEffect(() => {
        console.log('Se ejecuto dentro useEffect');
    }, [numero]);

    console.log('Se ejecuto fuera useEffect , se renderizo componente');

    function actualiza() {
        if (update === false) {
            setUpdate(true);
        } else {
            setUpdate(false);
        }
        console.log(update);
        /*         setUpdate(update === false ? true : false);
                console.log(update); */
    }

    function cambiarNumero() {
        setNumero(numero + 1);
        console.log(numero);

    }

    return (
        <>
            <button onClick={actualiza}>ACTUALIZAR</button>

            <button onClick={cambiarNumero}>INCREMENTAR NUMERO</button>
        </>
    );
}