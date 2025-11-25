import { useState } from "react";

export default function RenCond() {

    //console.log(false && "JAVA"); js vanilla

    const [comentarios, setComentarios] = useState(true);

    return (
        <>
            * Renderizado condicionado *
            {false && (
                <div>
                    <h1>JAVA</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore libero rem, dignissimos consequatur nostrum officiis necessitatibus ratione enim amet, reprehenderit in, ut aliquam. Aperiam quisquam ipsa voluptatibus quod error.</p>
                    <p className="cita">poema de prueba</p>
                </div>)
            }

            <h1>Esto es otro contenido</h1>
            <h1>_______________________________</h1>
            <button onClick={() => setComentarios(!comentarios)}>Mostrar / Ocultar</button>

            {comentarios &&
                (<div>
                    <h3>Comentarios</h3>
                    <p>- Excelente curso...</p>
                    <p>- Belony es un muy buen alumno</p>
                    <p>- Dame una clase de useEffect</p>
                    <p>- No te preocupes mas adlenate cuando comprendas otros temas lo veremos.</p>
                </div>)
            }



        </>
    );
}