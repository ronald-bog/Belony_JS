import { useEffect } from "react";

export default function UseEffect() {

    useEffect(() => {
        console.log('Se ejecuto dentro useEffect');
    }, []);

    console.log('Se ejecuto fuera useEffect , se renderizo componente');

    return (
        <>
            UseEffect...........
        </>
    );
}