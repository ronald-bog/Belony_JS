import { NavLink, Link } from "react-router-dom";

export function Navbar() {

    return (
        <>
            <nav>
                <Link className="link" to='scss'>CONTENIDO </Link>
                <Link className="link" to='catalogo'>CATALOGO </Link>
                <NavLink className="link" to='cond'>RENDERIZADO CONDICIONADO </NavLink>
                <NavLink className="link" to='state'>SECCION STATE </NavLink>
                <NavLink className="link" to='f'>FOOTER </NavLink>
                <NavLink className="link prueba" to='RefVsState'>REF-STATE </NavLink>
                <NavLink className="link" to='ur'>REF</NavLink>
            </nav>
        </>
    );
}