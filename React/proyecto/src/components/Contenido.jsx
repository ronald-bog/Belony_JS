// PADRE
import { Catalogo } from './Catalogo';
export function Contenido({ propDePrueba, propiedad2, propiedadF }) {
    console.log('Se renderizo el componente');

    console.log(`el valor que recibi del padre es: ${propiedadF()}`);


    function saludar() {
        return alert('Hola Profe de componente Padre');
    }

    function tester() {
        console.log("Esto se ejecuto en la funcion tester");

    }

    return (
        <div className='contenido'>

            <h3>Este es el componente PRUEBA .....</h3>
            <br />
            <br />
            <br />
            <h3>{propDePrueba}</h3>
            <h3>{propiedad2}</h3>
            <br />
            <br />
            <h1>{propiedadF()}</h1>
            <button onClick={propiedadF}>TESTER</button>
            <button onClick={() => console.log(propiedadF())}>TESTER2</button>
        </div>
    );
}
