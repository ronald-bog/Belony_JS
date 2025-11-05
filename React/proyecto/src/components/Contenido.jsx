// PADRE
import { Catalogo } from './Catalogo';
export function Contenido() {

    function saludar() {
        return alert('Hola Profe de componente Padre');
    }

    return (
        <div className='contenido'>
            <Catalogo estudiante="Belony" edad="68" onClick={saludar} />
            <h3>Este es el componente PRUEBA .....</h3>
            <h3>segunda linea de PRUEBA .....</h3>
        </div>
    );
}
