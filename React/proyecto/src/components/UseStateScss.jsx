import { useState } from "react";
import "../scss/_state.scss";

export function UseStateScs() {
    const [estadoBoton, setEstadoBoton] = useState(false);

    return (
        <>
            <button className={`boton ${estadoBoton ? "activo" : "inactivo"}`} onClick={() => setEstadoBoton(!estadoBoton)}>
                {estadoBoton ? "ON" : "OFF"}
            </button>
        </>
    );
}