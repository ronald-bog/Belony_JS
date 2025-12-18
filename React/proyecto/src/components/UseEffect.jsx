import { useEffect, useState } from "react";

export default function UseEffect() {

    const [update, setUpdate] = useState(false);
    const [numero, setNumero] = useState(0);

    console.log('***** SE MONTO EL COMPONENTE');

    let num = 1;
    const ejemplo = setInterval(() => {
        console.log('HOLA');
        console.log(num += 1);
    }, 2000);

    /*  useEffect(() => {
         //getUsuarios();
     }, []); */

    async function getUsuarios() {
        try {
            const usuarios = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!usuarios.ok) {
                throw new Error('Error al cargar usuarios'); //generamos excepcion manual
            }

            const datosBody = await usuarios.json();
            console.log(datosBody);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        let num = 1;
        const ejemplo = setInterval(() => {
            console.log('HOLA');
            console.log(num += 1);
        }, 2000);

        return () => {
            clearInterval(ejemplo);
            console.log('SE DESMONTO EL COMPONENTE XXXXXXXXX');
        };
    }, []);

    /*     useEffect(() => {
            console.log('Se ejecuto dentro useEffect');
        }, [numero]); */

    //console.log('Se ejecuto fuera useEffect , se renderizo componente');

    function actualiza() {
        if (update) {
            setUpdate(false);
        } else {
            setUpdate(true);
        }
        console.log(update);
        /*         setUpdate(update ? false : true);
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